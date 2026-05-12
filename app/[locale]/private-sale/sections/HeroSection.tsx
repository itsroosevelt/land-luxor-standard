'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <video 
                    src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Monedas.mp4?alt=media&token=42bc8f9a-21e1-4f92-bce0-f6375138a2a1"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover opacity-100"
                />
                {/* Subtle dark overlay for readability without being too dark */}
                <div className="absolute inset-0 bg-black/40" />
                {/* Fade to black at bottom to hide the hard edge and transition to next section */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Focal Point Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
                />
            </div>
        </section>
    );
}
