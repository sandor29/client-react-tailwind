import React from "react";

import Drawer from "./Drawer";
import Menu from "./Menu";

const Header = () => {

    return (
        <>
            <header className="fixed border-b top-0 w-screen bg-white">

                <div className="flex p-1">

                    <div className="flex-none">
                        <Drawer />
                    </div>

                    <div className="grow p-2">
                        <p className="text-center text-lg font-medium uppercase">
                            todo x uno
                        </p>
                    </div>

                    <div className="flex-none">
                        <Menu />
                    </div>

                </div>

            </header>
        </>
    );
}

export default Header