"use client"; // <--- THIS IS THE MISSING KEY

export default function CTA() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-4xl mx-auto bg-green-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to stop overpaying?</h2>
                    <p className="text-green-100 mb-8 text-lg">Join the beta for Bangalore today. Save an average of ₹2,500/month.</p>

                    <button
                        onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                        className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition shadow-lg cursor-pointer"
                    >
                        Get Early Access
                    </button>
                </div>

                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute left-0 bottom-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                </div>
            </div>
        </section>
    );
}