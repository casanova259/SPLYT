import React, { useRef } from 'react'
import { flavorlists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import { useMediaQuery } from 'react-responsive'

const FlavourScroller = () => {

    const sliderRef = useRef();

    //doesn't wanna show in the tablet
    const isTablet = useMediaQuery({
        query: "(max-width:1024px)",
    });
    //animation
    useGSAP(() => {

        //now we have to calculate the scroll amount
        const ScrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
        //Just done for understanding 
        // console.log(ScrollAmount);
        // console.log(sliderRef.current.scrollWidth);
        // console.log(window.innerWidth);

        if (!isTablet) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "2% top",
                    end: `+=${ScrollAmount + 1500}px`,
                    scrub: true,
                    pin: true
                },
            });

            tl.to(".flavor-section", {
                x: `-${ScrollAmount + 1500}px`,
                ease: "power1.inOut"
            })
        }
        //now we can't give the value manually cz if we do so the animation
        //ahppens diagonally



        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top top",
                end: "bottom 80%",
                scrub: true
            }
        })

        titleTl.to(".first-text-split", {
            xPercent: -30,
            ease: "power1.inOut",
        }).to(".flavor-text-scroll", {
            xPercent: -22,
            ease: "power1.inOut"
        }, "<").to(".second-text-split", {
            xPercent: -10,
            ease: "power1.inOut"
        }, "<")
    })
    return (
        <div ref={sliderRef} className='slider-wrapper'>
            <div className="flavors">
                {/* THIS DIV Will Contain all the flavors that we had to display */}
                {
                    //Insteda of the creating the flavours maunally well loop over it with map
                    flavorlists.map((flavor) => {
                        return (
                            <div key={flavor.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}>
                                <img src={`images/${flavor.color}-bg.svg`} alt="" className='absolute bottom-0' />
                                <img src={`images/${flavor.color}-drink.webp`} alt="" className='drinks' />
                                <img src={`images/${flavor.color}-elements.webp`} alt="" className='elements' />

                                <h1>{flavor.name}</h1>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default FlavourScroller