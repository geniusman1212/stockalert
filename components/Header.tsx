import NavItems from '@/components/NavItems';
import Image from 'next/image';
import Link from 'next/link';
import UserDropdown from '@/components/UserDropdown';

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper flex items-center justify-between">
                <Link href="/" aria-label="Go to homepage">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="StockAlert logo"
                        width={140}
                        height={32}
                        priority
                        className="h-8 w-auto cursor-pointer"
                    />
                </Link>

                <nav className="hidden sm:block">
                    <NavItems />
                </nav>

                <UserDropdown />
            </div>
        </header>
    );
};

export default Header;



