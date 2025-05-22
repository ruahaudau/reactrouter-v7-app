import {
  Form,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  NavLink,
  Meta,
  Links,
  Outlet
} from "react-router";
import type { Route } from "./+types/root";
import { DiscoverIcon, HomeIcon, RecipeBookIcon, SettingsIcon } from "./components/icons/icon.component";
import classNames from "classnames";


import "./app.css";

export default function App() {
  return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <Meta />
          <Links />
        </head>
        <body className='md:flex md:h-screen'>
          <nav className="bg-primary text-white">
            <ul className="flex md:flex-col">
              <AppNavLink to="/"><HomeIcon /></AppNavLink>
              <AppNavLink to="/discover"><DiscoverIcon /></AppNavLink>
              <AppNavLink to="/app"><RecipeBookIcon /></AppNavLink>
              <AppNavLink to="/settings"><SettingsIcon /></AppNavLink>
            </ul>
          </nav>
            <div className='p-4'>
              <Outlet />
            </div>
            <ScrollRestoration />
            <Scripts />
        </body>
        
      </html>
    );
}


type AppNavLinkProps = {
  children: React.ReactNode;
  to: string
};

function AppNavLink ({children, to}: AppNavLinkProps) {
  return (
    <li className='w-16'>
      <NavLink to={to} >
        {({isActive}) => {
          return (
            <div className = {classNames('py-4 flex justify-center hover:bg-primary-light',
              {
                "bg-primary-light": isActive
              }
          )}
          >
              {children}
            </div>
          ); 
        }}
      </NavLink>
    </li>
  )
}

// The top most error boundary for the app, rendered when your app throws an error
// For more information, see https://reactrouter.com/start/framework/route-module#errorboundary
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main id="error-page">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
