import Header from "../components/header";
import { GoArrowDown } from "react-icons/go";
import restfulapi from "../assets/Restful-API.jpg";
import restfulbanner from "../assets/restfulapi-banner.jpg";
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
        <div className="md:px-40">
          <img
            src={restfulapi}
            alt="ALX MultiTone Magic Chrome Extension"
            className="md:p-10 p-6 shadow-md bg-slate-200 rounded-lg mx-auto"
          />
        </div>
        <div className="flex justify-between mt-2 ">
          <h1 className="md:text-2xl text-xl text-slate-700 font-bold mx-auto ">
            Restful API
          </h1>
          <GoArrowDown className="bg-slate-200 md:text-4xl mr-2 text-3xl rounded-full p-2 " />
        </div>
      </div>
      <div className="md:px-40 mt-20 px-20">
        <h1 className="text-slate-500 animated font-bold text-2xl">Web Design</h1>
        {/* Inspiration */}
        <h1 className="font-bold text-xl animated mt-4">Inspiration:</h1>
        <p className="font-medium animated text-lg">
          This project focuses on Create, Read, Update, and Delete (CRUD)
          operations for users, demonstrates the simplicity and adaptability of
          these fundamental functionalities. Beyond its initial scope, this
          system can seamlessly integrate into various projects, including
          ecommerce systems and beyond. By enabling users to manage data
          effortlessly, CRUD operations provide a solid foundation for efficient
          data management across diverse applications, fostering innovation and
          scalability.
        </p>
        {/* Approach */}
        <h1 className="font-bold text-xl animated mt-10">Approach:</h1>
        <p className="font-medium animated text-lg">
          We divided responsibilities based on expertise, with one team member
          handling frontend development and the other managing the backend. As
          the frontend developer, I focused on creating user-friendly interfaces
          and client-side functionality, while my partner, responsible for the
          backend, implemented server-side logic and API endpoints. Regular
          communication ensured alignment, and collaboration tools facilitated
          coordination. This approach enabled us to efficiently develop a
          seamless application where frontend and backend components work
          together harmoniously to deliver a smooth user experience.
        </p>
        {/* Constraints */}
        <h1 className="font-bold animated text-xl mt-10">Constraints:</h1>
        <p className="font-medium animated text-lg">
          Remote work presented communication challenges  requiring us to rely on digital tools for collaboration.
          Despite distance, seamless integration of frontend and backend
          components was crucial. Additionally, technical limitations like
          internet connectivity issues could impact productivity. However,
          through open communication and technology, we successfully navigated
          these constraints to deliver the project.
        </p>
        {/* Conclusion */}
        <h1 className="font-bold animated text-xl mt-10">Conclusion:</h1>
        <p className="font-medium animated text-lg">
          Despite remote work challenges, our collaborative efforts produced a
          seamless application. With one member focusing on frontend and the
          other on backend development, effective communication and digital
          tools helped overcome obstacles. Our joint work delivered a
          user-friendly experience, showcasing our ability to navigate remote
          collaboration successfully.
        </p>
        {/* View live extension link */}
        <h1 className="font-bold text-blue-500 underline text-xl mt-10">
          <a
            href="https://github.com/wellingtonmwadali/RESTful_API"
            target="_blank"
          >
            View project link
          </a>{" "}
        </h1>
      </div>
      <div className="md:px-40 px-8 mt-10 mb-10">
        <img
          src={restfulbanner}
          alt="ALX MultiTone Magic Chrome Extension"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Imagegeneration;
