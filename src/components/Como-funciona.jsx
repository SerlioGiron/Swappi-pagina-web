import {
    Carousel,
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    IconButton
} from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export function CarouselDefault() {
    return (
        <Carousel
            className="pb-20 bg-white"
            prevArrow={({handlePrev}) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-900 text-white"
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </IconButton>
            )}
            nextArrow={({handleNext}) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-900 text-white"
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </IconButton>
            )}
            navigation={({setActiveIndex, activeIndex, length}) => (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-2 w-2 cursor-pointer rounded-full ${
                                activeIndex === i ? "bg-white" : "bg-gray-500"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {[{
                title: "Paso 1: Regístrate con tu correo o cuenta universitaria",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            },
            {
                title: "Paso 2: Sube los productos que quieres intercambiar",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            },
            {
                title: "Paso 3: Encuentra productos y haz ofertas de intercambio",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            },
            {
                title: "Paso 4: Confirma y completa el intercambio (con opciones de entrega segura) ",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            },
        ].map((value, index) => (
                <Card key={index} className="w-[80%] h-[70vh] mx-auto flex flex-col  md:flex-row items-center shadow-none">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="w-full h-3/5"
                    >
                        <img
                            src={value.image}
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {value.title}
                        </Typography>
                    </CardBody>
                </Card>
            ))}
        </Carousel>
    );
}
