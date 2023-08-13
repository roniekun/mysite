import './Home.css';
import Footer from '../Footer';
import HomeContent from './content/HomeContent';
import NavbarLinks from './content/NavbarContent/NavbarLinks';
function Home({isSmallScreen,isMediumScreen,setShowNavbar}) {
  
  return (
  <div className='home_container'>
    {!isSmallScreen && <NavbarLinks HomeNavbarLinks={{position:'absolute',
        top:'0', 
        right: '0',
        zIndex: '9999'}}
    setShowNavbar={setShowNavbar}
    isSmallScreen={isSmallScreen}/>}
    <HomeContent isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen}/>
    <Footer isSmallScreen={isSmallScreen}/>
   </div>
 
  
  );
}

export default Home;
