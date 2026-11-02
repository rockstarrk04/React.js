import React, { useState } from 'react'
import { productsData } from './productsData'
import './product.css'


const Products = () => {
    let [product , setProduct] = useState(productsData)

    let handleDelete = (id) => {
        let bool = window.confirm('Do you want to delete..?')
        if (bool) {
            setProduct(product.filter((elem) => elem.id !== id))
        }
        else {
            alert("Product is Not Deleted")
        }
    }

  return (
    <>
      <div className="products">
        <h1>Products Component</h1>
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>SI.NO</th>
                        <th>CATEGORY</th>
                        <th>TITLE</th>
                        <th>IMAGE</th>
                        <th>DELETE</th>
                        <th>VIEW</th>
                    </tr>
                </thead>
                <tbody>
                        {product.map((elem , index) => {
                            let {id , title , image , desc , category} = elem
                            return(
                                <tr key={id}>
                                    <td>{index + 1}.</td>
                                    <td>{category}</td>
                                    <td>{title}</td>
                                    <td><img height={50} width={50} src={image}/></td>
                                    <td><button onClick={() => handleDelete(id)}>Delete</button></td>
                                    <td><button onClick={ () => alert(desc)}>View</button></td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default Products
