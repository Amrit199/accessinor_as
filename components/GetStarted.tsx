"use client";
import React from "react";
import Button from "./Button";

const GetStarted = () => {
  return (
    <div className="w-full h-full flex flex-col bg-primary items-center justify-center py-16 lg:py-32">
      <div className="w-[95%] lg:w-[70%] mx-auto bg-white p-14 lg:p-10 rounded-3xl flex flex-col items-center justify-center gap-5">
        <div>
          <h2 className="text-3xl font-bold">
            Get Started with Accessibility Today!
          </h2>
          <p className="text-xl mt-4 mb-6">
            Don&apos;t let your website be a barrier. Let&apos;s make it accessible for
            all.
          </p>
        </div>
        <Button
          link={"/contactus"}
          title="Get Started"
          styles="bg-primary hover:bg-p-hover text-white"
          ariaLabel="Navigate to contact Us page"
        />
      </div>
    </div>
  );
};

export default GetStarted;
