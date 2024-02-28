import Header from "../components/header"
import { GoArrowDown } from "react-icons/go";
import kidangastore from "../assets/kidanga-store.jpg";
import kidangabanner from '../assets/kidanga-store-banner.png'

const Kidangastore = () => {
  return (
    <div>
      <Header />
      <div className="mt-10 text-center">
        <img
          src={kidangastore}
          alt="ALX MultiTone Magic Chrome Extension"
          className="md:p-12 p-6 shadow-md bg-slate-200 rounded-lg mx-auto"
        />
        <div className="flex justify-between mt-2 ">
          <h1 className="md:text-2xl text-xl text-slate-700 font-bold mx-auto ">
            Kidanga Store
          </h1>
          <GoArrowDown className="bg-slate-200 md:text-4xl mr-2 text-3xl rounded-full p-2 " />
        </div>
      </div>
      <div className="md:px-40 mt-20 px-20">
        <h1 className="text-slate-500 font-bold text-2xl">Web Design</h1>
        {/* Inspiration */}
        <h1 className="font-bold text-xl mt-4">Inspiration:</h1>
        <p className="font-medium text-lg">
          Kidanga Store was inspired by the need for easy access to fresh
          produce from the farm The store connects consumers to fresh farm
          produce,mainly offering a variety of fruits and vegetables alongside
          other products. This also served as a practical project for learning
          the React framework, which was essential for building a user-friendly
          online platform. With React's simplicity and efficiency, we're able to
          create a smooth shopping experience for our customers on Fresh
          Harvest.
        </p>
        {/* Approach */}
        <h1 className="font-bold text-xl mt-10">Approach:</h1>
        <p className="font-medium text-lg">
          We began by designing the layout and wireframes of our ecommerce
          store, focusing on user experience. Choosing the MERN stack for its
          versatility, we designed the MongoDB database schema to efficiently
          store product information. Sourcing fresh produce, we populated the
          database with product details. Leveraging Express.js and React.js, we
          set up API endpoints to fetch product data from the backend to the
          frontend, ensuring seamless communication and a smooth shopping
          experience for our customers.
        </p>
        {/* Constraints */}
        <h1 className="font-bold text-xl mt-10">Constraints:</h1>
        <p className="font-medium text-lg">
          As a beginner with React and the MERN stack, I encountered a learning
          curve while familiarizing myself with these technologies. Limited
          experience with frontend and backend development posed challenges in
          designing user-friendly interfaces and setting up efficient database
          structures. Additionally, sourcing and managing product data for the
          ecommerce store required careful consideration and organization.
          Despite these constraints, my commitment to learning and
          problem-solving enabled us to overcome obstacles and successfully
          develop the platform.
        </p>
        {/* Conclusion */}
        <h1 className="font-bold text-xl mt-10">Conclusion:</h1>
        <p className="font-medium text-lg">
          Despite being novices with React and the MERN stack, my
          journey in building the Kidanga store ecommerce store has been a
          rewarding learning experience. Through careful design, database
          management, and frontend-backend integration, we successfully created
          a platform that offers convenient access to fresh produce. This
          project not only provided us with valuable insights into React
          development and the MERN stack but also allowed us to contribute to
          promoting healthy living and sustainability. 
        </p>
        {/* View live extension link */}
        <h1 className="font-bold text-blue-500 underline text-xl mt-10">
          <a href="https://github.com/wellingtonmwadali/Kidanga_Store" target="_blank">
            View project link
          </a>{" "}
        </h1>
      </div>
      <div className="md:px-40 px-8 mt-10 mb-10">
      <img
          src={kidangabanner}
          alt="ALX MultiTone Magic Chrome Extension"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Kidangastore