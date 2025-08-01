import Image from 'next/image';
import logo from "../../../public/logo.png";
import facebook from "../../../public/facebook.png";
import twitter from "../../../public/twitter.png";
import linkedin from "../../../public/linkedin.png";
import whatsapp from "../../../public/whatsapp.png";
import Button from "../../../public/Button.png";

const Footer = () => {
  return (
    <div className='w-full h-[439px] bg-black'>
      <div className='w-full h-full px-[94px] pt-[47px] text-white flex gap-[116px]'>
        {/* left side */}
        <div className='flex flex-col gap-6 w-[293px] h-[232px]'>
          <Image src={logo} alt='logo_image' width={102} height={56}/>
          <div className='flex flex-col gap-6'>
            <p className='font-primary font-normal text-[18px] leading-[28px] text-[#A5A5A5]'>Your go-to choice for fast and fresh delivery, bringing the best to your door in no time</p>
            <div className='flex gap-[9px]'>
              <Image src={facebook} alt='logo_image' width={44} height={44}/>
              <Image src={twitter} alt='logo_image' width={44} height={44}/>
              <Image src={linkedin} alt='logo_image' width={44} height={44}/>
              <Image src={whatsapp} alt='logo_image' width={44} height={44}/>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className='w-[843px] h-[203px] flex gap-[75px]'>
          <div className='flex flex-col gap-6 w-[183px] h-[160px] py-[6px]'>
            <h3 className='font-primary font-semibold text-[24px] leading-[150%] text-white'>Quick Link</h3>
            <p className='text-[#A5A5A5] font-primary font-normal text-[16px] leading-[21px] tracking-[0%]'>About Us</p>
            <p className='text-[#A5A5A5] font-primary font-normal text-[16px] leading-[21px] tracking-[0%]'>How We works</p>
            <p className='text-[#A5A5A5] font-primary font-normal text-[16px] leading-[21px] tracking-[0%]'>Career</p>
          </div>
          <div className='flex flex-col gap-6 w-[173px] h-[172px] py-[6px]'>
            <h3 className='font-primary font-semibold text-[24px] leading-[150%] text-white'>Quick Link</h3>
            <p className='text-[#A5A5A5] font-primary font-normal text-[16px] leading-[21px] tracking-[0%]'>Privacy Policies</p>
            <p className='text-[#A5A5A5] font-primary font-normal text-[16px] leading-[21px] tracking-[0%]'>Terms & Conditions</p>
            <p className='text-[#A5A5A5] font-primary font-normal text-[16px] leading-[21px] tracking-[0%]'>Faq</p>
          </div>
          <div className='flex flex-col gap-3 w-[337px] h-[203px]'>
            <h3 className='font-primary font-semibold text-[24px] leading-[150%] text-white'>Newsletter</h3>
            <p className='text-[#A5A5A5] font-primary font-normal text-[16px] leading-[21px] tracking-[0%]'>Subscribe Our newsletter to get our Latest Update & News</p>
            <div className='flex w-[337px] h-[55px]'>
              <input type="text" placeholder='Enter Email' className='border border-[#181D21] rounded-l-[4px] w-[255px] h-[55px] px-3'/>
              <button>
                <Image src={Button} alt='logo_image' width={55} height={55}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className='w-full bg-black'>
        <span className='block border-b border-[#5C5C5C] w-full'></span>
        <p className='font-primary font-normal text-[16px] leading-[24px] text-[#5C5C5C] text-center pt-3'>
          © 2024 Tweet. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer;

