const goldOre = {
    name: 'goldOre',
    type: 'mineral',
    obtaining: {
        harvest: [
            {
                object: 'goldObsidianOre',
                tool: 'pickaxe',
                delay: 200000,
                probability: 1/9
            },
            {
                object: 'goldOre',
                tool: 'pickaxe',
                delay: 10000,
                probability: 6/49
            }
        ]
    },
    utility: {
        items: [
            'goldIngot'
        ]
    }
}

export { goldOre }
