import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import SideBar from '@/Components/SideBar';
import Navbar from '@/Components/Navbar';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className='flex flex-col'>
            {/* NAVBAR */}
            <Navbar user={user}></Navbar>

            <div className='flex flex-row'>
                <SideBar></SideBar>

                <div className='flex flex-col flex-1 h-screen'>
                    {/* HEADER */}
                    <div className='flex flex-row justify-between p-2'>
                        <p className='font-bold bg-red-200 my-auto'>{header}</p>

                        {/* avatar */}
                        <div className="avatar placeholder flex gap-1">
                            <div className="bg-neutral text-neutral-content rounded-full w-8">
                                <span className="text-xs">UI</span>
                            </div>
                            <div className="bg-neutral text-neutral-content rounded-full w-8">
                                <span className="text-xs">UI</span>
                            </div>
                            <div className="bg-neutral text-neutral-content rounded-full w-8">
                                <span className="text-xs">UI</span>
                            </div>

                            {/* Add User */}
                            <button className="bg-gray-400 text-neutral-content rounded-full w-8">
                                <span className="text-lg">+</span>
                            </button>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
