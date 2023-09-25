import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROOT_PAGE, NOT_FOUND_PAGE } from './router';
import Layout from './components/Layout';
import Home from './pages/home';
import NotFoundPage from './pages/nonpage';
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: ROOT_PAGE,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: NOT_FOUND_PAGE,
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
