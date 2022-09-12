import React from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <main className="flex">
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  );
}
