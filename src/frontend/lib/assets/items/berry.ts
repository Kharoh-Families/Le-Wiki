export default {
    name: 'berry',
    type: 'fruit',
    obtaining: {
        harvest: [
            {
                object: 'berryBush',
                tool: 'hoe',
                delay: 5000,
                probability: 1/3
            }
        ]
    },
    utility: undefined
}
