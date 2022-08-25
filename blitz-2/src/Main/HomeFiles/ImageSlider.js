import {useState, useEffect} from "react";

const ImageSlider = ({data:sliderData}) => {
    const [currentSlide, setcurrentSlide] = useState(0);
    const slideLength= sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervaalTime= 5000;

    const nextSlide =() => {
        setcurrentSlide(currentSlide===slideLength -1 ? 0 :currentSlide +1);
    }
    const prevSlide =() => {
        setcurrentSlide(currentSlide===0 ? slideLength-1 :currentSlide -1);
    }
     function auto () {
        slideInterval =setInterval(nextSlide, intervaalTime)
     }
    const goToSlide = slideIndex => {
        setcurrentSlide(slideIndex)
    }

    useEffect(()=>{
        setcurrentSlide(0)
    },[])

    useEffect(()=>{
       if (autoScroll) {
        auto()
       }
       return() => {clearInterval(slideInterval)}
    },[currentSlide])
    return ( 
        <div className="slider">
             <i className="bi bi-chevron-double-left arrow prev "  onClick={prevSlide}></i>
            <i className="bi bi-chevron-double-right arrow next " onClick={nextSlide}></i>

           {sliderData.slice(-3).map((slide,index)=>{
            return(
                <div className={index === currentSlide ?
                "slide current" :"slide"} key={index}>
                    {index=== currentSlide && (
                        <div>
                        <img src={slide.image} alt="slide"/>
                        <div className="contentI">
                            <h2>{slide.title}</h2>
                            <p>{slide.article}</p>
                            <hr/>
                            <button className="--btn --btn-primary">read more</button>
                        </div>
                        </div>
                    )}
                    
                </div>
            )

           })}
            <div className="switch">
             {sliderData.slice(-3).map((slide, slideIndex)=>(
                <i key={slideIndex} className={currentSlide===slideIndex?"bi bi-phone-landscape-fill switchI":"bi bi-phone-landscape switchI"} onClick={()=>goToSlide(slideIndex)}></i>
                ))}
                            
                        </div>
            
            </div>
     );
}
 
export default ImageSlider;