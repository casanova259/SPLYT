import { useGSAP } from "@gsap/react"
import gsap from "gsap/all"
import { SplitText } from "gsap/all"

const Hero = () => {


    //let's see now
    useGSAP(() => {
        //all are there it is ootimised for react 
        const titleSplit = SplitText.create(".hero-title", {
            type: "chars"
        })
        //splittext lets us breakdowen thew text into weords chars to animate them

        //now lets create a timline
        const tl = gsap.timeline({ delay: 0.5});

        //now make the element animate
        tl.to(".hero-content", {
            // duration:0.5,
            opacity: 1,
            y: 0,
            ease: "power1.inOut"
        }).to(".hero-text-scroll", {
            duration: 0.8,
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            ease: "circ.out"
        }, "-=0.5").from(titleSplit.chars, {
            yPercent: 200,
            stagger: 0.03,
            ease: "power1.inOut"
        }, "-=0.5");
        //now here we use postiion parameter this lags 0.5 abniation and it happens 0.5 so we make it start at the samne time\

        //now creating a scorlltrigger animation
        const HeroTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-container",//this basically ius the trigger the element whcih triggers the animation
                start: "1% top",//where to start
                end: "bottom top",//where to end
                scrub: true,
                // markers: true,
            }
        });

        //now after creating the timeline
        HeroTl.to(".hero-container",{
            rotate:5,
            scale:0.9,
            yPercent:30,
            ease:"power1.inOut"
        });
    })
    return (
        <section className="bg-main-bg">
            {/* this is the parent container whcih will store everything */}
            <div className="hero-container">
                <img src="images/static-img.png" alt="hero-img"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150"
                //this is the way to center the items in the absolute position
                />

                <div className="hero-content">
                    {/* THis div will hgave all the ocntent that we would animate like te clip animation the text animationa nd all of that
                 will be inside this containr*/}
                    <div className="overflow-hidden">
                        <h1 className="hero-title">
                            FREAKING DELICIOUS
                        </h1>
                    </div>
                    <div
                        style={{
                            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                        }}
                        className="hero-text-scroll">
                        <div className="hero-subtitle">
                            <h1>Protien + Caffine</h1>
                        </div>
                    </div>

                    <h2>Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.</h2>

                    <div className="hero-button">
                        Chug the SPYLT
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero