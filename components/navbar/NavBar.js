import { useState } from "react";
import { motion } from "framer-motion"
import React from 'react'
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi"
import Link from 'next/link'
import Logo from "./Logo";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen((state) => (!state))
    }
    return (
        <div
            className='fixed z-10 w-full backdrop-blur-sm'
        >
            <div
                className="flex flex-wrap items-center justify-between max-w-full border-b-2 border-green-400 bg-slate-800 h-14"
            >
                <Logo />
                <div className="hidden text-lg font-semibold sm:w-3/4 sm:flex sm:flex-row sm:justify-around sm:flex-1 text-sky-200">
                    <NavLinks>
                        <Link href={'/'}>
                            Home
                        </Link>
                    </NavLinks>
                    <NavLinks>
                        <Link href={'/proyects'}>
                            Proyects
                        </Link>
                    </NavLinks>
                    <NavLinks>
                        <Link href={'/contact'}>
                            Contact
                        </Link>
                    </NavLinks>
                </div>

                <motion.div className="sm:hidden">
                    <motion.button
                        onClick={handleOpen}
                        className='pr-2 text-2xl text-green-400'
                    >
                        <GiHamburgerMenu />
                    </motion.button>
                </motion.div>
            </div>
            {isOpen &&
                <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .2 }}
                    className='pb-4 pl-2 text-2xl text-sky-200 bg-slate-800'
                >
                    <NavLinks>
                        <Link href={'/'}>
                            <a onClick={handleOpen}>
                            Home
                            </a>
                        </Link>
                    </NavLinks>
                    <NavLinks>
                        <Link href={'/proyects'}>
                            <a onClick={handleOpen}>
                            Proyects
                            </a>
                        </Link>
                    </NavLinks>
                    <NavLinks>
                        <Link href={'/contact'}>
                            <a onClick={handleOpen}>
                            Contact
                            </a>
                        </Link>
                    </NavLinks>
                </motion.ul>
            }
        </div>
    )
}

export default NavBar