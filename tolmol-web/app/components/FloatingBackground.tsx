"use client";
import { motion, useScroll, useTransform } from "framer-motion"; // Removed useSpring
import { useEffect, useState } from "react";

const ITEMS = [
    { icon: "🧾", label: "bill" },
    { icon: "🥛", label: "milk" },
    { icon: "🍫", label: "chocolate" },
    { icon: "🥦", label: "broccoli" },
    { icon: "🧼", label: "soap" },
    { icon: "🥚", label: "egg" },
    { icon: "🥔", label: "potato" },
    { icon: "🍞", label: "bread" },
];

export default function FloatingBackground() {
    const [items, setItems] = useState<any[]>([]);

    // Track the raw pixel scroll value of the window (more stable than progress %)
    const { scrollY } = useScroll();

    useEffect(() => {
        const generatedItems = ITEMS.map((item, i) => ({
            ...item,
            id: i,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            scale: Math.random() * 0.5 + 0.8,
            // Parallax Factor: Higher number = moves faster
            parallaxSpeed: Math.random() * 0.3 + 0.1
        }));
        setItems(generatedItems);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 h-full bg-slate-50/50">
            {items.map((item) => (
                <ParallaxItem key={item.id} item={item} scrollY={scrollY} />
            ))}
        </div>
    );
}

function ParallaxItem({ item, scrollY }: any) {
    // Direct Mapping: For every 1px user scrolls, move this item by 'speed' pixels
    // [0, 1000] scroll pixels -> [0, 1000 * speed] movement
    // The negative sign (-) makes items move UP when you scroll DOWN (classic parallax)
    const y = useTransform(scrollY, (value) => value * -item.parallaxSpeed);

    return (
        <motion.div
            className="absolute text-5xl opacity-15 will-change-transform" // added will-change for performance
            style={{
                top: item.top,
                left: item.left,
                fontSize: `${item.scale * 4}rem`,
                y: y, // Linked directly to scroll, no spring lag
            }}
            animate={{
                rotate: [0, 360],
                x: [0, 20, 0], // Gentle horizontal drift only
            }}
            transition={{
                rotate: { duration: Math.random() * 60 + 60, repeat: Infinity, ease: "linear" },
                x: { duration: Math.random() * 10 + 10, repeat: Infinity, ease: "easeInOut" }
            }}
        >
            {item.icon}
        </motion.div>
    );
}