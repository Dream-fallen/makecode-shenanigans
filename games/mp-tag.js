// Enable game engine performance stats
game.stats = true;

// --- MAP & BOUNDARY CONFIGURATION ---
const MAP_BOUNDS = {
    minX: 10,
    maxX: 230,
    minY: 10,
    maxY: 170
};

const ORIGIN_X = (MAP_BOUNDS.minX + MAP_BOUNDS.maxX) / 2; // 120
const ORIGIN_Y = (MAP_BOUNDS.minY + MAP_BOUNDS.maxY) / 2; // 90
const BASE_TILE_SIZE = 8;

enum GameState {
    Intermission,
    InRound,
    Scoreboard
}

interface AbilityTile {
    x: number;
    y: number;
    name: string;
    color: number;
}

interface PlayerData {
    sprite: Sprite;
    mpPlayer: mp.Player;
    playerNum: number;          // Player number (1-4)
    ability: string;
    hasPickedThisIntermission: boolean;
    abilityCooldown: number;
    maxAbilityCooldown: number;
    tagDebounce: number;
    maxTagDebounce: number;
    isIt: boolean;
    isBoosting: boolean;        // Track if currently in Boost ability
    color: number;
    score: number;              // Track rounds survived
}

let activePlayers: PlayerData[] = [];
let gameStarted = false;
let currentState = GameState.Intermission;
let stateTimer = 15;
let lastTimerTick = 0;

// Defined Abilities & Tiles
const ABILITIES = ["Dash", "Phase", "Boost", "Teleport"];
const ABILITY_COLORS = [5, 9, 7, 10]; // Yellow, Blue, Green, Purple

let abilityTiles: AbilityTile[] = [];

// Helper to convert an mp.Player back to an integer index (0-3)
function getPlayerNum(player: mp.Player): number {
    for (let i = 0; i < 4; i++) {
        if (mp.getPlayerByIndex(i) == player) {
            return i;
        }
    }
    return -1;
}

// Update speed dynamically based on IT status and Boost ability
function updatePlayerSpeed(pData: PlayerData) {
    if (currentState === GameState.Scoreboard) {
        mp.moveWithButtons(pData.mpPlayer, 0, 0); // Freeze players during scoreboard
    } else if (pData.isBoosting) {
        mp.moveWithButtons(pData.mpPlayer, 130, 130);
    } else if (pData.isIt && currentState === GameState.InRound) {
        mp.moveWithButtons(pData.mpPlayer, 90, 90); // IT player is faster!
    } else {
        mp.moveWithButtons(pData.mpPlayer, 70, 70); // Base speed
    }
}

// --- MENU SYSTEM ---
function showMainMenu() {
    let mainMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("2 Players"),
        miniMenu.createMenuItem("3 Players"),
        miniMenu.createMenuItem("4 Players")
    );

    miniMenu.setMenuStyleProperty(mainMenu, miniMenu.MenuStyleProperty.Width, 100);
    miniMenu.setMenuStyleProperty(mainMenu, miniMenu.MenuStyleProperty.Height, 60);
    miniMenu.setMenuStyleProperty(mainMenu, miniMenu.MenuStyleProperty.BackgroundColor, 1);
    miniMenu.setMenuStyleProperty(mainMenu, miniMenu.MenuStyleProperty.BorderColor, 3);
    miniMenu.setMenuStyleProperty(mainMenu, miniMenu.MenuStyleProperty.Border, miniMenu.packMargin(2, 2, 2, 2));
    mainMenu.setPosition(80, 60);

    miniMenu.onButtonPressed(mainMenu, miniMenu.Button.A, function (selection: string, selectedIndex: number) {
        let count = selectedIndex + 2;
        miniMenu.close(mainMenu);
        startMultiplayerGame(count);
    });
}

// --- GAME INITIALIZATION ---
function startMultiplayerGame(playerCount: number) {
    scene.setBackgroundColor(11);
    activePlayers = [];

    let playerColors = [2, 8, 4, 7]; // Red, Blue, Orange, Green

    for (let i = 0; i < playerCount; i++) {
        let mpPlayer = mp.getPlayerByIndex(i);

        let pImg = image.create(BASE_TILE_SIZE, BASE_TILE_SIZE);
        pImg.fill(playerColors[i]);

        let pSprite = sprites.create(pImg.clone(), SpriteKind.Player);
        pSprite.setPosition(ORIGIN_X + (i * 16) - 24, ORIGIN_Y + 30);

        mp.setPlayerSprite(mpPlayer, pSprite);
        mp.moveWithButtons(mpPlayer, 70, 70);

        activePlayers.push({
            sprite: pSprite,
            mpPlayer: mpPlayer,
            playerNum: i + 1,
            ability: "",
            hasPickedThisIntermission: false,
            abilityCooldown: 0,
            maxAbilityCooldown: 90,
            tagDebounce: 0,
            maxTagDebounce: 30,
            isIt: false,
            isBoosting: false,
            color: playerColors[i],
            score: 0
        });
    }

    startIntermission();
    gameStarted = true;
    lastTimerTick = game.runtime();
}

