import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const OurCarsComponent = () => {
  return (
    <section className="cars-section relative py-20 bg-gray-100 overflow-hidden">
      <div className="auto-container max-w-[900px] mx-auto px-4">
        <div className="content-container">
          <div className="row flex flex-wrap items-center">
            {/* Content Column - Left Side */}
            <div className="content-column w-full md:w-7/12 lg:w-6/12 p-6" data-aos="fade-right">
              <div className="inner-box relative">
                {/* Section Title */}
                <div className="sec-title mb-8">
                  <div className="inner-title-box">
                    <h2 className="text-[22px] sm:text-[24px] font-sans font-bold text-gray-800 mb-4 text-justify md:text-left">
                      IRRESISTIBLE POWER, <br /> UNPARALLELED PRESENCE
                    </h2>
                    <h4 className="hidden md:block text-[18px] sm:text-[20px] text-gray-300 font-bold uppercase tracking-widest absolute left-[-100px] top-20 -translate-y-1/2 rotate-90 origin-left">
                      OUR CARS
                    </h4>
                  </div>
                </div>
                <p className="text-gray-600 leading-1 mt-5 text-sm sm:text-base text-justify font-sans">
                  Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.
                </p>
                <p className="text-gray-700 mt-6 text-sm font-sans text-justify leading-relaxed">
                  Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. 
                </p>
                <div className='mt-5 mx-auto md:mx-16 text-center md:text-left'>
                <a
                            href="#"
                            className="font-semibold text-[14px] bg-white transition-all duration-300 text-orange-500 px-9 sm:px py-2 rounded-full mt-4 hover:bg-orange-500 hover:text-white border-2 border-orange-500 inline-block"
                        >
                            BOOK NOW
                        </a>
                </div>
              </div>
            </div>

            {/* Carousel Column - Right Side */}
            <div className="carousel-column w-full md:w-5/12 lg:w-6/12 p-6" data-aos="fade-left">
              <h2 className="text-gray-800 text-lg font-bold uppercase mb-4">CADILLAC ESCALADE LIMO</h2>
              <div className="single-item-carousel relative">
                <Carousel>
                  <CarouselContent>
                    {[1].map((item, index) => (
                      <CarouselItem key={index}>
                        <div className="car-item relative pt-12">
                          <figure className="image">
                            <img
                              src="images/car.png"
                              alt="Car"
                              className="w-full rounded-lg shadow-lg"
                            />
                          </figure>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-800" />
                  <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-800" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCarsComponent;
