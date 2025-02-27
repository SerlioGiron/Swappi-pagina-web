'use client';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
   
  export function BackgroundBlogCard() {
    return (
      <Card
        shadow={false}
        className=" rounded-none relative grid h-[70vh] w-full items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h5"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            SWAPPI permite a los jóvenes universitarios en Francisco Morazán y Cortés intercambiar productos de forma segura y sin gastar dinero, promoviendo la sostenibilidad y la confianza a través de tecnología innovadora y una comunidad confiable.
          </Typography>
        </CardBody>
      </Card>
    );
  }