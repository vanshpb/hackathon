"use client";

import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden text-white">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size[64px_64px] "></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 max-w-6xl mx-auto">

        {/* Hero Content */}
        <section className="text-center max-w-4xl mt-20">

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Hackathon
            </span>
            <br />
            <span className="text-white">2025</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Where <span className="text-blue-400 font-semibold">innovation</span> meets{" "}
            <span className="text-purple-400 font-semibold">excellence</span>. 
            Collaborate with industry leaders and build the future of technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-5 max-w-2xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              <div className="text-3xl font-bold text-blue-400 mb-2">36h</div>
              <div className="text-gray-400 text-sm">Innovation Sprint</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Participants</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              <div className="text-3xl font-bold text-green-400 mb-2">₹1L+</div>
              <div className="text-gray-400 text-sm">In Prizes</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/eventcard">
              <button className="group relative bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3">
                <span>Apply Now</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
            <Link href="/login">
              <button className="group border border-gray-600 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 transition-all duration-300 flex items-center space-x-3">
                <span>Participant Login</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </Link>
          </div>
        </section>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </main>
  );
}