import React from 'react';
import Thirdi_Logo from './assets/Thirdi_Logo.png'; // Ensure the path is correct
import ContentImage from './assets/Content.png'; // Ensure the path is correct
import { GaugeComponent } from 'react-gauge-component';
import { FaRedo, FaShareAlt } from 'react-icons/fa'; // Added missing imports

const AdAnalysis = () => {
  return (
    <div className="relative h-screen bg-white">
      {/* Main Component */}
      <div className="relative z-0">
        <h1 className="text-center text-xl font-bold pt-8">Ad Analysis</h1>
      </div>

      {/* Sidebar */}
      <div className="absolute top-0 left-0 w-[574px] h-screen bg-[#D4C2FF33] border-r-2 z-10  overflow-y-auto overflow-x-hidden">
        {/* Logo */}
        <img
          src={Thirdi_Logo}
          alt="Thirdi Logo"
          className="w-[220px] h-[56px] mt-[50px] mx-auto"
        />

        {/* Gauges */}
        <div className="flex justify-around mt-[50px]">
          {/** Gauge Components */}
          {[30, 50, 80].map((value, index) => (
            <div className="flex flex-col items-center" key={index}>
              <GaugeComponent
                value={value}
                style={{ width: '200.64px', height: '100px' }}
              />
              <div className="w-[114px] h-[68.14px] bg-[#D4C2FF33] flex items-center justify-center rounded text-[#6B35EB] font-satoshi text-[20px] font-bold mt-2">
                {value}/100
              </div>
            </div>
          ))}
        </div>

        {/* Content Image */}
        <div className="mt-[100px] flex justify-center">
          <img
            src={ContentImage}
            alt="Content"
            className="w-[452px] h-[625px] rounded-tl-[12px]"
          />
        </div>

        {/* Text Box */}
        <div className="w-[454px] h-[94px] mx-auto mt-8 bg-white border border-[#E6E6E6] rounded-tl-[12px] flex items-center justify-center">
          <p className="text-center text-sm font-medium">Display Text Here</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between w-[454px] mx-auto mt-8">
          {/* Try Another Ad Button */}
          <button className="w-[252px] h-[50px] bg-white border border-[#6B35E8] rounded text-[#6B35E8] text-lg font-medium flex items-center justify-center">
            <FaRedo className="mr-2" />
            Try another Ad
          </button>
          {/* Share Button */}
          <button className="w-[144px] h-[50px] bg-white border border-[#6B35E8] rounded text-[#6B35E8] text-lg font-medium flex items-center justify-center">
            <FaShareAlt className="mr-2" />
            Share
          </button>
        </div>

        {/* New Div */}
        <div className="w-[460px] mx-auto mt-8 bg-[#D4C2FFB2] border border-[#6B35E8] rounded p-4">
          <div className="text-center font-satoshi text-xl font-bold">
            Take control of your campaigns with{' '}
            <span className="text-[#6B35E8]">Thirdi</span>
          </div>
          <button className="mt-4 w-full h-[60px] bg-[#6B35E8] rounded text-white text-lg font-medium flex items-center justify-center">
            Signup For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdAnalysis;
