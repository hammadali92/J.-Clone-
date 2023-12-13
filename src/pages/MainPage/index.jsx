import React ,{useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Carousal from '../../components/Carousal'
import BeTheFirst  from '../../components/BeTheFirst'
import ParentCard from '../../components/ParentCard'
import BoysGirlsCard from '../../components/BoysGirlsCard'
import Footer from '../../components/Footer'
// import PreNav from '../../components/PreNav'

const MainPage = ({top}) => {
  useEffect(() => {
    window.scrollTo(0, top);
  }, [top]);
  return (
    <div>

<Navbar/>
<Carousal/>
<ParentCard/>
<BeTheFirst/>
<BoysGirlsCard/>
<Footer/>



    </div>
  )
}

export default MainPage
