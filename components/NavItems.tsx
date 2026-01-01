'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Profile', href: '/profile' },
];

const NavItems = () => {
    const pathname = usePathname();

    return (
        <ul className="flex gap-6 font-medium text-gray-400">
            {NAV_ITEMS.map(({ label, href }) => {
                const isActive =
                    pathname === href || pathname.startsWith(`${href}/`);

                return (
                    <li key={href}>
                        <Link
                            href={href}
                            className={`transition-colors hover:text-yellow-500 ${
                                isActive ? 'text-white' : ''
                            }`}
                        >
                            {label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavItems;
