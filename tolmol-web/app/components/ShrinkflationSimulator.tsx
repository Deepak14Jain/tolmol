"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ShrinkflationSimulator() {
    const [year, setYear] = useState(2024);
    const [weight, setWeight] = useState(90);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value);
        setYear(val);
        // Simulation Logic: 2024=90g, 2025=80g, 2026=70g
        setWeight(90 - (val - 2024) * 10);
    };

    const unitPrice = (20 / weight).toFixed(2);
    const inflation = (((20 / weight) - (20 / 90)) / (20 / 90) * 100).toFixed(0);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 w-full max-w-md mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-100 text-red-700 px-3 py-1 rounded-bl-xl text-xs font-bold">
                SIMULATION
            </div>

            <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-slate-800">Maggi Masala Pack</h3>
                <p className="text-slate-500 text-sm">Price is constant: <span className="font-bold text-slate-900">₹20</span></p>
            </div>

            <div className="flex justify-center items-end h-32 gap-8 mb-6 relative">
                <motion.div
                    className="bg-yellow-400 w-24 rounded-lg flex items-center justify-center shadow-lg border-2 border-yellow-500 relative"
                    animate={{ height: `${(weight / 90) * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <span className="text-yellow-900 font-bold text-sm">{weight}g</span>
                </motion.div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium text-slate-600">
                    <span>2024</span>
                    <span>2025</span>
                    <span>2026</span>
                </div>
                <input
                    type="range" min="2024" max="2026" step="1"
                    value={year} onChange={handleSliderChange}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />

                <div className="bg-slate-50 p-4 rounded-xl flex justify-between items-center">
                    <div>
                        <p className="text-xs text-slate-500 uppercase font-bold">Real Unit Price</p>
                        <p className="text-2xl font-bold text-slate-900">₹{unitPrice}<span className="text-sm text-slate-400">/g</span></p>
                    </div>
                    {year > 2024 && (
                        <motion.div
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                        >
                            +{inflation}% Hidden Cost
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}