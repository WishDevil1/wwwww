import React from "react";
import GetmaxImgOne from "../../assets/HomeImg/getmaxImgOne.png";
import GetmaxImgTwo from "../../assets/HomeImg/GetmaxImgTwo.png";
import GetmaxImgThree from "../../assets/HomeImg/GetmaxImgThree.png";
import GetmaxImgFour from "../../assets/HomeImg/getmaxImgFour.png";
import GetmaxImgFive from "../../assets/HomeImg/germaxImgFive.png";
import GetmaxImgSix from "../../assets/HomeImg/germaxImgSix.png";

const HomeCardTwo = () => {
  return (
    <div className="text-center pb-8 pt-0">
      <h1 className="text-4xl font-semibold text-[#1b1c44] mb-8">
        Begin your cloud journey with us,
        <span className="text-orange-600 font-bold">
          {" "}
          your trusted Microsoft 365 cloud solution partner.
        </span>{" "}
        This is how we kickstart your adventure.
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 px-10">
        <div className="flex flex-col items-center rounded-xl bg-white shadow-md p-6 card">
          <img
            src={GetmaxImgOne}
            alt="Discover the Perfect Plan"
            className="mx-auto mb-4"
            style={{ width: "80px", height: "80px" }}
          />
          <h2 className="text-xl font-semibold mb-2">
            Discover the Perfect Plan
          </h2>
          <p className="text-gray-600">
            Explore our tailored Microsoft 365 plans designed for diverse
            business needs. Unsure which plan suits you best? Allow us to steer
            you in the right direction.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-xl bg-white shadow-md p-6 card">
          <img
            src={GetmaxImgTwo}
            alt="Transition Seamlessly"
            className="mx-auto mb-4"
            style={{ width: "80px", height: "80px" }}
          />
          <h2 className="text-xl font-semibold mb-2">Transition Seamlessly</h2>
          <p className="text-gray-600">
            Effortlessly migrate your existing data and applications to
            Microsoft 365 with utmost security and zero hiccups.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-xl bg-white shadow-md p-6 card">
          <img
            src={GetmaxImgThree}
            alt="Setup & Deployment"
            className="mx-auto mb-4"
            style={{ width: "80px", height: "80px" }}
          />
          <h2 className="text-xl font-semibold mb-2">Setup & Deployment</h2>
          <p className="text-gray-600">
            Let our team of Microsoft experts handle the setup and configuration
            of M365 solutions tailored to your requirements and budget.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 px-10 pt-6">
        <div className="flex flex-col items-center rounded-xl bg-white shadow-md p-6 card">
          <img
            src={GetmaxImgFour}
            alt="Discover the Perfect Plan"
            className="mx-auto mb-4"
            style={{ width: "80px", height: "80px" }}
          />
          <h2 className="text-xl font-semibold mb-2">Training</h2>
          <p className="text-gray-600">
            Unlock training sessions tailored to enhance Teams adoption and
            empower administrators with essential knowledge, ensuring a minimum
            99% user engagement rate.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-xl bg-white shadow-md p-6 card">
          <img
            src={GetmaxImgFive}
            alt="Transition Seamlessly"
            className="mx-auto mb-4"
            style={{ width: "80px", height: "80px" }}
          />
          <h2 className="text-xl font-semibold mb-2">Support</h2>
          <p className="text-gray-600">
            Rest assured with our 24/7/365 support services. Our team of
            Microsoft experts stands by you at every stage of your journey.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-xl bg-white shadow-md p-6 card">
          <img
            src={GetmaxImgSix}
            alt="Setup & Deployment"
            className="mx-auto mb-4"
            style={{ width: "80px", height: "80px" }}
          />
          <h2 className="text-xl font-semibold mb-2">Billing</h2>
          <p className="text-gray-600">
            Choose your preferred payment method hassle-free. We offer a variety
            of payment options when you purchase Microsoft 365 from us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCardTwo;

