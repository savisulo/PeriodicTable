import Popup from "reactjs-popup";

const Element = ({ element }) => {
    const colors = {
      "noble gas": "#FFBC42",
      "halogen": "#a02b5c",
      "alkaline earth metal": "#EC674E",
      "nonmetal": "#ffc0cb",
      "alkali metal": "#228b22",
      "transition metal": "#6a6a83",
      "post-transition metal": "#218380",
      "lanthanide": "#ffdab9",
      "actinide": "#b0e0e6",
      "metalloid": "#73D2DE"
    }
  
    return (
      <>
      <Popup trigger={
        <div className="element" style={{gridColumn: element.xpos, gridRow: element.ypos, backgroundColor: colors[element.category]}}>
          <div className="atomicnumber">
            {element.number}
          </div>
          <div className="symbol">
            {element.symbol}
          </div>
          <div className="name">
            {element.name}
          </div>
        </div>
      }>
        <div className="showElement">
          <h3>{element.name}</h3>
          <p>Symbol: {element.symbol}</p>
          <p>Atomic number: {element.number}</p>
          <p>Atomic mass: {element.atomic_mass} g/mol</p>
          <p>Category: {element.category}</p>
          <p>Electron configuration: {element.electron_configuration}</p>
          <p>Summary: {element.summary}</p>
        </div>
      </Popup>
      </>
    )
}

export default Element