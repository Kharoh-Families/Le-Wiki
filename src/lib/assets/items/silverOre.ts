const silverOre =  {
    name: 'silverOre',
    type: 'mineral',
    obtaining: {
        harvest: [
            {
                object: 'silverObsidianOre',
                tool: 'pickaxe',
                delay: 130000,
                probability: 1/9
            },
            {
                object: 'silverOre',
                tool: 'pickaxe',
                delay: 10000,
                probability: 6/43
            }
        ]
    },
    utility: {
        
    }
}

export { silverOre }
