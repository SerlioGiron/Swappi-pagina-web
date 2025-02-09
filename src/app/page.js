"use client";
import Image from "next/image";
import {Button, Typography} from "./MTailwind";
import {StickyNavbar} from "../components/StickyNavbar";

export default function Home() {
    return (
        <div>
            <StickyNavbar />
            <div style={{height: "50vh", position: "relative"}}>
                <Image
                    src="/assets/messi-1805.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    style={{opacity: 0.2}}
                />
                <Typography
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    hola
                </Typography>
            </div>
        </div>
    );
}
