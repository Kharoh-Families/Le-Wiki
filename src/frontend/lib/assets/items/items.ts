const items = {
    wood: {
        log: require('./log'),
        stick: require('./stick')
    },
    mineral: {
        copperLittleOre: require('./copperLittleOre'),
        copperOre: require('./copperOre'),
        goldLittleOre: require('./goldLittleOre'),
        goldOre: require('./goldOre'),
        ironLittleOre: require('./ironLittleOre'),
        ironOre: require('./ironOre'),
        silverLittleOre: require('./silverLittleOre'),
        silverOre: require('./silverOre')
    },
    rock: {
        obsidian: require('./obsidian'),
        stone: require('./stone')
    },
    fruit: {
        berry: require('./berry'),
        blueberry: require('./blueberry'),
        lemon: require('./lemon')
    },
    flower: {
        cotton: require('./cotton'),
        dandelionFlower: require('./dandelionFlower'),
        roseFlower: require('./roseFlower'),
        tulipFlower: require('./tulipFlower')
    },
    chest: {
        dailyChest: require('./dailyChest'),
        villageChest: require('./villageChest')
    }
}

export { items }