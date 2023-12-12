import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Project({ auth, project, card }) {

    const [detailProject, setDetailProject] = useState(project);
    const [cards, setCard] = useState(card);

    console.log(detailProject);
    console.log(cards);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={detailProject.name_project}
        >
            <Head title={`Project `+detailProject.name_project} />

            <div className='p-3 flex flex-col gap-2 bg-red-300'>
                {/*  */}
                <button className="btn w-36" onClick={()=>document.getElementById('my_modal_card').showModal()}>Add Card</button>
                <dialog id="my_modal_card" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click outside to close</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>

                {/* Card */}
                <div className='flex flex-wrap gap-2 '>
                    {cards.map((card, index) => (
                        <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                            <div className="card-body">
                                <h2 className="card-title">{card.title}</h2>
                                {/* <p>{card.description}</p> */}
                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary">View Detail</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </AuthenticatedLayout>
    );
}
