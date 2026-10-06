// --- GAME & LEVEL ARCHITECTURE ---
const MAP_WIDTH = 16;
const MAP_HEIGHT = 16;
const DOOM_BGM = music.createSong(hex`005e010408320a00001c00010a006400f401640000040000000000000000000000000005000004780020042404010a30043404010a40044404010a50045404010a60046404012264046804012268046c0401226c047004012270047404012274047804012278047c0401227c048004012280048404012284048804012288048c0401228c049004012290049404012294049804012298049c0401229c04a004012201001c000f05001202c102c20100040500280000006400280003140006020004540010031803010a600364030116800384030116a003a4030116c003c4030118e003e403011920042404010a30043404010a40044404010a50045404010a600464040116800484040122e005e405012a00062006012502001c000c960064006d019001000478002c010000640032000000000a0600050c0080048404010a3c064006011603001c0001dc00690000045e0100040000000000000000000005640001040003250020042404010a30043404010a40044404010a50045404010a60046404020a2220064006012204001c00100500640000041e000004000000000000000000000000000a0400044e0020032803012528033003012430033803012250045404012260046404012268046c04012270047404012278047c04012280048404012288048c04012290049404012298049c04012220064006010a05001c000f0a006400f4010a0000040000000000000000000000000000000002a60200000400011604000800011608000c0001160c001000011610001400011614001800011618001c0001161c002000011620002400010a28002c00010a30003400010a38003c00010a40004400010a48004c00010a50005400010a58005c00010a60006400010a68006c00010a70007400010a78007c00010a80008400010a88008c00010a90009400010a98009c00010aa000a400010aa800ac00010ab000b400010ab800bc00010ac000c400010ac800cc00010ad000d400010ad800dc00010ae000e400010ae800ec00010af000f400010af800fc00010a00010401011604010801011608010c0101160c011001011610011401011614011801011618011c0101161c012001011620022402010a28022c02010a30023402010a38023c02010a40024402010a48024c02010a50025402010a58025c02010a60026402010a68026c02010a70027402010a78027c02010a80028402010a88028c02010a90029402010a98029c02010aa002a402010aa802ac02010ab002b402010ab802bc02010ac002c402010ac802cc02010ad002d402010ad802dc02010ae002e402010ae802ec02010af002f402010af802fc02010a00030403010a08030c03010a10031803010a78037c03010a80038403010a88038c03010a90039403010a98039c03010aa003a403010aa403a803010aa803ac03010aac03b003010ab003b403010ab803bc03010ad803dc03010ae003e403010ae803ec03010af003f403010af803fc03010a00040404010a04040804010a08040c04010a0c041004010a10041404010a18041c04010a28042c04010a38043c04010a48044c04010a58045c04010a60046404010a68046c04010a6c047004010a7c048004010c80048404010d84048804010c88048c04010d8c049004010c90049804010a90059405011198059c05011120064006010a06001c00010a006400f401640000040000000000000000000000000000000002ec01200024000116300034000116400044000116500054000116600064000116700074000116800084000116900094000116a000a4000116b000b4000116c000c4000116d000d4000116e000e4000116f000f4000116200124010108300134010108400144010108500154010108600164010108700174010108800184010108900194010108a001a4010108b001b4010108c001c4010108d001d4010108e001e4010108f001f4010108000204020108100214020108200224020116300234020116400244020116500254020116600264020116700274020116800284020116900294020116a002a4020116b002b4020116c002c4020116d002d4020116e002e4020116f002f402011600030403011610031803010a20032403010a28032c03010a30033403010a40034403010a48034c03010a4c035003010a50035403010a54035803010a58035c03010a60036403010a70037403010a80038403010a90039403010aa003a403010a28042c04010a38043c04010a48044c04010a58045c04010a60046404010a64046804010a68046c04010a6c047004010a70047404010a74047804010a78047c04010a7c048004010a80048404010a84048804010a88048c04010a8c049004010a90049404010a94049804010a98049c04010a9c04a004010a00062006010d20064006010a07001c00020a006400f4016400000400000000000000000000000000000000032d0400000400011604000800011608000c0001160c001000011610001400011614001800011618001c0001161c002000011600010401011604010801011608010c0101160c011001011610011401011614011801011618011c0101161c01200101162001240102161928012c0101162c01340101163c014001011840014401011944014801011848014c0101194c015001011850015801011660016401011964016801011b68016c01011d6c017001011b70017401011d74017801011b78017c01011d7c018001011b80018401011988018c010118900198010116a001a4010119a401a801011ba801ac01011dac01b001011bb001b401011db401b801011bb801bc01011dbc01c001011bc001c4010119c801cc010118d001d801011be001e4010119e401e801011be801ec01011dec01f001011bf001f401011df401f801011bf801fc01011dfc010002011e00020402012004020802012208020c0201220c021002012210021802012220022402012528022c0201222c02340201223c024002012440024402012544024802012448024c0201254c025002012450025802012260026402012764026802012968026c0201276c027002012970027402012774027802012978027c0201277c028002012980028402012588028c020124900298020122a002a4020127a402a8020129a802ac020127ac02b0020129b002b4020127b402b8020129b802bc020127bc02c0020129c002c4020125c802cc020124d002d8020127e002e4020127e402e8020129e802ec020127ec02f0020129f002f4020127f402f8020129f802fc020127fc020003012900030403012508030c03012410031803010a60046404012268046c0401226c04740401227c048004012480048404012584048804012488048c0401258c0490040124900498040122a004a4040122a804ac040122ac04b4040122bc04c0040124c004c4040125c404c8040124c804cc040125cc04d0040124d004d8040122e004e4040127e404e8040129e804ec04012aec04f0040129f004f4040127f404f804012af804fc040127fc040005012900050405012508050c05012410051405012918052005010520052405012724052805012928052c0501272c053005012930053405012734053805012938053c0501273c054005012240054405012748054c05012550055405012458055c05012460056405012764056805012968056c0501276c057005012970057405012774057805012978057c0501277c058005012280058405012788058c05012590059405012998059c050129a005a4050122a405a5050122a805ac050122ac05b8050122b805bc050124bc05c0050125c005c4050124c405c8050125c805cc050124cc05d4050122d405d8050122d805d9050122d905da050122da05db050122db05dc050122dc05dd050122dd05de050122de05df050122df05e0050122e0050006012a00062006012520064006012208001c000e050046006603320000040a002d0000006400140001320002010002400100000400011604000800011608000c0001160c001000011610001400011614001800011618001c0001161c002000011600010401011604010801011608010c0101160c011001011610011401011614011801011618011c0101161c012001011620012401021619a001a40102161938034003010a60036403010a68036c03010a6c037403010a78037c03010a80038403010a88038c03010a90039403010a98039c03010aa003a403010aa403a803010aa803ac03010aac03b003010ab003b403010ab803bc03010ac003c403010ac803cc03010acc03d403010ad803dc03010ae003e403010ae803ec03010af003f403010af803fc03010a00040404010a04040804010a08040c04010a0c041004010a10041404010a18041c04010a64046804011674047804011678047c04011880048404011888048c0401189804a004011609010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000c0a20002100050001020507240025000205072800290004030507092c002d00020507300031000600010205070a340035000205073800390004030507093c003d0002050740004100050001020507440045000205074800490004030507094c004d00020507500051000600010205070a540055000205075800590004030507095c005d0002050760006100050001020507640065000305070968006900030507096c006d00020507700071000600010205070a740075000205077800790004030507097c007d0002050780008100050001020507840085000205078800890004030507098c008d00020507900091000600010205070a940095000205079800990004030507099c009d00020507a000a100050001020507a400a50003050709a800a90003050709ac00ad00020507b000b1000600010205070ab400b500020507b800b90003050709bc00bd00020507c000c100050001020507c400c50003050709c800c900020507cc00cd00020507d000d1000600010205070ad400d500020507d800d90003050709dc00dd00020507e000e100050001020507e400e50003050709e800e90003050709ec00ed00020507f000f1000600010205070af400f500020507f800f90003050709fc00fd00020507000101010500010205070401050103050709080109010500010205070c010d01020507100111010600010205070a1401150102050718011901060001020507091c011d0102050720012101030001023001310103000102400141010300010250015101030001026001610103000102700171010300010280018101030001029001910103000102a001a10103000102b001b10103000102c001c10103000102d001d10103000102e001e10103000102f001f10103000102000201020300010210021102030001022002210205000102050724022502020507280229020305070a2c022d02020507300231020600010205070934023502020507380239020305070a3c023d020205074002410205000102050744024502020507480249020305070a4c024d0202050750025102060001020507095402550203050709580259020305070a5c025d020205076002610205000102050764026502020507680269020305070a6c026d02020507700271020600010205070974027502020507780279020305070a7c027d020205078002810205000102050784028502020507880289020305070a8c028d0202050790029102060001020507099402950203050709980299020305070a9c029d02020507a002a102050001020507a402a502020507a802a9020305070aac02ad02020507b002b10206000102050709b402b502020507b802b9020305070abc02bd02020507c002c102050001020507c402c502020507c802c9020305070acc02cd02020507d002d10206000102050709d402d50203050709d802d9020305070adc02dd02020507e002e102050001020507e402e502020507e802e9020305070aec02ed02020507f002f10206000102050709f402f502020507f802f9020305070afc02fd020205070003010305000102050704030503020507080309030305070a0c030d0302050720032103030001022803290303000102300331030300010240034103040001020344034503020509480349030a000102030405060708094c034d030500010203055003510306000102030509540355030a0001020304050607080958035903060001020305095c035d030105600361030400010203640365030105680369030205096c036d030105700371030a00010203040506070809740375030105780379030205097c037d030105800381030400010203840385030105880389030205098c038d030105900391030a00010203040506070809940395030105980399030205099c039d030105a003a10303000102a403a5030105a803a903020509ac03ad030105b003b1030a00010203040506070809b403b5030105b803b903020509bc03bd030105c003c10303000102c403c5030105c803c903020509cc03cd030105d003d1030a00010203040506070809d403d5030105d803d903020509dc03dd030105e003e10303000102e403e5030105e803e903020509ec03ed030105f003f1030a00010203040506070809f403f5030105f803f903020509fc03fd0301050004010403000102040405040105080409040205090c040d040105100411040a00010203040506070809140415040105180419040205091c041d040105200421040a00010203040506070809300431040a00010203040506070809400441040a00010203040506070809500451040a000102030405060708096004610405000102050764046504050001020507680469040500010205076c046d04050001020507700471040a00010203040506070809720473040300010274047504050001020507780479040500010205077c047d040500010205077e047f0403000102800481040500010205078204830403000102840485040500010205078604870403000102880489040600010205070a8a048b04030001028c048d040500010205078e048f0403000102900491040a000102030405060708099204930403000102940495040500010205079604970403000102980499040600010205070a9a049b04030001029c049d040500010205079e049f0403000102a004a10406000102050607a204a30403000102a404a50403000102a804a90406000102050607ac04ad0406000102050607b004b10406000102050607b404b50403050607b804b90406000102050607bc04bd0403000102c004c10406000102050607c404c50403000102c804c90403050607cc04cd0406000102050607d004d10406000102050607d404d50403050607d804d90406000102050607dc04dd0403000102e004e10406000102050607e404e50403000102e804e90403050607ec04ed0406000102050607f004f10406000102050607f404f50403050607f804f90406000102050607fc04fd04030001020005010506000102050607040505050300010208050905030506070c050d05060001020506071005110506000102050607140515050305060718051905060001020506071c051d05030001022005210506000102050607240525050300010228052905030506072c052d05060001020506073005310506000102050607340535050305060738053905060001020506073c053d05030001024005410506000102050607440545050300010248054905030506074c054d05060001020506075005510506000102050607540555050305060758055905060001020506075c055d05030001026005610506000102050607640565050300010268056905030506076c056d05060001020506077005710506000102050607740575050305060778057905060001020506077c057d05030001028005810506000102050607840585050300010288058905030506078c058d05060001020506079005910506000102050607940595050305060798059905060001020506079c059d0503000102a005a10506000102050607`)

