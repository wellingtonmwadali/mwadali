import  { useEffect } from 'react';
import Header from "../components/header";
import extension from "../assets/chrome-extension.jpg";
import { GoArrowDown } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import red from "../assets/red.png";
import green from "../assets/green.png";
import darkblue from "../assets/dark-blue.png";
import black from "../assets/black.png";
import teal from "../assets/teal.png";
import lightblue from "../assets/light-blue.png";
import purple from "../assets/purple.png";
import pink from "../assets/pink.png";
import orange from "../assets/orange.png";
import grey from "../assets/grey.png";
import yellow from "../assets/yellow.png";
import ScrollReveal from 'scrollreveal';


const Magicmultitone = () => {
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
    // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // 2.5 seconds
  };
  return (
    <div>
      <Header />
      <div className="mt-10 text-center">
        <img
          src={extension}
          alt="ALX MultiTone Magic Chrome Extension"
          className="md:p-12 p-6 shadow-md bg-slate-200 rounded-lg mx-auto"
        />
        <div className="flex justify-between mt-2 ">
          <h1 className="md:text-2xl text-xl text-slate-700 font-bold mx-auto ">
            ALX MultiTone-Magic Extension
          </h1>
          <GoArrowDown className="bg-slate-200 md:text-4xl mr-2 text-3xl rounded-full p-2 " />
        </div>
      </div>
      <div className="md:px-40 mt-20 px-20">
        <h1 className="text-slate-500 font-bold animated text-2xl">Web Design</h1>
           {/* Inspiration */}
        <h1 className="font-bold text-xl mt-4 animated">Inspiration:</h1>
        <p className="font-medium text-lg animated">
          Chrome Themes sparked the idea for ALX Multitone Magic, an extension
          bringing theme customization to the intranet, the learning platform
          for{" "}
          <span className="text-blue-300 underline">
            <a href="https://www.alxafrica.com/" target="_blank">
              Alx Africa
            </a>
          </span>
          . Like Chrome Themes , it offers a variety of themes—red, green,
          navy-blue, black, teal, ocean blue, purple, pink, orange, yellow, and
          grey—giving users the power to personalize their learning platform.
          It's about making the intranet vibrant and uniquely yours, echoing the
          spirit of Chrome's customization in a simple, user-friendly way.
        </p>
           {/* Approach */}
        <h1 className="font-bold text-xl mt-10 animated">Approach:</h1>
        <p className="font-medium text-lg animated">
          Our approach to developing the ALX Multitone Magic extension was
          straightforward. We began by researching the psychology of colors and
          understanding how different hues influence user emotions and
          behaviors. Then, we studied the intranet's user interface classes to
          ensure seamless integration. Through iterative design and user
          feedback, we refined the extension's concept. We coded it using web
          technologies that is HTML, CSS and Javascript and rigorously tested it
          for compatibility. Continuous user feedback informed iterative
          improvements post-release, supplemented by comprehensive documentation
          and ongoing support to aid users. Ongoing updates and user support
          remain our priorities to enhance the intranet experience continually.
        </p>
          {/* Constraints */}
        <h1 className="font-bold text-xl animated mt-10">Constraints:</h1>
        <p className="font-medium animated text-lg">
          Working within constraints, such as it being our first extension
          development experience and collaborating with a remote partner, we
          adopted an organized approach. We started by learning the fundamentals
          together, leveraging online resources and communication tools. Our
          remote collaboration required clear communication channels and regular
          check-ins to stay aligned on tasks. Despite the challenges, our shared
          commitment to learning and collaboration fueled our progress. We
          embraced a trial-and-error mindset, allowing room for mistakes and
          learning from them. Ultimately, our dedication and teamwork enabled us
          to overcome obstacles and deliver the ALX Multitone Magic extension
          successfully.
        </p>
        
        {/* Conclusion */}
        <h1 className="font-bold text-xl mt-10 animated">Conclusion:</h1>
        <p className="font-medium animated text-lg">
          In conclusion, despite being new to extension development and working
          remotely, our journey with ALX Multitone Magic has been rewarding.
          Through teamwork and dedication, we successfully created a valuable
          product. Moving forward, we're committed to refining the extension
          based on user feedback, excited about its future potential.
        </p>
         {/* View live extension link */}
        <h1 className="font-bold text-blue-500 underline text-xl mt-10">
          <a
            href="https://chromewebstore.google.com/detail/alx-multitone-magic/ephimbbnijochfniplkonmebaknmjojm?hl=en&authuser=0&pli=1"
            target="_blank"
          >
            View live extension
          </a>{" "}
        </h1>
      </div>
      <div className="md:px-40 px-8">
        <div className="mt-4   mx-auto backdrop-filter backdrop-blur-lg md:p-4">
          <Slider {...sliderSettings}>
            <div className="relative ">
              <img src={red} alt=" red theme" className="w-full  rounded-lg " />
            </div>
            <div className="relative ">
              <img
                src={green}
                alt="green theme"
                className="w-full rounded-lg"
              />
            </div>
            <div className="relative">
              <img
                src={darkblue}
                alt="dark blue theme"
                className="w-full rounded-lg"
              />
            </div>
            <div className="relative">
              <img
                src={black}
                alt="black theme"
                className="w-full rounded-lg"
              />
            </div>
            <div className="relative">
              <img src={teal} alt="teal theme" className="w-full rounded-lg" />
            </div>
            <div className="relative">
              <img
                src={lightblue}
                alt="light blue theme"
                className="w-full rounded-lg"
              />
            </div>
            <div className="relative">
              <img
                src={purple}
                alt="purple theme"
                className="w-full rounded-lg"
              />
            </div>
            <div className="relative">
              <img src={pink} alt="pink theme" className="w-full rounded-lg" />
            </div>
            <div className="relative">
              <img
                src={orange}
                alt="orange theme"
                className="w-full rounded-lg"
              />
            </div>
            <div className="relative">
              <img src={grey} alt="grey theme" className="w-full rounded-lg" />
            </div>
            <div className="relative">
              <img
                src={yellow}
                alt="yellow theme"
                className="w-full rounded-lg"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Magicmultitone;
