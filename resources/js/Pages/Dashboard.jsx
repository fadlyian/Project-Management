import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    console.log(auth);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={'Dashboard'}
        >
            <Head title="Dashboard" />


            {/* Content */}
            <div className='h-full bg-red-300'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eaque minima dolorum nulla! Et, voluptate mollitia culpa dicta repudiandae cupiditate officia voluptatum impedit ea accusantium iste nostrum quas porro reprehenderit quaerat a at enim vel maxime praesentium deleniti aliquam iusto? Perferendis ipsa recusandae iusto? Veritatis delectus aliquid quaerat sint recusandae.</p>
            </div>

        </AuthenticatedLayout>
    );
}
