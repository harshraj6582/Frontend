import React from "react";
import Thirdi_Logo from "./assets/Thirdi_Logo.png"; // Ensure the path is correct
import ContentImage from "./assets/Content.png"; // Ensure the path is correct
import { GaugeComponent } from "react-gauge-component";
import { FaRedo, FaShareAlt } from "react-icons/fa"; // Added missing imports

const AdAnalysis = () => {
  return (
    <div className="relative h-screen bg-white">
      {/* Main Component */}
      <div className="flex">
        {/* Sidebar */}
        <div className=" w-1/4 h-full bg-[#D4C2FF33]">
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
                  style={{ width: "8vw", height: "100px" }}
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
              Take control of your campaigns with{" "}
              <span className="text-[#6B35E8]">Thirdi</span>
            </div>
            <button className="mt-4 w-full h-[60px] bg-[#6B35E8] rounded text-white text-lg font-medium flex items-center justify-center">
              Signup For Free
            </button>
          </div>
        </div>
        <div className="h-full w-3/4">
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <h1 className="text-6xl font-semibold text-purple-700">
              AI Ad Analyser
            </h1>

            <div>
              <h2 className="text-center text-lg font-bold text-yellow-600">
                Great Progress —{" "}
                <span className="text-gray-900">
                  Optimize for Peak Performance
                </span>
              </h2>

              <div className=" flex flex-col items-center justify-center">
                <GaugeComponent
                  style={{ width: "30vw", height: "30vh" }}
                  className=""
                />
                <div className="m-8">
                  <article className="text-center text-2xl text-wrap text-gray-700">
                    Your ad's nearly there—you’re on the right track! Let us
                    guide you with our Ad Analyzer insights and suggestions to
                    fine-tune your performance. Keep optimizing, and you'll hit
                    that sweet spot in no time!
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">

      <div className="mt-6 bg-white shadow-lg rounded-2xl p-8 max-w-6xl w-full">
        <h2 className="text-center text-2xl font-bold text-purple-700 mb-4">Visual analysis</h2>
        <p className="text-center text-gray-700 mb-8">
          Optimizing your ad visuals isn’t just about looking good—it’s about captivating your audience and impressing the algorithms. A well-crafted ad delivers an unforgettable experience that boosts both engagement and reach!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Human Visibility",
              score: 5,
              description:
                "The image focuses on financial data and currency, with little emphasis on human subjects. Try incorporating visible human figures for greater engagement and reliability."
            },
            {
              title: "Image Quality",
              score: 15,
              description:
                "The image has good clarity and lighting, effectively showcasing the financial elements. Brightening the highlights could help make key details stand out more."
            },
            {
              title: "CTA Presence",
              score: 5,
              description:
                "The image lacks a clear call-to-action, making it less effective for guiding user engagement. Including a clear and direct CTA, such as exploring investment strategies by Goalflare, would improve its effectiveness."
            },
            {
              title: "Brand Consistency",
              score: 8,
              description:
                "The color scheme aligns with Goalflare’s brand, featuring the logo prominently. Adding more brand-specific elements, like colors or motifs, could enhance consistency."
            },
            {
              title: "Spacing",
              score: 7,
              description:
                "The spacing is reasonably balanced, but the text block could be better proportioned to the financial background. Adjusting its size or padding would improve visual balance."
            },
            {
              title: "Color Psychology",
              score: 8,
              description:
                "The color choices align with the finance theme, evoking trust and professionalism. Experimenting with warmer tones could add a personal touch and foster connection."
            },
            {
              title: "Typography",
              score: 7,
              description:
                "The typography is mostly clear, but varying font styles could impact readability. Maintaining consistent font sizes for headings and body text would enhance legibility."
            },
            {
              title: "Logo Placement",
              score: 8,
              description:
                "The logo is visible but could be better positioned for greater brand prominence. Placing it in a strategic location, like the top corner or within the text block, would improve alignment."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-purple-50 border-2 border-purple-100 rounded-lg p-4 text-center"
            >
              <h3 className="text-lg font-bold text-purple-700 mb-2">{item.title}</h3>
              <p className="text-4xl font-bold text-yellow-500 mb-4">{item.score}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <p className="text-sm text-gray-700">
            Transform your ads into high-performers! Chat with a specialist today and elevate your results.
          </p>
          <button className="text-purple-700 underline">Talk to expert</button>
        </div>
      </div>
    </div>
        </div>
        
      </div>
    </div>
  );
};

export default AdAnalysis;
