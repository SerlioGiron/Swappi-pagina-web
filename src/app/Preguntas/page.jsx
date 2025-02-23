'use client';
import { SimpleFooter } from "@/components/Footer";
import { Preguntas } from "@/components/Preguntas";
import { StickyNavbar } from "@/components/StickyNavbar";
import { Typography } from "@material-tailwind/react";


export default function page(){
    return(
        <div>
            <StickyNavbar/>
            <Preguntas/>
            <SimpleFooter/>
        </div>
    )
}