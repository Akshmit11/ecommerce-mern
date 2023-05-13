import { home, logo, orders, products, settings } from '@/lib/helpersvg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BiHomeAlt, BiBox, BiCog } from "react-icons/bi";
import { HiOutlineQueueList } from "react-icons/hi2";

const Nav = () => {

  const inactiveLinkStyle = "flex gap-1 p-1  font-medium";
  const activeLinkStyle = inactiveLinkStyle + " flex bg-white text-blue-900 rounded-l-lg ";
  const router = useRouter();
  const { pathname } = router;


  return (
    <aside className={`text-white p-4 pr-0`}>
        <Link href={`/`} className={`flex gap-1 mb-4 pr-4`}>
            {logo}
            <span className={`font-bold`}>
                EcommerceAdmin
            </span>
        </Link>
        <nav className={`flex flex-col gap-2 `}>
            <Link href={`/`} className={pathname === '/' ? activeLinkStyle : inactiveLinkStyle}> <BiHomeAlt className={`w-6 h-6`} />  Dashboard</Link>
            <Link href={`/products`} className={pathname.includes("/products") ? activeLinkStyle : inactiveLinkStyle}> <BiBox className={`w-6 h-6`} /> Products</Link>
            <Link href={`/orders`} className={pathname.includes("/orders") ? activeLinkStyle : inactiveLinkStyle}> <HiOutlineQueueList className={`w-6 h-6`} /> Orders</Link>
            <Link href={`/settings`} className={pathname.includes("/settings") ? activeLinkStyle : inactiveLinkStyle}> <BiCog className={`w-6 h-6`} />Settings</Link>
        </nav>
    </aside>
  )
}

export default Nav;