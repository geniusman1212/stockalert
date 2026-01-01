'use client';

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from '@/components/ui/avatar';

import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import NavItems from '@/components/NavItems';

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push('/sign-in');
    };

    const user = { name: 'John', email: 'contact@stockalert.com' };

    const initials = user.name
        .split(' ')
        .map((n) => n[0])
        .join('');

    return (
        <DropdownMenu>
            {/* Trigger */}
            <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/avatar.png" alt={user.name} />
                        <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>

                    <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-medium text-gray-400">
              {user.name}
            </span>
                    </div>
                </button>
            </DropdownMenuTrigger>

            {/* Dropdown */}
            <DropdownMenuContent align="end" className="w-56 text-gray-400">
                <DropdownMenuLabel className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="/avatar.png" alt={user.name} />
                        <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                        <span className="font-medium text-gray-100">{user.name}</span>
                        <span className="text-xs text-gray-500">{user.email}</span>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="bg-gray-600" />

                {/* Mobile nav */}
                <div className="sm:hidden px-2">
                    <NavItems />
                    <DropdownMenuSeparator className="bg-gray-600 my-2" />
                </div>

                <DropdownMenuItem onClick={() => router.push('/profile')}>
                    Profile
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => router.push('/billing')}>
                    Billing
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => router.push('/team')}>
                    Team
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => router.push('/subscription')}>
                    Subscription
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    onClick={handleSignOut}
                    className="text-red-400 focus:text-red-500"
                >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;
