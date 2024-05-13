import { FiGlobe, FiChevronDown } from "react-icons/fi";
import ReactCountryFlag from "react-country-flag";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Success from "../SuccessStory/Success";
import Partner from "./Partner";
import HemoSecondSection from "./HomeSecondSection";
import HomeCard from "./HomeCard";
import HomeCardTwo from "./HomeCardTwo";
import HomeCardThree from "./HomeCardThree";
import Blog from "./Blog"
// import Team from "./Team";
// import SecondScreen from "./SecondScreen";
// import Brand from "./Brand";
// import Service from "./Services";
// import HomeSlat from "./HomeSlat";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import Image1 from "../../assets/heroImage/image1.png";
import Image2 from "../../assets/heroImage/image2.png";
import Image3 from "../../assets/heroImage/image3.png";
import Image4 from "../../assets/heroImage/image4.png";
import Image5 from "../../assets/heroImage/image5.png";
import Image6 from "../../assets/heroImage/image6.jpg";
import Image7 from "../../assets/heroImage/image7.png";
import Image8 from "../../assets/heroImage/image8.png";
import Image9 from "../../assets/heroImage/image9.png";
import Image10 from "../../assets/heroImage/image10.jpeg";
import Image11 from "../../assets/heroImage/image11.jpeg";
import Image12 from "../../assets/heroImage/image12.png";
import Image13 from "../../assets/heroImage/image13.png";
import Image14 from "../../assets/heroImage/image14.png";
import Image15 from "../../assets/heroImage/image15.png";
import Image16 from "../../assets/heroImage/image16.png";

