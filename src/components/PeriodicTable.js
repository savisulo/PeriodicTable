import data from '../elements.json'

const PeriodicTable = () => {
    const colors = {
      "noble gas": "#FFBC42",
      "alkaline earth metal": "#EC674E",
      "diatomic nonmetal": "#D81159",
      "polyatomic nonmetal": "#FFF",
      "alkali metal": "#8F2D56",
      "transition metal": "#58586B",
      "post-transition metal": "#218380",
      "lanthanide": "#4AABAF",
      "metalloid": "#73D2DE"
    };
  
    return (
      <div className="periodic-table">
        {data.elements.map((element) => (
          <div className="element" key={element.number} style={{gridColumn: element.xpos, gridRow: element.ypos, backgroundColor: colors[element.category]}}>
            <div className="atomicnumber">
              {element.number}
            </div>
            <div className="symbol">
              {element.symbol}
            </div>
            <div className="name">
              <p>{element.name}</p>
            </div>
          </div>
        ))}
      </div>
    )
}

export default PeriodicTable