// --- ROUND & STATE TRANSITIONS ---
function startIntermission() {
    currentState = GameState.Intermission;
    stateTimer = 15;

    for (let pData of activePlayers) {
        pData.hasPickedThisIntermission = false;
        pData.abilityCooldown = 0;
        pData.tagDebounce = 0;
        pData.isIt = false;
        pData.isBoosting = false;
        pData.sprite.setFlag(SpriteFlag.Ghost, false);
        updatePlayerSpeed(pData);
    }

    abilityTiles = [];
    let startX = ORIGIN_X - 45;
    for (let i = 0; i < ABILITIES.length; i++) {
        abilityTiles.push({
            x: startX + (i * 30),
            y: ORIGIN_Y - 20,
            name: ABILITIES[i],
            color: ABILITY_COLORS[i]
        });
    }

    music.playTone(392, music.beat(BeatFraction.Quarter));
}

function startRound() {
    currentState = GameState.InRound;
    stateTimer = 30;

    abilityTiles = [];

    for (let pData of activePlayers) {
        if (!pData.ability || pData.ability === "") {
            let randIdx = randint(0, ABILITIES.length - 1);
            pData.ability = ABILITIES[randIdx];
        }
    }

    let itIndex = randint(0, activePlayers.length - 1);
    for (let i = 0; i < activePlayers.length; i++) {
        let pData = activePlayers[i];
        pData.isIt = (i === itIndex);
        pData.tagDebounce = 30;
        pData.maxTagDebounce = 30;
        pData.abilityCooldown = 0;
        updatePlayerSpeed(pData);
    }

    music.playTone(523, music.beat(BeatFraction.Half));
}

function showScoreboard() {
    currentState = GameState.Scoreboard;
    stateTimer = 5; // Show the scoreboard for 5 seconds

    // Award 1 point to everyone who is NOT IT at the end of the round
    for (let pData of activePlayers) {
        if (!pData.isIt) {
            pData.score += 1;
        }
        updatePlayerSpeed(pData); // Freeze movement
    }

    music.playTone(494, music.beat(BeatFraction.Half));
}

// --- INPUT HANDLERS ---
mp.onButtonEvent(mp.MultiplayerButton.B, ControllerButtonEvent.Pressed, function (player: mp.Player) {
    if (!gameStarted || currentState !== GameState.InRound) return;

    let pIndex = getPlayerNum(player);
    if (pIndex < 0 || pIndex >= activePlayers.length) return;

    let pData = activePlayers[pIndex];
    if (pData.abilityCooldown > 0) return;

    if (pData.ability === "Dash") {
        let dirX = pData.sprite.vx > 0 ? 1 : (pData.sprite.vx < 0 ? -1 : 0);
        let dirY = pData.sprite.vy > 0 ? 1 : (pData.sprite.vy < 0 ? -1 : 0);

        if (dirX === 0 && dirY === 0) dirY = -1;

        pData.sprite.x += dirX * 24;
        pData.sprite.y += dirY * 24;
        pData.abilityCooldown = pData.maxAbilityCooldown;
        music.playTone(523, music.beat(BeatFraction.Eighth));

    } else if (pData.ability === "Phase") {
        pData.sprite.setFlag(SpriteFlag.Ghost, true);
        pData.abilityCooldown = pData.maxAbilityCooldown;
        music.playTone(659, music.beat(BeatFraction.Eighth));

        setTimeout(function () {
            pData.sprite.setFlag(SpriteFlag.Ghost, false);
        }, 1500);

    } else if (pData.ability === "Boost") {
        pData.isBoosting = true;
        updatePlayerSpeed(pData);
        pData.abilityCooldown = pData.maxAbilityCooldown;
        music.playTone(587, music.beat(BeatFraction.Eighth));

        setTimeout(function () {
            pData.isBoosting = false;
            updatePlayerSpeed(pData);
        }, 1500);

    } else if (pData.ability === "Teleport") {
        pData.sprite.x = ORIGIN_X + randint(-40, 40);
        pData.sprite.y = ORIGIN_Y + randint(-30, 30);
        pData.abilityCooldown = pData.maxAbilityCooldown + 30;
        music.playTone(784, music.beat(BeatFraction.Eighth));
    }
});

controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset();
});

// --- GAME TICK & MECHANICS ---
game.onUpdate(function () {
    if (!gameStarted) return;

    if (game.runtime() - lastTimerTick >= 1000) {
        lastTimerTick = game.runtime();
        stateTimer--;

        if (stateTimer <= 0) {
            if (currentState === GameState.Intermission) {
                startRound();
            } else if (currentState === GameState.InRound) {
                showScoreboard();
            } else if (currentState === GameState.Scoreboard) {
                startIntermission();
            }
        }
    }

    // Skip positions adjustments/collisions if displaying scores
    if (currentState === GameState.Scoreboard) return;

    let totalX = 0;
    let totalY = 0;
    let maxDistFromOrigin = 0;

    for (let pData of activePlayers) {
        let s = pData.sprite;

        if (s.left < MAP_BOUNDS.minX) s.left = MAP_BOUNDS.minX;
        if (s.right > MAP_BOUNDS.maxX) s.right = MAP_BOUNDS.maxX;
        if (s.top < MAP_BOUNDS.minY) s.top = MAP_BOUNDS.minY;
        if (s.bottom > MAP_BOUNDS.maxY) s.bottom = MAP_BOUNDS.maxY;

        totalX += s.x;
        totalY += s.y;

        let dx = s.x - ORIGIN_X;
        let dy = s.y - ORIGIN_Y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > maxDistFromOrigin) maxDistFromOrigin = dist;

        if (pData.abilityCooldown > 0) pData.abilityCooldown--;
        if (pData.tagDebounce > 0) pData.tagDebounce--;

        if (currentState === GameState.Intermission) {
            for (let tile of abilityTiles) {
                if (Math.abs(s.x - tile.x) < 8 && Math.abs(s.y - tile.y) < 8) {
                    if (pData.ability !== tile.name) {
                        pData.ability = tile.name;
                        pData.hasPickedThisIntermission = true;
                        music.playTone(880, music.beat(BeatFraction.Sixteenth));
                    }
                }
            }
        }
    }
    let avgX = totalX / activePlayers.length;
    let avgY = totalY / activePlayers.length;
    scene.centerCameraAt(avgX, avgY);
    let zoomFactor = Math.max(0.5, 1 - (maxDistFromOrigin / 120) * 0.5);
    for (let pData of activePlayers) {
        let newSize = Math.max(4, Math.floor(BASE_TILE_SIZE * zoomFactor));
        if (pData.sprite.width != newSize) {
            let resizedImg = image.create(newSize, newSize);
            resizedImg.fill(pData.color);
            pData.sprite.setImage(resizedImg);
        }
    }
    if (currentState === GameState.InRound) {
        for (let i = 0; i < activePlayers.length; i++) {
            for (let j = i + 1; j < activePlayers.length; j++) {
                let p1 = activePlayers[i];
                let p2 = activePlayers[j];
                let p1Ghost = p1.sprite.flags & SpriteFlag.Ghost;
                let p2Ghost = p2.sprite.flags & SpriteFlag.Ghost;
                if (p1.sprite.overlapsWith(p2.sprite) && !p1Ghost && !p2Ghost) {
                    if (p1.isIt && p1.tagDebounce === 0) {
                        p1.isIt = false;
                        p2.isIt = true;
                        p1.tagDebounce = 30;
                        p1.maxTagDebounce = 30;
                        p2.tagDebounce = 30;
                        p2.maxTagDebounce = 30;
                        updatePlayerSpeed(p1);
                        updatePlayerSpeed(p2);
                        music.playTone(200, music.beat(BeatFraction.Quarter));
                    } else if (p2.isIt && p2.tagDebounce === 0) {
                        p2.isIt = false;
                        p1.isIt = true;
                        p1.tagDebounce = 30;
                        p1.maxTagDebounce = 30;
                        p2.tagDebounce = 30;
                        p2.maxTagDebounce = 30;
                        updatePlayerSpeed(p1);
                        updatePlayerSpeed(p2);
                        music.playTone(200, music.beat(BeatFraction.Quarter));
                    }
                }
            }
        }
    }
});
// --- RENDERER ---
scene.createRenderable(10, function (screen: Image) {
    if (!gameStarted) return;
    let camX = scene.cameraProperty(CameraProperty.X);
    let camY = scene.cameraProperty(CameraProperty.Y);
    // Render Boundary Box
    let screenMinX = MAP_BOUNDS.minX - camX + 80;
    let screenMaxX = MAP_BOUNDS.maxX - camX + 80;
    let screenMinY = MAP_BOUNDS.minY - camY + 60;
    let screenMaxY = MAP_BOUNDS.maxY - camY + 60;
    screen.drawRect(screenMinX, screenMinY, screenMaxX - screenMinX, screenMaxY - screenMinY, 1);
    // Render Ability Pads during Intermission
    if (currentState === GameState.Intermission) {
        for (let tile of abilityTiles) {
            let tx = tile.x - camX + 80;
            let ty = tile.y - camY + 60;
            screen.fillRect(tx - 6, ty - 6, 12, 12, tile.color);
            screen.drawRect(tx - 6, ty - 6, 12, 12, 1);
            screen.print(tile.name[0], tx - 2, ty - 3, 15);
        }
    }
    // Render Top-Right Timer HUD
    if (currentState !== GameState.Scoreboard) {
        let timerText = (currentState === GameState.Intermission ? "PICK: " : "TIME: ") + stateTimer;
        let timerColor = (currentState === GameState.Intermission) ? 5 : 2;
        screen.fillRect(105, 2, 53, 11, 15);
        screen.drawRect(105, 2, 53, 11, timerColor);
        screen.print(timerText, 108, 4, timerColor);
    }
    // Render Player Indicators, Ability Cooldown Bars & Player Labels
    for (let pData of activePlayers) {
        let sx = pData.sprite.left - camX + 80;
        let sy = pData.sprite.top - camY + 60;
        let pHeight = pData.sprite.height;
        // Ability text / IT overhead indicator
        if (currentState === GameState.InRound && pData.isIt) {
            screen.print("IT!", sx, sy - 9, 2);
        } else if (pData.ability && pData.ability !== "" && currentState !== GameState.Scoreboard) {
            screen.print(pData.ability.substr(0, 3), sx - 2, sy - 8, 1);
        }
        // 1. Ability Cooldown Bar (Bottom, Yellow/Blue)
        let labelOffsetY = sy + pHeight + 2;
        if (pData.abilityCooldown > 0 && currentState !== GameState.Scoreboard) {
            let pct = (pData.maxAbilityCooldown - pData.abilityCooldown) / pData.maxAbilityCooldown;
            let barW = pData.sprite.width;
            screen.fillRect(sx, labelOffsetY, barW, 2, 12);
            screen.fillRect(sx, labelOffsetY, Math.floor(barW * pct), 2, 5);
            labelOffsetY += 4;
        }
        // 2. Tag Immunity Debounce Bar (Left side, RED)
        if (pData.tagDebounce > 0 && currentState !== GameState.Scoreboard) {
            let debouncePct = pData.tagDebounce / pData.maxTagDebounce;
            let barH = Math.max(1, Math.floor(pHeight * debouncePct));
            screen.fillRect(sx - 3, sy, 2, pHeight, 12);
            screen.fillRect(sx - 3, sy + (pHeight - barH), 2, barH, 2);
        }
        // 3. Render P1, P2, P3, P4 Label Underneath Player
        if (currentState !== GameState.Scoreboard) {
            screen.print("P" + pData.playerNum, sx - 1, labelOffsetY, 1);
        }
    }
    // --- RENDER SCOREBOARD OVERLAY ---
    if (currentState === GameState.Scoreboard) {
        // Dark screen fade background box
        screen.fillRect(20, 15, 120, 90, 15);
        screen.drawRect(20, 15, 120, 90, 1);
        // Header Text
        screen.print("ROUND OVER!", 48, 22, 2);
        screen.drawLine(25, 32, 135, 32, 11);
        // Player Score list rows
        for (let i = 0; i < activePlayers.length; i++) {
            let pData = activePlayers[i];
            let rowY = 38 + (i * 14);
            // Colored block indicating which player color it is
            screen.fillRect(30, rowY + 1, 6, 6, pData.color);
            screen.drawRect(30, rowY + 1, 6, 6, 1);
            // Player title text
            let pLabel = "Player " + pData.playerNum;
            screen.print(pLabel, 42, rowY, 1);
            // Score counter value
            let sLabel = pData.score + " Wins";
            screen.print(sLabel, 98, rowY, pData.isIt ? 2 : 7); // Red text highlight if they ended up IT
        }
        // Footer countdown indicator
        screen.print("Next round in " + stateTimer + "s...", 32, 94, 9);
    }
});
// --- START PROGRAM ---
showMainMenu();