interface EnemySpec {
    x: number;
    y: number;
    health: number;
    dirY: number;
}

interface LevelData {
    map: number[];
    playerStartX: number;
    playerStartY: number;
    enemies: EnemySpec[];
    isShopLevel?: boolean;
    wizardX?: number;
    wizardY?: number;
}

const LEVELS: LevelData[] = [
    // --- LEVEL 1 ---
    {
        playerStartX: 1.5,
        playerStartY: 1.5,
        enemies: [
            { x: 7.5, y: 7.5, health: 2, dirY: 1 },
            { x: 13.5, y: 3.5, health: 3, dirY: -1 },
            { x: 2.5, y: 13.5, health: 2, dirY: 1 },
            { x: 9.5, y: 13.5, health: 4, dirY: -1 }
        ],
        map: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 1,
            1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1,
            1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 1, 0, 1,
            1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1,
            1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1,
            1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1,
            1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1,
            1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1,
            1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1,
            1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1,
            1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
    },
    // --- LEVEL 2 ---
    {
        playerStartX: 1.5,
        playerStartY: 1.5,
        enemies: [
            { x: 5.5, y: 1.5, health: 3, dirY: 1 },
            { x: 14.5, y: 5.5, health: 4, dirY: -1 },
            { x: 8.5, y: 8.5, health: 5, dirY: 1 },
            { x: 1.5, y: 14.5, health: 3, dirY: -1 }
        ],
        map: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
            1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
            1, 1, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1,
            1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 3, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
    },
    // --- LEVEL 3: WIZARD SHOP HAVEN ---
    {
        playerStartX: 1.5,
        playerStartY: 7.5,
        enemies: [],
        isShopLevel: true,
        wizardX: 8.5,
        wizardY: 7.5,
        map: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
    },
    // --- LEVEL 4: CATAPULT DANGER ZONE ---
    {
        playerStartX: 1.5,
        playerStartY: 1.5,
        enemies: [
            { x: 2.5, y: 7.5, health: 5, dirY: 1 },
            { x: 13.5, y: 2.5, health: 5, dirY: -1 },
            { x: 8.5, y: 13.5, health: 6, dirY: 1 },
            { x: 14.5, y: 14.5, health: 7, dirY: -1 }
        ],
        map: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1,
            1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1,
            1, 0, 1, 1, 2, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 0, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 0, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1,
            1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
            1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1,
            1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
            1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 3, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
    },
    // --- LEVEL 5: FINAL DUNGEON & WIZARD ---
    {
        playerStartX: 1.5,
        playerStartY: 1.5,
        enemies: [
            { x: 8.5, y: 2.5, health: 8, dirY: 1 },
            { x: 3.5, y: 12.5, health: 8, dirY: -1 },
            { x: 12.5, y: 12.5, health: 10, dirY: 1 }
        ],
        isShopLevel: true,
        wizardX: 3.5,
        wizardY: 3.5,
        map: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
            1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
            1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1,
            1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 3, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
    }
];

