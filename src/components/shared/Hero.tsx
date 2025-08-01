import Image from "next/image";
import hero from "../../../public/hero_image.png";
import car from "../../../public/car.png";
import sitted from "../../../public/sitted.jpg";
import Avatar from "../../../public/Avatar.png";
import SVG from "../../../public/SVG.png";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full h-[791px] px-[121px] hero_bg">
      <div className="w-full h-full grid grid-cols-2 gap-2">
        {/* left side */}
        <div className="pt-[152px] flex flex-col gap-3">
          <h1 className="font-rancho font-normal text-[100px] leading-[120px] text-[#ED6923]">Hungry?</h1>
          <div className="flex flex-col gap-8">
            {/* top */}
            <div className="flex flex-col gap-6 w-[587px] h-[266px]">
              <strong className="font-primary font-bold text-[72px] leading-[130%] tracking-[-2%] text-[#ED6923]"><span className="text-[#333333]">Let Us</span> Bring The Feast to You</strong>
              <p className="font-primary font-normal text-[18px] leading-[150%] text-[#333333] tracking-[0.2px]">Explore hundreds of delicious options from top restaurants and  Enjoy fast, reliable delivery right to you.</p>
            </div>
            {/* search */}
            <div className="flex relative">
              <input type="text" placeholder="Enter your location" className="border-[1px] bg-white border-[#ED6923] rounded-l-[14px] w-[428px] h-[64px] px-3"/>
              <div className="absolute top-6 right-48 flex items-center gap-1">
                <Image src={SVG} alt="sitted_image" width={16} height={16} />
                <h5 className="font-primary font-normal text-[14px] leading-[16px] text-center text-[#ED6923]">Locate me</h5>
              </div>
              <button className="bg-[#ED6923] rounded-r-[14px] text-white w-[159px] h-[64px] flex items-center justify-center">Find Food</button>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="pt-[85px] relative">
          {/* Hero Image fixed height */}
          <div className="relative w-[590px] h-[533px]">
            <Image
              src={hero}
              alt="hero_image"
              fill
              className="object-cover"
            />
          </div>

          {/* small card */}
          <div className="absolute bottom-35 right-1 bg-white opacity-90 w-[161px] rounded-[14px] h-[83px] shadow-md">
            <div className="w-full h-full flex items-center justify-between px-6">
              <Image src={car} alt="car_image" width={41} height={41} />
              <div className="flex flex-col gap-1 w-[54px] h-[50px]">
                <h5>24/7</h5>
                <h5 className="text-[#737373] font-inter text-[14px] leading-[22px] font-normal">
                  Delivery
                </h5>
              </div>
            </div>
          </div>

          {/* big card with sitted image */}
          <div className="absolute bottom-25 left-0 bg-white opacity-90 w-[322px] h-[140px] rounded-[14px]">
            <div className="flex gap-2.5 p-[15px] w-full h-full items-center justify-between">
              
              {/* FIXED SIZE IMAGE */}
              <div className="relative w-[113px] h-[110px] overflow-hidden rounded-[10px]">
                <Image
                  src={sitted}
                  alt="sitted_image"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Part */}
              <div className="flex flex-col gap-1.5">
                <h5 className="font-primary text-[16px] leading-[24px] font-semibold text-black">
                  Flavor Fusion Bistro
                </h5>
                <h5 className="font-primary text-[12px] leading-[16px] font-normal text-[#3D3D3D]">
                  Kaliurang, Seleman
                </h5>
                <h5 className="font-primary text-[12px] leading-[16px] font-normal text-[#3D3D3D] flex gap-1.5">
                  4.9 <span className="text-[#FFC107]"><FaStar /></span>
                </h5>
              </div>
            </div>
          </div>

          {/* top card */}
          <div className="absolute top-[85px] left-0 bg-white w-[194px] h-[150px] rounded-[14px]">
            <div className="flex flex-col gap-2.5 p-4">
              <Image src={Avatar} alt="sitted_image" width={113} height={110}/>
              <h5 className="font-primary text-[16px] leading-[24px] font-semibold text-center text-[#333333]">Satisfied Customer</h5>
              <h5 className="text-[#F4C700] flex gap-2"><FaStar /><span className="font-jakarta font-normal text-[#333333] text-[16px] leading-[24px] text-center">5.0 (3K Reviews)</span></h5>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
