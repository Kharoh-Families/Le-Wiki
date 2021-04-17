const copperOre = {
    name: 'copperOre',
    type: 'mineral',
    obtaining: {
        harvest: [
            {
                object: 'copperObsidianOre',
                tool: 'pickaxe',
                delay: 120000,
                probability: 1/9
            },
            {
                object: 'copperOre',
                tool: 'pickaxe',
                delay: 10000,
                probability: 6/43
            }
        ]
    },
    utility: {
        
    }
}

export { copperOre }
