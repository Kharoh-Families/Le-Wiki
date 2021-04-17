const silverIngot = {
    name: 'silverIngot',
    type: 'mineral',
    obtaining: {
        craft: [
                {
                    furniture: 'furnace',
                    materials: [{ silverOre: 1 }, [{ log: 1, stick: 10, coal: 1 }]],
                    experience: 13
                }
        ]
    },
    utility: {
        
    }
}

export { silverIngot }
