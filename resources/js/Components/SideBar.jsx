import { Link, router, useForm } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

export default function SideBar({user})
{
    const { data, setData, post, processing, errors } = useForm({
        name: '',
    })
    function submit(e) {
        // e.preventDefault()
        axios.post(route('project.createProject'), {
            name : data.name,
        }).then((res) => {
            console.log(res);

            setAlert
        })
    }

    // console.log(data)

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
    <Sidebar className="hidden md:block">
        {/* Button Add Project */}
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="flex justify-center gap-3 py-2 w-full text-2xl font-bold text-white bg-blue-600 hover:bg-blue-700" onClick={()=>document.getElementById('my_modal_2').showModal()}>
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
                        <Link href={route("project.detail", project.project_id)}>
                            <MenuItem key={index}>
                                {project.name_project}
                            </MenuItem>
                        </Link>
                    )
                })}
            </SubMenu>
        </Menu>

    </Sidebar>
  )
}
