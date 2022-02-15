/** Dialog - Sandor 2022 */

import * as React from "react";

import { LinkIcon, XIcon } from '@heroicons/react/outline'

import Overlay from "../layout/Overlay";

const Dialog = () => {

    let [opencenter, setOpencenter] = React.useState(false)

    let [openleft, setOpenleft] = React.useState(false)
    let [openright, setOpenright] = React.useState(false)

    let [opentop, setOpentop] = React.useState(false)
    let [openbottom, setOpenbottom] = React.useState(false)

    return (
        <>
            <main className="s-page s-grid-4">

                {/** Dialog Center */}
                <div className="s-center p-5 bg-slate-50">

                    <button type="button" className="rounded p-2 hover:bg-gray-100"
                        onClick={() => setOpencenter(true)}>
                        <LinkIcon className="h-7 w-7" />
                    </button>

                    <div className={`s-transform top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-80 w-11/12 sm:w-96 rounded-xl overflow-y-auto z-50 bg-white 
                             ${opencenter ? 'scale-100' : 'scale-0'}`}>

                        <button type="button" className="absolute rounded-full right-0 m-2 p-2 hover:bg-gray-100"
                            onClick={() => setOpencenter(false)}>
                            <XIcon className="h-6 w-6" />
                        </button>

                    </div>
                    {opencenter && <Overlay isOpen={setOpencenter} />}
                </div>

                {/** Dialog Left */}
                <div className="s-center p-5 bg-slate-50">

                    <button type="button" className="rounded p-2 hover:bg-gray-100"
                        onClick={() => setOpenleft(true)}>
                        <LinkIcon className="h-7 w-7" />
                    </button>

                    <div className={`s-transform top-0 left-0 h-screen w-80 overflow-y-auto z-50 bg-white 
                             ${openleft ? 'translate-x-0' : '-translate-x-full'}`}>

                        <button type="button" className="absolute rounded-full right-0 m-2 p-2 hover:bg-gray-100"
                            onClick={() => setOpenleft(false)}>
                            <XIcon className="h-6 w-6" />
                        </button>

                    </div>
                    {openleft && <Overlay isOpen={setOpenleft} />}
                </div>

                {/** Dialog Right */}
                <div className="s-center p-5 bg-slate-50">

                    <button type="button" className="rounded p-2 hover:bg-gray-100"
                        onClick={() => setOpenright(true)}>
                        <LinkIcon className="h-7 w-7" />
                    </button>

                    <div className={`s-transform top-0 right-0 h-screen w-80 overflow-y-auto z-50 bg-white 
                             ${openright ? '-translate-x-0' : 'translate-x-full'}`}>

                        <button type="button" className="absolute rounded-full left-0 m-2 p-2 hover:bg-gray-100"
                            onClick={() => setOpenright(false)}>
                            <XIcon className="h-6 w-6" />
                        </button>

                    </div>
                    {openright && <Overlay isOpen={setOpenright} />}
                </div>

                {/** Dialog Top */}
                <div className="s-center p-5 bg-slate-50">

                    <button type="button" className="rounded p-2 hover:bg-gray-100"
                        onClick={() => setOpentop(true)}>
                        <LinkIcon className="h-7 w-7" />
                    </button>

                    <div className={`s-transform top-0 left-1/2 -translate-x-1/2 h-80 w-11/12 sm:w-96 rounded-xl overflow-y-auto z-50 bg-white 
                             ${opentop ? 'translate-y-0' : '-translate-y-full'}`}>

                        <button type="button" className="absolute rounded-full right-0 m-2 p-2 hover:bg-gray-100"
                            onClick={() => setOpentop(false)}>
                            <XIcon className="h-6 w-6" />
                        </button>

                    </div>
                    {opentop && <Overlay isOpen={setOpentop} />}
                </div>

                {/** Dialog Bottom */}
                <div className="s-center p-5 bg-slate-50">

                    <button type="button" className="rounded p-2 hover:bg-gray-100"
                        onClick={() => setOpenbottom(true)}>
                        <LinkIcon className="h-7 w-7" />
                    </button>

                    <div className={`s-transform bottom-0 left-1/2 -translate-x-1/2 h-80 w-11/12 sm:w-96 rounded-xl overflow-y-auto z-50 bg-white 
                             ${openbottom ? '-translate-y-0' : 'translate-y-full'}`}>

                        <button type="button" className="absolute rounded-full right-0 m-2 p-2 hover:bg-gray-100"
                            onClick={() => setOpenbottom(false)}>
                            <XIcon className="h-6 w-6" />
                        </button>

                    </div>
                    {openbottom && <Overlay isOpen={setOpenbottom} />}
                </div>

            </main>
        </>
    );
}

export default Dialog