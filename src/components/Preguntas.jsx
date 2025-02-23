"use client";
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "../app/MTailwind";

export function Preguntas() {
    const [openAcc1, setOpenAcc1] = React.useState(true);
    const [openAcc2, setOpenAcc2] = React.useState(true);
    const [openAcc3, setOpenAcc3] = React.useState(true);
    const [openAcc4, setOpenAcc4] = React.useState(true);

    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
    const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
    const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);
    const handleOpenAcc4 = () => setOpenAcc4((cur) => !cur);

    return (
        <Card className="rounded-none h-full w-full flex-col md:flex-row"  >
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 md:w-2/5 shrink-0 rounded-none">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody  >
                <div className=" p-4">
                    <Typography
                        variant="h6"
                        color="gray"
                        className="mb-4 uppercase"                      >
                        Preguntas Frecuentes
                    </Typography>
                    <Accordion open={openAcc1}  >
                        <AccordionHeader onClick={handleOpenAcc1}  >
                            ¿Swappi es gratuito?
                        </AccordionHeader>
                        <AccordionBody>
                            Sí, Swappi es completamente gratuito para registrarse y realizar intercambios. Sin embargo, 
                            ofrecemos opciones premium para quienes deseen destacar sus productos o acceder. 
                            También hay  servicios adicionales, como envíos y seguros, que pueden tener un costo 
                            adicional. 
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={openAcc2}  >
                        <AccordionHeader onClick={handleOpenAcc2}  >
                            ¿Cómo se garantizan intercambios justos? 
                        </AccordionHeader>
                        <AccordionBody>
                            Swappi utiliza un algoritmo de inteligencia artificial que evalúa los productos según su 
                            estado, demanda y precio en el mercado. Además, los intercambios pueden ser asegurados 
                            con contratos inteligentes en blockchain, lo que garantiza que ambas partes cumplan con 
                            lo acordado antes de completar la transacción. 
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={openAcc3}  >
                        <AccordionHeader onClick={handleOpenAcc3}  >
                            ¿Qué pasa si no encuentro un intercambio? 
                        </AccordionHeader>
                        <AccordionBody>
                            Si no encuentras un intercambio inmediato, puedes:   
                            Habilitar notificaciones, y la plataforma te avisará cuando haya una coincidencia. 
                            Explorar más categorías, ya que puedes intercambiar por productos similares o de otros 
                            intereses. 
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={openAcc4}  >
                        <AccordionHeader onClick={handleOpenAcc4}  >
                            ¿Se pueden hacer intercambios en diferentes ciudades? 
                        </AccordionHeader>
                        <AccordionBody>
                            Sí, Swappi permite intercambios entre diferentes ciudades, pero actualmente solo está 
                            disponible en los departamentos de Francisco Morazán y Cortés. Los usuarios pueden 
                            optar por:   
                            
                            <br/>
                            1. Puntos de entrega seguros en universidades o empresas aliadas dentro de estas zonas. 
                            2. Servicios de envío, donde se puede pagar una pequeña tarifa para que los productos 
                            sean transportados de forma segura dentro de Francisco Morazán y Cortés. 
                        </AccordionBody>
                    </Accordion>
                </div>
            </CardBody>
        </Card>
    );
}
