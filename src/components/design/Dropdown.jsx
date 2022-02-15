/** Dropdown - Sandor 2022 */

import * as React from "react";

import { LinkIcon } from '@heroicons/react/outline'

import Overlay from "../layout/Overlay";

const Dropdown = () => {

    let [open1, setOpen1] = React.useState(false)
    let [open2, setOpen2] = React.useState(false)

    return (
        <>
            <main className="s-page s-grid-4">

                {/** block */}
                <div className="s-center p-5 bg-slate-50">

                    <div className="">
                        <button type="button" className="rounded p-2 hover:bg-gray-100"
                            onClick={() => setOpen1(true)}>
                            <LinkIcon className="h-7 w-7" />
                        </button>

                        <div className={`s-transform origin-top rounded z-50 bg-white 
                             ${open1 ? 'scale-y-100' : 'scale-y-0'}`}>

                            <div className="h-56 w-56">

                            </div>
                        </div>
                        {open1 && <Overlay isOpen={setOpen1} />}
                    </div>

                </div>

                {/** block */}
                <div className="s-center p-5 bg-slate-50">

                    <div className="">
                        <button type="button" className="rounded p-2 hover:bg-gray-100"
                            onClick={() => setOpen2(true)}>
                            <LinkIcon className="h-7 w-7" />
                        </button>

                        <div className={`s-transform origin-top -translate-x-44 m-1 rounded z-50 bg-white 
                             ${open2 ? 'scale-y-100' : 'scale-y-0'}`}>

                            <div className="h-56 w-56">

                            </div>
                        </div>
                        {open2 && <Overlay isOpen={setOpen2} />}
                    </div>

                </div>

            </main>
        </>
    );
}

export default Dropdown