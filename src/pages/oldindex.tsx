/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const h = 814;
const w = 484;

export default function Home() {
  return (
    <main
      style={{
        height: `${h}px`,
      }}
      className="flex w-[1440px]  relative  bg-white "
    >
      <MainHorizontal />
      <LogoMain />
      <Message />
      <SignLogo />
      <MainText />
    </main>
  );
}

function MainText() {
  return (
    <section className="flex absolute  top-[41.5%] right-[5.55%] w-[700px] h-[180px] ">
      <h1 className="arc text-[#8491F7] text-[74px]  font-light leading-[110%] text-right mt-3">
        We{`'`}re still building this :D
      </h1>
      <span className="flex h-full w-[0.5px] bg-[#8491F7]"></span>
    </section>
  );
}

function SignLogo() {
  return (
    <section className="w-[237px] h-[335px] absolute flex right-[5%] top-0 ">
      <span className="flex h-full w-[0.5px] bg-[#8491F7] "></span>
      <img className="w-[228px] h-fit mt-[33.5%]" src="/sign_logo.svg" alt="" />
      <span className="flex h-full w-[0.5px] bg-[#8491F7] "></span>
    </section>
  );
}

function MainHorizontal() {
  return (
    <section
      style={{
        height: `${h}px`,
      }}
      className="absolute left-0 top-0 w-full"
    >
      <span className="flex h-[0.5px] ml-auto w-[66%] bg-[#8491F7] mt-[5.5%]"></span>
      <span className="flex h-[0.5px] ml-auto w-[48%] bg-[#8491F7] mt-[8.5%]"></span>
      <span className="flex h-[0.5px] ml-auto w-[80.5%] bg-[#8491F7] mt-[9.5%]"></span>
      <span className="flex h-[0.5px] ml-auto w-[88.2%] bg-[#8491F7] mt-[12.5%]"></span>
      <span className="flex h-[0.5px] ml-auto w-[88.2%] bg-[#8491F7] mt-[11.5%]"></span>
      <span className="flex h-[0.5px] ml-auto w-[88.2%] bg-[#8491F7] mt-[2.5%]"></span>
    </section>
  );
}

function Message() {
  return (
    <section
      style={{
        height: `${h}px`,
      }}
      className="w-[258px] relative flex "
    >
      <div className="w-full justify-center items-center h-[258px] flex absolute left-0 top-0 mt-[32%]">
        <img className="w-[175px] ml-2" src="/message.svg" alt="" />
      </div>
      <div className="absolute flex w-full h-full top-0 left-0">
        {/* Verticle */}
        <span className="flex h-full w-[0.5px]  bg-[#8491F7] ml-auto"></span>
      </div>
    </section>
  );
}

function LogoMain() {
  return (
    <section
      style={{
        width: `${w}px`,
        height: `${h}px`,
      }}
      className="flex relative"
    >
      <img className="h-full w-full" src="/main_logo.svg" alt="" />
      <div className="absolute flex  w-full h-full left-0 top-0  ">
        {/* verticles lines */}
        <span className="flex h-full w-[0.5px] bg-[#8491F7] ml-[9%]"></span>
        <span className="flex h-full w-[0.5px] bg-[#8491F7] ml-[25.5%]"></span>
        <span className="flex h-full w-[0.5px] bg-[#8491F7] ml-[22.5%]"></span>
        <span className="flex h-full w-[0.5px] bg-[#8491F7] ml-[16.5%]"></span>
        <span className="flex h-full w-[0.5px] bg-[#8491F7] ml-[26%]"></span>
      </div>
      <div className="absolute flex flex-col w-full h-full left-0 top-0 ">
        <span className="flex h-[0.5px] w-full bg-[#8491F7] mt-[36.5%]"></span>
        <span className="flex h-[0.5px]  bg-[#8491F7] mt-[19.5%] w-[57%]"></span>
        <span className="flex h-[0.5px]  bg-[#8491F7] mt-[26%] w-[57%]"></span>
      </div>
    </section>
  );
}
