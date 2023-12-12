import SideBar from '@/Components/SideBar';
import Navbar from '@/Components/Navbar';

export default function Authenticated({ user, header, children, member=null }) {
    // console.log(user);
    // console.log(member)
    return (
        <div className='flex flex-col'>
            {/* NAVBAR */}
            <Navbar user={user}></Navbar>

            <div className='flex flex-row'>
                <SideBar user={user}></SideBar>

                <div className='flex flex-col flex-1 '>
                    {/* HEADER */}
                    <div className='flex flex-row justify-between p-2'>
                        <p className='font-bold bg-red-200 my-auto text-2xl'>{header}</p>

                        {member && (
                            <div className='flex gap-3 min-h-min'>
                                {/* Add User */}
                                <button className="bg-gray-400 hover:bg-gray-500 text-neutral-content rounded-2xl px-3">
                                    <span className="text-base text-white">Add Member +</span>
                                </button>

                                {/* avatar */}
                                <div className="avatar-group -space-x-2 rtl:space-x-reverse">
                                    {member.slice(0, 2).map((member, index) => (
                                    <div className="avatar placeholder" key={index}>
                                        <div className="bg-neutral text-neutral-content rounded-full w-8">
                                            <span className="text-xs">{member.name}</span>
                                        </div>
                                    </div>
                                    ))}

                                    {member.length > 2 && (
                                    <div className="avatar placeholder" key="placeholder">
                                        <div className="w-8 bg-neutral text-neutral-content">
                                        <span>+{member.length - 2}</span>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>
                        )}


                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
