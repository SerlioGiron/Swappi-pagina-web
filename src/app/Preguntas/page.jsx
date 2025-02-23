'use client';
import { Preguntas } from "@/components/Preguntas";
import { StickyNavbar } from "@/components/StickyNavbar";
import { Typography } from "@material-tailwind/react";


export default function page(){
    return(
        <div>
            <StickyNavbar/>
            <Preguntas/>
        </div>
    )
}