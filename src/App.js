import React from 'react'
import Product from './Product'
import productsData from './productsData'

function App() {

  const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)


  return (
  <div className="px-10 py-10">
    <div className="lg:flex flex-wrap -mx-2">
       {productComponents}
    </div>
  </div>
  );
}

export default App;
