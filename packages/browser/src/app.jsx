import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Root } from './root';
import { Error } from './error';
import { Example } from './pages/example';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/example',
                element: <Example />
            }
        ]
    },
]);

function App() {
    return <RouterProvider router={router} />
}

export { App };