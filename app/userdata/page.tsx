"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function TeamSubmissionForm() {
  const [members, setMembers] = useState(Array(5).fill(""));
  const [videos, setVideos] = useState<(File | null)[]>(Array(4).fill(null));
  const [presentations, setPresentations] = useState<(File | null)[]>(Array(4).fill(null));
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (list: any[], index: number, value: any, setter: any) => {
    const updated = [...list];
    updated[index] = value;
    setter(updated);
  };

  const validate = () => {
    if (members.some((m) => !m.trim())) return "Fill in all team members.";
    if (videos.some((v) => !v)) return "Upload all 4 videos.";
    if (presentations.some((p) => !p)) return "Upload all 4 presentations.";
    if (!description.trim()) return "Enter a project description.";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) return setMessage(error);

    const formData = new FormData();
    members.forEach((m, i) => formData.append(`member_${i + 1}`, m));
    videos.forEach((v, i) => v && formData.append(`video_${i + 1}`, v));
    presentations.forEach((p, i) => p && formData.append(`presentation_${i + 1}`, p));
    formData.append("description", description);

    console.log("Form data ready:", Array.from(formData.keys()));
    setMessage("✅ Submission ready! Your project has been successfully prepared for review.");
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size[64px_64px]"></div>
      </div>

      {/* Form Container */}
      <div className="relative w-full max-w-4xl mx-auto z-10">
        <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Header Section */}
          <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-800 p-8 text-center">
            <h1 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Project Submission
            </h1>
            <p className="text-gray-300 text-lg">
              Submit your team's project files and details
            </p>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Team Members */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-300">
                  Team Members (4 Required) <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {members.map((m, i) => (
                    <div key={i} className="relative">
                      <input
                        type="text"
                        placeholder={`Team Member ${i + 1}`}
                        value={m}
                        onChange={(e) => handleChange(members, i, e.target.value, setMembers)}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* File Upload Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Videos Upload */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-300">🎬</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">Project Videos</h3>
                      <p className="text-gray-400 text-sm">4 video files required</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {videos.map((v, i) => (
                      <div key={i} className="relative">
                        <label className="block text-sm text-gray-400 mb-2">Video {i + 1}</label>
                        <input
                          type="file"
                          accept="video/*"
                          onChange={(e) => handleChange(videos, i, e.target.files?.[0] || null, setVideos)}
                          className="w-full px-3 py-2 bg-gray-800/30 border border-gray-700 rounded-lg text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-all duration-200"
                          required
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Presentations Upload */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-purple-600/10 border border-purple-500/20 rounded-2xl">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-purple-300">📊</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">Presentations</h3>
                      <p className="text-gray-400 text-sm">4 PDF/PPT files required</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {presentations.map((p, i) => (
                      <div key={i} className="relative">
                        <label className="block text-sm text-gray-400 mb-2">Presentation {i + 1}</label>
                        <input
                          type="file"
                          accept=".pdf,.ppt,.pptx"
                          onChange={(e) => handleChange(presentations, i, e.target.files?.[0] || null, setPresentations)}
                          className="w-full px-3 py-2 bg-gray-800/30 border border-gray-700 rounded-lg text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 transition-all duration-200"
                          required
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-300">
                  Project Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your project, its features, technologies used, and impact..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  type="submit"
                  className="flex-1 py-4 px-6 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Submit Project</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
              <Link
                        href="/"
                        className="text-gray-400 hover:text-white transition-colors font-medium flex items-center space-x-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Back to Home</span>
                    </Link>

              {/* Message Display */}
              {message && (
                <div className={`p-4 rounded-2xl border ${
                  message.includes("✅") 
                    ? "bg-green-600/10 border-green-500/30 text-green-300" 
                    : "bg-red-600/10 border-red-500/30 text-red-300"
                }`}>
                  <div className="flex items-center space-x-2">
                    {message.includes("✅") ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span>{message}</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>


      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </main>
  );
}