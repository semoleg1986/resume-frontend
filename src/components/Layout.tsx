import { Outlet } from 'react-router-dom';
import Header from './styles/header';

function Layout() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
