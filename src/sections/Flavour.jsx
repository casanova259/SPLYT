import FlavourScroller from "../Components/FlavourScroller"
import FlavourTitle from "../Components/FlavourTitle"

const Flavour = () => {
  return (
    <section className="flavor-section">
        {/* wrapper for everything */}
        <div className="h-full flex lg:flex-row flex-col items-center relative">
            {/* so one div for the title */}
            <div className="lg:w-[57%] flex-none h-80 col-center lg:h-full md:mt-20 xl:mt-0">
              <FlavourTitle/>
            </div>
            <div className="h-full">
              <FlavourScroller/>
            </div>
        </div>
    </section>
  )
}

export default Flavour