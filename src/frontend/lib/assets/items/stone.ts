export default {
    name: 'stone',
    type: 'rock',
    obtaining: {
        harvest: [
            {
                object: 'copperOre',
                tool: 'pickaxe',
                delay: 10000,
                probability: 36/43
            },
            {
                object: 'goldOre',
                tool: 'pickaxe',
                delay: 10000,
                probability: 42/49
            },
            {
                object: 'ironOre',
                tool: 'pickaxe',
                delay: 10000,
                probability: 36/43
            },
            {
                object: 'silverOre',
                tool: 'pickaxe',
                delay: 10000,
                probability: 36/43
            }
        ]
    },
    utility: undefined
}
