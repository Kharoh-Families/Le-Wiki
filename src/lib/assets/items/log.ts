const log = {
    name: 'log',
    type: 'wood',
    obtaining: {
        harvest: [
            {
                object: 'lemonTree',
                tool: 'axe',
                delay: 5000,
                probability: 1/4
            },
            {
                object: 'oak',
                tool: 'axe',
                delay: 5000,
                probability: 1/4
            }
        ]
    },
    utility: {
        items: [
            'coal',
            'copperIngot',
            'goldIngot',
            'ironIngot',
            'plank',
            'silverIngot',
            'woodpack'
        ]
    }
}

export { log }
