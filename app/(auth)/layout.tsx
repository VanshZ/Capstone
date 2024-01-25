import React from "react";



export default function AuthLayout({

    children

}: {children: React.ReactNode}) {

    const imageUrl = "https://static.wixstatic.com/media/7585d77a2b074b27b1b8d88f872dc886.jpg/v1/fill/w_640,h_1296,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7585d77a2b074b27b1b8d88f872dc886.jpg";



    return (

        <div className="flex flex-col md:flex-row h-full min-h-screen">

            <div className="md:flex-1 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />

            <div className="flex-1 flex p-5 justify-center items-center">

                <div className="w-full md:w-auto md:ml-20 mt-10 md:mt-20">

                    <h1 className="text-4xl font-bold mb-4 ml-2 md:ml-4">ROIPro</h1>

                    <div className="max-w-xs">

                        {children}

                    </div>

                </div>

            </div>

        </div>

    )

}