const Home = () => {
  return (
    <>
      <div>
        <Helmet>
          {/* Title */}
          <title>
            Leading Microsoft Dynamics Partner in Dubai, UAE |GetMax-Microsoft
            Partner
          </title>
          {/* Description */}
          <meta
            name="description"
            content="Leading Microsoft Dynamics Partner in Dubai, UAE |GetMax-Microsoft Partner Unlock growth with tailored cloud services & innovative tech. via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
          />

          {/* Canonical URL */}
          <link rel="canonical" href="http://localhost:5173/home" />

          {/* Open Graph (OG) tags */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Empower Your Business with Getmax.ae - Your Microsoft Solutions
            Partner"
          />
          <meta
            property="og:description"
            content="Empower your business with Getmax.ae, your premier Microsoft solutions partner. Unlock growth with tailored cloud services & innovative tech. via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
          />
          <meta property="og:url" content="http://localhost:5173/home" />
          <meta
            property="og:site_name"
            content="GetMax.Ae Microsoft 365 Managed Services"
          />
          <meta property="article:publisher" content="" />
          <meta property="article:published_time" content="" />
          <meta property="article:modified_time" content="" />
          <meta property="og:image" content="microsoft-365/home" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="629" />

          {/* Twitter tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="" />
          <meta name="twitter:site" content="" />
          <meta name="twitter:label1" content="Written by" />
          <meta name="twitter:data1" content="Pankaj Jain" />
          <meta name="twitter:label2" content="Est. reading time" />
          <meta name="twitter:data2" content="3 minutes" />

          {/* Facebook tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="YOUR_WEBSITE_URL" />
          <meta
            property="og:title"
            content="Accelerating Microsoft 365 Cloud: A Swift Approach with
            GetMax-Trusted IT Support & Microsoft Cloud Specialists in Dubai,
            UAE"
          />
          <meta
            property="og:description"
            content="Empower your business with Getmax.ae, your premier Microsoft solutions partner. Unlock growth with tailored cloud services & innovative tech. via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
          />
          <meta property="og:image" content="" />

          {/* LinkedIn tags */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://www.linkedin.com/company/getmax/"
          />
          <meta
            property="og:title"
            content="Accelerating Microsoft 365 Cloud: A Swift Approach with
            GetMax-Trusted IT Support & Microsoft Cloud Specialists in Dubai,
            UAE"
          />
          <meta
            property="og:description"
            content="Empower your business with Getmax.ae, your premier Microsoft solutions partner. Unlock growth with tailored cloud services & innovative tech. via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
          />
          <meta
            property="og:image"
            content="microsoft-365/solutions-and-offerings"
          />
          <meta property="og:site_name" content="YOUR_WEBSITE_NAME" />

          <script type="application/ld+json">
            {`
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Empower Your Business with Getmax.ae - Your Microsoft Solutions
      Partner",
      "author": {
        "@type": "Person",
        "name": "Pankaj Jain"
      },
      "datePublished": "",
      "dateModified": "",
      "image": {
        "@type": "ImageObject",
        "url": "",
        "width": 1200,
        "height": 629
      },
      "publisher": {
        "@type": "Organization",
        "name": "GetMax.Ae",
        "logo": {
          "@type": "ImageObject",
          "url": "",
          "width": 1854,
          "height": 503
        }
      },
      "mainEntityOfPage": "",
      "url": "",
      "description": "Empower your business with Getmax.ae, your premier Microsoft solutions partner. Unlock growth with tailored cloud services & innovative tech. via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
    }
    `}
          </script>
        </Helmet>
        <section>
          <section className=" py-2 shadow-md ">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-center">
                <h2 className="text-sm font-semibold">
                  Our Global Presence:
                  <span className="hidden md:inline">
                    <Link
                      to="/emea"
                      className="text-orange-600 hover:underline hover:text-orange-700 text-sm ml-2"
                    >
                      EMEA
                    </Link>{" "}
                    |
                    <Link
                      to="/north-america"
                      className="text-orange-600 hover:underline hover:text-orange-700  text-sm ml-2"
                    >
                      North America
                    </Link>{" "}
                    |
                    <Link
                      to="/apac"
                      className="text-orange-600 hover:underline hover:text-orange-700  text-sm ml-2"
                    >
                      APAC
                    </Link>
                  </span>
                </h2>
              </div>
              <div className="relative">
                <button
                  onClick={() =>
                    document
                      .getElementById("dropdown")
                      .classList.toggle("hidden")
                  }
                  className="flex items-center space-x-2"
                >
                  <FiGlobe className="h-5 w-5 cursor-pointer" />
                  <span className="text-sm font-semibold">Language</span>
                  <FiChevronDown className="h-5 w-5 text-gray-400" />
                </button>
                <div
                  id="dropdown"
                  className="absolute mt-2 py-2 w-40 bg-white rounded-lg shadow-xl z-10 hidden"
                >
                  <p className="font-semibold px-4 py-2 flex items-center space-x-2">
                    Select Language
                    <FiChevronDown className="h-4 w-4 text-gray-400" />
                  </p>
                  <div className="px-4">
                    <Link
                      to="/emea"
                      className="text-sm flex items-center hover:underline mb-1"
                    >
                      <ReactCountryFlag
                        countryCode="IN"
                        svg
                        alt="Location"
                        className="h-4 w-4 mr-2"
                      />
                      Hindi
                    </Link>
                    <Link
                      to="/north-america"
                      className="text-sm flex items-center hover:underline mb-1"
                    >
                      <ReactCountryFlag
                        countryCode="US"
                        svg
                        alt="Location"
                        className="h-4 w-4 mr-2"
                      />
                      English (USA)
                    </Link>
                    <Link
                      to="/apac"
                      className="text-sm flex items-center hover:underline mb-1"
                    >
                      <ReactCountryFlag
                        countryCode="AE"
                        svg
                        alt="Location"
                        className="h-4 w-4 mr-2"
                      />
                      Arabic (UAE)
                    </Link>
                    <Link
                      to="/south-africa"
                      className="text-sm flex items-center hover:underline mb-1"
                    >
                      <ReactCountryFlag
                        countryCode="ZA"
                        svg
                        alt="Location"
                        className="h-4 w-4 mr-2"
                      />
                      Afrikaans (South Africa)
                    </Link>
                    <Link
                      to="/china"
                      className="text-sm flex items-center hover:underline mb-1"
                    >
                      <ReactCountryFlag
                        countryCode="CN"
                        svg
                        alt="Location"
                        className="h-4 w-4 mr-2"
                      />
                      Mandarin (China)
                    </Link>
                    <Link
                      to="/saudi-arabia"
                      className="text-sm flex items-center hover:underline mb-1"
                    >
                      <ReactCountryFlag
                        countryCode="SA"
                        svg
                        alt="Location"
                        className="h-4 w-4 mr-2"
                      />
                      Arabic (Saudi Arabia)
                    </Link>
                    <Link
                      to="/kuwait"
                      className="text-sm flex items-center hover:underline mb-1"
                    >
                      <ReactCountryFlag
                        countryCode="KW"
                        svg
                        alt="Location"
                        className="h-4 w-4 mr-2"
                      />
                      Arabic (Kuwait)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full px-8 py-14 grid grid-cols-1 md:grid-cols-2 items-center gap-4 max-w-6xl mx-auto">
            <div>
              <h3 className="text-4xl md:text-4xl font-semibold text-[#1b1c44] ">
                {/* Let's change it up a bit */}
                Explore a{" "}
                <span className="text-orange-600 font-bold">
                  versatile
                </span>{" "}
                marketplace offering{" "}
                <span className="text-orange-600 font-bold">seamless</span>{" "}
                implementation of IT services and Cloud solutions
                {/* Discover a versatile marketplace for seamless IT services and Cloud
            solutions implementation. */}
              </h3>
              <p className="text-base md:text-lg text-slate-600 my-4 md:my-6">
                Unlocking the true potential of technology isn't just about
                acquiring new tools; it's about implementing them effectively
              </p>
              <div className="flex justify-start">
                <ContactModal buttonText="Talk to an Expert" />
              </div>
            </div>
            <ShuffleGrid />
          </section>
          <section className="bg-gradient-to-r  from-indigo-100 to-yellow-50">
            <HemoSecondSection />
            <HomeCardTwo />
            <HomeCard />
            <Success />
            <Blog/>
            {/* <HomeCardThree /> */}
          </section>
          {/* <Partner /> */}
          {/* <SecondScreen /> */}
          {/* <Service /> */}
          {/* <Brand /> */}
          {/* <HomeSlat/> */}
          {/* <Team /> */}
        </section>
      </div>
    </>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: Image1,
  },
  {
    id: 2,
    src: Image2,
  },
  {
    id: 3,
    src: Image3,
  },
  {
    id: 4,
    src: Image4,
  },
  {
    id: 5,
    src: Image5,
  },
  {
    id: 6,
    src: Image6,
  },
  {
    id: 7,
    src: Image7,
  },
  {
    id: 8,
    src: Image8,
  },
  {
    id: 9,
    src: Image9,
  },
  {
    id: 10,
    src: Image10,
  },
  {
    id: 11,
    src: Image11,
  },
  {
    id: 12,
    src: Image12,
  },
  {
    id: 13,
    src: Image13,
  },
  {
    id: 14,
    src: Image14,
  },
  {
    id: 15,
    src: Image15,
  },
  {
    id: 16,
    src: Image16,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      // className="w-full h-full "
      className="square"
      style={{
        backgroundImage: `url(${sq.src})`,
        // backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Home;
