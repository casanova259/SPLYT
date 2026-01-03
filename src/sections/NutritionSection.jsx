import React from 'react'

const NutritionSection = () => {
  return (
    <section className="nutrition-section">
        <img src="/images/slider-dip.png" className='w-full object-cover' alt="" />
        <img src="/images/big-img.png" className='big-img' alt="" />

        <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0 ">
            <div className="relative inline-block md:translate-y-20">
            {/* this div acts as an wrapper for the whole content over the text */}
            <div className="general-title flex flex-col justify-center items-center gap-24">
                <div className='overflow-hidden place-self-start'>
                    <h2 >IT STILL DOES</h2>
                </div>
                <div style={{}}className="nutrition-text-scroll place-self-start">
                    <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                        <h2 className='text-milk-yellow '>BODY GOOD</h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
    
export default NutritionSection