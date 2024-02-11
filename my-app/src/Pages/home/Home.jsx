import "./home.css"
import Navbar from "../../components/Navbar/navbar"
import Header from "../../components/Header/header"
import Featured from "../../components/Featured/featured"
import PropertyList from "../../components/PropertyList/propertyList"
export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>  
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
      </div>
    </div>

  )
}

export default Home