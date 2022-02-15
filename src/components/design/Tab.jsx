/** Tab - Sandor 2022 */

import * as React from "react";

import { LinkIcon } from '@heroicons/react/outline'

const Tab = () => {

    let [page, setPage] = React.useState(1)

    return (
        <>
            <main className="s-page s-grid-4">

                {/** block */}
                <div className="s-center p-5 bg-slate-50">

                    <div className="w-full">
                        <div className="flex overflow-x-auto bg-white">
                            <a href="#" className={`s-center p-2 border-b-2 w-full ${page == 1 ? 'border-red-400' : 'border-slate-100'}`}
                                onClick={() => setPage(1)}>
                                <span className="font-medium">Primero</span>
                            </a>
                            <a href="#" className={`s-center p-2 border-b-2 w-full ${page == 2 ? 'border-red-400' : 'border-slate-100'}`}
                                onClick={() => setPage(2)}>
                                <span className="font-medium">Segundo</span>
                            </a>
                            <a href="#" className={`s-center p-2 border-b-2 w-full ${page == 3 ? 'border-red-400' : 'border-slate-100'}`}
                                onClick={() => setPage(3)}>
                                <span className="font-medium">Tercero</span>
                            </a>
                        </div>
                        <div className="bg-white w-full">
                            {page == 1 && <div className="p-5">
                                Sandor
                            </div>}
                            {page == 2 && <div className="p-5">
                                Escobar
                            </div>}
                            {page == 3 && <div className="p-5">
                                Ruiz
                            </div>}
                        </div>
                    </div>
                </div>

                {/** block */}
                <div className="s-center p-5 bg-slate-50">

                    <div className="w-full">
                        <div className="flex overflow-x-auto bg-white">
                            <a href="#" className={`s-center space-x-2 p-2 border-b-2 w-full ${page == 1 ? 'border-red-400' : 'border-slate-100'}`}
                                onClick={() => setPage(1)}>
                                <LinkIcon className="h-5 w-5" />
                                <span className="font-medium">Primero</span>
                            </a>
                            <a href="#" className={`s-center space-x-2 p-2 border-b-2 w-full ${page == 2 ? 'border-red-400' : 'border-slate-100'}`}
                                onClick={() => setPage(2)}>
                                <LinkIcon className="h-5 w-5" />
                                <span className="font-medium">Segundo</span>
                            </a>
                            <a href="#" className={`s-center space-x-2 p-2 border-b-2 w-full ${page == 3 ? 'border-red-400' : 'border-slate-100'}`}
                                onClick={() => setPage(3)}>
                                <LinkIcon className="h-5 w-5" />
                                <span className="font-medium">Tercero</span>
                            </a>
                        </div>
                        <div className="bg-white w-full">
                            {page == 1 && <div className="p-5">
                                Sandor
                            </div>}
                            {page == 2 && <div className="p-5">
                                Escobar
                            </div>}
                            {page == 3 && <div className="p-5">
                                Ruiz
                            </div>}
                        </div>
                    </div>
                </div>

                {/** block */}
                <div className="s-center p-5 bg-slate-50">

                    <div className="w-full">
                        <div className="bg-white w-full">
                            {page == 1 && <div className="p-5">
                                Sandor
                            </div>}
                            {page == 2 && <div className="p-5">
                                Escobar
                            </div>}
                            {page == 3 && <div className="p-5">
                                Ruiz
                            </div>}
                        </div>

                        <div className="flex overflow-x-auto bg-white">
                            <a href="#" className={`s-center p-2 border-t-2 w-full ${page == 1 ? 'border-red-400' : 'border-slate-100'}`}
                                onClick={() => setPage(1)}>
                                <span className="font-medium">Primero</span>
                            </a>
                            <a href="#" className={`s-center p-2 border-t-2 w-full ${page == 2 ? 'border-red-400' : 'border-slate-100'}`}
                                onClick={() => setPage(2)}>
                                <span className="font-medium">Segundo</span>
                            </a>
                            <a href="#" className={`s-center p-2 border-t-2 w-full ${page == 3 ? 'border-red-400' : 'border-slate-100'}`}
                                onClick={() => setPage(3)}>
                                <span className="font-medium">Tercero</span>
                            </a>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
}

export default Tab