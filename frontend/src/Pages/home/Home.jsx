import "./home.css"
import Navbar from "../../components/Navbar/navbar"
import Header from "../../components/Header/header"
import Featured from "../../components/Featured/featured"
import PropertyList from "../../components/PropertyList/propertyList"
import Featuredproperties from "../../components/FeaturedProperties/featuredproperties"
import MailList from "../../components/MailList/maillist"
import Footer from "../../components/Footer/footer"


export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>  
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Home guests love</h1>
        <Featuredproperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>

  )
}

export default Home