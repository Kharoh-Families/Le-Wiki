const silverLittleOre = {
    name: 'silverLittleOre',
    type: 'mineral',
    obtaining: {
        harvest: [
            {
                object: 'silverObsidianOre',
                tool: 'pickaxe',
                delay: 130000,
                probability: 1/18
            },
            {
                object: 'silverOre',
                tool: 'pickaxe',
                delay: 10000,
                probability: 1/43
            }
        ]
    },
    utility: {
        
    }
}

export { silverLittleOre }
