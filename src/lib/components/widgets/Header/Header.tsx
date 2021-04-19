import * as React from "react"
import MenuButton from '../MenuButton'

function Header(props: HeaderInformations) {
    return (
        <header>
            {
            window.innerWidth <= 768
            ?
            <MenuButton isOpen={props.isOpen} changeMenuState={props.changeMenuState} />
            :
            <p>Parce que les amis c'est bien, mais la famille c'est mieux !</p>
            }            
            <h1>Kharoh Families</h1>
            <img src={require('../../../assets/images/global/gradientLogo.svg')} alt="Kharoh Families"/>
        </header>
    )
}

export default Header

export interface HeaderInformations {
    isOpen: boolean
    changeMenuState: Function
}
