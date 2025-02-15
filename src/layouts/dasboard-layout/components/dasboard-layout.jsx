import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { RightSidebar } from "./right-side-bar";
import { LeftSidebar } from "./sidebar";
import { Header } from "./header";
import { HomePage } from "../home-page";
import { UniversityGrid } from "./universities";
import { EvaluateYourself } from "./evaluate";
import { Settings } from "./settings";
export const DashboardLayout = () => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  //it is toggle to open the left side bar
  const toggleLeftSidebar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      <LeftSidebar
        isLeftSidebarOpen={isLeftSidebarOpen}
        toggleSidebar={toggleLeftSidebar}
      />

      <div className="flex-1 flex flex-col">
        {/* this component used in the mobile screen */}
        <Header
          toggleLeftSidebar={toggleLeftSidebar}
          toggleRightSidebar={toggleRightSidebar}
        />
        {/* main container to show the pages in the dashborad */}
        <div className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/universites" element={<UniversityGrid />} />
            <Route path="/evaluate-yourself" element={<EvaluateYourself />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>

      <RightSidebar
        isRightSidebarOpen={isRightSidebarOpen}
        toggleSidebar={toggleRightSidebar}
      />
    </div>
  );
};
