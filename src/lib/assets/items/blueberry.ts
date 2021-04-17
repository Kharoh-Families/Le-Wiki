const blueberry = {
    name: 'blueberry',
    type: 'fruit',
    obtaining: {
        harvest: [
            {
                object: 'blueberryBush',
                tool: 'hoe',
                delay: 5000,
                probability: 1/3
            }
        ]
    },
    utility: {
        items: [
            'blueDye'
        ]
    }
}

export { blueberry }
