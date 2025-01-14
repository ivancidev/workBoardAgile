import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/router-root';
import { PrivateRouter } from './private-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PrivateRouter />,
  },
]);
