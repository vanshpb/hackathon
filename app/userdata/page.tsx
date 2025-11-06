"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function TeamSubmissionForm() {
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState(
    Array.from({ length: 5 }, () => ({
      name: "",
      enrollment: "",
      email: "",
      phone: "",
      linkedin: "",
      profilePic: null as File | null,
    }))
  );
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleMemberChange = (
    index: number,
    field: string,
    value: string | File | null
  ) => {
    const updated = [...members];
    updated[index] = { ...updated[index], [field]: value };
    setMembers(updated);
  };

  const validate = () => {
    if (!teamName.trim()) return "Please enter the team name.";
    for (let i = 0; i < members.length; i++) {
      const m = members[i];
      if (
        !m.name.trim() ||
        !m.enrollment.trim() ||
        !m.email.trim() ||
        !m.phone.trim() ||
        !m.linkedin.trim() ||
        !m.profilePic
      ) {
        return `Please fill all fields for Member ${i + 1}.`;
      }
    }
    if (!description.trim()) return "Enter a project description.";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) return setMessage(error);

    const formData = new FormData();
    formData.append("teamName", teamName);
    members.forEach((m, i) => {
      formData.append(`member_${i + 1}_name`, m.name);
      formData.append(`member_${i + 1}_enrollment`, m.enrollment);
      formData.append(`member_${i + 1}_email`, m.email);
      formData.append(`member_${i + 1}_phone`, m.phone);
      formData.append(`member_${i + 1}_linkedin`, m.linkedin);
      if (m.profilePic)
        formData.append(`member_${i + 1}_profilePic`, m.profilePic);
    });
    formData.append("description", description);

    console.log("Form ready. Keys:", Array.from(formData.keys()));
    setMessage("✅ Submission ready! Your team project has been successfully prepared for review.");
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Form Container */}
      <div className="relative w-full max-w-5xl mx-auto z-10">
        <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-800 p-6 text-center">
            <h1 className="text-4xl font-semibold mb-0">Team Registration Form</h1>
          </div>

          <div className="p-8 overflow-y-auto max-h-[90vh]">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Team Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Team Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your team name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Members Section */}
              {members.map((member, i) => (
                <div
                  key={i}
                  className="p-5 border border-gray-800 rounded-2xl bg-gray-800/30"
                >
                  <h2 className="text-lg font-semibold text-blue-400 mb-4">
                    Member {i + 1}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={member.name}
                      onChange={(e) =>
                        handleMemberChange(i, "name", e.target.value)
                      }
                      className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white"
                      required
                    />

                    <input
                      type="text"
                      placeholder="College Enrollment Number"
                      value={member.enrollment}
                      onChange={(e) =>
                        handleMemberChange(i, "enrollment", e.target.value)
                      }
                      className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white"
                      required
                    />

                    <input
                      type="email"
                      placeholder="Email ID"
                      value={member.email}
                      onChange={(e) =>
                        handleMemberChange(i, "email", e.target.value)
                      }
                      className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white"
                      required
                    />

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={member.phone}
                      onChange={(e) =>
                        handleMemberChange(i, "phone", e.target.value)
                      }
                      className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white"
                      required
                    />

                    <input
                      type="url"
                      placeholder="LinkedIn Profile URL"
                      value={member.linkedin}
                      onChange={(e) =>
                        handleMemberChange(i, "linkedin", e.target.value)
                      }
                      className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white md:col-span-2"
                      required
                    />

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Profile Picture <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleMemberChange(
                            i,
                            "profilePic",
                            e.target.files?.[0] || null
                          )
                        }
                        className="block w-full text-sm text-gray-300"
                        required
                      />
                      {member.profilePic && (
                        <p className="text-xs text-gray-400 mt-1">
                          Selected: {member.profilePic.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Project Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Project Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your project, its purpose, and key features..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-4 px-6 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Submit Project
                </button>
              </div>

              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors font-medium flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Back to Home</span>
              </Link>

              {/* Message */}
              {message && (
                <div
                  className={`p-4 rounded-2xl border ${
                    message.includes("✅")
                      ? "bg-green-600/10 border-green-500/30 text-green-300"
                      : "bg-red-600/10 border-red-500/30 text-red-300"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </main>
  );
}
