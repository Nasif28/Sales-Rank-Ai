import React from "react";

const Navbar = () => {
  return (
    <header className="  py-8">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-20">
          <img
            src="/images/logo.svg"
            alt="SalesRank.AI"
            className="h-10 w-auto"
          />

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-nav font-semibold font-jakarta">
            <a href="#" className="hover:font-bold">
              Home
            </a>
            <a href="#" className="hover:font-bold">
              About
            </a>
            <a href="#" className="hover:font-bold">
              Pricing
            </a>
            <a href="#" className="hover:font-bold">
              Consulting
            </a>
            <a href="#" className="hover:font-bold">
              AI Coach
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="border border-border text-button px-8 py-3 rounded-full hover:bg-border hover:text-white transition duration-200 text-md font-bold">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
