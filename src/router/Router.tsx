import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../views/Dashboard';
import { Caesar } from '../views/Caesar';
import { Polibiusz } from '../views/Polibiusz';
import { Vigenere } from '../views/Vigenere';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: 'szyfr-cezara',
        element: <Caesar />,
      },
      {
        path: 'szyfr-polibiusza',
        element: <Polibiusz />,
      },
      {
        path: 'szyfr-vigenere',
        element: <Vigenere />,
      },
    ],
  },
]);
