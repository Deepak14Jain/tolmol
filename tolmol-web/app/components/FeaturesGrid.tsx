"use client";
import { motion } from "framer-motion";
import { Search, TrendingDown, ShieldCheck, IndianRupee } from "lucide-react";

// Reusable Feature Card Component
const FeatureCard = ({ icon: Icon, title, desc, colorClass, delay, fullWidth = false }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Triggers when 100px of the element is visible
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 ${fullWidth ? "md:col-span-2" : "col-span-1"}`}
        >
            <div className={`${colorClass} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{desc}</p>
        </motion.div>
    );
};

export default function FeaturesGrid() {
    return (
        <section id="features" className="py-24 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-900 mb-4"
                    >
                        Why you need TolMol
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600"
                    >
                        Quick commerce is convenient, but are you getting the best value? We give you the data they hide.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={Search}
                        title="Unified Search"
                        desc="Stop opening 3 different apps. Search 'Milk' once and see prices from Blinkit, Zepto, and Instamart side-by-side."
                        colorClass="bg-blue-50 text-blue-600"
                        delay={0.1}
                        fullWidth={true}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl col-span-1 transform transition-all"
                    >
                        <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center text-green-400 mb-6">
                            <TrendingDown size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Price History</h3>
                        <p className="text-slate-300">
                            See if that "50% OFF" is real or just a markup fake-out. We track historical pricing for 5,000+ items.
                        </p>
                    </motion.div>

                    <FeatureCard
                        icon={ShieldCheck}
                        title="Quality Score"
                        desc="We flag high-sugar and palm oil ingredients instantly."
                        colorClass="bg-green-50 text-green-600"
                        delay={0.3}
                    />

                    <FeatureCard
                        icon={IndianRupee}
                        title="Community Pricing"
                        desc="'D-Mart is cheaper.' We prove it. Users scan offline bills to crowdsource the real market price in your area."
                        colorClass="bg-orange-50 text-orange-600"
                        delay={0.4}
                        fullWidth={true}
                    />
                </div>
            </div>
        </section>
    );
}