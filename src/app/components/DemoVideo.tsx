"use client";
import React from "react";

const DemoVideo = () => (
  <video
    src="/Tweet Toilet.mp4"
    width={1200}
    height={800}
    className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-300"
    style={{ display: 'block', margin: '0 auto' }}
    autoPlay
    loop
    muted
    playsInline
  />
);

export default DemoVideo; 