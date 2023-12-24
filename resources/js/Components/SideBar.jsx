import { Link, router, useForm } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

export default function SideBar({user})
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
            console.log(response.data);
            console.log('berhasil dihapus');

            // Perbarui state projects setelah penghapusan
            setProjects(projects.filter(project => project.project_id !== id));
        } catch (error) {
            console.log('pesan eror : ');
            console.error(error);
        }
    }
    // const handleDelete = (id) => {
    //     console.log(id)
    //     axios.delete(route('project.deleteProject', id))
    //         .then(res => {
    //             console.log(res)
    //             console.log('berhasil dihapus')
    //         }).catch(res => {
    //             console.log('pesan eror : ')
    //             console.log(res)
    //         })
    // }
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
  return (
    <Sidebar className="hidden md:block bg-zinc-400 h-screen">
        {/* Button Add Project */}
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="flex justify-center gap-3 py-2 w-full text-2xl font-bold text-black bg-zinc-400 hover:bg-zinc-300" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                <label>Project</label>
                <label>+</label>
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box flex flex-col justify-center">
                    <h3 className="font-bold text-lg pb-4 m-auto">Tambah Project</h3>

                    <form onSubmit={submit} className="flex flex-col">
                            <input type="text" placeholder="Masukan Nama Project Baru" className="input input-bordered w-full max-w-" value={data.name} onChange={e => setData('name', e.target.value)} />
                            {errors.name && <div>{errors.name}</div>}

                        <button type="submit" disabled={processing} className="btn btn-outline btn-accent mt-3">Tambah</button>
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
            <SubMenu defaultOpen label="Projects" >
                {/* {!projects && (
                    <MenuItem >belum ada project</MenuItem>
                )} */}
                {projects?.map((project, index) => {
                    return(
                        <div className="flex justify-between pe-4 bg-zinc-200">
                            <Link href={route("project.detail", project.project_id)} className="flex-1 bg-zinc-200">
                                <MenuItem key={index}>
                                    {project.name_project}
                                </MenuItem>
                            </Link>
                            <button className="bg-red-500 hover:bg-red-600 rounded-lg p-2 m-auto self-end" onClick={() => handleDelete(project.project_id)}>
                                <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                                </svg>
                            </button>
                        </div>
                    )
                })}
            </SubMenu>
        </Menu>

    </Sidebar>
  )
}
