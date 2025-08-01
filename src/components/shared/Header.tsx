import Image from 'next/image';
import logo from "../../../public/logo.png";
import account from "../../../public/account.png";
import Link from 'next/link';

const Header = () => {
  return (
    <div className='w-full h-[100px] px-[121px] bg-white flex items-center justify-between'>
        {/* logo */}
        <Image src={logo} alt='logo_image' width={102} height={56} className='cursor-pointer'/>
        {/* account */}
        <Link href="/profile">
            <Image src={account} alt='account_image' width={65} height={65}/>
        </Link>
    </div>
  )
}

export default Header;