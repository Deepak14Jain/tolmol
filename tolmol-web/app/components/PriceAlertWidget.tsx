"use client";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, ArrowDown } from "lucide-react";

export default function PriceAlertWidget() {
    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
            className="absolute -right-12 top-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-red-100 w-48 z-20 hidden md:block"
        >
            <div className="flex items-start gap-3">
                <div className="bg-red-100 p-2 rounded-lg text-red-600">
                    <AlertTriangle size={20} />
                </div>
                <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Alert</p>
                    <p className="text-sm font-bold text-slate-900 leading-tight">Shrinkflation Detected</p>
                </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500">Weight</div>
                <div className="flex items-center text-red-600 text-xs font-bold bg-red-50 px-2 py-1 rounded">
                    <ArrowDown size={12} className="mr-1" />
                    12%
                </div>
            </div>
        </motion.div>
    );
}