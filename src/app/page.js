"use client";
import Image from "next/image";
import {Button, Typography} from "./MTailwind";
import {StickyNavbar} from "../components/StickyNavbar";
import Marquee from "react-fast-marquee";
import {CarouselDefault} from "../components/Como-funciona";
import {SimpleFooter} from "../components/Footer";
import { Beneficios } from "../components/Beneficios";

export default function Home() {
    return (
        <div>
          <StickyNavbar />
            <div
                style={{
                  height: "90vh",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "20px",
                }}
            >
                <Image
                    src="/assets/background.avif"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    style={{opacity: 0.2, zIndex: -1}}
                />
                <Typography
                    variant="h1"
                    color="black"
                    style={{zIndex: 1, paddingTop: "30px"}}
                >
                    Intercambia, reutiliza y ahorra
                </Typography>
                <Typography variant="h3" color="black" style={{zIndex: 1}}>
                    solo con swappi
                </Typography>
                <Button style={{zIndex: 1}}>Conoce mas</Button>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        width: "100%",
                    }}
                >
                    <Marquee speed={50} gradient={false} loop={0}>
                        {[
                            "Material Académico",
                            "Tecnología",
                            "Ropa y Accesorios",
                            "Artículos para el Hogar",
                            "Entretenimiento y Ocio",
                            "Deportes y Salud",
                            "Belleza y Cuidado Personal",
                            "Herramientas y Otros",
                        ].map((text, index) => (
                            <Typography
                                key={index}
                                variant="h5"
                                color="black"
                                style={{
                                    marginRight: "40px",
                                    paddingTop: "30px",
                                }}
                            >
                                {text}
                            </Typography>
                        ))}
                    </Marquee>
                </div>
            </div>
            <CarouselDefault />
            <Beneficios />
            <SimpleFooter />
        </div>
    );
}
