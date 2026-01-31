"use client";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="bg-green-600 p-1.5 rounded-lg text-white">
                            <ShoppingBag size={20} />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900">TolMol</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-slate-600 hover:text-green-600 text-sm font-medium transition">Features</a>
                        <a href="#how-it-works" className="text-slate-600 hover:text-green-600 text-sm font-medium transition">How it Works</a>
                        <button
                            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                            className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            Get Early Access
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => {
                                setIsOpen(false); // Close menu
                                document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="w-full mt-4 bg-green-600 text-white px-5 py-3 rounded-lg font-bold"
                        >
                            Join Waitlist
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <a href="#features" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Features</a>
                            <button className="w-full mt-4 bg-green-600 text-white px-5 py-3 rounded-lg font-bold">
                                Join Waitlist
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}