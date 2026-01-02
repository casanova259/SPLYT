import { useGSAP } from "@gsap/react"
import gsap from "gsap/all"
import { SplitText } from "gsap/all"


const Message = () => {


    //now the naimation
    useGSAP(()=>{
        const firstMsgSplit=SplitText.create(".first-message",{
            type:"words"
        })
        const SecondMsgSplit=SplitText.create(".second-message",{
            type:"words"
        })
        const paraMsgSplit=SplitText.create(".message-content p",{
            type:"words,lines",
            linesClass:"paragraph-line"
        })

        gsap.to(firstMsgSplit.words,{
            color:"#faeade",
            ease:"power1.in",
            stagger:1,
            //noww we have to make it synced to the scroll\
            scrollTrigger:{
                trigger:".message-content",
                scrub:true,
                start:"top center",
                end:"30% center",
                // markers:true
            }
        })

        gsap.to(SecondMsgSplit.words,{
             color:"#faeade",
            ease:"power1.in",
            stagger:1,
            scrollTrigger:{
                trigger:".second-message",
                scrub:true,
                start:"top center",
                end:"bottom center",
                // markers:true
            }
        })

        //to make the rveal animation of fuel up
        //step 1 :create a timelime
        const revealTl=gsap.timeline({
            delay:1,
            scrollTrigger:{
                trigger:".msg-text-scroll",
                start:"top 60%",
                //markers:true,
                toggleActions: "play none none reverse"
            }
        })

        //now after buuilding the timeline the next step is to make the aniamtion
        revealTl.to(".msg-text-scroll",{
            duration:0.6,
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.inOut"
        })

        const paraGraphTl=gsap.timeline({
            scrollTrigger:{
                trigger:".message-content p",
                start:"top center",
                // toggleActions: "play none none reverse"

                //  markers:true
            }
        })
        paraGraphTl.from(paraMsgSplit.words,{
            yPercent:300,
            rotate:3,
            ease:"power1.inOut",
            duration:1,
            stagger:0.01
        })
    })

    return (
        <section className="message-content">
            <div className="container mx-auto py-28 flex-center relative">
                <div className="w-full h-full">
                    <div className="msg-wrapper">
                        <h1 className="first-message">stir up your fearless past and </h1>

                        <div style={{clipPath: "polygon(0 0, 0% 100%, 0 100%)"}} className="msg-text-scroll">
                            <div className="bg-light-brown md:pd-5 pb-3 px-5">
                                <h2 className="text-red-brown">fuel up</h2>
                            </div>
                        </div>

                        <h1 className="second-message">
                            YOUR FUTURE WITH EVERY GULP OF PERFECT Protein
                        </h1>
                    </div>

                    {/* now the paragraph tag will come into the play  */}
                    <div className="flex-center md:mt-20 mt-10">
                        <div className="max-w-md px-10 flex-center overflow-hidden">
                            <p>Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Message