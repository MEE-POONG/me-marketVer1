'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaSearch, FaHeart, FaShoppingBag, FaBars, FaTimes, FaUser } from 'react-icons/fa';

const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/shop', label: 'SHOP' },
    { href: '/pages', label: 'PAGES' },
    { href: '/blog', label: 'BLOG' },
    { href: '/contact', label: 'CONTACT' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <div className="px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold font-cursive text-black">
                    <img src="images/logo1.png" className='w-18 lg:w-[120px]' alt="logo" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 text-sm font-semibold uppercase">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`relative pb-2 transition ${pathname === item.href ? 'text-black' : 'text-gray-700 hover:text-black'
                                }`}
                        >
                            {item.label}
                            {pathname === item.href && (
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600"></span>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Right Icons */}
                <div className="flex items-center space-x-3 text-black text-sm">
                    <Link href="/login" className="text-gray-600 hover:text-black md:inline">
                        <FaUser size={18} className="hover:text-red-600 cursor-pointer"/>
                    </Link>
                    <div className="relative md:inline">
                        <FaHeart size={18} className="hover:text-red-600 cursor-pointer" />
                        <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">2</span>
                    </div>
                    <div className="relative md:inline">
                        <FaShoppingBag size={18} className="hover:text-red-600 cursor-pointer" />
                        <span className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">2</span>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden text-xl">
                        {isMobileOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="md:hidden bg-white shadow-inner px-6 py-4 space-y-2 text-sm font-semibold uppercase">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block py-2 border-b ${pathname === item.href ? 'text-red-600' : 'text-gray-700 hover:text-black'
                                }`}
                            onClick={() => setIsMobileOpen(false)} // ปิดเมนูเมื่อคลิก
                        >
                            {item.label}
                        </Link>
                    ))}

                </div>
            )}
        </header>
    );
}
