"use client";
import {SimpleFooter} from "@/components/Footer";
import {StickyNavbar} from "@/components/StickyNavbar";
import {Card, Typography} from "@material-tailwind/react";

export default function Team() {
    return (
        <div>
            <StickyNavbar />
            <div className="bg-[#c7b3ac] py-20">
                <Card className="w-[75vw] mx-auto p-4 p-10 justify-center items-center">
                    <img
                        className=" h-[70vh] w-full rounded-lg object-contain pb-6"
                        src="/assets/Team.jpg"
                        alt="nature image"
                    />
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-blue-gray-600">
                    María Baide - 
                    Isis Gaitán -
                    Isabella Rodríguez -
                    Anthony Venegas - Serlio Giron
                    </p>
                    
                </Card>
            </div>
            <SimpleFooter />
        </div>
    );
}
