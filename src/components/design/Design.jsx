/** Design - Sandor 2022 */

import * as React from "react";
import { Link } from "react-router-dom";

import {
    ChevronDownIcon, ChevronUpIcon,
    CodeIcon, LinkIcon
} from '@heroicons/react/outline'

const Design = ({ drawer }) => {

    let [open, setOpen] = React.useState(false)

    const menuProject = [
        ["Accordion", "accordion"],
        ["Alert", "alert"],
        ["Dialog", "dialog"],
        ["Dropdown", "dropdown"],
        ["Tab", "tab"],
    ];

    return (
        <>
            <div>
                <a href="#" className="flex items-center space-x-3 px-5 py-3 hover:bg-slate-100"
                    onClick={() => open ? setOpen(false) : setOpen(true)}>
                    <CodeIcon className="h-7 w-7" />
                    <span className="font-medium">Design</span>
                    {open
                        ? <ChevronUpIcon className="h-5 w-5 absolute right-5" />
                        : <ChevronDownIcon className="h-5 w-5 absolute right-5" />}
                </a>
                {open && <div className="pl-5">
                    {menuProject.map(([title, url]) => (
                        <Link to={url} onClick={() => { drawer(false), setOpen(false) }} key={title}>
                            <div className="flex items-center space-x-3 px-5 py-3 hover:bg-slate-100">
                                <LinkIcon className="h-7 w-7" />
                                <span className="font-medium">{title}</span>
                            </div>
                        </Link>
                    ))}
                </div>}
            </div>
        </>
    );
}

export default Design