const coal = {
    name: 'coal',
    type: 'mineral',
    obtaining: {
        craft: [
                {
                    furniture: 'furnace',
                    materials: [{ log: 1 }, [{ log: 1, stick: 10 }]],
                    experience: 20
                }
        ]
    },
    utility: {
        items: [
            'copperNugget',
            'goldNugget',
            'ironNugget',
            'silverNugget',
            'steelIngot'
        ]
    }
}

export { coal }
