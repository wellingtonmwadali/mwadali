import Header from "../components/header";
import alphatrade from "../assets/alpha-trade.jpg";
import { GoArrowDown } from "react-icons/go";
import alphatradebanner from "../assets/alpha-trade-banner.jpg";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from 'react';

const Alphatrade = () => {
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
          src={alphatrade}
          alt="ALX MultiTone Magic Chrome Extension"
          className="md:p-12 p-6 shadow-md bg-slate-200 rounded-lg mx-auto"
        />
        <div className="flex justify-between mt-2 ">
          <h1 className="md:text-2xl text-xl text-slate-700 font-bold mx-auto ">
            Alpha Trade
          </h1>
          <GoArrowDown className="bg-slate-200 md:text-4xl mr-2 text-3xl rounded-full p-2 " />
        </div>
      </div>
      <div className="md:px-40 mt-20 px-20">
        <h1 className="text-slate-500 font-bold text-2xl">Web Design</h1>
        {/* Inspiration */}
        <h1 className="font-bold text-xl mt-4">Inspiration:</h1>
        <p className="font-medium text-lg">
          Alpha Trade draws inspiration from the movie "The Social Network,"the
          story behind Facebook, where Zuckerberg mentions his friend betting on
          oil prices. This sparks a spirit of innovation. Like Zuckerberg's
          friend, Alpha Trade users seek insights into commodities like crude
          oil (Brent and WTI), copper, natural gas, and aluminium. This web app
          empowers users with historical price data, mirroring the
          entrepreneurial spirit depicted in the film. It's about seizing
          opportunities and making informed decisions in the dynamic world of
          commodity trading.
        </p>
        {/* Approach */}
        <h1 className="font-bold text-xl mt-10">Approach:</h1>
        <p className="font-medium text-lg">
          For Alpha Trade, our approach was straightforward. We began by setting
          up Firebase Authentication for secure login using Google credentials.
          Using React for the frontend ensured a dynamic user interface,
          complemented by Tailwind CSS for sleek styling. On the backend, an
          Express server handled API requests, connecting to a MongoDB database
          for efficient data storage. Integration with the Alpha Vantage API
          provided accurate commodity price data. Rigorous testing ensured
          reliability before deployment, allowing users easy access to
          historical commodity prices. Continuous maintenance and updates ensure
          Alpha Trade remains a valuable tool for traders seeking insights into
          the commodity market.
        </p>
        {/* Constraints */}
        <h1 className="font-bold text-xl mt-10">Constraints:</h1>
        <p className="font-medium text-lg">
          Working within constraints, we encountered limitations such as the
          Alpha Vantage API's free version, which provided only 25 trials per
          day. Given the breadth of data required for five commodities and news
          updates, we had to carefully manage API calls to stay within this
          limit while still providing users with comprehensive and up-to-date
          information. This necessitated efficient data caching strategies and
          prioritization of essential data points to optimize API usage and
          ensure uninterrupted access to commodity prices and news updates for
          Alpha Trade.
        </p>
        {/* Conclusion */}
        <h1 className="font-bold text-xl mt-10">Conclusion:</h1>
        <p className="font-medium text-lg">
          In conclusion, despite facing constraints such as the limited trial
          allowance of the Alpha Vantage API's free version, our journey with
          Alpha Trade has been rewarding. By carefully managing API calls and
          prioritizing essential data, we successfully provided users with
          access to historical commodity prices and news updates. Through
          Firebase authentication, React frontend, Express backend, and MongoDB
          database integration, we created a seamless web application to display commodity data. Moving
          forward, we remain committed to enhancing Alpha Trade's functionality
          and usability, ensuring it continues to serve as a valuable resource
          for traders navigating the commodity market.
        </p>
          {/* View live extension link */}
          <h1 className="font-bold text-blue-500 underline text-xl mt-10">
          <a
            href="https://alpha-trade.netlify.app/"
            target="_blank"
          >
            View live extension
          </a>{" "}
        </h1>
      </div>
      <div className="md:px-40 px-8 mt-10 mb-10">
      <img
          src={alphatradebanner}
          alt="ALX MultiTone Magic Chrome Extension"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Alphatrade