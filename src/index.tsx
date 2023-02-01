import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './ErrorPage';
import Root from './routes/Root';
import Home from './routes/Home';
import Solo from './routes/Solo';
import Doubles from './routes/Doubles'; 
import Player from './routes/Player';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/player/:id',
        element: <Player />,
        children: [
          {
            path: '/player/:id/solo',
            element: <Solo />,
          },
          {
            path: '/player/:id/doubles',
            element: <Doubles />
          },
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
