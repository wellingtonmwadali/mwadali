import React from "react";
import Header from "../components/header";
import "../index.css";
import extension from "../assets/chrome-extension.jpg";
import alphatrade from "../assets/alpha-trade.jpg";
import simpleshell from "../assets/simple-shell.png";
import kidangastore from "../assets/kidanga-store.jpg";
import restfulapi from "../assets/Restful-API.jpg";
import imagegenerationapp from "../assets/Image-generation-app.jpg";
import { MdArrowForward } from "react-icons/md";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
import {  Link } from 'react-router-dom';


export const Homepage: React.FC = () => {
  return (
    <>
      <div>
        <div className="bg-black py-4">
          <Header />
          <div className="mt-10 flex justify-center ">
            <h1 className="font-serif md:text-9xl text-5xl font-extrabold text-slate-300 ">
              <span className="hover:text-purple-800">FRONT</span>{" "}
              <span className="separation-line "></span>{" "}
              <span className="hover:text-purple-900">END </span> <br />
              <span className=" hover:text-purple-900">DEVELOPER</span>
            </h1>
          </div>
        </div>
        <div className="bg-slate-100">
          <div className="md:py-16 py-10 mx-auto md:text-center text-slate-700 px-2">
            <h1 className="md:text-5xl text-4xl font-extrabold inline-block text-center">
              Transforming ideas into <br></br> amazingly cool sites
            </h1>
            <div className="mt-5">
              <p className="md:font-medium font-normal text-slate-500 text-center md:text-xl text-2xl ">
                Hello, I'm Mwadali, a front-end developer, skilled in bringing
                websites to life with visual flair.<br></br> I create optimised
                user-friendly interfaces that look great and work smoothly,
                <br></br>
                making sure sites are not just functional,<br></br> but also a
                joy to explore
              </p>
            </div>
          </div>
          <div className="mt-5 flex justify-center text-lg font-semibold">
            <button className="rounded-full p-6 bg-slate-300 hover:bg-slate-500">
              View Work
            </button>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-16 mx-6 mt-12">
              <div className="bg-slate-200 md:p-10 rounded-lg shadow-md ">
                <img
                  src={extension}
                  alt="ALX MultiTone Magic Chrome Extension"
                  className=" w-full h-auto md:h-full p-6"
                />
                <div className="flex justify-between ">
                  <h1 className="md:text-2xl text-xl text-slate-700 font-bold ">
                    ALX MultiTone-Magic Extension
                  </h1>
                  <Link to="/alx-multitone-magic">
                  <MdArrowForward className="bg-gray-400 md:text-4xl mr-2 text-3xl rounded-full p-1" />
                </Link>
                </div>
              </div>

              <div className="bg-slate-200 md:p-10  rounded-lg shadow-md ">
                <img
                  src={alphatrade}
                  alt="Alpha Trade Image "
                  className="w-full h-auto md:h-full p-6"
                />
                <div className="flex justify-between ">
                  <h1 className="md:text-2xl text-xl text-slate-700 font-bold px-4">
                    Alpha Trade
                  </h1>
                  <Link to="/alpha-trade">
                  <MdArrowForward className="bg-gray-400 md:text-4xl mr-2 text-3xl rounded-full p-1" />
                </Link>
                </div>
              </div>

              <div className="bg-slate-200 md:p-10 rounded-lg shadow-md">
                <img
                  src={simpleshell}
                  alt="Simple shell Image"
                  className=" w-full h-auto md:h-full p-6"
                />
                <div className="flex justify-between ">
                  <h1 className="md:text-2xl text-xl text-slate-700 font-bold px-4">
                    Simple Shell 
                  </h1>
                  <Link to="/simple-shell">
                  <MdArrowForward className="bg-gray-400 md:text-4xl mr-2 text-3xl rounded-full p-1" />
                </Link>
                </div>
              </div>
              <div className="bg-slate-200 md:p-10 rounded-lg shadow-md">
                <img
                  src={kidangastore}
                  alt="Kidanga Ecommerce store Image"
                  className="w-full h-auto md:h-full p-6 "
                />
                <div className="flex justify-between ">
                  <h1 className="md:text-2xl text-xl text-slate-700 font-bold px-4">
                    Kidanga Store
                  </h1>
                  <Link to="/kidanga-store">
                  <MdArrowForward className="bg-gray-400 md:text-4xl mr-2 text-3xl rounded-full p-1" />
                </Link>
                </div>
              </div>
              <div className="bg-slate-200 md:p-10 rounded-lg shadow-md">
                <img
                  src={restfulapi}
                  alt="Restful APi Image"
                  className="w-full h-auto md:h-full p-6"
                />
                <div className="flex justify-between ">
                  <h1 className="md:text-2xl text-xl text-slate-700 font-bold px-4">
                    Restful API
                  </h1>
                  <Link to="/restful-api">
                  <MdArrowForward className="bg-gray-400 md:text-4xl mr-2 text-3xl rounded-full p-1" />
                </Link>
                </div>
              </div>
              <div className="bg-slate-200 md:p-10 rounded-lg shadow-md">
                <img
                  src={imagegenerationapp}
                  alt="Image generation App Image"
                  className="w-full h-auto md:h-full p-6"
                />
                <div className="flex justify-between ">
                  <h1 className="md:text-2xl text-xl text-slate-700 font-bold px-4">
                    Dalle 3.0
                  </h1>
                  <Link to="/image-generation-app">
                  <MdArrowForward className="bg-gray-400 md:text-4xl mr-2 text-3xl rounded-full p-1" />
                </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <h1 className="font-medium text-xl ">
              <i>Thank you for visiting!</i>
            </h1>
          </div>
         <div className="flex justify-between py-3 px-8">
          <div className="p-3">
          <a
          href="mailto:wellingtonmwadali@gmail.com">
            <p className="text-sm"> SAY HELLO</p>
            </a>
          </div>
          <div className="flex font-extralight text-lg p-3 gap-6">
            <a
              href="https://github.com/wellingtonmwadali"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 underline"
            >
             
             <p className="text-sm">GITHUB</p>
            </a>
            <a
              href="https://www.linkedin.com/in/wellington-mwadali-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
               <p className="text-sm">LINKEDIN</p>
            </a>
          </div>
         </div>
         <div className="flex justify-center mt-4 text-sm font-light">
         &copy; 2024 MWADALI.
         </div>
        </div>
      </div>
    </>
  );
};
