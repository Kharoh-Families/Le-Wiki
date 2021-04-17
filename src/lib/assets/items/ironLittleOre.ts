const ironLittleOre = {
    name: 'ironLittleOre',
    type: 'mineral',
    obtaining: {
        harvest: [
            {
                object: 'ironObsidianOre',
                tool: 'pickaxe',
                delay: 120000,
                probability: 1/18
            },
            {
                object: 'ironOre',
                tool: 'pickaxe',
                delay: 10000,
                probability: 1/43
            }
        ]
    },
    utility: {
        items: [
            'ironNugget'
        ]
    }
}

export { ironLittleOre }
