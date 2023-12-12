import { Link, useForm } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

export default function SideBar({user})
{
    const { data, setData, post, processing, errors } = useForm({
        title: '',
    })

    const [projects, setProjects] = useState(null);


    function submit(e) {
        console.log(e.preventDefault())
        // e.preventDefault()
        // post('/login')
    }

    useEffect(() => {
        axios.get(route('project.myProject'))
            .then(res => {
                // console.log(res.data.projects)
                setProjects(res.data.projects)
            })
    }, [])

    // console.log(projects)

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
                            <input type="text" placeholder="Masukan Title Baru" className="input input-bordered w-full max-w-" value={data.title} onChange={e => setData('title', e.target.value)} />
                            {errors.title && <div>{errors.title}</div>}

                        <button type="submit" disabled={processing} className="btn btn-outline btn-accent mt-3">Tambah</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
        {/* <button className="flex justify-center gap-3 py-2 w-full bg-blue-600">
            <label className="text-2xl font-bold text-white">Project</label>
            <a href="" className="text-2xl text-white hover:bg-blue-400">+</a>
        </button> */}

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
