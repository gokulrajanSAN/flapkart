import './App.css'

function App() {

  return (
    <div className='app'>
      <div className='nav'>
        <div className='logo'>
          <img className='logo-svg' src="src\assets\logo.svg" alt="flapkart logo" />
        </div>
        <div className='search-bar'>
          <img className='search-icon' src="src\assets\icons-search.svg" alt="" />
          <input className='search' type="search" name="" id="" placeholder='Search for products, brands etc.,.' />
        </div>
        <div>
          
        </div>
        <div>cart</div>
        <div>Seller</div>
        <div>dropdown</div>
      </div>
      <div className='category'>product category</div>
      <div className='offers'>offers</div>
    </div>
  )
}

export default App
