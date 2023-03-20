import "./discover.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from "../../components/navbar/Navbar"
import Card from "../../components/card/Card"

const Discover = () => {
  return (
    <div className='discover'>
    <Sidebar/>    
        <div className="discoverContainer">
          <Navbar/>
          <h1 className="title">Discover</h1>
            <Card/>
        </div>
    </div>

  )
}

export default Discover