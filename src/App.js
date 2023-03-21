import { useState, useEffect } from 'react'
import axios from 'axios'
import Element from './components/Element'
import CategoryIdentifier from './components/CategoryIdentifier'

const App = () => {
  const [elements, setElements] = useState([])
  const colors = [
    {category: "nonmetal", color: "#ffc0cb", xpos: 1, ypos: 1},
    {category: "alkali metal", color: "#228b22", xpos: 1, ypos: 2},
    {category: "alkaline earth metal", color: "#EC674E", xpos: 1, ypos: 3},
    {category: "transition metal", color: "#6a6a83", xpos: 1, ypos: 4},
    {category: "post-transition metal", color: "#218380", xpos: 1, ypos: 5},
    {category: "metalloid", color: "#73D2DE", xpos: 2, ypos: 1},
    {category: "halogen", color: "#a02b5c", xpos: 2, ypos: 2},
    {category: "noble gas", color: "#FFBC42", xpos: 2, ypos: 3},
    {category: "lanthanide", color: "#ffdab9", xpos: 2, ypos: 4},
    {category: "actinide", color: "#b0e0e6", xpos: 2, ypos: 5}
  ]
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/elements')
      .then(response => {
        setElements(response.data)
      })
  }, [])

  console.log(elements.map(e => e.category))

  return (
    <>
    <h1>My Periodic Table</h1>
    <div className="periodic-table">
      <div className="categoryIdentifier" style={{gridColumnStart: 6, gridColumnEnd: 11, gridRowStart: 1, gridRowEnd: 3}}>
        {colors.map(category =>
          <CategoryIdentifier key={category.category} category={category} />
        )}
      </div>
      {elements.map(element =>
        <Element key={element.number} element={element} />
      )}
      <div className="element" style={{gridColumn: 3, gridRow: 6, backgroundColor: colors[8].color}}>
        <div className="atomicnumber">57-71</div>
        <div className="name">Lanthanides</div>
      </div>
      <div className="element" style={{gridColumn: 3, gridRow: 7, backgroundColor: colors[9].color}}>
        <div className="atomicnumber">89-103</div>
        <div className="name">Actinides</div>
      </div>
    </div>
    </>
  )
}

export default App;
