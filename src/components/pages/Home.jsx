import './Home.css';
import Footer from '../Footer';
import HomeContent from './content/HomeContent';
import NavbarLinks from './content/NavbarContent/NavbarLinks';
function Home({isSmallScreen,isMediumScreen,setShowNavbar}) {
  
  return (
  <div className='home_container'>
    {!isSmallScreen && <NavbarLinks HomeNavbarLinks={{
        top:'0', 
        zIndex: '9999',
        backgroundColor:'whitesmoke',
        position: 'fixed',
        width: '100%'
        }}
    HomeNavbarLink={{color: '#181818'}}
    setShowNavbar={setShowNavbar}
    isSmallScreen={isSmallScreen}/>}
    <HomeContent isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen}/>
    <Footer isSmallScreen={isSmallScreen}/>
   </div>
 
  
  );
}

export default Home;
