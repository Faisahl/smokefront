'use client'

import React, { useState } from "react";
import Link from 'next/link'
import NavLinks from "./NavLinks";
import NavButtons from "../ui/NavButtons";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import malaflor from '../../public/images/logo-malaflor.png'
import Image from "next/image";

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="bg-custo-51">
        <div className="flex items-center font-medium justify-around text-white">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <Link href='/'>
              <Image 
                alt={'malaflor logo'}
                src={ malaflor }
                width={65}
              />
              {/* <img src={'/logo-malaflor.png'} alt="logo" className="md:cursor-pointer h-16 w-14" /> */}
            </Link>
            <div className="text-3xl md:hidden block" onClick={() => setOpen(!open)}>
              {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </div>
          </div>
          <ul className="md:flex hidden items-center gap-8">
            <li>
                <span className="lg:hover:text-custo-50 text-xl">
                  <Link 
                    href='/' 
                    className="py-7 px-3 inline-block"
                    onClick={()=>setOpen(false)}
                  >
                      Home
                  </Link>
                </span>
            </li>
            <NavLinks />
          </ul>
          <div className="md:block hidden">
            <NavButtons />
          </div>
          {/* Mobile nav */}
          <ul
            className={`
          md:hidden bg-custo-51 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
          duration-500 ${open ? "left-0" : "left-[-100%]"} 
          `}
          >
            <li>
              <Link href='/' className="py-5 px-3 inline-block font-medium text-xl">
                Home
              </Link>
            </li>
            <NavLinks isOpen={open} setMenu={setOpen} />
            <div className="py-5">
              <NavButtons />
            </div>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar