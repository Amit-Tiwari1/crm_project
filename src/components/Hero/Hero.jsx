import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../assests/heroimglottie.json";

const Hero = () => {
  const container = useRef(null);
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div className="flex gap-10 justify-center items-center mt-10">
      <div className="w-2/6 h-1/3 ">
        <h2 className="text-5xl text-slate-700 font-bold mb-8">
          Track |<span className="text-yellow-500"> Query </span> | Solution
        </h2>
        <p className="text-slate-600 font-semibold text-base mt-12">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <button className="w-72 h-16 rounded-lg bg-[#ff4141] border-none text-white text-xl font-medium mt-7 cursor-pointer  ">
          Explor Now
        </button>
      </div>
      <div className="container w-2/6 h-1/3" ref={container}></div>
    </div>
  );
};

export default Hero;
