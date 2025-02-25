import {Card, CardBody, Typography} from "@material-tailwind/react";
import Image from "next/image";

function Ahorro() {
    return (
        <Card className="mt-6 w-[80vw] h-[20vh] md:w-[30vw] md:h-[30vh] items-center justify-center">
            <CardBody className="flex flex-row items-center justify-center gap-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mb-4 h-12 w-12 text-gray-900"
                >
                    <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                    <path
                        fillRule="evenodd"
                        d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                        clipRule="evenodd"
                    />
                    <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                </svg>
                <div className="flex flex-col">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Ahorro económico
                    </Typography>
                    <Typography>
                        No necesitas dinero para acceder a lo que necesitas
                    </Typography>
                </div>
            </CardBody>
        </Card>
    );
}

function Sostenibilidad() {
    return (
        <Card className="mt-6 w-[80vw] h-[20vh] md:w-[30vw] md:h-[30vh] items-center justify-center">
            <CardBody className="flex flex-row items-center justify-center gap-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mb-4 h-12 w-12 text-gray-900"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                        clip-rule="evenodd"
                    />
                </svg>
                <div className="flex flex-col">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Sostenibilidad
                    </Typography>
                    <Typography>
                        Reduce el desperdicio y apoya la economía circular
                    </Typography>
                </div>
            </CardBody>
        </Card>
    );
}

function Comunidad() {
    return (
        <Card className="mt-6 w-[80vw] h-[20vh] md:w-[30vw] md:h-[30vh] items-center justify-center">
            <CardBody className="flex flex-row items-center justify-center gap-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mb-4 h-12 w-12 text-gray-900"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                        clip-rule="evenodd"
                    />
                </svg>
                <div className="flex flex-col">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Comunidad
                    </Typography>
                    <Typography>
                        Exclusivo para universitarios, creando un ambiente
                        confiable
                    </Typography>
                </div>
            </CardBody>
        </Card>
    );
}
function Seguridad() {
    return (
        <Card className="mt-6 w-[80vw] h-[20vh] md:w-[30vw] md:h-[30vh] items-center justify-center">
            <CardBody className="flex flex-row items-center justify-center gap-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mb-4 h-12 w-12 text-gray-900"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                    />
                </svg>
                <div className="flex flex-col">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Seguridad
                    </Typography>
                    <Typography>
                        Opciones de verificación de usuario y contratos
                        inteligentes
                    </Typography>
                </div>
            </CardBody>
        </Card>
    );
}

// function seguridadIcon() {
//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             class="size-6"
//         >
//             <path
//                 fill-rule="evenodd"
//                 clip-rule="evenodd"
//             />
//         </svg>
//     );
// }

export function Beneficios() {
    return (
        <div className="relative h-[120vh] md:h-[110vh]">
            <Image
                src="/assets/background.avif"
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                style={{opacity: 0.2, zIndex: -1}}
            />
            <Typography
                color="blue-gray"
                className="text-3xl font-bold text-center pt-10"
            >
                Beneficios
            </Typography>
            <div className="flex flex-col justify-center items-center md:flex-row md:gap-6 mt-10">
                {Ahorro()}
                {Sostenibilidad()}
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row md:gap-6 ">
                {Comunidad()}
                {Seguridad()}
            </div>
        </div>
    );
}
