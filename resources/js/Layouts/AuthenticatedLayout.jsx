import SideBar from '@/Components/SideBar';
import Navbar from '@/Components/Navbar';
import { router, useForm } from '@inertiajs/react';

export default function Authenticated({ user, header, children, member=null, project=null, jobs=null }) {
    // console.log(user);
    // console.log(member)

    const {data, setData, processing, errors} = useForm({
        email : null,
        job : null,
    })

    const handleAddMember = (e) => {
        // e.preventDefault()
        axios.post(route('project.member.addMember'),{
            project_id : project.project_id,
            email : data.email,
            job : data.job,
        }).then((res) => {
            console.log("response data : ")
            console.log(res.data)
            alert(res.data)
        })
    }

    return (
        <div className='flex flex-col'>
            {/* NAVBAR */}
            <Navbar user={user}></Navbar>

            <div className='flex flex-row'>
                <SideBar user={user}></SideBar>

                <div className='flex flex-col flex-1 '>
                    {/* HEADER */}
                    <div className='flex flex-row justify-between p-2'>
                        <p className='font-bold my-auto text-2xl'>{header}</p>

                        {member && (
                            <div className='flex gap-3 min-h-min'>
                                {/* Add User */}
                                <button className="bg-gray-400 hover:bg-gray-500 text-white rounded-2xl px-3" onClick={()=>document.getElementById('modalAddMember_'+project.project_id).showModal()}>add Member +</button>
                                <dialog id={'modalAddMember_'+project.project_id } className="modal">
                                <div className="modal-box">

                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>

                                    <h3 className="font-bold text-2xl border-b-2 mb-4 border-yellow-300">Tambah Member</h3>
                                    <form onSubmit={handleAddMember} className='flex flex-col gap-3'>
                                        <div className='flex flex-col justify-around w-full gap-1'>
                                            <label id='email' className='font-bold'>Email</label>
                                            <input type="text" placeholder="Type email here" className="input input-bordered w-full max-w-xs" onChange={e => setData('email',e.target.value)}/>
                                            {errors.email && <div>{errors.email}</div>}
                                        </div>

                                        <div className='flex flex-col justify-around w-full gap-1'>
                                            <label id='job' className='font-bold'>Job Access</label>
                                            <select className="select select-bordered w-full max-w-xs" onChange={e => setData('job', e.target.value)}>
                                                <option disabled selected>Who shot first?</option>
                                                {jobs.map((job,index) => (
                                                    <option key={index} value={job.job_id}>{job.name_job}</option>
                                                ))}
                                                {/* <option value={'Greedo'}>Greedo</option> */}
                                            </select>
                                            {errors.job && <div>{errors.job}</div>}
                                        </div>

                                        <button type="submit" disabled={processing} className='btn btn-outline btn-success'>Add Member</button>
                                    </form>
                                </div>
                                </dialog>

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
