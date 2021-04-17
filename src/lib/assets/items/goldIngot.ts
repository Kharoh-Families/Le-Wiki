const goldIngot = {
    name: 'goldIngot',
    type: 'mineral',
    obtaining: {
        craft: [
                {
                    furniture: 'furnace',
                    materials: [{ goldOre: 1 }, [{ log: 1, stick: 10, coal: 1 }]],
                    experience: 15
                }
        ]
    },
    utility: {
        
    }
}

export { goldIngot }