// --- ACTIVE LEVEL STATE ---
let currentLevel = 0;
let map: number[] = [];

// Player State
let playerX = 1.5;
let playerY = 1.5;
let playerAngle = 0.0;
let playerHealth = 100;
let playerMaxHealth = 100;
let playerShards = 0;
let gameState = "PLAYING"; // "PLAYING", "WIN", "GAMEOVER"

// Wizard NPC State
let wizardActive = false;
let wizardX = 0;
let wizardY = 0;
let isShopOpen = false;

// Weapon Animation & Input Timers
let isShooting = false;
let weaponFrame = 0;
let actionDebounceTimer = 0;
let damageSoundTimer = 0;

// Dynamic Entity Interfaces
interface Breadcrumb {
    x: number;
    y: number;
}
let playerHistory: Breadcrumb[] = [];
const MAX_BREADCRUMBS = 30;

interface Enemy {
    x: number;
    y: number;
    health: number;
    dirY: number;
    isAggro: boolean;
}

interface Projectile {
    x: number;
    y: number;
    velX: number;
    velY: number;
    active: boolean;
}

let enemies: Enemy[] = [];
let projectiles: Projectile[] = [];

// Field of View & Rendering Constants
const FOV = Math.PI / 3;
const SCREEN_WIDTH = 160;
const SCREEN_HEIGHT = 120;
const HALF_SCREEN_HEIGHT = SCREEN_HEIGHT / 2;
const AGGRO_RADIUS = 6.0;

