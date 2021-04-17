const items = {
    wood: {
        log: require('./log').log,
        plank: require('./plank').plank,
        stick: require('./stick').stick,
        woodPack: require('./woodPack').woodPack
    },
    mineral: {
        coal: require('./coal').coal,
        copperIngot: require('./copperIngot').copperIngot,
        copperLittleOre: require('./copperLittleOre').copperLittleOre,
        copperNugget: require('./copperNugget').copperNugget,
        copperOre: require('./copperOre').copperOre,
        goldIngot: require('./goldIngot').goldIngot,
        goldLittleOre: require('./goldLittleOre').goldLittleOre,
        goldNugget: require('./goldNugget').goldNugget,
        goldOre: require('./goldOre').goldOre,
        ironIngot: require('./ironIngot').ironIngot,
        ironLittleOre: require('./ironLittleOre').ironLittleOre,
        ironNugget: require('./ironNugget'),
        ironOre: require('./ironOre').ironOre,
        silverIngot: require('./silverIngot').silverIngot,
        silverLittleOre: require('./silverLittleOre').silverLittleOre,
        silverNugget: require('./silverNugget').silverNugget,
        silverOre: require('./silverOre').silverOre,
        steelIngot: require('./steelIngot').steelIngot
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
    },
    dye: {
        blueDye: require('./blueDye').blueDye
    },
    textile: {
        cloth: require('./cloth').cloth
    }
}

const itemsArray= [
    require('./log').log,
    require('./plank').plank,
    require('./stick').stick,
    require('./woodPack').woodPack,



    require('./coal').coal,
    require('./copperIngot').copperIngot,
    require('./copperLittleOre').copperLittleOre,
    require('./copperNugget').copperNugget,
    require('./copperOre').copperOre,
    require('./goldIngot').goldIngot,
    require('./goldLittleOre').goldLittleOre,
    require('./goldNugget').goldNugget,
    require('./goldOre').goldOre,
    require('./ironIngot').ironIngot,
    require('./ironLittleOre').ironLittleOre,
    require('./ironNugget'),
    require('./ironOre').ironOre,
    require('./silverIngot').silverIngot,
    require('./silverLittleOre').silverLittleOre,
    require('./silverNugget').silverNugget,
    require('./silverOre').silverOre,
    require('./steelIngot').steelIngot,



    require('./obsidian').obsidian,
    require('./stone').stone,



    require('./berry').berry,
    require('./blueberry').blueberry,
    require('./lemon').lemon,



    require('./cotton').cotton,
    require('./dandelionFlower').dandelionFlower,
    require('./roseFlower').roseFlower,
    require('./tulipFlower').tulipFlower,



    require('./dailyChest').dailyChest,
    require('./villageChest').villageChest,



    require('./blueDye').blueDye,



    require('./cloth').cloth
]

export { items, itemsArray }