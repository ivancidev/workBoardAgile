import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/router-root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);
