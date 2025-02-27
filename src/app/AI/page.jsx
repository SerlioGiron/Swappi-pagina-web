"use client";
import {SimpleFooter} from "@/components/Footer";
import {StickyNavbar} from "@/components/StickyNavbar";
import {Card, Typography} from "@material-tailwind/react";

export default function AI() {
    return (
        <div>
            <StickyNavbar />
            <div className=" gradient-background py-20">
                <Card className="w-[75vw] mx-auto p-4 p-10">
                    <img
                        className="h-[70vh] w-full rounded-lg object-cover object-center pb-6"
                        src="https://images.unsplash.com/photo-1680783954745-3249be59e527?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="nature image"
                    />
                    <Typography
                        as="h1"
                        color="blue-gray"
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-gray-800"
                    >
                        Inteligencia Artificial (IA) en Swappi 
                    </Typography>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-blue-gray-600">
                        Swappi integraría inteligencia artificial para mejorar la experiencia del usuario: 
                    </p>
                    <h2 className="mt-8 text-xl md:text-2xl lg:text-3xl font-semibold text-blue-gray-800">
                        Evaluación de Productos con IA: 
                    </h2>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-blue-gray-600">
                    Valoración automática: Un modelo de IA analizaría imágenes y descripciones para sugerir 
                    un valor justo basado en:  <br/> 
                    - Estado del producto   <br/>
                    - Precio de mercado  
                    </p>
                    <h2 className="mt-8 text-xl md:text-2xl lg:text-3xl font-semibold text-blue-gray-800">
                        Recomendaciones Personalizadas 
                    </h2>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-blue-gray-600">
                        Algoritmos de machine learning analizarían el historial de intercambios de cada usuario 
                        para sugerir productos de interés.
                    </p>
                </Card>
            </div>
            <SimpleFooter />
        </div>
    );
}
