'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import Search from './Search';
import UserMenu from './UserMenu';
import { User } from 'next-auth';
import Categories from './Categories';

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const router = useRouter();
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="max-w-[2520px] max-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width="100"
              height="100"
              className="hidden md:block cursor-pointer"
              onClick={() => router.push('/')}
            />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
