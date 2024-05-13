import React from "react";

const Blog = () => {
  return (
    <>
      <section className=" pb-10 pt-0 dark:bg-dark lg:pb-20 lg:pt-28 md:pt-0 px-8">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-10">
                <h2 className="mb-4 text-3xl font-semibold  text-[#1b1c44] sm:text-4xl md:text-[40px]">
                  Our <span className="text-orange-600">Blogs</span>
                </h2>
                {/* <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p> */}
              </div>
            </div>
          </div>

          <div className="-px-6 mx-6 flex flex-wrap pt-0">
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Do More with Microsoft 365 Business Premium"
              CardDescription="Supercharge your productivity with Microsoft 365 Business Premium. Maximize efficiency and streamline operations effortlessly."
              image="https://getmax.ae/wp-content/uploads/2024/01/GetMax_premium.jpg"
              style={{ width: "100%" }} // Set the width style here
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Unleashing the Power of Copilot with Microsoft
              365"
              CardDescription="Experience the synergy of Copilot in Microsoft 365, elevating your productivity to new heights."
              image="https://getmax.ae/wp-content/uploads/2024/01/GetMax_copilot.jpg"
              style={{ width: "100%" }} // Set the width style here
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Microsoft 365 Defender: Everything You Should Know"
              CardDescription="Discover all you need to know about Microsoft 365 Defender for Cloud, safeguarding your digital realm comprehensively."
              image="https://getmax.ae/wp-content/uploads/2023/12/blog-podefen.jpg"
              style={{ maxWidth: "100%" }} // Set the width style here
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded ">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-black">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
};
