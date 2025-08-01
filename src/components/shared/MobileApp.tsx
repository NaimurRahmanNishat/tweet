import Image from 'next/image';
import mobile from "../../../public/mobile.png";
import googlePlay from "../../../public/googlePlay.png";
import appStore from "../../../public/appstore.png";
import background from "../../../public/background.png";

const MobileApp = () => {
  return (
    <div className='w-full h-[812px] relative'>
      <div className='absolute z-40 left-[911px] top-[38px]'>
        <Image src={mobile} alt='mobile' width={343} height={614}/>
      </div>
      <div className='absolute left-[119px] top-[120px] flex flex-col gap-2.5 w-[756px] h-[327.94px]'>
        <h4 className='text-[#333333] font-lobster font-normal text-[20px] leading-[150%] tracking-[1%]'>Restaurants</h4>
        <div className='w-full h-[287.94px] flex flex-col gap-6'>
          <h1 className='font-primary font-semibold text-[40px] leading-[60px] tracking-[1%] text-[#333333]'>Enhance your experience, <br /> <span className='text-[#ED6923]'>Download the Tweet app today!</span></h1>
          <div className='w-[688px] h-[143.94px] flex flex-col gap-6'>
            <p className='text-[#5C5C5C] font-primary font-normal text-[16px] leading-[150%] tracking-[0%]'>Discover a whole new level of convenience with our mobile app. From browsing our delectable menu to securing exclusive deals, it&apos;s your gateway to a world of culinary delights. Download now and elevate your dining experience with just a tap.</p>
            <div className='w-[307px] h-[47.94px] flex gap-[11px]'>
              <Image src={googlePlay} alt='googlePlay' width={148} height={47.94}/>
              <Image src={appStore} alt='appStore' width={148} height={47.94}/>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute left-[119px] top-[514px]'>
        <Image src={background} alt='background' width={1201} height={298} className='relative'/>
        <div className='absolute left-[120px] top-36 w-[637px] h-[90px] flex gap-[29px]'>
          <div className='w-[110px] h-[90px] flex flex-col items-center justify-center'>
            <h3 className='font-primary font-semibold text-[40px] leading-[150%] tracking-[0%] text-white'>100+</h3>
            <p className='text-white font-primary font-normal text-[20px] leading-[150%] tracking-[0%]'>Food Menu</p>
          </div>
          <div className='w-[112px] h-[90px] flex flex-col items-center justify-center'>
            <h3 className='font-primary font-semibold text-[40px] leading-[150%] tracking-[0%] text-white'>100+</h3>
            <p className='text-white font-primary font-normal text-[20px] leading-[150%] tracking-[0%]'>Downloads</p>
          </div>
          <div className='w-[157px] h-[90px] flex flex-col items-center justify-center'>
            <h3 className='font-primary font-semibold text-[40px] leading-[150%] tracking-[0%] text-white'>20+</h3>
            <p className='text-white font-primary font-normal text-[20px] leading-[150%] tracking-[0%]'>Positive reviews</p>
          </div>
          <div className='w-[159px] h-[90px] flex flex-col items-center justify-center'>
            <h3 className='font-primary font-semibold text-[40px] leading-[150%] tracking-[0%] text-white'>4.7</h3>
            <p className='text-white font-primary font-normal text-[20px] leading-[150%] tracking-[0%]'>Average Review</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileApp;