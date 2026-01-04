import { useGSAP } from "@gsap/react"
import gsap from "gsap/all"
import ClipPathTitle from "../Components/ClipPathTitle"
import VideoPinSection from "../Components/VideoPinSection"


const BenefitSection = () => {


    //now to build this animation we need to use hook useGSAP
    useGSAP(()=>{
        //step1:create a timeline
        const revealtl=gsap.timeline({
            scrollTrigger:{
                //yeh animation kab chlega ya kab truigger hoga
                trigger:".benefit-section",
                start:"top 60%",
                end:"top top",
                scrub:1.5,
                markers:true
            }
        });

        //now after creating the timeline its time to animate the title
        //we use that timeline
        revealtl.to(".benefit-section .first-title",{
            duration:1,
            clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            opacity:1,
            ease:"circ.out"
        })
       .to(".benefit-section .second-title",{
            duration:1,
            clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            opacity:1,
            ease:"circ.out"
        })
        .to(".benefit-section .third-title",{
            duration:1,
            clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            opacity:1,
            ease:"circ.out"
        })
        .to(".benefit-section .fourth-title",{
            duration:1,
            clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            opacity:1,
            ease:"circ.out"
        })
    })
    return (
        <section className="benefit-section">
            {/* parent container for our texts */}
            <div className="container mx-auto pt-20">
                <div className="col-center">
                    <p>
                        Unlock the Advantages: <br />
                        Explore the Key Benefits of Choosing SPYLT
                    </p>

                    <div className="mt-20 col-center">
                    {/* This div is the div which will have all the titles so each one is 
                    looking the same means we can create a component for it */}
                        <ClipPathTitle
                        title={"Shelf Stable"}
                        color={"#FAEADE"}
                        bg={"#C88E64"}
                        className={"first-title"}
                        border={"#222123"}
                        />
                        <ClipPathTitle
                        title={"Protein + Caffeine"}
                        color={"#222123"}
                        bg={"#FAEADE"}
                        className={"second-title"}
                        border={"#222123"}
                        />
                        <ClipPathTitle
                        title={"Infinitely recyclable"}
                        color={"#FAEADE"}
                        bg={"#7F3B2D"}
                        className={"third-title"}
                        border={"#222123"}
                        />
                        <ClipPathTitle
                        title={"Lactose free"}
                        color={"#222123"}
                        bg={"#FED775"}
                        className={"fourth-title"}
                        border={"#222123"}
                        />
                    </div>

                    <div className="md:mt-0 mt-10">
                        <p>And Much More ....</p>
                    </div>
                </div>
            </div>

            <div className="relative overlay-box">
                <VideoPinSection/>
            </div> 
        </section>
    )
}

export default BenefitSection