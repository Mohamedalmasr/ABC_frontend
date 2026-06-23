import Navbar from './components/Navbar';
import Home from './components/page/Home';
import About from './components/page/About';
import Services from './components/page/Services';
import Login from './components/page/Login';
import Signup from './components/page/Signup';
import Content from './components/page/Content';
import Footer from './components/Footer';
import Bookkeeping from './components/page/Bookkeeping';
import BusinessRegistration from './components/page/BusinessRegistration';
import BusinessSupportServices from './components/page/BusinessSupportServices';
import ExpertisePlacement from './components/page/ExpertisePlacement';
import PricingPage from './components/page/PricingPage';
import AuthLayout from './AuthLayout'; 

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Content />,
      },
      {
        path: "/bookkeeping",
        element: <Bookkeeping />,
      },
      {
        path: "/businessregistration",
        element: <BusinessRegistration />,
      },
      {
        path: "/BusinessSupportServices",
        element: <BusinessSupportServices />,
      },
      {
        path: "/ExpertisePlacement",
        element: <ExpertisePlacement />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
    ],
  },


  
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
