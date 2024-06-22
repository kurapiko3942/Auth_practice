"use client";
import { Avatar } from "@radix-ui/react-avatar";
import React, { useState ,createContext} from "react";
import { AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";



const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle the sidebar open/close state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className={`bg-slate-200 ${isOpen ? 'w-1/6' : 'w-20'} min-h-screen rounded-lg transition-width duration-300`}>
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center">
          <Button className="w-8 h-8 rounded-full">
            <Avatar className="w-8 h-8 bg-black">
              <AvatarImage src="" alt="User avatar" />
            </Avatar>
          </Button>
          {isOpen && <div className="ml-2 text-xl">User_Name</div>}
        </div>
        <button className="ml-2 h-8 flex items-center" onClick={toggleSidebar} aria-label="Toggle sidebar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 15H20V13H4V15ZM4 19H20V17H4V19ZM4 11H20V9H4V11ZM4 5V7H20V5H4Z" fill="black" />
          </svg>
        </button>
      </div>
      <div className="flex items-center p-2">
      <button className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <span
        className={`ml-2 text-red-500 font-medium transition-all duration-600 ${
          isOpen ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0 overflow-hidden'
        }`}
      >
        タスクを追加
      </span>

    </div>



    </div>
  );
};

export default SideNav;

