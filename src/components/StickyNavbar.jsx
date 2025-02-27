'use client';
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "../app/MTailwind";
 
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-white hover:text-black"
      >
        <a href="/Preguntas" className="flex items-center">
          Preguntas Frecuentes
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-white hover:text-black"
      >
        <a href="/Blockchain" className="flex items-center">
          Blockchain
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-white hover:text-black"
      >
        <a href="/AI" className="flex items-center">
          AI
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-white hover:text-black"
      >
        <a href="/Team" className="flex items-center">
          Team
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-white hover:text-black"
      >
        <a href="https://www.instagram.com/swappiswap?igsh=MWI5bmg5MmR4NW8xeQ==" className="flex items-center">
          Instagram
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-white hover:text-black"
      >
        <a href="https://www.figma.com/proto/VgMJVz0a5cCWnNjFUL5AZq/Untitled-(Copy)?node-id=1-2&t=NIPoTQMrLODQN90w-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2060%3A416" className="flex items-center">
          Figma
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="max-h-[768px] ">
      <Navbar className="bg-[#1ab1bc] sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-bold text-2xl text-white"
          >
            SWAPPI
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
}