// Load Level Data Helper
function loadLevel(levelIndex: number) {
    if (levelIndex >= LEVELS.length) {
        gameState = "WIN";
        music.playMelody("C5 G B A F A G C5 ", 240);
        return;
    }
    music.playTone(523, 150);
    music.playTone(659, 150);
    let lvl = LEVELS[levelIndex];
    map = lvl.map.slice();
    playerX = lvl.playerStartX;
    playerY = lvl.playerStartY;
    playerAngle = 0.0;
    playerHistory = [{ x: playerX, y: playerY }];
    projectiles = [];
    isShopOpen = false;

    if (lvl.isShopLevel && lvl.wizardX !== undefined && lvl.wizardY !== undefined) {
        wizardActive = true;
        wizardX = lvl.wizardX;
        wizardY = lvl.wizardY;
    } else {
        wizardActive = false;
    }

    enemies = lvl.enemies.map(e => ({
        x: e.x,
        y: e.y,
        health: e.health,
        dirY: e.dirY,
        isAggro: false
    }));
}

// Initialize First Level
loadLevel(0);

// --- LINE-OF-SIGHT RAYCAST HELPER ---
function hasLineOfSight(x0: number, y0: number, x1: number, y1: number): boolean {
    let dx = x1 - x0;
    let dy = y1 - y0;
    let dist = Math.sqrt(dx * dx + dy * dy);
    let steps = Math.ceil(dist * 4);
    let stepX = dx / steps;
    let stepY = dy / steps;

    let currX = x0;
    let currY = y0;

    for (let i = 0; i < steps; i++) {
        currX += stepX;
        currY += stepY;
        let mapX = Math.floor(currX);
        let mapY = Math.floor(currY);
        if (mapX >= 0 && mapX < MAP_WIDTH && mapY >= 0 && mapY < MAP_HEIGHT) {
            if (map[mapY * MAP_WIDTH + mapX] > 0) {
                return false;
            }
        }
    }
    return true;
}

// --- TEXTURE CONFIGURATION ---
const brickTexture = img`
    2 2 2 2 2 2 2 2
    c c c c c c c c
    2 2 2 . 2 2 2 2
    c c c . c c c c
    2 . 2 2 2 . 2 2
    c . c c c . c c
    2 2 2 2 2 2 2 2
    c c c c c c c c
`;

const breakableTexture = img`
    4 4 4 4 4 4 4 4
    4 a 4 4 a 4 4 a
    4 4 4 4 4 4 4 4
    4 4 a 4 4 a 4 4
    4 4 4 4 4 4 4 4
    4 a 4 4 a 4 4 a
    4 4 4 4 4 4 4 4
    a 4 4 a 4 4 a 4
`;

const exitTexture = img`
    5 5 5 5 5 5 5 5
    5 2 2 2 2 2 2 5
    5 2 5 5 5 5 2 5
    5 2 5 2 2 5 2 5
    5 2 5 2 2 5 2 5
    5 2 5 5 5 5 2 5
    5 2 2 2 2 2 2 5
    5 5 5 5 5 5 5 5
`;

const impTexture = img`
    . . 4 4 4 4 . .
    . 4 4 2 2 4 4 .
    4 4 4 4 4 4 4 4
    4 2 4 4 4 4 2 4
    4 4 4 4 4 4 4 4
    . 4 f 4 4 f 4 .
    . . 4 4 4 4 . .
    . 4 . 4 4 . 4 .
`;

const wizardTexture = img`
    . . 8 8 8 8 . .
    . 8 8 9 9 8 8 .
    . . 8 8 8 8 . .
    . 1 1 1 1 1 1 .
    1 8 1 1 1 1 8 1
    1 1 8 8 8 8 1 1
    . . 8 8 8 8 . .
    . 8 8 . . 8 8 .
`;

