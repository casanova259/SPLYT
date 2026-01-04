import { useRef } from "react"
import { cards } from "../constants/index"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const TestimonialSection = () => {

    const vdRef = useRef([]);


    //aniamtion
    useGSAP(() => {
        gsap.set(".testimonials-section", {
            marginTop: "-140vh",
            //THIS CREATES A COVERING EFFECT
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top bottom",
                end: "200% top",
                scrub: true,
            }
        })

        //aniamtion
        tl.to(".testimonials-section .first-title", {
            xPercent: 70
        }).to(".testimonials-section .second-title", {
            xPercent: 25
        }, "<").to(".testimonials-section .third-title", {
            xPercent: -50
        }, "<")



        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "10% top",
                end: "200% top",
                scrub: 1.5,
                pin: true,
                markers: true
            }
        })

        pinTl.from(".vd-card",{
            yPercent:150,
            stagger:0.2,
            ease:"power1.inOut"
        })
    })

    function handlePlay(index) {
        const video = vdRef.current[index];
        if (video) video.play();
    }
    function handlePause(index) {
        const video = vdRef.current[index];
        if (video) video.pause();
    }
    return (
        <section className="testimonials-section">
            <div className="absolute size-full flex flex-col items-center pt-[5vw]">
                <h1 className="text-black first-title">
                    What's
                </h1>
                <h1 className="text-light-brown second-title">
                    Everyone's
                </h1>
                <h1 className="text-black third-title">
                    Talking
                </h1>
            </div>

            <div className="pin-box">
                {
                    cards.map((card, index) => (
                        <div
                            key={index}
                            className={`vd-card ${card.translation} ${card.rotation}`}
                            //now when had to make afucntion whcih works when mouse enters
                            onMouseEnter={() => handlePlay(index)}
                            onMouseLeave={() => handlePause(index)}
                        >

                            <video
                                ref={(el) => (vdRef.current[index] = el)}
                                src={card.src}
                                playsInline
                                muted
                                loop
                                className="size-full object-cover "
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default TestimonialSection