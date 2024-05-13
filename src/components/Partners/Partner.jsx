import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Sample data for partner information
const partners = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/150", // Placeholder image URL
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/150", // Placeholder image URL
    about:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Michael Johnson",
    image: "https://via.placeholder.com/150", // Placeholder image URL
    about:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  // Add more partner information as needed
];

// MegaMenu component
const Partner = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Explore Our Reliable Partnerships | Getmax.ae</title>
        {/* Description */}
        <meta
          name="description"
          content="Explore our network of trusted partnerships at Getmax.ae. Collaborate with industry-leading partners for comprehensive solutions tailored to your business needs."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="http://localhost:5173/partners" />

        {/* Open Graph (OG) tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Explore Our Reliable Partnerships | Getmax.ae"
        />
        <meta
          property="og:description"
          content="Explore our network of trusted partnerships at Getmax.ae. Collaborate with industry-leading partners for comprehensive solutions tailored to your business needs"
        />
        <meta
          property="og:url"
          content="http://localhost:5173/microsoft-365/solutions-and-offerings"
        />
        <meta
          property="og:site_name"
          content="GetMax.Ae Microsoft 365 Managed Services"
        />
        <meta property="article:publisher" content="" />
        <meta property="article:published_time" content="" />
        <meta property="article:modified_time" content="" />
        <meta
          property="og:image"
          content="microsoft-365/partners"
        />
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
          content="Explore Our Reliable Partnerships | Getmax.ae"
        />
        <meta
          property="og:description"
          content="Explore our network of trusted partnerships at Getmax.ae. Collaborate with industry-leading partners for comprehensive solutions tailored to your business needs"
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
          content="Explore Our Reliable Partnerships | Getmax.ae"
        />
        <meta
          property="og:description"
          content="Explore our network of trusted partnerships at Getmax.ae. Collaborate with industry-leading partners for comprehensive solutions tailored to your business needs"
        />
        <meta
          property="og:image"
          content="microsoft-365/partner"
        />
        <meta property="og:site_name" content="YOUR_WEBSITE_NAME" />

        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Explore Our Reliable Partnerships | Getmax.ae,
      UAE",
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
      "description": "Explore our network of trusted partnerships at Getmax.ae. Collaborate with industry-leading partners for comprehensive solutions tailored to your business needs"
    }
    `}
        </script>
      </Helmet>
      <div className="mega-menu bg-white rounded-lg shadow-lg p-4 space-y-4">
        <div className="menu-title font-semibold text-xl mb-2 flex items-center">
          <FontAwesomeIcon
            icon={faUser}
            className="mr-2 text-blue-500 text-2xl"
          />
          Our Partners
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="partner-card bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-32 w-auto rounded-full"
                />
              </div>
              <div className="text-center mb-2">
                <div className="text-lg font-semibold mb-2">{partner.name}</div>
                <p className="text-sm text-gray-700">{partner.about}</p>
              </div>
              <div className="flex justify-center">
                <a
                  href={partner.social.facebook}
                  className="text-gray-600 hover:text-blue-600 mr-2"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="lg"
                    style={{ color: "#3b5998" }}
                  />
                </a>
                <a
                  href={partner.social.twitter}
                  className="text-gray-600 hover:text-blue-600 mr-2"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="lg"
                    style={{ color: "#1da1f2" }}
                  />
                </a>
                <a
                  href={partner.social.linkedin}
                  className="text-gray-600 hover:text-blue-600"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="lg"
                    style={{ color: "#0077b5" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partner;
