/** @format */

"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card w-auto sm:w-[40rem] sm:h-[50rem] h-auto rounded-xl p-6 border justify-center items-center flex flex-col">
      <CardItem
          translateZ="20"
          className="justify-center items-center flex absolute left-10 top-15 z-20">
          <p className="text-justify uppercase leading-tight text-xs max-w-3xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </CardItem>
        <CardItem
          translateZ="50"
          className="justify-center items-center flex absolute left-0 bottom-0 z-20">
          <img
            src="/Images/home-page/new_arrivals-img_3.png"
            height="500"
            width="500"
            className="h-[20rem] w-fit object-cover rounded-xl group-hover/card:shadow-2xl transition"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="0"
          className=" justify-center items-center flex mt-4 w-96">
          <img
            src="/Images/home-page/new_arrivals-img_3.png"
            height="500"
            width="500"
            className="h-[40rem] w-fit object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="justify-center items-center flex absolute right-0 top-0">
          <img
            src="/Images/home-page/new_arrivals-img_3.png"
            height="500"
            width="500"
            className="h-[20rem] w-fit object-cover rounded-xl group-hover/card:shadow-2xl transition"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="20"
          className="justify-center items-center flex absolute right-10 bottom-10">
          <p className="text-justify uppercase leading-tight text-xs max-w-3xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
