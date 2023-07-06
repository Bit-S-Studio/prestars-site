"use client";

import StartButton from "@/app/components/Navbar/StartButton";

// This is a client component 👈🏽


const ForTeamsPage = () => {

    return (
        <div>
            <div className="flex space-y-12 m-12 px-12">
                <h1 className="text-6xl break-words text-left font-medium">Soluções para sua equipe.</h1>
            </div>
            <div className="container flex flex-col md:flex-row m-12 px-12 md:h-80 space-y-12 md:space-y-0 md:space-x-12 mx-auto max-w-screen-lg" >
                <div className="flex flex-col md:w-1/2 justify-between items-start w-full">
                    <h1 className="text-5xl break-words space-y-12 font-medium">Conheça as futuras <span className="text-primary">estrelas</span> da sua equipe.</h1>
                    <h1 className="text-2xl space-y-12">Visualize de forma rápida e otimizada jovens atletas que podem trazer grandes resultados para sua equipe.</h1>
                    {/* <StartButton /> */}
                </div>
                <div className="w-full md:w-1/2">
                    <img alt="test" src="/image_teams_1.png" object-fit="fill" />
                </div>
            </div >
        </div>
    );
};

export default ForTeamsPage;