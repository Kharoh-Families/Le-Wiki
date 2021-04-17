const copperLittleOre = {
    name: 'copperLittleOre',
    type: 'mineral',
    obtaining: {
        harvest: [
            {
                object: 'copperObsidianOre',
                tool: 'pickaxe',
                delay: 120000,
                probability: 1/18
            },
            {
                object: 'copperOre',
                tool: 'pickaxe',
                delay: 10000,
                probability: 1/43
            }
        ]
    },
    utility: {
        items: [
            'copperNugget'
        ]
    }
}

export { copperLittleOre }
