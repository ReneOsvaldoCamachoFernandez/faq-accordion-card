import Head from "next/head";
import Image from "next/image";
import icoArr from "public/images/icon-arrow-down.svg";
import womanIlluMov from "public/images/illustration-woman-online-mobile.svg";
import womanIlluDesk from "public/images/illustration-woman-online-desktop.svg";
import boxIlluMov from "public/images/bg-pattern-mobile.svg";
import illustrationBox from "public/images/illustration-box-desktop.svg";
import boxIlluDesk from "public/images/bg-pattern-desktop.svg";

//bg-pattern-mobile.svg
import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function Home() {
  const content = [
    {
      button: " How many team members can I invite?",
      panel:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
      uuid: "id1",
    },
    {
      button: "What is the maximum file upload size?",
      panel:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
      uuid: "id2",
    },
    {
      button: "How do I reset my password?",
      panel:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
      uuid: "id3",
    },
    {
      button: "Can I cancel my subscription?",
      panel:
        "Yes! Send us a message and we’ll process your request no questions asked.",
      uuid: "id4",
    },
    {
      button: "Do you provide additional support?",
      panel:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
      uuid: "id5",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(100);

  const handleClick = (index: number) => {
    if (activeIndex === 100) setActiveIndex(index);
    else setActiveIndex(100);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className=" relative px-[24px] xl:px-[260px] font-personal bg-gradient-to-b from-[#AF67E9] to-[#6565E7] h-full flex justify-center">
        <div className="relative xl:overflow-hidden xl:flex xl:items-end h-[536px] xl:h-[510px] mt-[145px]  flex flex-col items-center bg-white w-full px-[25px] rounded-3xl">
          <div className="xl:w-[350px] xl:mr-[70px]  w-full">
            <h1 className="text-3xl xl:text-4xl text-[#4A4B5E] font-bold mb-[40px] xl:mb-[10px] mt-[135px] xl:mt-[72px]">
              FAQ
            </h1>
            <Accordion allowZeroExpanded className=" pb-[48px] xl:pb-0 w-full">
              {content.map((contenido, indx) => (
                <AccordionItem
                  key={indx}
                  id={contenido.uuid}
                  className="border-b-[1px] py-[15.7px]"
                >
                  <AccordionItemHeading
                    className=" "
                    onClick={() => handleClick(indx)}
                  >
                    <AccordionItemButton className="flex justify-between items-center">
                      <h1 className="text-[#4A4B5E]">{contenido.button}</h1>
                      <Image
                        src={icoArr}
                        alt="ico"
                        className={
                          "w-[10px] h-[7px] " +
                          `${activeIndex === indx ? "rotate-180" : "0"}`
                        }
                      ></Image>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="pt-[5px] ">
                    <p className="text-[#787887]">{contenido.panel}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <Image
            src={womanIlluDesk}
            alt="tipa"
            className="absolute top-[45px] left-[-80px] z-10 hidden xl:block"
          ></Image>
          <Image
            src={boxIlluDesk}
            alt="box"
            className="absolute top-[-290px] left-[-530px] z-0 hidden xl:block"
          ></Image>
        </div>
        <Image
          src={womanIlluMov}
          alt="tipa"
          className="absolute top-[40px] z-20 xl:hidden"
        ></Image>
        <Image
          src={boxIlluMov}
          alt="tipa"
          className="absolute top-[140px] z-10 xl:hidden"
        ></Image>
        <Image
          src={illustrationBox}
          alt="box"
          className="absolute top-[325px] left-[168px] z-10 hidden xl:block"
        ></Image>
      </main>
    </>
  );
}
