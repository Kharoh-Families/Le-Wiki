import React, { useContext } from 'react'

const Home = (props: ItemProps) => {

  return (
    <article id='Item'>
        {props.name}
    </article>
  )
}

export default Home

export interface ItemProps {
    name: string
}
