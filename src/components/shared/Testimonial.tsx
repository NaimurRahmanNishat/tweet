import Image from 'next/image';
import testimonial from "../../../public/testimonial.png";
import man from "../../../public/man.png";
import Iconup from "../../../public/Iconup.png";
import Icondown from "../../../public/Icondown.png";

const Testimonial = () => {
  return (
    <div className="w-full h-[681.9px] px-[121px] py-[80px] flex items-center">
      <div className="w-full flex justify-between gap-[73px]">
        
        {/* Left Side */}
        <div className="w-[485px] h-[481px] flex flex-col gap-6">
          <div className='flex flex-col gap-2.5 w-full h-[160px]'>
            {/* Heading */}
            <p className="text-[#333333] font-lobster font-normal text-[20px] leading-[150%] tacking-[1%]">Testimonial</p>
            <h2 className="w-[485px] h-[120px] text-[40px] font-semibold leading-[60px] tacking-[-1px]">
              What <span className="text-[#FF7F3E]">Customer</span> Saying <br /> About our Services
            </h2>
          </div>
          
          {/* Card */}
          <div className="bg-[#FFCABB] w-[485px] h-[252px] p-[25px] rounded-[8px]">
            <div className='w-full h-[103px] relative'>
              <Image src={Iconup} alt="testimonial" width={24.55} height={29}/>
              <p className='font-primary pl-[28.71px] font-normal text-[16px] leading-[24px] text-[#262626]'>Love the convenience of Tweet! Fast, reliable, and super easy to use for all your food delivery cravings.</p>
              <Image src={Icondown} alt="testimonial" width={24.55} height={29} className='absolute right-[48.71px] top-14'/>
            </div>

            <div className="flex items-center justify-between w-full h-[74px] gap-4">
              {/* Profile */}
              <div className="flex items-center gap-3">
                <div className="w-[74px] h-[74px] rounded-full overflow-hidden">
                <Image
                  src={man}
                  alt="profile"
                  width={74}
                  height={74}
                  className=""
                />
                </div>
                <div>
                  <h4 className="font-semibold text-[18px] leading-[28px]">Leon Fischer</h4>
                  <p className="text-[#8D8D8D] text-sm">Satisfied Customer</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <span className="bg-[#FF7F3E] text-white px-3 py-1 rounded-md text-sm font-bold">
                  ★★★★★
                </span>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="w-2.5 h-2.5 bg-[#E5E5E5] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#E5E5E5] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#FF7F3E] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#E5E5E5] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#E5E5E5] rounded-full"></span>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-[638px] h-[521px] relative">
          <Image src={testimonial} alt="testimonial_image" width={638} height={521} />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
