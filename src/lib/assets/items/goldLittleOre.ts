const goldLittleOre = {
    name: 'goldLittleOre',
    type: 'mineral',
    obtaining: {
        harvest: [
            {
                object: 'goldObsidianOre',
                tool: 'pickaxe',
                delay: 200000,
                probability: 1/18
            },
            {
                object: 'goldOre',
                tool: 'pickaxe',
                delay: 10000,
                probability: 1/49
            }
        ]
    },
    utility: {
        
    }
}

export { goldLittleOre }
