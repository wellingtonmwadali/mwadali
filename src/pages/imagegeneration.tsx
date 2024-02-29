import Header from "../components/header";
import { GoArrowDown } from "react-icons/go";
import imagegenerationapp from "../assets/Image-generation-app.jpg";
import dallebanner from "../assets/DALLE 3.0.png";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from 'react';

const Imagegeneration = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.animated', {
      duration: 1000,
      delay: 100,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="mt-10 text-center">
        <img
          src={imagegenerationapp}
          alt="ALX MultiTone Magic Chrome Extension"
          className="md:p-12 p-6 shadow-md bg-slate-200 rounded-lg mx-auto"
        />
        <div className="flex justify-between mt-2 ">
          <h1 className="md:text-2xl text-xl text-slate-700 font-bold mx-auto ">
            Dalle 3.0
          </h1>
          <GoArrowDown className="bg-slate-200 md:text-4xl mr-2 text-3xl rounded-full p-2 " />
        </div>
      </div>
      <div className="md:px-40 mt-20 px-20">
        <h1 className="text-slate-500 font-bold text-2xl animated">Web Design</h1>
        {/* Inspiration */}
        <h1 className="font-bold text-xl animated mt-4">Inspiration:</h1>
        <p className="font-medium text-lg animated">
          DALLE 3.0 was inspired by the desire to unlock creativity
          effortlessly. By providing prompts, users can generate unique images,
          sparking imagination and artistic expression. Our goal is to make
          creativity accessible to all, fostering a community where ideas
          flourish and inspiration knows no bounds.
        </p>
        {/* Approach */}
        <h1 className="font-bold text-xl animated mt-10">Approach:</h1>
        <p className="font-medium text-lg animated">
          We kicked off DALLE 3.0 by designing a user-friendly interface,
          prioritizing simplicity. Setting up a ChatGPT account enabled us to
          utilize its API for image generation. Opting for React, Tailwind CSS,
          Vite, and Express, we streamlined development and optimized
          performance. With Express as our backend, we facilitated smooth
          communication between the frontend and ChatGPT API. This approach
          ensured DALLE 3.0 offers a seamless and intuitive experience for users
          to explore prompted image creation effortlessly.
        </p>
        {/* Constraints */}
        <h1 className="font-bold text-xl mt-10 animated">Constraints:</h1>
        <p className="font-medium text-lg animated">
          We encountered limitations with the free version of the ChatGPT API,
          which provided a limited number of trials. This constraint required us
          to carefully manage API usage and prioritize testing and development
          tasks efficiently. Despite the trial limitations, we ensured thorough
          testing and optimization to maximize the effectiveness of DALLE 3.0
          while staying within the constraints of the free API tier.
        </p>
        {/* Conclusion */}
        <h1 className="font-bold text-xl mt-10 animated">Conclusion:</h1>
        <p className="font-medium text-lg animated">
          Despite the constraints posed by the limited trials of the free
          version of the ChatGPT API, our journey in creating DALLE 3.0 has been
          a success. By leveraging React, Tailwind CSS, Vite, and Express, we
          developed a user-friendly web app that facilitates prompted image
          creation effortlessly. Through careful management of API usage and
          optimization of development tasks, we ensured the seamless
          functionality of DALLE 3.0 within the limitations of the free API
          tier.
        </p>
        {/* View live extension link */}
        <h1 className="font-bold text-blue-500 underline text-xl mt-10">
          <a
            href="https://github.com/wellingtonmwadali/Image-Generation-App"
            target="_blank"
          >
            View project link
          </a>{" "}
        </h1>
      </div>
      <div className="md:px-40 px-8 mt-10 mb-10">
        <img
          src={dallebanner}
          alt="ALX MultiTone Magic Chrome Extension"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Imagegeneration;
