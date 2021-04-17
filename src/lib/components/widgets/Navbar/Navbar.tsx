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
                            return <li><a href={`./#/${item}`}><img src={require(`../../../assets/images/items/${item}.svg`)} /><span className='itemName'>{item}</span></a></li>
                        })
                    }
                </ul>
            </div>
        )
    })

    // let linkArray = items.map((item) => {
        // return <a href={`./#/${item.name}`}>{item.name}</a>
    // })

    // console.log(linkArray)

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
  
}
