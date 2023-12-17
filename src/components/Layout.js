import React from 'react';
import Logo from './Logo';
import HomeIcon from './icons/HomeIcon';
import HeartHandIcon from './icons/HeartHandIcon';
import { Button } from './ui/Button';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  return (
    <>
      <div className="flex">
        <aside
          id="default-sidebar"
          className="sticky top-0 left-0 z-40 w-64 h-screen"
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-auto bg-white flex flex-col">
            <div className="ml-[41px] mt-16">
              <Logo />
            </div>
            <div className="mt-[124px] flex flex-col pl-6 pr-[29px] gap-[19px]">
              <Button
                className="justify-start"
                variant={location.pathname === '/' ? 'default' : 'ghost'}
                asChild
              >
                <Link to="/">
                  <HomeIcon className="mr-4" />
                  Home
                </Link>
              </Button>
              <Button
                className="justify-start"
                variant={
                  location.pathname === '/patients' ? 'default' : 'ghost'
                }
                asChild
              >
                <Link to="/patients">
                  <HeartHandIcon className="mr-4" />
                  Patients
                </Link>
              </Button>
            </div>
          </div>
        </aside>

        <div className="p-4 flex-grow bg-grey-25">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
