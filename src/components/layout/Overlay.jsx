import React from "react";

const Overlay = ({ isOpen }) => {

    return (
        <>
            <div className="fixed inset-0 opacity-10 bg-black z-40"
                onClick={() => isOpen(false)}></div>
        </>
    );
}

export default Overlay