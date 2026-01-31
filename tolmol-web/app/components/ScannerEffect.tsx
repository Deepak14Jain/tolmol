"use client";
import { motion } from "framer-motion";

export default function ScannerEffect() {
    return (
        <div className="relative w-64 h-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden mx-auto transform rotate-[-5deg] hover:rotate-0 transition-all duration-500">

            {/* The Receipt Content */}
            <div className="p-6 space-y-4 opacity-50">
                <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto mb-6"></div>
                <div className="flex justify-between"><div className="h-3 w-20 bg-slate-200 rounded"></div><div className="h-3 w-8 bg-slate-200 rounded"></div></div>
                <div className="flex justify-between"><div className="h-3 w-24 bg-slate-200 rounded"></div><div className="h-3 w-8 bg-slate-200 rounded"></div></div>
                <div className="flex justify-between"><div className="h-3 w-16 bg-slate-200 rounded"></div><div className="h-3 w-8 bg-slate-200 rounded"></div></div>
                <div className="border-t border-dashed border-slate-300 my-4"></div>
                <div className="flex justify-between font-bold"><div className="h-4 w-12 bg-slate-300 rounded"></div><div className="h-4 w-12 bg-slate-300 rounded"></div></div>
            </div>

            {/* The "Shrinkflation" Alert Popup */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2, duration: 0.5, type: "spring" }}
                className="absolute top-1/3 left-4 right-4 bg-red-500 text-white p-3 rounded-lg shadow-lg text-center z-20"
            >
                <p className="text-xs font-bold uppercase tracking-wider">Shrinkflation Detected</p>
                <p className="text-sm font-medium">Weight dropped 10%</p>
            </motion.div>

            {/* The Scanning Laser Line */}
            <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)] z-10"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Green Scan Overlay */}
            <motion.div
                className="absolute inset-0 bg-green-500/10"
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </div>
    );
}