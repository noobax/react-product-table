import { ProductCategrory } from "./coponents/products/productCategories"
import { ProductList } from "./coponents/products/productList"
import { InputText } from "./coponents/form/inputText"
import { InputCheckbox } from "./coponents/form/inputCheckbox"
import { useState } from "react"
import { InputRange } from "./coponents/form/inputRange"


function App() {
  const PRODUCTS = [  
      {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
      {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
      {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
      {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
      {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
      {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
  ]

  const maxPrice = Math.max(...PRODUCTS.map(product => parseInt(product.price.slice(1))))
  const [search, onSearch] = useState('')
  const [isCheck, onCheck] = useState(false)
  const [rangePrice, onSlide] = useState(maxPrice)

  return <div>
    <SearchBar 
      products={PRODUCTS} 
      search={search} 
      onSearch={onSearch}
      isCheck={isCheck}
      onCheck={onCheck}
      rangePrice={rangePrice}
      onSlide={onSlide}
      maxPrice={maxPrice}
    />
  </div>
  
}

function SearchBar({products, search, onSearch, isCheck, 
    onCheck, rangePrice, onSlide, maxPrice}) {
  
  let newProducts = products
  if (isCheck === true)
    newProducts = products.filter(product => product.stocked === true)
  if (search !== '')
    newProducts = newProducts.filter(product => product.name.includes(search))
  newProducts = newProducts.filter(product => parseInt(product.price.slice(1)) <= rangePrice)
  return <div>
    <InputText 
      value={search} 
      onValue={onSearch}
      placeholder={'recherche...'}
    />
    <InputCheckbox 
      checked={isCheck} 
      onCheck={onCheck}
    />

    <InputRange min={0} max={maxPrice} current={rangePrice} step={1} onSlide={onSlide}/>
    <ProductTable products={newProducts}/>
  </div>

}

function ProductTable({products}) {
  const rows = []
  let category = null

  for (const product of products) {
    if (category !== product.category) {
      category = product.category
      rows.push(<ProductCategrory category={category} key={category}/>)
    }
    rows.push(<ProductList product={product} key={product.name}/>)
  }
  return <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  </div>
}

export default App
