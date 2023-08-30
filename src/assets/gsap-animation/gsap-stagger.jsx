

const heroTexts = "Lorem ipsum dolor sit amet consectetur.-Aperiam dignissimos enim quod consequatur ad eius."
//split string
const heroTextWords = heroTexts.split('-');
//mapping the useRef
const heroTextRefs = heroTextWords.map(() => useRef(null));


useEffect( () => {

    heroTextRefs.forEach((heroTextRef, index) => { // map the index of the useRef
    
        tl.fromTo(
        heroTextRef.current,
        {
          y:20,
          opacity: 0,
          
        },
        {
          y:0,
          opacity:1,
          duration: .7,
        },"-=0.5"
      );
    });
    


// array mapping 
        <div>
        {heroTextWords.map((word, index) => (
        <div key={index} ref={heroTextRefs[index]} className="hero_text">
        {word}
        </div>