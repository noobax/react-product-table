/**
 * product row for products table
 * @param {string} product
 */
export function ProductList({product}) {
  return <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
   </tr>
}  
