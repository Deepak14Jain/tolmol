"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Check, ArrowRight, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

export default function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");
    const [msg, setMsg] = useState("");

    const triggerConfetti = () => {
        const end = Date.now() + 1000;
        const colors = ["#22c55e", "#16a34a", "#ffffff"];

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors,
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setMsg(data.message); // "Welcome to the club!"
                triggerConfetti();
                setEmail("");
            } else if (res.status === 409) {
                setStatus("duplicate");
                setMsg("You're already on the list! 🚀");
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                throw new Error(data.error || "Something went wrong");
            }
        } catch (error) {
            setStatus("error");
            setMsg("Error. Please try again.");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    // Shake animation for errors/duplicates
    const shakeVariant = {
        idle: { x: 0 },
        duplicate: { x: [-10, 10, -10, 10, 0], transition: { duration: 0.4 } },
        error: { x: [-10, 10, -10, 10, 0], transition: { duration: 0.4 } },
    };

    return (
        <div className="relative max-w-md w-full">
            <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 relative z-20"
                variants={shakeVariant}
                animate={status === "duplicate" || status === "error" ? status : "idle"}
            >
                <div className="relative flex-1">
                    <input
                        type="email"
                        placeholder="Enter email for early access..."
                        className={`w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-2 transition-all shadow-sm disabled:opacity-50 disabled:bg-slate-50
              ${status === "duplicate"
                                ? "border-amber-300 focus:border-amber-500 focus:ring-amber-200"
                                : "border-slate-200 focus:border-green-500 focus:ring-green-500/20"
                            }
            `}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "loading" || status === "success"}
                        required
                    />

                    {/* Status Icons inside Input */}
                    <AnimatePresence>
                        {status === "duplicate" && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-500">
                                <AlertCircle size={20} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.button
                    whileHover={{ scale: status === "idle" ? 1.05 : 1 }}
                    whileTap={{ scale: status === "idle" ? 0.95 : 1 }}
                    disabled={status !== "idle" && status !== "duplicate" && status !== "error"}
                    className={`
            font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg whitespace-nowrap flex items-center justify-center gap-2 min-w-[140px]
            ${status === "success" ? "bg-green-500 text-white cursor-default" :
                            status === "duplicate" ? "bg-amber-500 text-white" :
                                "bg-slate-900 hover:bg-slate-800 text-white"}
            ${status === "loading" ? "opacity-80 cursor-wait" : ""}
          `}
                >
                    <AnimatePresence mode="wait">
                        {/* IDLE STATE */}
                        {(status === "idle" || status === "error") && (
                            <motion.span
                                key="idle"
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                className="flex items-center gap-2"
                            >
                                Join Waitlist <ArrowRight size={16} />
                            </motion.span>
                        )}

                        {/* LOADING STATE */}
                        {status === "loading" && (
                            <motion.span
                                key="loading"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            >
                                <Loader2 className="animate-spin" size={20} />
                            </motion.span>
                        )}

                        {/* DUPLICATE STATE */}
                        {status === "duplicate" && (
                            <motion.span
                                key="duplicate"
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                            >
                                Already Joined!
                            </motion.span>
                        )}

                        {/* SUCCESS STATE */}
                        {status === "success" && (
                            <motion.span
                                key="success"
                                initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                                className="font-bold flex items-center gap-2"
                            >
                                <Check size={18} /> You're in!
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </motion.form>

            {/* Helper Message below input */}
            <AnimatePresence>
                {(status === "duplicate" || status === "success") && (
                    <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`text-sm mt-2 ml-1 font-medium ${status === "success" ? "text-green-600" : "text-amber-600"}`}
                    >
                        {msg}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}