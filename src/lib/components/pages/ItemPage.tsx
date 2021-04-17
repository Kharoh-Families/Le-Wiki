import React, { useContext } from 'react'

const ItemPage = (props: ItemPageProps) => {

  console.log(props.item)
  return (
    <div id='ItemPage' className={props.item.name}>
      <main>
        <nav>
          temp
        </nav>
        <div id='content'>
          <h2>{ props.item.name }</h2>
          <ul>
            <li>
              <h3>Obtention</h3>
  
              <ul>
                {
                props.item.obtaining.harvest
                ?
                <li>
                  <h4>Récolte</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Objet</th>
                        <th>Temps de récolte sans outil</th>
                        <th>Outil recommandé</th>
                        <th>Probabilité</th>
                      </tr>
                    </thead>
                  {
                  props.item.obtaining.harvest.map((mapObject: any) => (
                    <tr className='harvest'>
                      <td className='mapObject'>
                        <figure>
                          <img src={require(`../../assets/images/objects/${mapObject.object}.svg`)} alt={mapObject.object} title={mapObject.object} />
                          <figcaption>{mapObject.object}</figcaption>
                        </figure>
                      </td>
                      <td className='delay'>{mapObject.delay / 1000}s</td>
                      <td className='tool'>
                        <figure>
                          <img src={require(`../../assets/images/tools/iron${mapObject.tool[0].toUpperCase()}${mapObject.tool.substring(1)}.svg`)} alt={`iron ${mapObject.tool}`} />
                          <figcaption>{mapObject.tool}</figcaption>
                        </figure>
                      </td>
                      <td className="proba">{mapObject.probability.toFixed(3)}</td>
                    </tr>
                  ))
                  }
                  </table>
                </li>
                :
                undefined
              }

              {
                props.item.obtaining.reward
                ?
                <li>
                  <h4>Récompense</h4>
                  <p>Vous pouvez trouver cet objet comme récompense dans les {props.item.obtaining.reward}</p>
                </li>
                :
                undefined
              }
              </ul>
            </li>
            
            <li>
              <h3>Utilisation</h3>
              {
                Object.keys(props.item.utility).length !== 0
                ?
                undefined
                :
                <span>Cet objet n'a pas encore d'utilité.</span>
              }
            </li>
          </ul>
        </div>
        <div id='infobox'>
              <h3>{props.item.name}</h3>
              <img src={require(`../../assets/images/items/${props.item.name}.svg`)} alt=""/>
              <span id="type">Type: {props.item.type}</span>
        </div>
      </main>
    </div>
  )
}

export default ItemPage

export interface ItemPageProps {
    item: { [key: string]: any }
}