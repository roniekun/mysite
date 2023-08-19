import React from 'react'
import './PscLogo.css';

const PscLogo = () => {
  return (
    <div className='logo__container align'>

        <div className='letter__p' >
            <div className='skew__line__p'></div>
            <div className='circle'>
              <div className='inner__circle'></div>
            </div>
            <div className='vertical__line__p'></div>
        </div>
        
        <div className='letter__i'>
            <div className='dot__i'></div>
            <div className='line__i'>
            <div className='skew__line__i'></div>
            <div className='vertical__line__i'></div>
        </div>
            </div>
       

        <div className='letter__t'>
        <div className='top__line__t'>
            <div className='horizontal__line__t'></div>
            <div className='horizontal__line__tt'></div>
            </div>
            <div className='line__t'>
                 <div className='skew__line__t'></div>
            <div className='vertical__line__t'></div>
            </div>

        </div>

        <div className='letter__ii'>
            <div className='dot__ii'></div>
            <div className='line__ii'>
            <div className='skew__line__ii'></div>
            <div className='vertical__line__ii'></div>
        </div>
            </div>

            <div className='letter__k'>
            <div className='vertical__line'>

            <div className='vertical__top__k'></div>
            <div className='vertical__bottom__k'></div>
            </div>


        </div>

        
    </div>
  )
}

export default PscLogo