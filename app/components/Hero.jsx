import React from "react";
import h1 from "@/app/stuf/1.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className=" hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={h1} // Provide the correct path from the "public" directory
            alt="Description"
            width={300} // Specify the width of the image
            height={200} // Specify the height of the image
            className="max-w-sm rounded-lg shadow-2xl"
          />

          {/* <Image
            src={h1} // Provide the correct path from the "public" directory
            alt="Description"
            width={300} // Specify the width of the image
            height={200} // Specify the height of the image
            className="max-w-md rounded-lg shadow-2xl animate-fade-in absolute"
          /> */}
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
