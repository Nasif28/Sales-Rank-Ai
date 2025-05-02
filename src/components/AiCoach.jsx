import React from "react";
import { useState } from "react";
import RefreshIcon from "./SVG/RefreshIcon";
import ThumbUpIcon from "./SVG/ThumbUpIcon";
import ThumbDownIcon from "./SVG/ThumbDownIcon";
import ClipboardIcon from "./SVG/ClipboardIcon";
import VolumeIcon from "./SVG/VolumeIcon";
import Level from "./SVG/Level";
import Script from "./SVG/Script";
import Pitch from "./SVG/Pitch";
import CheckCircleIcon from "./SVG/CheckCircleIcon";

const suggestions = [
  "How do I handle objections?",
  "Give me a cold email template",
  "Closing techniques",
  "Negotiation tips",
];

const AiCoach = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?",
      sender: "bot",
    },
  ]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    const userMsg = { text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const botReply = {
        text: `Thanks for your question about "${text}". Here's how I can help...`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(input);
    setInput("");
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleCopyChat = async () => {
    const allText = messages
      .map((msg) => `${msg.sender.toUpperCase()}: ${msg.text}`)
      .join("\n\n");
    try {
      await navigator.clipboard.writeText(allText);
      alert("Chat copied to clipboard!");
    } catch (err) {
      alert("Failed to copy chat.");
    }
  };

  return (
    <section className="pt-10 pb-18 bg-gradient-to-r from-blue-900  to-blue-700 text-white">
      <div className="myContainer">
        <p className="text-FoundationYellow text-2xl mb-5">Live Ai Coach</p>

        <h1 className="text-4xl md:text-6xl mb-16">
          Take a Suggestion Coaching
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="flex-[6] bg-white text-black rounded-xl  shadow-lg w-full h-[577px] mx-auto flex flex-col">
            <h3 className="text-aiTitle text-lg font-bold pt-4 pb-6 px-8">
              AI Sales Coach
            </h3>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-2 px-5 py-6 bg-aiBG">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-6 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <img
                      src="/images/miniRobo.svg"
                      alt="Bot"
                      className="w-10 h-10 rounded-full object-cover bg-white"
                    />
                  )}

                  <div
                    className={`py-2 px-6 rounded-lg max-w-[75%]  ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white ml-auto"
                        : "bg-white text-black mr-auto"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <img
                        src="/user.png"
                        alt="User"
                        className="w-10 h-10 rounded-full p-1 object-cover "
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 pb-6 px-8 bg-white rounded-xl">
              {/* Suggestions */}
              <div className="overflow-x-auto max-w-full">
                <div className="flex gap-3 w-max mb-1.5">
                  {suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(suggestion)}
                      className="bg-buttonBG/10 text-foundationBlue text-sm px-4 py-2  rounded-4xl hover:bg-gray-300"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <form
                onSubmit={handleSubmit}
                className="flex mt-4 gap-3 md:flex-row flex-col"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything you need"
                  className="flex-1 px-5 py-3 rounded-md border border-gray-300 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-foundationBlue text-white px-5 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-3"
                >
                  Send
                  <img
                    src="/SVG/ArrowUp.png"
                    alt="AI Robot"
                    className="w-5 h-5"
                  />
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-row lg:flex-col items-center justify-center bg-white text-black rounded-4xl gap-10 p-6 mx-auto">
            <div className="cursor-pointer" onClick={handleClearChat}>
              <RefreshIcon />
            </div>
            <div className="cursor-pointer">
              <ThumbUpIcon />
            </div>
            <div className="cursor-pointer">
              <ThumbDownIcon />
            </div>
            <div className="cursor-pointer" onClick={handleCopyChat}>
              <ClipboardIcon />
            </div>
            <div className="cursor-pointer">
              <VolumeIcon />
            </div>
          </div>

          <div className="gap-6 flex-[5] flex flex-col items-center justify-center  w-full h-[577px] ">
            <div className="basis-5/8  flex flex-col bg-aiBG text-black rounded-3xl w-full gap-5 p-7">
              <h1 className="text-2xl md:text-3xl font-bold font-aiTitle mb-2">
                Real-time Analysis
              </h1>

              <div className="flex flex-col gap-4 bg-white rounded-xl p-4">
                <h3 className="text-lg text-aiSubTitle font-semibold flex gap-1 items-center">
                  <CheckCircleIcon className="w-6 h-6" /> Confidence Level
                </h3>

                <div className="w-full h-2  flex items-center justify-between gap-2">
                  <div className="bg-gray-200 rounded-full w-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>

                  <span className="text-xs text-gray-600">60%</span>
                </div>
              </div>

              <div className="flex flex-col  gap-4 bg-white rounded-xl p-4">
                <h3 className="text-lg flex gap-2 items-center text-aiSubTitle font-semibold">
                  <Level /> Confidence Level
                </h3>

                <p className="text-lg text-aiPara">
                  85% improvement in objection handling
                </p>
              </div>
            </div>

            <div className="basis-3/8  flex   flex-col bg-aiBG text-black rounded-3xl w-full gap-5 p-7">
              <h1 className="text-2xl md:text-3xl font-bold font-aiTitle">
                Quick Actions
              </h1>

              <div className="flex gap-5">
                <div className="flex flex-col w-full  gap-3 bg-white rounded-xl p-4">
                  <h3 className="text-lg flex flex-col  gap-2  text-aiSubTitle font-semibold">
                    <Script /> Generate Script
                  </h3>
                </div>
                <div className="flex flex-col w-full  gap-3 bg-white rounded-xl p-4">
                  <h3 className="text-lg flex flex-col  gap-2  text-aiSubTitle font-semibold">
                    <Pitch /> Practice Pitch
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCoach;
