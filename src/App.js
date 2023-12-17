// import logo from './logo.svg';
// import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Patient from './pages/Patient';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/patients', element: <Patient /> },
    ],
  },
  // {
  //   path: '/patients',
  //   element: (
  //     <Layout>
  //       <Patient />
  //     </Layout>
  //   ),
  //   errorElement: <Error />,
  // },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
