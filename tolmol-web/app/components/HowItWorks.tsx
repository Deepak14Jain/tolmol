"use client";
import { motion } from "framer-motion";
import { Search, Scale, PiggyBank, ArrowRight } from "lucide-react";

const STEPS = [
    {
        id: 1,
        title: "You Search",
        desc: "Type 'Milk' or paste a Blinkit link. We instantly scan Zepto, Instamart, and local prices.",
        icon: Search,
        color: "bg-blue-100 text-blue-600",
    },
    {
        id: 2,
        title: "We Compare",
        desc: "Our engine standardizes weights (e.g., converting 900g to 1kg price) to reveal the true cheapest option.",
        icon: Scale,
        color: "bg-purple-100 text-purple-600",
    },
    {
        id: 3,
        title: "You Save",
        desc: "We redirect you to the cheapest app. Users save an average of ₹120 per order.",
        icon: PiggyBank,
        color: "bg-green-100 text-green-600",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-900 mb-4"
                    >
                        Smart shopping in 3 steps
                    </motion.h2>
                    <p className="text-slate-600 text-lg">
                        We do the math that quick commerce apps hope you ignore.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="relative grid md:grid-cols-3 gap-12">

                    {/* The Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-green-200"
                        />
                    </div>

                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-slate-50 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Step Number Badge */}
                            <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 text-xl shadow-sm relative z-10`}>
                                <step.icon size={32} strokeWidth={1.5} />
                                <div className="absolute -top-3 -right-3 bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">
                                    {step.id}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{step.desc}</p>

                            {/* Mobile Arrow (Hidden on Desktop) */}
                            {index < 2 && (
                                <div className="md:hidden mt-8 text-slate-300">
                                    <ArrowRight size={24} className="rotate-90" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}