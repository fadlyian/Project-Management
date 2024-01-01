import { Link, router, useForm } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

export default function SideBar({auth})
{
    const { data, setData, post, processing, errors } = useForm({
        name: '',
    })

    // Button Create
    function submit(e) {
        e.preventDefault()
        axios.post(route('project.createProject'), {
            name : data.name,
        }).then((res) => {
            // console.log(res);
            router.get(route('project.detail', res.data.project_id))
        })
    }
    // End Button Create

    // Button Delete
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(route('project.deleteProject', id));
            // Perbarui state projects setelah penghapusan
            setProjects(projects.filter(project => project.project_id !== id));
            router.visit(route('dashboard'));
        } catch (error) {
            console.error(error);
        }
    }
    // End Button Delete

    // LIST PROJECTS==============================
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        axios.get(route('project.myProject'))
            .then(res => {
                // console.log(res.data.projects)
                setProjects(res.data.projects)
            })
    }, [])
    // END LIST PROJECTS==========================

    // console.log("sidebar tentang projects  : ",projects)


    return (
    <Sidebar className="hidden md:block bg-zinc-400 h-screen max-h-full">
        {/* Button Add Project */}
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="flex justify-center gap-3 py-2 w-full text-2xl font-bold text-white bg-zinc-400 hover:bg-zinc-300" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                <label>Project</label>
                <label>+</label>
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box flex flex-col justify-center bg-gray-400">
                    <h3 className="font-bold text-lg pb-4 m-auto">Tambah Project</h3>

                    <form onSubmit={submit} className="flex flex-col">
                            <input type="text" placeholder="Masukan Nama Project Baru" className="input w-full max-w-" value={data.name} onChange={e => setData('name', e.target.value)} />
                            {errors.name && <div>{errors.name}</div>}

                        <button type="submit" disabled={processing} className="btn btn-slate mt-3">Tambah</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>

        <Menu>
            <Link href={route('dashboard')}>
                <MenuItem>
                    Dashboard
                </MenuItem>
            </Link>
            <SubMenu defaultOpen label="Projects">
                {/* {!projects && (
                    <MenuItem >belum ada project</MenuItem>
                )} */}
                {projects?.map((project, index) => {
                    return(
                        <div className="flex justify-between pe-4 bg-zinc-200 ">
                            <Link href={route("project.detail", project.project_id)} className="flex-1 bg-zinc-200">
                                <MenuItem key={index}>
                                    {project.name_project}
                                </MenuItem>
                            </Link>
                            {project.pivot.job_id == 1 && (
                                <>
                            <button className="bg-red-500 hover:bg-red-600 rounded-lg p-2 m-auto self-end" onClick={()=>document.getElementById('modalDeleteProject_'+ project.project_id).showModal()}>
                                <svg class="w-5 h-5 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
                                </svg>
                            </button>

                            {/* <button className="absolute top-3 right-5 bg-red-500 hover:bg-red-600 p-2 rounded-lg" onClick={()=>document.getElementById('modalDeleteProject_'+ project.project_id).showModal()}>
                                <svg class="w-5 h-5 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
                                </svg>
                            </button> */}
                            <dialog id={'modalDeleteProject_'+ project.project_id} className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Yakin Menghapus Project? "{project.name_project}"</h3>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn btn-success text-white">Close</button>
                                        </form>
                                        <button className='btn btn-error text-white' onClick={() => handleDelete(project.project_id)}>Delete</button>
                                    </div>
                                </div>
                            </dialog>
                                </>
                            )}

                        </div>
                    )
                })}
            </SubMenu>
        </Menu>

    </Sidebar>
  )
}
