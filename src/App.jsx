import './App.css'
import {Navbar, Statistical, Overview, Food, Category} from "./components";

function App() {

  return (
    <>
      <Navbar />
      <Overview />
      {/*<Food />*/}
      <Statistical />
      <Category />
    </>
  )
}

export default App
