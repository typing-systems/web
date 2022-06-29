import React from "react";
import Ticker from "./Ticker"

const Landing = () => {
    return (
        <div className="flex w-screen h-screen justify-center items-center font-montserrat bg-mesh">
            <a href="http://typing.systems/" target="_blank">
                <Ticker />
            </a>
        </div>
    )
}

export default Landing;