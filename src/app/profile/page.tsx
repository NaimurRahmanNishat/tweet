import Image from "next/image";
import profile from "../../../public/profile.png";
import { CgProfile } from "react-icons/cg";
import { ShoppingBag } from "lucide-react";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { MdEmail, MdLock, MdLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-[1338px] relative">
      <aside className="absolute left-[31px] top-[38px] flex gap-6 w-[282px] h-[1076px] bg-white">
        <div className="w-[282px] h-[150px] bg-gradient-to-br to-[#FF8D2F] from-[#FFD3B0] relative">
          <div className="absolute left-[85px] top-[85px]">
            <Link href="/">
              <Image
                src={profile}
                alt="profile"
                width={100}
                height={100}
                className="rounded-full"
              />
            </Link>
          </div>
          <div className="absolute left-[85px] top-[200px]">
            <h5 className="font-primary font-medium text-[18px] leading-[27.75px] text-[#3D3D3D]">
              Mark Jecno
            </h5>
          </div>
          <div className="absolute left-[55px] top-[236px]">
            <h6 className="text-[#747474] font-primary font-normal text-[14px] leading-[21px] tracking-[0%]">
              mark-jecno@gmail.com
            </h6>
          </div>
        </div>
        <div className="absolute left-[28px] top-[294px] flex flex-col gap-4">
          <div className="flex cursor-pointer gap-[5px] w-full h-[24px] items-center">
            <CgProfile size={17} className="text-[#F1874F]" />
            <h4 className="text-[#F1874F] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%]">
              Profile
            </h4>
          </div>
          <div className="flex cursor-pointer gap-[5px] w-full h-[24px] items-center">
            <ShoppingBag size={17} className="text-[#5C5C5C]" />
            <h4 className="text-[#5C5C5C] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%]">
              Order
            </h4>
          </div>
          <div className="flex cursor-pointer gap-[5px] w-full h-[24px] items-center">
            <CiDiscount1 size={17} className="text-[#5C5C5C]" />
            <h4 className="text-[#5C5C5C] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%]">
              StampCard
            </h4>
          </div>
          <div className="flex cursor-pointer gap-[5px] w-full h-[24px] items-center">
            <IoHelpCircleOutline size={17} className="text-[#5C5C5C]" />
            <h4 className="text-[#5C5C5C] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%]">
              Help
            </h4>
          </div>
          <div className="flex gap-[5px] cursor-pointer w-full h-[24px] items-center">
            <IoSettingsOutline size={17} className="text-[#5C5C5C]" />
            <h4 className="text-[#5C5C5C] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%]">
              Setting
            </h4>
          </div>
          <div className="flex gap-[5px] w-full h-[24px] cursor-pointer items-center">
            <MdLogout size={17} className="text-[#5C5C5C]" />
            <h4 className="text-[#5C5C5C] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%]">
              Logout
            </h4>
          </div>
        </div>
      </aside>
      <main className="absolute rounded-[10px] left-[387px] border border-[#E6E6E6] top-[38px] w-[895px] h-[468px] bg-white flex flex-col gap-2.5 p-6">
        <div className="w-[847px] h-[390px] flex flex-col gap-6">
          <h1 className="text-[#1A1A1A] font-primary font-medium text-[24px] leading-[150%] tracking-[0%]">
            Profile
          </h1>
          <div className="w-full h-[92px] border border-dashed rounded-[13px] border-[#A1A1A1] p-[20px] flex flex-col gap-2.5">
            <div className="w-[174.8px] h-[52px] flex flex-col gap-2.5">
              <div className="flex gap-2 w-[174.8px] h-[26px] items-center">
                <FaUser size={17} className="text-[#ED6923]" />
                <p className="text-[#3D3D3D] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%] ">
                  Name:
                </p>
              </div>
              <p className="pl-6 text-[#A1A1A1] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%]">
                Mark Jecno
              </p>
            </div>
          </div>
          <div className="w-full h-[92px] border border-dashed rounded-[13px] border-[#A1A1A1] p-[20px] flex flex-col gap-2.5">
            <div className="w-full h-[52px] flex flex-col gap-2.5">
              <div className="flex gap-2 w-full h-[26px] items-center">
                <MdEmail size={17} className="text-[#ED6923]" />
                <p className="text-[#3D3D3D] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%] ">
                  Email:
                </p>
              </div>
              <p className="pl-6 flex text-[#A1A1A1] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%]">
                mark-jecno@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full h-[92px] border border-dashed rounded-[13px] border-[#A1A1A1] p-[20px] flex flex-col gap-2.5">
            <div className="w-full h-[52px] flex flex-col gap-2.5">
              <div className="flex gap-2 w-full h-[26px] items-center">
                <MdLock size={17} className="text-[#ED6923]" />
                <p className="text-[#3D3D3D] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%] ">
                  Address
                </p>
              </div>
              <p className="pl-6 text-[#A1A1A1] flex font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%]">
                93, Songbird Cir, Blackville, South Carolina, USA-29817
              </p>
            </div>
          </div>
        </div>
      </main>
      <button className="absolute left-[1073px] top-[523px] bg-[#ED6923] text-white w-[198.5px] h-[48px] rounded-[12px] cursor-pointer">
        Update
      </button>
      <main className="absolute left-[387px] top-[617px] rounded-[10px] w-[895px] h-[436px] border border-[#E6E6E6] bg-white flex flex-col gap-2.5 p-6 ">
        <div className="w-[847px] h-[390px] flex flex-col gap-6">
          <h1 className="text-[#1A1A1A] font-primary font-medium text-[24px] leading-[150%] tracking-[0%]">
            Change Password
          </h1>
          <div className="w-full h-[92px] border border-dashed rounded-[13px] border-[#A1A1A1] p-[20px] flex flex-col gap-2.5">
            <div className="w-[174.8px] h-[52px] flex flex-col gap-2.5">
              <div className="flex gap-2 w-[174.8px] h-[26px] items-center">
                <MdLock size={17} className="text-[#ED6923]" />
                <p className="text-[#3D3D3D] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%] ">
                  Current Password:
                </p>
              </div>
              <p className="pl-6 text-[#A1A1A1] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%]">
                ********
              </p>
            </div>
          </div>
          <div className="w-full h-[92px] border border-dashed rounded-[13px] border-[#A1A1A1] p-[20px] flex flex-col gap-2.5">
            <div className="w-[174.8px] h-[52px] flex flex-col gap-2.5">
              <div className="flex gap-2 w-[174.8px] h-[26px] items-center">
                <MdLock size={17} className="text-[#ED6923]" />
                <p className="text-[#3D3D3D] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%] ">
                  New Password:
                </p>
              </div>
              <p className="pl-6 text-[#A1A1A1] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%]">
                ********
              </p>
            </div>
          </div>
          <div className="w-full h-[92px] border border-dashed rounded-[13px] border-[#A1A1A1] p-[20px] flex flex-col gap-2.5">
            <div className="w-[174.8px] h-[52px] flex flex-col gap-2.5">
              <div className="flex gap-2 w-[174.8px] h-[26px] items-center">
                <MdLock size={17} className="text-[#ED6923]" />
                <p className="text-[#3D3D3D] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%] ">
                  Confirm Password:
                </p>
              </div>
              <p className="pl-6 text-[#A1A1A1] font-primary font-medium text-[16px] leading-[25.2px] tracking-[0%]">
                ********
              </p>
            </div>
          </div>
        </div>
      </main>
      <button className="absolute left-[1073px] top-[1077px] bg-[#ED6923] text-white w-[198.5px] h-[48px] rounded-[12px] cursor-pointer">
        Save Changes
      </button>
    </div>
  );
};

export default page;
