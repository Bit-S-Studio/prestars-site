"use client";

import StartButton from "../components/Navbar/StartButton";

// This is a client component 👈🏽


const ForAthletesPage = () => {

    return (
        <div>
            <div className="flex space-y-12 m-12 px-12">
                <h1 className="text-5xl break-words text-left font-medium">Já pensou em ser um atleta profissional?</h1>
            </div>
            <div className="container flex flex-col md:flex-row m-12 px-12 md:h-80 space-y-12 md:space-y-0 md:space-x-12 mx-auto max-w-screen-lg" >
                <div className="w-full md:w-1/2">
                    <img alt="test" src="/image_athletes_1.png" object-fit="fill" />
                </div>
                <div className="flex flex-col md:w-1/2 justify-between items-start w-full">
                    <h1 className="text-5xl break-words space-y-12 font-medium">
                        Mostre a <span className="text-primary">estrela</span> que brilha em você.
                    </h1>
                    <h1 className="text-2xl space-y-12">Cadastre-se em nossa plataforma, mostre suas atuações e o quanto você pode brilhar em uma equipe de grande porte.</h1>
                    {/* <StartButton /> */}
                </div>
            </div >

        </div>
    );
};

export default ForAthletesPage;