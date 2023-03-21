const CategoryIdentifier = ({ category }) => {
  
    return (
        <div style={{gridColumn: category.xpos, gridRow: category.ypos}}>
          <div className="categoryColor" style={{backgroundColor: category.color}}></div>
          <div className="category">{category.category}</div>
        </div>
    )
}

export default CategoryIdentifier