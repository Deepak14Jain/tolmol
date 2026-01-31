"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ShrinkflationSimulator from "./ShrinkflationSimulator";
import PriceAlertWidget from "./PriceAlertWidget";
import WaitlistForm from "./WaitlistForm";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
    return (
        <section id="waitlist" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[90vh] flex items-center">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* LEFT SIDE: Text */}
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-6 border border-green-100">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Live in Bangalore Soon
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                        Stop paying for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                            air in your chips.
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                        TolMol tracks the <strong>Unit Price</strong> across Blinkit, Zepto, and your local Kirana. We alert you when products shrink but prices stay the same.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <WaitlistForm />
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE: Premium Composition */}
                <div className="relative flex items-center justify-center">

                    {/* 1. Animated Blob Background for glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-100 to-blue-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>

                    {/* 2. Main Simulator Card */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="relative z-10 w-full max-w-md"
                    >
                        <ShrinkflationSimulator />

                        {/* 3. Floating Widgets attached to the card */}
                        <PriceAlertWidget />

                        {/* Bottom Left Badge */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="absolute -left-8 -bottom-6 bg-white p-3 rounded-xl shadow-lg border border-slate-100 hidden md:flex items-center gap-3"
                        >
                            <div className="bg-green-100 p-2 rounded-full text-green-700 text-xs font-bold">₹</div>
                            <div>
                                <p className="text-xs text-slate-500">Savings/mo</p>
                                <p className="text-sm font-bold text-green-600">₹2,400</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}