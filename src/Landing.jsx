import React from "react";

const Landing = () => {
    return (
        <div className="flex w-screen h-screen justify-center items-center font-montserrat bg-mesh">
            <div className="flex flex-col justify-around h-[13rem] w-[12rem] shadow-2xl rounded-3xl bg-white border-2 border-white space-y-4 p-6 text-sm">
                <div className="">
                    <h2 className="text-lg font-bold text-black">TYPE</h2>
                    <p className="text-md text-gray-400">Typing Systems</p>
                </div>
                <div className="">
                    <h1 className="text-[32px] leading-10 mb-1 font-semibold text-gray-800">$139.37</h1>
                    <p className="text-green-500 font-medium">+1.40%</p>
                </div>
            </div>
        </div>
    )
}

export default Landing;