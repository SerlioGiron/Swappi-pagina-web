'use client';
import { SimpleFooter } from "@/components/Footer";
import { StickyNavbar } from "@/components/StickyNavbar";
import { Typography } from "@material-tailwind/react";


export default function Blockchain() {
    return(
        <div>
            <StickyNavbar />
            <div className="bg-blue-gray-50">
                <div className="container mx-auto p-4">
                    <Typography as="h1" color="blue-gray" className="text-4xl font-semibold text-blue-gray-800">
                        Blockchain
                    </Typography>
                    <p className="mt-4 text-lg text-blue-gray-600">
                        Swappi aprovecharía la tecnología blockchain para garantizar transparencia, seguridad y 
                        automatización en los intercambios. 
                    </p>
                    <h2 className="mt-8 text-2xl font-semibold text-blue-gray-800">
                        Implementación de Blockchain 
                    </h2>
                </div>
            </div>
            <SimpleFooter />
        </div>
    );
}