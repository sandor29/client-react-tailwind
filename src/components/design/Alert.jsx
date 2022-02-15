/** Alert - Sandor 2022 */

import * as React from "react";

import {
    CheckCircleIcon, InformationCircleIcon,
    ExclamationCircleIcon, XCircleIcon, ChatAltIcon
} from '@heroicons/react/outline'

const Alert = () => {

    return (
        <>
            <main className="s-page s-grid-4">

                {/** block */}
                <div className="s-center p-5 bg-slate-50">

                    <div className="flex items-center space-x-3 shadow rounded-xl p-3 bg-white">
                        <CheckCircleIcon className="h-7 w-7 text-green-500" />
                        <div>
                            <span className="font-medium text-green-500">Success</span>
                            <p className="text-sm text-slate-500">You finished the tasks.</p>
                        </div>
                    </div>

                </div>

                {/** block */}
                <div className="s-center p-5 bg-slate-50">

                    <div className="flex items-center space-x-3 shadow rounded-xl p-3 bg-white">
                        <InformationCircleIcon className="h-7 w-7 text-blue-500" />
                        <div>
                            <span className="font-medium text-blue-500">Info</span>
                            <p className="text-sm text-slate-500">Update your avatar.</p>
                        </div>
                    </div>

                </div>

                {/** block */}
                <div className="s-center p-5 bg-slate-50">

                    <div className="flex items-center space-x-3 shadow rounded-xl p-3 bg-white">
                        <ExclamationCircleIcon className="h-7 w-7 text-yellow-500" />
                        <div>
                            <span className="font-medium text-yellow-500">Warning</span>
                            <p className="text-sm text-slate-500">This version is not supported.</p>
                        </div>
                    </div>

                </div>

                {/** block */}
                <div className="s-center p-5 bg-slate-50">

                    <div className="flex items-center space-x-3 shadow rounded-xl p-3 bg-white">
                        <XCircleIcon className="h-7 w-7 text-red-500" />
                        <div>
                            <span className="font-medium text-red-500">Error</span>
                            <p className="text-sm text-slate-500">Validation Error.</p>
                        </div>
                    </div>

                </div>

                {/** block */}
                <div className="s-center p-5 bg-slate-50">

                    <div className="flex items-center space-x-3 shadow rounded-xl p-3 bg-white">
                        <ChatAltIcon className="h-7 w-7 text-pink-500" />
                        <div>
                            <span className="font-medium text-pink-500">Messenger</span>
                            <p className="text-sm text-slate-500">Your account was registered!</p>
                        </div>
                    </div>

                </div>

            </main>
        </>
    );
}

export default Alert