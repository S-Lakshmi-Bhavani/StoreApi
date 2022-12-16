import { useEffect, useState } from "react"
import axios from "axios"
import cart from './images/shopping-cart.png'
import user from './images/user.png'
function App() {
  var [products, setProducts] = useState([])
  var [search, setSearch] = useState('')
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => setProducts(res.data))
  }, [])
  return (
    <>
      <div className="container">
        <div className="row bg-primary rounded mb-5">
          <div className="col-md-4">
            <h1>Products</h1>
          </div>
          <div className="col-md-6 pt-2">
            <input className="form-control border border-dark" type="text" onChange={(e) =>
              setSearch(e.target.value)} placeholder='Search Here.......' />
          </div>
          <div className="col-md-2 d-flex  flex-row-reverse">
            <img src={user} alt='.........' style={{ width: "55px", height: "auto" }} /> &nbsp;&nbsp;&nbsp;&nbsp;
            <img src={cart} alt="........." style={{ width: "45px", height: "auto" }} />
          </div>
        </div>
        <div className="row">
          {products.filter(item => {
            return item.title.toLowerCase().includes(search.toLowerCase())
          }).map(item =>
            <div className="col-12 col-sm-12 col-md-4 pb-3">
              <div className="card border border-dark shadow bg-body" style={{height:"45rem"}}>          
                <img src={item.image} className="card-img-top rounded mx-auto d-block img-fluid p-3" alt="..."
                 style={{width: "15rem",height:"20rem"}} />
                <div className="card-body">
                  <h5 className="card-title text-primary">{item.title}</h5>
                  <h4 className="">{"₹"+item.price}</h4>
                  <p className="card-text">{item.description.substring(1,380)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default App
