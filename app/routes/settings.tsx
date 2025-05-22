import { 
    Link, Outlet, 
    useLoaderData,
} from "react-router"; // Changed import
import { type LoaderFunction } from 'react-router';

export interface SettingsLoaderData {
    message: string;
    date: string; 
}

export const loader: LoaderFunction = async () => { // Changed to async and added type
    return { 
        message: 'Hello, I am the Loader Object',
        date: new Date().toISOString(), // Serialize date for JSON
    };
};


export default function Settings() {
    const data = useLoaderData() as SettingsLoaderData;
    if (!data) {
        // You can return a loading indicator, a message, or null
        return <p>Loading data or data not available...</p>;
    }
    return (
        <div>
            <h1>Settings</h1>
            <p>This is Settings Page</p>
            <p>Mess from Loader: {data.message}</p>
            <p>Today is: {new Date(data.date).toString()}</p> {/* Rehydrate Date object */}
            <nav className="my-2">
                <Link to='app1' className="mr-2 p-1 border rounded hover:bg-gray-100">App</Link>
                <Link to='profile' className="p-1 border rounded hover:bg-gray-100">Profile</Link>
            </nav>
            <div className="flex-1 overflow-y-auto p-4">
            <Outlet />
            </div>
        </div>
        
    )
}