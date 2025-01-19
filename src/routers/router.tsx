import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/router-root';
import { PrivateRouter } from './private-router';
import Board from '../features/boards/board';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PrivateRouter />,
    children: [
      {
        path: '/',
        element: <Board />,
      },
    ],
  },
]);