// --- INPUT & UPDATE LOOP ---
game.onUpdate(function () {
    if (gameState !== "PLAYING") return;

    if (actionDebounceTimer > 0) actionDebounceTimer--;
    if (damageSoundTimer > 0) damageSoundTimer--;

    // Handle Active Wizard Shop UI Inputs
    if (isShopOpen) {
        if (controller.up.isPressed() && actionDebounceTimer === 0) {
            actionDebounceTimer = 8;
            if (playerShards >= 20) {
                playerShards -= 20;
                playerHealth = Math.min(playerMaxHealth, playerHealth + 30);
                music.playTone(600, 100);
            }
        }
        if (controller.down.isPressed() && actionDebounceTimer === 0) {
            actionDebounceTimer = 8;
            if (playerShards >= 30) {
                playerShards -= 30;
                playerMaxHealth += 10;
                playerHealth += 10;
                music.playTone(800, 120);
            }
        }
        if (controller.B.isPressed() && actionDebounceTimer === 0) {
            isShopOpen = false;
            actionDebounceTimer = 8;
        }
        return;
    }

    // Weapon Animation Tick
    if (isShooting) {
        weaponFrame++;
        if (weaponFrame > 6) {
            isShooting = false;
            weaponFrame = 0;
        }
    }

    // Rotations
    if (controller.left.isPressed()) playerAngle -= 0.08;
    if (controller.right.isPressed()) playerAngle += 0.08;

    // Movement Vectors
    let moveX = Math.cos(playerAngle) * 0.07;
    let moveY = Math.sin(playerAngle) * 0.07;
    let targetX = playerX;
    let targetY = playerY;

    if (controller.up.isPressed()) {
        targetX += moveX;
        targetY += moveY;
    }
    if (controller.down.isPressed()) {
        targetX -= moveX;
        targetY -= moveY;
    }

    // B-Button: Fire Projectile + Shoot SFX
    if (controller.B.isPressed() && !isShooting) {
        isShooting = true;
        weaponFrame = 1;

        music.playTone(880, 50);

        projectiles.push({
            x: playerX,
            y: playerY,
            velX: Math.cos(playerAngle) * 0.25,
            velY: Math.sin(playerAngle) * 0.25,
            active: true
        });
    }

    // A-Button: Melee Breakable Wall OR Talk to Wizard NPC
    if (controller.A.isPressed() && actionDebounceTimer === 0) {
        if (wizardActive) {
            let distToWizard = Math.sqrt(Math.pow(playerX - wizardX, 2) + Math.pow(playerY - wizardY, 2));
            if (distToWizard < 1.8) {
                isShopOpen = true;
                actionDebounceTimer = 8;
                music.playTone(830, 100);
                return;
            }
        }

        let interactX = Math.floor(playerX + Math.cos(playerAngle) * 0.7);
        let interactY = Math.floor(playerY + Math.sin(playerAngle) * 0.7);

        if (interactX >= 0 && interactX < MAP_WIDTH && interactY >= 0 && interactY < MAP_HEIGHT) {
            let idx = interactY * MAP_WIDTH + interactX;
            if (map[idx] === 2) {
                map[idx] = 0;
                actionDebounceTimer = 8;
                music.playTone(150, 80);
            }
        }
    }

    // Wall & Goal Collision Logic
    let playerMoved = false;
    if (targetX !== playerX || targetY !== playerY) {
        let currentGridY = Math.floor(playerY);
        let currentGridX = Math.floor(playerX);
        let checkCellX = map[currentGridY * MAP_WIDTH + Math.floor(targetX)];
        let checkCellY = map[Math.floor(targetY) * MAP_WIDTH + currentGridX];

        if (checkCellX === 0) { playerX = targetX; playerMoved = true; }
        if (checkCellY === 0) { playerY = targetY; playerMoved = true; }

        if (checkCellX === 3 || checkCellY === 3) {
            currentLevel++;
            loadLevel(currentLevel);
            return;
        }
    }

    // Dynamic Trail Generation
    if (playerMoved) {
        let lastNode = playerHistory[playerHistory.length - 1];
        let distanceSq = Math.pow(playerX - lastNode.x, 2) + Math.pow(playerY - lastNode.y, 2);
        if (distanceSq > 0.3) {
            playerHistory.push({ x: playerX, y: playerY });
            if (playerHistory.length > MAX_BREADCRUMBS) {
                playerHistory.shift();
            }
        }
    }

    // Update Flying Projectiles
    for (let p of projectiles) {
        if (!p.active) continue;

        p.x += p.velX;
        p.y += p.velY;

        let pGridX = Math.floor(p.x);
        let pGridY = Math.floor(p.y);
        if (pGridX < 0 || pGridX >= MAP_WIDTH || pGridY < 0 || pGridY >= MAP_HEIGHT) {
            p.active = false;
            continue;
        }

        let cellHit = map[pGridY * MAP_WIDTH + pGridX];

        if (cellHit === 2) {
            map[pGridY * MAP_WIDTH + pGridX] = 0;
            p.active = false;
            music.playTone(150, 80);
            continue;
        }

        if (cellHit > 0) {
            p.active = false;
            continue;
        }

        for (let e of enemies) {
            if (e.health <= 0) continue;
            let distToEnemy = Math.sqrt(Math.pow(p.x - e.x, 2) + Math.pow(p.y - e.y, 2));
            if (distToEnemy < 0.4) {
                e.health--;
                p.active = false;
                music.playTone(220, 60);
                if (e.health <= 0) {
                    playerShards += 10;
                }
                break;
            }
        }
    }
    projectiles = projectiles.filter(p => p.active);

    // Multi-Enemy AI Update Tick
    for (let e of enemies) {
        if (e.health <= 0) continue;

        let pDist = Math.sqrt(Math.pow(playerX - e.x, 2) + Math.pow(playerY - e.y, 2));

        if (!e.isAggro && pDist < AGGRO_RADIUS) {
            e.isAggro = true;
        }

        if (e.isAggro) {
            let targetNodeX = playerX;
            let targetNodeY = playerY;

            let canSeePlayer = hasLineOfSight(e.x, e.y, playerX, playerY);

            if (!canSeePlayer) {
                let bestNodeIdx = -1;
                let minNodeDist = 1e30;

                for (let i = playerHistory.length - 1; i >= 0; i--) {
                    let crumb = playerHistory[i];
                    if (hasLineOfSight(e.x, e.y, crumb.x, crumb.y)) {
                        let d = Math.sqrt(Math.pow(e.x - crumb.x, 2) + Math.pow(e.y - crumb.y, 2));
                        if (d < minNodeDist) {
                            minNodeDist = d;
                            bestNodeIdx = i;
                        }
                    }
                }

                if (bestNodeIdx !== -1) {
                    let targetIdx = Math.min(bestNodeIdx + 1, playerHistory.length - 1);
                    targetNodeX = playerHistory[targetIdx].x;
                    targetNodeY = playerHistory[targetIdx].y;
                }
            }

            let angleToTarget = Math.atan2(targetNodeY - e.y, targetNodeX - e.x);
            let speed = 0.035;
            let moveX = Math.cos(angleToTarget) * speed;
            let moveY = Math.sin(angleToTarget) * speed;

            const ENEMY_RADIUS = 0.20;

            let newX = e.x + moveX;
            let checkGridY = Math.floor(e.y);
            let wallCheckX = (moveX > 0) ? Math.floor(newX + ENEMY_RADIUS) : Math.floor(newX - ENEMY_RADIUS);

            if (wallCheckX >= 0 && wallCheckX < MAP_WIDTH && map[checkGridY * MAP_WIDTH + wallCheckX] === 0) {
                e.x = newX;
            }

            let newY = e.y + moveY;
            let checkGridX = Math.floor(e.x);
            let wallCheckY = (moveY > 0) ? Math.floor(newY + ENEMY_RADIUS) : Math.floor(newY - ENEMY_RADIUS);

            if (wallCheckY >= 0 && wallCheckY < MAP_HEIGHT && map[wallCheckY * MAP_WIDTH + checkGridX] === 0) {
                e.y = newY;
            }
        } else {
            let nextEnemyY = e.y + (e.dirY * 0.03);
            const ENEMY_RADIUS = 0.20;
            let wallCheckY = (e.dirY > 0) ? Math.floor(nextEnemyY + ENEMY_RADIUS) : Math.floor(nextEnemyY - ENEMY_RADIUS);
            if (wallCheckY >= 0 && wallCheckY < MAP_HEIGHT && map[wallCheckY * MAP_WIDTH + Math.floor(e.x)] === 0) {
                e.y = nextEnemyY;
            } else {
                e.dirY *= -1;
            }
        }

        // Damage Calculation & Hurt SFX
        if (pDist < 0.6) {
            playerHealth -= 1;
            if (damageSoundTimer === 0) {
                music.playTone(120, 100);
                damageSoundTimer = 10;
            }
            if (playerHealth <= 0) {
                playerHealth = 0;
                gameState = "GAMEOVER";
                music.playMelody("C5 B A G F E D C ", 160);
            }
        }
    }
});

