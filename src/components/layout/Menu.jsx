/** Menu - Sandor 2022 */

import React from "react";
import { Link } from "react-router-dom";

import { DotsVerticalIcon, LinkIcon } from '@heroicons/react/outline'

import Overlay from "./Overlay";

const Menu = () => {

    let [open, setOpen] = React.useState(false)

    return (
        <>
            <button type="button" className="rounded p-2 hover:bg-gray-100"
                onClick={() => setOpen(true)}>
                <DotsVerticalIcon className="h-7 w-7" />
            </button>

            <div className={`s-transform origin-top top-0 right-0 m-2 rounded w-56 z-50 bg-white
                    ${open ? 'scale-y-100' : 'scale-y-0'}`}>

                <div className="space-y-1 my-1">

                    <Link to="/" onClick={() => setOpen(false)}>
                        <div className="flex items-center space-x-3 px-5 py-3 hover:bg-slate-100">
                            <LinkIcon className="h-6 w-6" />
                            <span className="font-medium">Home</span>
                        </div>
                    </Link>
                    <Link to="/" onClick={() => setOpen(false)}>
                        <div className="flex items-center space-x-3 px-5 py-3 hover:bg-slate-100">
                            <LinkIcon className="h-6 w-6" />
                            <span className="font-medium">Home</span>
                        </div>
                    </Link>
                    <Link to="/" onClick={() => setOpen(false)}>
                        <div className="flex items-center space-x-3 px-5 py-3 hover:bg-slate-100">
                            <LinkIcon className="h-6 w-6" />
                            <span className="font-medium">Home</span>
                        </div>
                    </Link>
                    <Link to="/" onClick={() => setOpen(false)}>
                        <div className="flex items-center space-x-3 px-5 py-3 hover:bg-slate-100">
                            <LinkIcon className="h-6 w-6" />
                            <span className="font-medium">Home</span>
                        </div>
                    </Link>

                </div>
            </div>

            {open && <Overlay isOpen={setOpen} />}
        </>
    );
}

export default Menu