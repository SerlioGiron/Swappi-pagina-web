'use client';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
import Image from "next/image";


export function ODS() {
    return (
        <div
            className="flex flex-col md:flex-row justify-center items-center gap-6 p-10"
            // style={{ backgroundImage: "url('/assets/background.avif')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.2)', backgroundBlendMode: 'overlay' }}
        >
            <Card className="w-[70vw] md:w-[30vw] overflow-hidden">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                        src="https://plus.unsplash.com/premium_photo-1682960970812-9d1b2eeb23dc?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fA%3D%3D"
                        alt="ui/ux review check"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h4" className="text-black">
                        ODS 11
                    </Typography>
                    <Typography
                        variant="lead"
                        color="gray"
                        className="mt-3 font-normal text-black"
                    >
                        Ciudades y comunidades sostenibles
                    </Typography>
                </CardBody>
            </Card>

            <Card className="w-[70vw] md:w-[30vw] overflow-hidden">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                        src="https://plus.unsplash.com/premium_photo-1686981905851-6bd223bedcb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="ui/ux review check"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h4" className="text-black">
                        ODS 12
                    </Typography>
                    <Typography
                        variant="lead"
                        color="gray"
                        className="mt-3 font-normal text-black"
                    >
                        Producción y consumo responsables
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
}
