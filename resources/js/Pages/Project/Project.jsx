import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Project({ auth }) {
    // console.log(auth);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={'Project'}
        >
            <Head title="Project" />


            {/* Content */}
            <div className='p-3 flex bg-red-300'>
                {/* CARD */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>


                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={()=>document.getElementById('my_modal_card').showModal()}>open modal</button>
                <dialog id="my_modal_card" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click outside to close</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eaque minima dolorum nulla! Et, voluptate mollitia culpa dicta repudiandae cupiditate officia voluptatum impedit ea accusantium iste nostrum quas porro reprehenderit quaerat a at enim vel maxime praesentium deleniti aliquam iusto? Perferendis ipsa recusandae iusto? Veritatis delectus aliquid quaerat sint recusandae.</p> */}
            </div>

        </AuthenticatedLayout>
    );
}
