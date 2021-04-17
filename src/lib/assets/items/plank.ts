const plank = {
    name: 'plank',
    type: 'wood',
    obtaining: {
        craft: [
                {
                    furniture: 'sawmill',
                    materials: [{ log: 1 }, [] as any[]],
                    experience: 5
                }
        ]
    },
    utility: {
        items: [
            'woodPack'
        ]
    }
}

export { plank }
