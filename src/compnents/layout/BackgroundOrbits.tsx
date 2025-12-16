// src/components/layout/BackgroundOrbits.tsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function BackgroundOrbits() {
    const rootRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (!rootRef.current) return;

        const ctx = gsap.context(() => {
            // ===== OUTER DRIFTS (4 corners) =====
            gsap.to(".orbit-outer-1", {
                x: "40vw",
                y: "-25vh",
                duration: 5,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });

            gsap.to(".orbit-outer-2", {
                x: "-35vw",
                y: "30vh",
                duration: 10,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });

            gsap.to(".orbit-outer-3", {
                x: "-25vw",
                y: "20vh",
                duration: 25,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });

            gsap.to(".orbit-outer-4", {
                x: "30vw",
                y: "-30vh",
                duration: 15,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });

            // ===== GIANT BACKGROUND WASH =====
            gsap.to(".orbit-bg-giant", {
                x: "8vw",
                y: "-6vh",
                duration: 10,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });

            // ===== CENTER CLUSTER =====
            gsap.to(".orbit-center-1", {
                x: "10vw",
                y: "10vh",
                duration: 5,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });

            gsap.to(".orbit-center-2", {
                x: "-12vw",
                y: "-8vh",
                duration: 80,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });

            gsap.to(".orbit-center-3", {
                x: "6vw",
                y: "-10vh",
                duration: 15,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });

            gsap.to(".orbit-center-rotate", {
                rotation: 360,
                duration: 30,
                ease: "none",
                repeat: -1,
                transformOrigin: "50% 50%",
            });

            gsap.to(".orbit-center-pulse", {
                scale: 1.15,
                opacity: 0.95,
                duration: 9,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });

            // ===== FILLERS FOR EMPTY AREAS =====
            gsap.to(".orbit-filler-1", {
                x: "-6vw",
                y: "4vh",
                duration: 25,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });

            gsap.to(".orbit-filler-2", {
                x: "5vw",
                y: "-6vh",
                duration: 25,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });
        }, rootRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={rootRef}
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
            aria-hidden="true"
        >
            {/* GIANT BACKGROUND WASH */}
            <div
                className="
          orbit-base orbit-bg-giant
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          h-[1400px] w-[1400px]
          bg-core-brand/10 dark:bg-core-darkSurface/40
        "
            />

            {/* OUTER LAYERS (4 corners) */}

            {/* Top-left purple */}
            <div
                className="
          orbit-base orbit-outer-1
          absolute -top-72 -left-72
          h-[620px] w-[620px]
          bg-core-brand/75
        "
            />

            {/* Bottom-right orange */}
            <div
                className="
          orbit-base orbit-outer-2
          absolute -bottom-80 -right-80
          h-[700px] w-[700px]
          bg-core-accent/75
        "
            />

            {/* Top-right soft accent */}
            <div
                className="
          orbit-base orbit-outer-3
          absolute -top-64 right-0
          h-[520px] w-[520px]
          bg-core-accent/50 dark:bg-core-accentDark/90
        "
            />

            {/* Bottom-left soft purple */}
            <div
                className="
          orbit-base orbit-outer-4
          absolute -bottom-64 left-0
          h-[540px] w-[540px]
          bg-core-brandLight/80 dark:bg-core-darkSurface/90
        "
            />

            {/* FILLERS FOR THE GAPS (top-right & mid-left) */}

            {/* Top-right filler (very soft) */}
            <div
                className="
          orbit-base orbit-filler-1
          absolute -top-40 right-10
          h-[480px] w-[480px]
          bg-core-brandLight/50 dark:bg-core-darkSurface/90
        "
            />

            {/* Mid-left filler (around testimonials) */}
            <div
                className="
          orbit-base orbit-filler-2
          absolute top-[45%] -left-20
          h-[360px] w-[360px]
          bg-core-accent/100 dark:bg-core-accentDark/90
        "
            />

            {/* CENTER CLUSTER */}

            {/* Wide center atmosphere */}
            <div
                className="
          orbit-base orbit-center-rotate orbit-center-1
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          h-[900px] w-[900px]
          bg-core-brand/50 dark:bg-core-darkSurface/72
        "
            />

            {/* Orange halo */}
            <div
                className="
          orbit-base orbit-center-rotate orbit-center-pulse orbit-center-2
          absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2
          h-[700px] w-[700px]
          bg-core-accent/76 dark:bg-core-accentDark/78
          mix-blend-screen
        "
            />

            {/* Inner purple glow */}
            <div
                className="
          orbit-base orbit-center-rotate orbit-center-pulse orbit-center-3
          absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2
          h-[520px] w-[520px]
          bg-core-brandLight/72 dark:bg-core-brandLight/50
        "
            />
        </div>
    );
}
