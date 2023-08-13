import './Home.css';
import Footer from '../Footer';
import HomeContent from './content/HomeContent';
function Home({isSmallScreen,isMediumScreen}) {
  
  return (
  <div className='home__container'>
    <HomeContent isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen}/>
    <Footer isSmallScreen={isSmallScreen}/>
   </div>
 
  
  );
}

export default Home;
