"use client";

import React from "react";
import Link from "next/link";
import { div } from "three/tsl";

export default function EventCard() {
    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10 relative">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl"></div>
            </div>

            {/* Card container */}
            <Link
                href="/userdata" // ✅ Redirects to app/userdata/page.tsx
                className="relative max-w-3xl w-full bg-gray-900/80 backdrop-blur-xl border border-blue-500/40 rounded-3xl shadow-[0_0_25px_2px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_5px_rgba(59,130,246,0.6)] overflow-hidden grid grid-cols-1 lg:grid-cols-2 transform hover:scale-[1.02] transition-all duration-300 cursor-pointer no-underline"
            >
                {/* Left: Visual Section */}
                <div className="relative h-48 lg:h-auto flex flex-col items-center justify-center">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 to-purple-900/20" />
                    <div className="relative z-10 text-center p-6">
                        <h1 className="text-3xl font-bold mb-4 bg-linear-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                            TechNoX 1.0
                        </h1>
                        <h2 className="mt-0 text-gray-300">Ideathon</h2>
                    </div>
                </div>

                {/* Right: Info Section */}
                <div className="p-6 flex flex-col justify-center relative">
                    {/* Corner accents */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-linear-to-bl from-blue-600/20 to-transparent rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-linear-to-tr from-purple-600/20 to-transparent rounded-bl-3xl"></div>

                    <div className="relative">
                        {/* Info */}
                        <div className="space-y-3">
                            <InfoCard
                                icon="📍"
                                title="Location"
                                value={
                                    <a
                                        href="https://maps.app.goo.gl/3b6XfA75ymRZurg9A"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-400 hover:underline"
                                        onClick={(e) => e.stopPropagation()} // ✅ Prevent link inside from triggering redirect
                                    >
                                        Madhav University, Rajasthan
                                    </a>
                                }
                                color="purple"
                            />
                            <InfoCard
                                icon="📅"
                                title="Date"
                                value="November 27–30, 2025"
                                color="blue"
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </main>
    );
}
/* InfoCard Component */
interface InfoCardProps {
    icon: string;
    title: string;
    value: string | React.ReactNode;
    color: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, value, color }) => {
    const colorClass =
        color === "blue"
            ? "bg-blue-500/20 text-blue-300"
            : color === "purple"
                ? "bg-purple-500/20 text-purple-300"
                : "bg-green-500/20 text-green-300";

    return (
        <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <div
                className={`w-8 h-8 ${colorClass} rounded-lg flex items-center justify-center`}
            >
                <span>{icon}</span>
            </div>
            <div>
                <p className="font-semibold text-gray-200 text-sm">{title}</p>
                <div className="text-gray-400 text-sm">{value}</div>
            </div>
        </div>
    );
};
