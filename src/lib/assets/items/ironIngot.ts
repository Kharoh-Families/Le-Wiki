const ironIngot = {
    name: 'ironIngot',
    type: 'mineral',
    obtaining: {
        craft: [
                {
                    furniture: 'furnace',
                    materials: [{ ironOre: 1 }, [{ log: 1, stick: 10, coal: 1 }]],
                    experience: 10
                }
        ]
    },
    utility: {
        items: [
            'steelIngot'
        ]
    }
}

export { ironIngot }
