import './styles/Home.css';
import Footer from '../Footer';
import HomeContent from './content/HomeContent';
import NavbarLinks from './content/NavbarContent/NavbarLinks';
function Home({isSmallScreen,isMediumScreen,setShowNavbar, isScroll}) {
  
  return (
  <div className='home_container'>

    <HomeContent isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen}/>
    <Footer isSmallScreen={isSmallScreen}/>
   </div>
 
  
  );
}

export default Home;
