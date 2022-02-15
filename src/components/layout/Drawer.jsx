/** Drawer - Sandor 2022 */

import React from "react";
import { Link } from "react-router-dom";

import { LinkIcon, XIcon } from '@heroicons/react/outline'

import Design from "../design/Design";

import Overlay from "./Overlay";

const Drawer = () => {

    let [open, setOpen] = React.useState(false)

    return (
        <>
            <button type="button" className="rounded p-2 hover:bg-gray-100"
                onClick={() => setOpen(true)}>
                <LinkIcon className="h-7 w-7" />
            </button>

            <div className={`s-transform top-0 left-0 h-screen w-80 overflow-y-auto z-50 bg-white 
                     ${open ? 'translate-x-0' : '-translate-x-full'}`}>

                <button type="button" className="absolute rounded-full right-0 m-2 p-2 hover:bg-gray-100"
                    onClick={() => setOpen(false)}>
                    <XIcon className="h-6 w-6" />
                </button>

                <div className="flex flex-col items-center justify-center m-5">
                    <img className="rounded-full h-32 w-32 m-3" src="/images/security.jpeg" alt="React" />
                    <span className="font-medium">Sandor Escobar Ruiz</span>
                    <p className="text-sm text-slate-500">sandor.ser@gmail.com</p>
                </div>

                <Link to="/" onClick={() => setOpen(false)}>
                    <div className="flex items-center space-x-3 px-5 py-3 hover:bg-slate-100">
                        <LinkIcon className="h-7 w-7" />
                        <span className="font-medium">Home</span>
                    </div>
                </Link>

                <Design drawer={setOpen} />

                <Link to="/about" onClick={() => setOpen(false)}>
                    <div className="flex items-center space-x-3 px-5 py-3 hover:bg-slate-100">
                        <LinkIcon className="h-7 w-7" />
                        <span className="font-medium">About</span>
                    </div>
                </Link>

                <div className="flex justify-center border-t m-6 p-3">
                    <span className="text-sm">Vite Js + React Js + Tailwind Css</span>
                </div>

            </div>

            {open && <Overlay isOpen={setOpen} />}
        </>
    );
}

export default Drawer