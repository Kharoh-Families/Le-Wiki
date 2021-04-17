const items = {
    wood: {
        log: require('./log').log,
        stick: require('./stick').stick
    },
    mineral: {
        copperLittleOre: require('./copperLittleOre').copperLittleOre,
        copperOre: require('./copperOre').copperOre,
        goldLittleOre: require('./goldLittleOre').goldLittleOre,
        goldOre: require('./goldOre').goldOre,
        ironLittleOre: require('./ironLittleOre').ironLittleOre,
        ironOre: require('./ironOre').ironOre,
        silverLittleOre: require('./silverLittleOre').silverLittleOre,
        silverOre: require('./silverOre').silverOre
    },
    rock: {
        obsidian: require('./obsidian').obsidian,
        stone: require('./stone').stone
    },
    fruit: {
        berry: require('./berry').berry,
        blueberry: require('./blueberry').blueberry,
        lemon: require('./lemon').lemon
    },
    flower: {
        cotton: require('./cotton').cotton,
        dandelionFlower: require('./dandelionFlower').dandelionFlower,
        roseFlower: require('./roseFlower').roseFlower,
        tulipFlower: require('./tulipFlower').tulipFlower
    },
    chest: {
        dailyChest: require('./dailyChest').dailyChest,
        villageChest: require('./villageChest').villageChest
    }
}

export { items }