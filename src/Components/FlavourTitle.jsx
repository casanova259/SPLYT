import { useGSAP } from "@gsap/react"
import gsap from "gsap/all"
import { SplitText } from "gsap/all"

const FlavourTitle = () => {

  //now comes thew GSAP PART
  useGSAP(()=>{
    const firstTextSplit=SplitText.create(".first-text-split h1",{
      type:"chars",
    });
    const SecondTextSplit=SplitText.create(".second-text-split h1",{
      type:"chars",
    });

    //animate
    gsap.from(firstTextSplit.chars,{
      yPercent:200,
      stagger:0.02,
      ease:"power1.inOut",
      scrollTrigger:{
        trigger:".flavor-section",
        start:"top 30%",
        toggleActions:"play none none reverse"

      }
    })


    //for the FREAKIGN TEXT
    gsap.to(".flavor-text-scroll",{
      duration:1,
      clipPath:"polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
      scrollTrigger:{
        trigger:".flavor-section",
        start:"top 10%",
        toggleActions:"play none none reverse"

        // markers:true
      }
    });


    //secondTExt SLIPT
    gsap.from(SecondTextSplit.chars,{
      yPercent:200,
      stagger:0.02,
      ease:"power1.inOut",
      scrollTrigger:{
        trigger:".flavor-section",
        start:"top 1%",
        toggleActions:"play none none reverse"
        // markers:true
      }
    })
  })
  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>WE have 6</h1>
      </div>

      <div style={{clipPath:"polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"}}className="flavor-text-scroll">
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">FREAKING</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>Delicious Flavors</h1>
      </div>
    </div>
  )
}

export default FlavourTitle