"use client";
import {SimpleFooter} from "@/components/Footer";
import {StickyNavbar} from "@/components/StickyNavbar";
import {Card, Typography} from "@material-tailwind/react";

export default function Blockchain() {
    return (
        <div>
            <StickyNavbar />
            <div className=" gradient-background py-20">
                <Card className="w-[75vw] mx-auto p-4 p-10">
                    <img
                        className="h-1/2 w-full rounded-lg object-cover object-center pb-6"
                        src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="nature image"
                    />
                    <Typography
                        as="h1"
                        color="blue-gray"
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-gray-800"
                    >
                        Blockchain
                    </Typography>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-blue-gray-600">
                        Swappi aprovecharía la tecnología blockchain para
                        garantizar transparencia, seguridad y automatización en
                        los intercambios.
                    </p>
                    <h2 className="mt-8 text-xl md:text-2xl lg:text-3xl font-semibold text-blue-gray-800">
                        Implementación de Blockchain
                    </h2>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-blue-gray-600">
                        Registro de transacciones: Cada intercambio quedaría
                        registrado en una red blockchain, asegurando que no
                        pueda ser alterado. Seguimiento de productos: Uso de
                        tokens únicos para rastrear la historia de cada artículo
                        dentro de la plataforma.
                    </p>
                    <h2 className="mt-8 text-xl md:text-2xl lg:text-3xl font-semibold text-blue-gray-800">
                        Contratos Inteligentes (Smart Contracts)
                    </h2>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-blue-gray-600">
                        Los intercambios estarían respaldados por contratos
                        inteligentes, que se ejecutan automáticamente cuando se
                        cumplen ciertas condiciones.
                    </p>
                </Card>
            </div>
            <SimpleFooter />
        </div>
    );
}
