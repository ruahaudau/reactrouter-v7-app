import { Outlet, NavLink } from "react-router";
import classNames from 'classnames';


export default function App() {
    return (
        <div className='flex flex-col h-full'>
            <h1 className='text-2xl font-bold my-4'>App</h1>
            <nav className='mt-2 pb-2 border-b-2'>
                <NavLink to='pantry' className={({isActive}) => classNames(
                    'hover:text-gray-500 pb-2.5 px-2 md:px-4',
                    {'border-b-2 border-b-primary':isActive}
                )} >Pantry</NavLink>
            </nav>
            <div className="flex-1 overflow-y-auto p-4">
            <Outlet />
            </div>
        </div>
        
    )
}