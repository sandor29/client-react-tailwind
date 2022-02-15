import React from "react";
import { Link } from "react-router-dom";

import { LinkIcon } from '@heroicons/react/outline'

const Footer = () => {

    return (
        <>
            <footer className="fixed border-t bottom-0 w-screen bg-white">

                <nav className="flex justify-evenly p-1">

                    <Link to="/">
                        <div className="rounded p-2 hover:bg-gray-100">
                            <LinkIcon className="h-7 w-7" />
                        </div>
                    </Link>

                    <Link to="/">
                        <div className="rounded p-2 hover:bg-gray-100">
                            <LinkIcon className="h-7 w-7" />
                        </div>
                    </Link>

                    <Link to="/">
                        <div className="rounded p-2 hover:bg-gray-100">
                            <LinkIcon className="h-7 w-7" />
                        </div>
                    </Link>

                    <Link to="/">
                        <div className="rounded p-2 hover:bg-gray-100">
                            <LinkIcon className="h-7 w-7" />
                        </div>
                    </Link>

                </nav>

            </footer>
        </>
    );
}

export default Footer