const copperIngot = {
    name: 'copperIngot',
    type: 'mineral',
    obtaining: {
        craft: [
                {
                    furniture: 'furnace',
                    materials: [{ copperOre: 1 }, [{ log: 1, stick: 10, coal: 1 }]],
                    experience: 8
                }
        ]
    },
    utility: {
        
    }
}

export { copperIngot }