// --- NATIVE RENDER HOOK ---
scene.createRenderable(0, function (screen: Image) {
    if (gameState === "WIN") {
        screen.fill(5);
        screen.print("ALL LEVELS CLEAR!", 30, 55, 1);
        return;
    }
    if (gameState === "GAMEOVER") {
        screen.fill(2);
        screen.print("YOU DIED", 55, 55, 1);
        return;
    }

    // 1. Draw Environment Foundations
    screen.fillRect(0, 0, SCREEN_WIDTH, HALF_SCREEN_HEIGHT, 9);
    screen.fillRect(0, HALF_SCREEN_HEIGHT, SCREEN_WIDTH, HALF_SCREEN_HEIGHT, 11);

    let depthBuffer: number[] = [];
    for (let d = 0; d < SCREEN_WIDTH; d++) {
        depthBuffer.push(1e30);
    }

    // 2. Raycasting Core Engine Loop
    for (let x = 0; x < SCREEN_WIDTH; x++) {
        let rayAngle = (playerAngle - FOV / 2) + (x / SCREEN_WIDTH) * FOV;
        let mapX = Math.floor(playerX);
        let mapY = Math.floor(playerY);
        let rayDirX = Math.cos(rayAngle);
        let rayDirY = Math.sin(rayAngle);
        let deltaDistX = (rayDirX === 0) ? 1e30 : Math.abs(1 / rayDirX);
        let deltaDistY = (rayDirY === 0) ? 1e30 : Math.abs(1 / rayDirY);
        let sideDistX = 0, sideDistY = 0, stepX = 0, stepY = 0;

        if (rayDirX < 0) { stepX = -1; sideDistX = (playerX - mapX) * deltaDistX; }
        else { stepX = 1; sideDistX = (mapX + 1.0 - playerX) * deltaDistX; }
        if (rayDirY < 0) { stepY = -1; sideDistY = (playerY - mapY) * deltaDistY; }
        else { stepY = 1; sideDistY = (mapY + 1.0 - playerY) * deltaDistY; }

        let hit = 0, side = 0, maxSteps = 30;
        while (hit === 0 && maxSteps > 0) {
            maxSteps--;
            if (sideDistX < sideDistY) { sideDistX += deltaDistX; mapX += stepX; side = 0; }
            else { sideDistY += deltaDistY; mapY += stepY; side = 1; }
            if (mapX < 0 || mapX >= MAP_WIDTH || mapY < 0 || mapY >= MAP_HEIGHT) break;
            let cell = map[mapY * MAP_WIDTH + mapX];
            if (cell > 0) hit = cell;
        }

        let perpWallDist = (side === 0) ? (sideDistX - deltaDistX) : (sideDistY - deltaDistY);
        if (perpWallDist <= 0) perpWallDist = 0.01;
        depthBuffer[x] = perpWallDist;

        let correctedDistance = perpWallDist * Math.cos(rayAngle - playerAngle);
        let wallHeight = Math.min(SCREEN_HEIGHT, Math.floor(SCREEN_HEIGHT / correctedDistance));
        let wallTop = HALF_SCREEN_HEIGHT - (wallHeight / 2);
        let wallBottom = wallTop + wallHeight;
        let wallX = (side === 0) ? (playerY + perpWallDist * rayDirY) : (playerX + perpWallDist * rayDirX);
        wallX -= Math.floor(wallX);
        let texX = Math.floor(wallX * 8);

        if (side === 0 && rayDirX > 0) texX = 7 - texX;
        if (side === 1 && rayDirY < 0) texX = 7 - texX;

        for (let y = wallTop; y < wallBottom; y++) {
            if (y >= 0 && y < SCREEN_HEIGHT) {
                let texY = Math.floor(((y - wallTop) / wallHeight) * 8);
                let pixelColor = 0;
                if (hit === 1) {
                    pixelColor = brickTexture.getPixel(texX, texY);
                    if (side === 1) pixelColor = 13;
                } else if (hit === 2) {
                    pixelColor = breakableTexture.getPixel(texX, texY);
                } else if (hit === 3) {
                    pixelColor = exitTexture.getPixel(texX, texY);
                }
                screen.setPixel(x, y, pixelColor);
            }
        }
    }

    // 3. Render 3D Sprites (Enemies & Wizard NPC)
    let dirX = Math.cos(playerAngle);
    let dirY = Math.sin(playerAngle);
    let planeX = -Math.sin(playerAngle) * (FOV / 1.15);
    let planeY = Math.cos(playerAngle) * (FOV / 1.15);
    let invDet = 1.0 / (planeX * dirY - dirX * planeY);

    if (wizardActive) {
        let sprX = wizardX - playerX;
        let sprY = wizardY - playerY;
        let transformX = invDet * (dirY * sprX - dirX * sprY);
        let transformY = invDet * (-planeY * sprX + planeX * sprY);

        if (transformY > 0.1) {
            let spriteScreenX = Math.floor((SCREEN_WIDTH / 2) * (1 + transformX / transformY));
            let spriteHeight = Math.abs(Math.floor(SCREEN_HEIGHT / transformY));
            let spriteWidth = spriteHeight;
            let drawStartX = Math.floor(spriteScreenX - spriteWidth / 2);
            let drawEndX = Math.floor(spriteScreenX + spriteWidth / 2);
            let drawStartY = Math.floor(HALF_SCREEN_HEIGHT - spriteHeight / 2);
            let drawEndY = Math.floor(HALF_SCREEN_HEIGHT + spriteHeight / 2);

            for (let stripe = drawStartX; stripe < drawEndX; stripe++) {
                if (stripe >= 0 && stripe < SCREEN_WIDTH && transformY < depthBuffer[stripe]) {
                    let texX = Math.floor((stripe - drawStartX) * 8 / spriteWidth);
                    if (texX >= 0 && texX < 8) {
                        for (let sy = drawStartY; sy < drawEndY; sy++) {
                            if (sy >= 0 && sy < SCREEN_HEIGHT) {
                                let texY = Math.floor((sy - drawStartY) * 8 / spriteHeight);
                                if (texY >= 0 && texY < 8) {
                                    let pixelColor = wizardTexture.getPixel(texX, texY);
                                    if (pixelColor !== 0) {
                                        screen.setPixel(stripe, sy, pixelColor);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    for (let e of enemies) {
        if (e.health <= 0) continue;
        let spriteX = e.x - playerX;
        let spriteY = e.y - playerY;
        let transformX = invDet * (dirY * spriteX - dirX * spriteY);
        let transformY = invDet * (-planeY * spriteX + planeX * spriteY);

        if (transformY > 0.1) {
            let spriteScreenX = Math.floor((SCREEN_WIDTH / 2) * (1 + transformX / transformY));
            let spriteHeight = Math.abs(Math.floor(SCREEN_HEIGHT / transformY));
            let spriteWidth = spriteHeight;
            let drawStartX = Math.floor(spriteScreenX - spriteWidth / 2);
            let drawEndX = Math.floor(spriteScreenX + spriteWidth / 2);
            let drawStartY = Math.floor(HALF_SCREEN_HEIGHT - spriteHeight / 2);
            let drawEndY = Math.floor(HALF_SCREEN_HEIGHT + spriteHeight / 2);

            for (let stripe = drawStartX; stripe < drawEndX; stripe++) {
                if (stripe >= 0 && stripe < SCREEN_WIDTH && transformY < depthBuffer[stripe]) {
                    let texX = Math.floor((stripe - drawStartX) * 8 / spriteWidth);
                    if (texX >= 0 && texX < 8) {
                        for (let sy = drawStartY; sy < drawEndY; sy++) {
                            if (sy >= 0 && sy < SCREEN_HEIGHT) {
                                let texY = Math.floor((sy - drawStartY) * 8 / spriteHeight);
                                if (texY >= 0 && texY < 8) {
                                    let pixelColor = impTexture.getPixel(texX, texY);
                                    if (pixelColor !== 0) {
                                        screen.setPixel(stripe, sy, pixelColor);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // 3b. Render Projectiles
    for (let p of projectiles) {
        let projX = p.x - playerX;
        let projY = p.y - playerY;
        let transformX = invDet * (dirY * projX - dirX * projY);
        let transformY = invDet * (-planeY * projX + planeX * projY);

        if (transformY > 0.1) {
            let projScreenX = Math.floor((SCREEN_WIDTH / 2) * (1 + transformX / transformY));
            let projSize = Math.abs(Math.floor(SCREEN_HEIGHT / (transformY * 4.0)));
            if (projSize < 2) projSize = 2;
            let startX = Math.floor(projScreenX - projSize / 2);
            let endX = Math.floor(projScreenX + projSize / 2);
            let startY = Math.floor(HALF_SCREEN_HEIGHT - projSize / 2);
            let endY = Math.floor(HALF_SCREEN_HEIGHT + projSize / 2);

            for (let sx = startX; sx < endX; sx++) {
                if (sx >= 0 && sx < SCREEN_WIDTH && transformY < depthBuffer[sx]) {
                    for (let sy = startY; sy < endY; sy++) {
                        if (sy >= 0 && sy < SCREEN_HEIGHT) {
                            screen.setPixel(sx, sy, 5);
                        }
                    }
                }
            }
        }
    }

    // 4. Weapon Overlay
    let weaponYOffset = isShooting ? (weaponFrame % 2 * 3) : 0;
    screen.fillRect(72, 90 + weaponYOffset, 16, 30, 12);
    screen.fillRect(78, 80 + weaponYOffset, 4, 15, 15);
    if (isShooting && weaponFrame < 4) {
        screen.fillCircle(80, 78, 6, 4);
        screen.fillCircle(80, 78, 3, 5);
    }

    // 5. HUD Status Bar
    let liveFoes = 0;
    for (let e of enemies) { if (e.health > 0) liveFoes++; }
    screen.fillRect(0, 110, SCREEN_WIDTH, 10, 12);
    screen.print("HP:" + playerHealth + "%", 2, 112, 2);
    screen.print("LVL:" + (currentLevel + 1), 55, 112, 5);
    screen.print("SHARDS:" + playerShards, 100, 112, 9);

    // 6. Wizard Shop Overlay
    if (isShopOpen) {
        screen.fillRect(15, 15, 130, 90, 15);
        screen.fillRect(17, 17, 126, 86, 1);
        screen.print("WIZARD EMPORIUM", 30, 22, 9);
        screen.print("SHARDS: " + playerShards, 30, 34, 5);
        screen.print("^ UP: +30 HP (20S)", 22, 50, 7);
        screen.print("v DN: +10 MAX (30S)", 22, 65, 7);
        screen.print("PRESS (B) TO EXIT", 25, 85, 2);
    }

    // 7. Minimap Display
    const TILE_SIZE = 2;
    for (let my = 0; my < MAP_HEIGHT; my++) {
        for (let mx = 0; mx < MAP_WIDTH; mx++) {
            let cell = map[my * MAP_WIDTH + mx];
            let miniColor = 11;
            if (cell === 1) miniColor = 1;
            if (cell === 2) miniColor = 14;
            if (cell === 3) miniColor = 5;
            screen.fillRect(mx * TILE_SIZE, my * TILE_SIZE, TILE_SIZE, TILE_SIZE, miniColor);
        }
    }

    if (wizardActive) {
        screen.fillRect(Math.floor(wizardX * TILE_SIZE), Math.floor(wizardY * TILE_SIZE), 2, 2, 8);
    }

    for (let e of enemies) {
        if (e.health > 0) {
            screen.fillRect(Math.floor(e.x * TILE_SIZE), Math.floor(e.y * TILE_SIZE), 2, 2, 4);
        }
    }

    for (let p of projectiles) {
        screen.fillRect(Math.floor(p.x * TILE_SIZE), Math.floor(p.y * TILE_SIZE), 1, 1, 5);
    }

    screen.fillRect(Math.floor(playerX * TILE_SIZE), Math.floor(playerY * TILE_SIZE), 2, 2, 8);
});

music.play(DOOM_BGM, music.PlaybackMode.LoopingInBackground);
