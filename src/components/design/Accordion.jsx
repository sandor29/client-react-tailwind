/** Accordion - Sandor 2022 */

import * as React from "react";

import {
    PlusIcon, MinusIcon,
    ChevronDownIcon, ChevronUpIcon
} from '@heroicons/react/outline'

const Accordion = () => {

    let [page, setPage] = React.useState(-1)

    return (
        <>
            <main className="s-page s-grid-4">

                {/** block */}
                <div className="s-center p-5 bg-slate-50">

                    <div className="divide-y p-5 w-full bg-white">
                        <a href="#" className="flex items-center justify-between px-3 py-2"
                            onClick={() => page != 1 ? setPage(1) : setPage(-1)}>
                            <span className="font-medium">Success</span>
                            {page == 1
                                ? <MinusIcon className="h-5 w-5" />
                                : <PlusIcon className="h-5 w-5" />}
                        </a>
                        {page == 1 && <div className="p-10">
                            Sandor
                        </div>}

                        <a href="#" className="flex items-center justify-between px-3 py-2"
                            onClick={() => page != 2 ? setPage(2) : setPage(-1)}>
                            <span className="font-medium">Success</span>
                            {page == 2
                                ? <MinusIcon className="h-5 w-5" />
                                : <PlusIcon className="h-5 w-5" />}
                        </a>
                        {page == 2 && <div className="p-10">
                            Escobar
                        </div>}

                        <a href="#" className="flex items-center justify-between px-3 py-2"
                            onClick={() => page != 3 ? setPage(3) : setPage(-1)}>
                            <span className="font-medium">Success</span>
                            {page == 3
                                ? <MinusIcon className="h-5 w-5" />
                                : <PlusIcon className="h-5 w-5" />}
                        </a>
                        {page == 3 && <div className="p-10">
                            Ruiz
                        </div>}
                    </div>

                </div>

                {/** block */}
                <div className="s-center p-5 bg-slate-50">

                    <div className="divide-y p-5 w-full bg-white">
                        <div className="flex items-center justify-between px-3 py-2"
                            onClick={() => page != 1 ? setPage(1) : setPage(-1)}>
                            <span className="font-medium">Success</span>
                            {page == 1
                                ? <ChevronUpIcon className="h-5 w-5" />
                                : <ChevronDownIcon className="h-5 w-5" />}
                        </div>
                        {page == 1 && <div className="p-10">
                            Sandor
                        </div>}

                        <div className="flex items-center justify-between px-3 py-2"
                            onClick={() => page != 2 ? setPage(2) : setPage(-1)}>
                            <span className="font-medium">Success</span>
                            {page == 2
                                ? <ChevronUpIcon className="h-5 w-5" />
                                : <ChevronDownIcon className="h-5 w-5" />}
                        </div>
                        {page == 2 && <div className="p-10">
                            Escobar
                        </div>}

                        <div className="flex items-center justify-between px-3 py-2"
                            onClick={() => page != 3 ? setPage(3) : setPage(-1)}>
                            <span className="font-medium">Success</span>
                            {page == 3
                                ? <ChevronUpIcon className="h-5 w-5" />
                                : <ChevronDownIcon className="h-5 w-5" />}
                        </div>
                        {page == 3 && <div className="p-10">
                            Ruiz
                        </div>}
                    </div>

                </div>

            </main>
        </>
    );
}

export default Accordion