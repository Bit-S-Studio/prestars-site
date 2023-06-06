import React from "react";

const StartButton = () => {
    return (
        <button className="bg-primary hover:bg-grey-700 h-12 w-40 text-white py-2 px-4 rounded-lg shadow">
            <div className="flex items-center justify-around">
                <img src="/play.svg" alt="Logo" className="h-6"></img>
                <p>Ver Demo</p>
            </div>
        </button>
    )
}

export default StartButton;