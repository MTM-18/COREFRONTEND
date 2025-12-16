import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Vector1 from "../assets/icons/PatternCard4 1.svg";
import Vector2 from "../assets/icons/PatternCard3 3.svg";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function GlobalVectorsLayer() {
    const root = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!root.current) return;

        const prefersReduced =
            window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

        const ctx = gsap.context(() => {
            gsap.set("[data-vec]", { transformOrigin: "50% 50%" });

            if (prefersReduced) return;

            gsap.to("[data-vec='a']", {
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                },
                motionPath: {
                    path: "#path-a",
                    align: "#path-a",
                    alignOrigin: [0.5, 0.5],
                    autoRotate: false,
                    start: 0.05,
                    end: 0.95,
                },
                ease: "none",
            });

            gsap.to("[data-vec='b']", {
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                },
                motionPath: {
                    path: "#path-b",
                    align: "#path-b",
                    alignOrigin: [0.5, 0.5],
                    start: 0.1,
                    end: 0.98,
                },
                ease: "none",
            });

            // subtle drift
            gsap.to("[data-vec]", {
                y: "+=10",
                duration: 3,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                stagger: 0.2,
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={root}
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
            aria-hidden="true"
        >
            {/* Paths define the "map". Use viewBox so it scales properly */}
            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1440 900"
                preserveAspectRatio="none"
            >
                <path
                    id="path-a"
                    d="M 120 160 C 360 40, 720 120, 900 260 S 1180 520, 1320 420"
                    fill="none"
                    opacity="0"
                />
                <path
                    id="path-b"
                    d="M 1320 160 C 1080 320, 940 460, 740 560 S 360 780, 120 860"
                    fill="none"
                    opacity="0"
                />
            </svg>

            {/* Vector A */}
            <div data-vec="a" className="absolute left-[10%] top-[15%]">
                <div className="h-28 w-28 md:h-36 md:w-36 opacity-80">
                    <img src={Vector1} alt="" className="h-full w-full object-contain" />
                </div>
            </div>

            {/* Vector B */}
            <div data-vec="b" className="absolute left-[65%] top-[25%]">
                <div className="h-24 w-24 md:h-32 md:w-32 opacity-75">
                    <img src={Vector2} alt="" className="h-full w-full object-contain" />
                </div>
            </div>
        </div>
    );
}
