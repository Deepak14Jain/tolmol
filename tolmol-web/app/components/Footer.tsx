import { ShoppingBag, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="bg-slate-900 p-1 rounded-md text-white">
                        <ShoppingBag size={16} />
                    </div>
                    <span className="font-bold text-slate-900">TolMol</span>
                </div>
                <p className="text-slate-500 text-sm">© 2026 TolMol Labs, Bangalore. Built with ❤️ for smart shoppers.</p>
                <div className="flex gap-6">
                    <a href="#" className="text-slate-400 hover:text-slate-900 transition">
                        <span className="sr-only">Twitter</span>
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}