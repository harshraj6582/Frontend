import React from "react";
import logo from "./assets/Thirdi_Logo.png";

const Uploading = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen">
      {/* Left Section */}

      <div className="flex flex-col flex-1 p-8 space-y-6">
        {/* Header */}
        <img src={logo} alt="Thirdi Logo" className="w-32" />
        <h1 className="text-2xl font-bold text-[#6C63FF]">AI Ad Analyser</h1>

        <div className="flex flex-row">
          <div className="text-gray-800 space-y-4">
            <div
              style={{
                width: "600px",
                height: "114px",
                position: "absolute",
                top: "150px",
                left: "30px",
              }}
            >
              <h2
                className="text-xl font-semibold"
                style={{
                  fontFamily: "Satoshi",
                  fontSize: "32px",
                  fontWeight: 500,
                  lineHeight: "38.4px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                <span className="text-[#FF6584]">🎯</span>The ultimate{" "}
                <span className="text-[#6C63FF]">All-in-One</span> AI tool for
                analysing visuals, text, and brand with one click! 😊
              </h2>
            </div>
            <div className="h-[130px] "></div>
            <p
              className="w-[600px]"
              style={{
                fontFamily: "Satoshi",
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: "30.4px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Simply upload your video or static ad and get a clear,
              easy-to-follow report with tips to boost your ad's performance!
            </p>
            <div className="w-[600px]">
              <p className="font-bold text-[#6C63FF]">
                Take charge of your campaigns and boost performance across all
                platforms, effortlessly!
              </p>
            </div>

            <button className="px-6 py-3 bg-[#6C63FF] text-white font-semibold rounded-md">
              Start my 14 days free trial
            </button>
          </div>
          <div
            className="w-[550px] h-[500px] bg-[#D9D9D9]"
            style={{ position: "relative", left: "40px" }}
          ></div>
        </div>

        {/* Features */}
      </div>

      {/* Right Section */}
      <div className="flex flex-col flex-none w-full md:w-1/3 bg-[#EFE4FF] p-8 space-y-6">
        <h2 className="text-lg font-semibold">Ad link *</h2>
        <input
          type="text"
          placeholder="Enter single Ad link"
          className="p-3 border border-gray-300 rounded-md w-full bg-white"
        />

        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold">Upload Ad *</h2>
          <div className="border-2 border-dashed border-gray-400 rounded-md p-4 text-center">
            <p>Drag and drop your ad here</p>
            <p>or</p>
            <button className="px-4 py-2 bg-[#6C63FF] text-white rounded-md">
              Upload Ad
            </button>
            <p className="mt-2 text-sm text-gray-500">
              Formats supported: JPEG, PNG, MP4 <br /> Video Ad duration: 60 sec{" "}
              <br /> Maximum size: 200 MB
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Landing page URL *</h2>
          <input
            type="url"
            placeholder="https://www.brand.com"
            className="p-3 border border-gray-300 rounded-md w-full bg-white"
          />
        </div>

        <button className="px-6 py-3 bg-[#6C63FF] text-white font-semibold rounded-md w-full">
          Get report
        </button>
        <p className="text-center text-sm text-gray-500">
          No ads to try?{" "}
          <a href="#" className="text-[#6C63FF] underline">
            View Sample Report
          </a>
        </p>
      </div>
    </div>
  );
};

export default Uploading;
