import React from 'react'

const Navbar = (props: NavbarInformations) => {

    const items: { [key: string]: { [key: string ]: any } } = require('../../../assets/items/items').items

    console.log(items)

    let linkArray: any[] = []
    Object.entries(items).forEach(([type, list]) => {
        linkArray.push(
            <div className="type">
                <h3>{type}</h3>
                <ul>
                    {
                        Object.keys(list).map((item: any) => {
                            return <li><a href={`./#/${item}`} onClick={() => setTimeout(() => props.changeMenuState(), 500)}><div><img src={require(`../../../assets/images/items/${item}.svg`)} /></div><span className='itemName'>{item}</span></a></li>
                        })
                    }
                </ul>
            </div>
        )
    })

    return (
    <nav id="Navbar">
        {
            linkArray
        }
    </nav>
    )
}

export default Navbar

export interface NavbarInformations {
    changeMenuState: Function
}
