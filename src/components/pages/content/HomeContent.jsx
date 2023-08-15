import './styles/HomeContent.css';
import { NavLink} from 'react-router-dom';
import RequestBtn from '../assets/buttons/RequestBtn';



const HomeContent = ({isSmallScreen,isMediumScreen}) => {

  return (

    <div className='home_content_container'>
      <div className='first_container'>
        <div className='hero_container'>
        <h1 className='hero'> 
         <span> Unlock your</span> visual story<br /> 
          </h1>
          <h3 className='sub_hero'>Transforming Visions into Digital Masterpiece</h3>
            {isMediumScreen &&  <RequestBtn/>}
            {isSmallScreen &&  <RequestBtn/>}
        </div>

      
      </div>

      <div className='home_second_layer'>

      <NavLink to="/portfolio"  onClick={() => window.scrollTo({ top: 0 })} className='second_container'>
        <h4 className='ptag_home_title'>Web Development</h4>
        <p className='ptag_home'>
          He creates websites using React and is currently expanding his expertise in front-end development.
        </p>
         <img src="images/coding-desk.jpg" alt="#" />
      </NavLink>

      <NavLink className='third_container' to="/gallery" onClick={() => window.scrollTo({ top: 0 })}  >
        <p className='ptag_home_title'>Photography</p>
        <p className='ptag_home qoute'>
          I find joy in the art of Photography.
          While I don't limit myself to a specific niche,
          my portfolio reflects a diverse array of captivating shots.
        </p>
        <img src="images/camera.jpg" alt="#" />
        
      </NavLink>
      </div>
      <div className='home_forth_container'>
        <p className='ptag_home'>
          <span>Stay awhile </span><br /> immerse yourself in the fusion of technology and artistic expression.
          Whether you're intrigued by coding wizardry or drawn to the beauty of visual storytelling,
          I hope this leaves you inspired and eager to embark on future collaborations.
        </p>
      </div> 
    </div>
  );
};

export default HomeContent;
