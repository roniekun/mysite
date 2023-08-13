import './ReadMoreButton.css';
// import { ReactComponent as DoubleArrowRight } from '../icons/svg/doublearrowright.svg';
// import { ReactComponent as DoubleArrowLeft } from '../icons/svg/doublearrowleft.svg';

const ReadMoreButton = ({ onClick, isClicked }) => {
  return (
    <div>
      <button className='read__more__btn' onClick={onClick}>
        {isClicked ? (
          <>
            Show less
          </>
        ) : (
          <>
            Read more
          </>
        )}
      </button>
    </div>
  );
};

export default ReadMoreButton;
