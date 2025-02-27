"use client";
import Image from "next/image";
import {Button, Typography} from "./MTailwind";
import {StickyNavbar} from "../components/StickyNavbar";
import Marquee from "react-fast-marquee";
import {CarouselDefault} from "../components/Como-funciona";
import {SimpleFooter} from "../components/Footer";
import {Beneficios} from "../components/Beneficios";
import {BackgroundBlogCard} from "../components/BackgroundBlogCard";
import {ODS} from "../components/ODS";

export default function Home() {
    return (
        <div className="">
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
                    backgroundColor: "white", // Blue with low opacity
                }}
            >
                {/* <Image
                    src="/assets/bg2.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    style={{zIndex: -1}}
                /> */}
                <Typography
                    variant="h1"
                    className="text-orange-900"
                    style={{zIndex: 1, paddingTop: "30px", textAlign: "center"}}
                >
                    SWAPPI
                </Typography>
                <Typography
                    variant="h5"
                    className="text-orange-900"
                    style={{zIndex: 1, textAlign: "center"}}
                >
                    Intercambia lo que no usas y consigue lo que necesitas.
                </Typography>
                <Button
                    onClick={() =>
                        (window.location.href =
                            "https://www.figma.com/proto/VgMJVz0a5cCWnNjFUL5AZq/Untitled-(Copy)?node-id=1-2&t=NIPoTQMrLODQN90w-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2060%3A416")
                    }
                    className="bg-transparent text-blue-900 shadow-xl hover:shadow-3xl"
                    style={{zIndex: 1}}
                >
                    Conoce mas
                </Button>

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
                                className="text-gray-800"
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
            <BackgroundBlogCard />
            <ODS />
            <CarouselDefault />
            <Beneficios />
            <SimpleFooter />
        </div>
    );
}
