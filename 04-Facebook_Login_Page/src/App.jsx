import { useState } from 'react';
import reactLogo from './assets/logo.svg';
import i from './assets/adchoices.png';

const languages = [
  "English (UK)", "मराठी", "हिन्दी", "اردو", "ગુજરાતી", "ಕನ್ನಡ", "ਪੰਜਾਬੀ",
  "தமிழ்", "বাংলা", "తెలుగు", "മലയാളം"
];

const links = [
  "Sign Up", "Log in", "Messenger", "Facebook Lite", "Video", "Places",
  "Games", "Marketplace", "Meta Pay", "Meta Store", "Meta Quest", "Meta AI",
  "Instagram", "Threads", "Fundraisers", "Services", "Voting Information Centre",
  "Privacy", "Policy", "Privacy Centre", "Groups", "About", "Create ad", 
  "Create Page", "Developers", "Careers", "Cookies", "Terms", "Help", 
  "Contact uploading and non-users"
];

function App() {
  return (
    <>
      <div className="container flex flex-col justify-center items-center mx-auto w-full min-h-screen sm:flex-col lg:flex-row lg:mt-20 lg:mb-48 lg:items-center lg:justify-center lg:mx-auto lg:pr-16">
        <div className="left w-[380px] sm:w-[440px] lg:w-[580px] sm:mx-8 lg:mx-14 mt-10 flex flex-col justify-center items-center sm:items-center lg:items-start sm:mt-0 lg:-mt-[12rem]">
          <img className="w-72" src={reactLogo} alt="Facebook Logo" />
          <p className="text-2xl text-center sm:text-center lg:text-left lg:text-3xl lg:mx-6 mb-10">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="right flex flex-col bg-white p-5 rounded-lg shadow-xl">
            <Input placeholder="Email address or phone number" />
            <Input placeholder="Password" type="password" />
            <Button text="Log in" bgColor="bg-[rgb(22,117,244)]" hoverColor="hover:bg-blue-700" />
            <Link text="Forgotten password?" extraClasses="text-blue-600 text-sm text-center" />
            <hr className="my-2" />
            <Button text="Create new account" bgColor="bg-[rgb(54,164,32)]" hoverColor="hover:bg-green-600" extraClasses="mx-20" />
          </div>
          <p className="text-center font-lg my-6 text-md">
            <Link text="Create a Page" extraClasses="font-bold" /> for a celebrity, brand, or business.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Input({ placeholder, type = "text" }) {
  return (
    <input
      className="px-4 h-12 text-lg my-3 border border-gray-200 rounded-lg focus:outline focus:outline-1 focus:outline-offset-0 focus:drop-shadow-sm outline-blue-500"
      type={type}
      placeholder={placeholder}
    />
  );
}

function Button({ text, bgColor, hoverColor, extraClasses = "" }) {
  return (
    <button className={`${bgColor} ${hoverColor} text-white rounded-md my-2 p-3 font-bold text-xl ${extraClasses}`}>
      {text}
    </button>
  );
}

function Link({ text, extraClasses = "" }) {
  return <a className={`hover:underline cursor-pointer ${extraClasses}`}>{text}</a>;
}

function Footer() {
  return (
    <footer className="bg-white w-full px-5 lg:px-40 py-5 flex flex-col">
      <div className="flex items-center flex-wrap">
        {languages.map((lang) => (
          <Link key={lang} text={lang} extraClasses="text-gray-600 font-normal text-sm mx-1" />
        ))}
        <button className="bg-gray-100 rounded-sm border border-gray-400 ml-2 w-8 h-6 text-lg leading-4 font-bold text-gray-700">+</button>
      </div>
      <hr className="my-2 border-gray-300" />
      <div className="flex flex-wrap w-full mb-4">
        {links.map((link) => (
          <Link key={link} text={link} extraClasses="text-[#8a8d91] text-sm font-[400] mr-2" />
        ))}
        <a className="flex text-[#8a8d91] text-sm font-[400] hover:underline">
          AdChoices <img className="h-4 w-4 mx-1" src={i} alt="icon" />
        </a>
      </div>
      <div className="mvl copyright text-[#737373] text-[11px] font-semibold">
        <span>Meta © 2024</span>
      </div>
    </footer>
  );
}

export default App;
