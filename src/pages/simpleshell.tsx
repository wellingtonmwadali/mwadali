import Header from "../components/header"
import simpleshell from "../assets/simple-shell.png";
import { GoArrowDown } from "react-icons/go";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from 'react';

const Simpleshell = () => {
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
          src={simpleshell}
          alt="An interactive simple shell"
          className="md:p-12 p-6 shadow-md md:w-1/2   bg-slate-200 rounded-lg mx-auto"
        />
        <div className="flex justify-between mt-2 ">
          <h1 className="md:text-2xl text-xl text-slate-700 font-bold mx-auto ">
            Simple Shell
          </h1>
          <GoArrowDown className="bg-slate-200 md:text-4xl mr-2 text-3xl rounded-full p-2 " />
        </div>
      </div>
      <div className="md:px-40 mt-20 px-20">
        <h1 className="text-slate-500 font-bold text-2xl animated">Web Design</h1>
        {/* Inspiration */}
        <h1 className="font-bold text-xl mt-4 animated">General:</h1>
        <p className="font-medium text-lg animated">
          This project is part of the ALX school based curriculumn, it is
          inspired by computing pioneers like Ken Thompson and the creators of
          Unix and programming languages B and C. It aims aim to simplify
          complex concepts in process management, environment manipulation, and
          program execution for learners of all levels.From understanding PID
          and PPID to mastering program execution and EOF, it unravels the core
          concepts that define modern computing
        </p>
        <h1 className="font-bold text-xl animated mt-4">Approach:</h1>
        <p className="font-medium animated text-lg">
          In creating our interactive shell, my partner and I opted for
          simplicity and efficiency, using the C programming language. Our
          process began with thorough planning, followed by prototyping to
          refine the shell's design and functionality. Dividing tasks
          efficiently, we developed core features like command parsing and
          execution, ensuring seamless user interaction. We incorporated testing
          and debugging to ensure the shell's reliability and stability.
        </p>
        <h1 className="font-bold animated text-xl mt-4">Constraints:</h1>
        <p className="font-medium text-lg animated">
          Despite being remote, my partner and I effectively communicated
          through regular virtual meetings and collaborative tools. We used C to
          create the interactive shell, dividing tasks based on expertise.
          Despite the distance, our shared commitment ensured successful
          development and delivery.
        </p>
        <h1 className="font-bold animated text-xl mt-4">Conclusion:</h1>
        <p className="font-medium text-lg animated">
          In conclusion, our journey of creating an interactive shell using C,
          despite the constraint of remote collaboration, has been a testament
          to effective communication and shared dedication. Through regular
          virtual meetings and collaborative tools, we overcame geographical
          barriers to deliver a high-quality product. Moving forward, we remain
          committed to further enhancing the shell and embracing future
          opportunities for collaboration and growth.
        </p>
           {/* View project link */}
           <h1 className="font-bold text-blue-500 underline text-xl mt-10">
          <a
            href="https://github.com/wellingtonmwadali/simple_shell"
            target="_blank"
          >
            View project link
          </a>{" "}
        </h1>
      </div>
    </div>
  );
}

export default Simpleshell