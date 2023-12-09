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
                    <div className='p-3'>
                        <p>halodek</p>
                    </div>
                    {children}
                </div>
            </div>
        </div>

        // <div className="flex h-full">
        //     <SideBar></SideBar>

        //     <div className="bg-red-400 w-full">
        //         <Navbar header={header} user={user}></Navbar>
        //         <main className="p-2 md:p-6">
        //             {children}
        //         </main>
        //     </div>
        // </div>
    );
}
