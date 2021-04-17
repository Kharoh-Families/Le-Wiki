const stick = {
    name: 'stick',
    type: 'wood',
    obtaining: {
        harvest: [
            {
                object: 'berryBush',
                tool: 'hoe',
                delay: 5000,
                probability: 2/3
            },
            {
                object: 'blueberryBush',
                tool: 'hoe',
                delay: 5000,
                probability: 2/3
            },
            {
                object: 'cottonBush',
                tool: 'hoe',
                delay: 6000,
                probability: 1/4
            },
            {
                object: 'lemonTree',
                tool: 'axe',
                delay: 5000,
                probability: 1/2
            },
            {
                object: 'oak',
                tool: 'axe',
                delay: 5000,
                probability: 3/4
            }
        ]
    },
    utility: {
        
    }
}

export { stick }
