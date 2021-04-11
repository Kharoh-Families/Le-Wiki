export default {
    name: 'ironOre',
    type: 'mineral',
    obtaining: {
        harvest: [
            {
                object: 'ironObsidianOre',
                tool: 'pickaxe',
                delay: 120000,
                probability: 1/9
            },
            {
                object: 'ironOre',
                tool: 'pickaxe',
                delay: 10000,
                probability: 6/43
            }
        ]
    },
    utility: undefined
}
