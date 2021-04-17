const steelIngot = {
    name: 'steelIngot',
    type: 'mineral',
    obtaining: {
        craft: [
                {
                    furniture: 'furnace',
                    materials: [{ ironIngot: 1 }, [{ coal: 5 }]],
                    experience: 35
                }
        ]
    },
    utility: {
        
    }
}

export { steelIngot }
