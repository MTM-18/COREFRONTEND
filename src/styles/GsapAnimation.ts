import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

/* ================================
   1. Fade-up on scroll (per element, with cleanup)
================================= */
export const fadeUpOnScroll = (target: string, delay = 0, stagger = 0.1) => {
    const elements = gsap.utils.toArray<HTMLElement>(target);
    const triggers: ScrollTrigger[] = [];

    elements.forEach((el, index) => {
        // fromTo is safer when reversing / re-entering
        const tween = gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: delay + index * stagger,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        if (tween.scrollTrigger) {
            triggers.push(tween.scrollTrigger);
        }
    });

    // return cleanup so React can kill old triggers on unmount/remount
    return () => {
        triggers.forEach((st) => st.kill());
    };
};

/* ================================
   2. Staggered grid reveal (keep as is)
================================= */
export const staggerGrid = (target: string) => {
    gsap.from(target, {
        scrollTrigger: {
            trigger: target,
            start: "top 85%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
    });
};

/* ================================
   3. Hero text load animation (keep as is)
================================= */
export const heroReveal = (elements: string[]) => {
    gsap.from(elements, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
    });
};


/* ================================
   4. Navbar sliding capsule
   - Used to move the white pill under the active nav link
================================= */
export const slideNavCapsule = (
    capsuleEl: HTMLElement,
    containerEl: HTMLElement,
    activeEl: HTMLElement,
    duration = 0.45
) => {
    // Measure positions
    const elRect = activeEl.getBoundingClientRect();
    const containerRect = containerEl.getBoundingClientRect();

    const left = elRect.left - containerRect.left;
    const width = elRect.width;

    // Tween
    gsap.to(capsuleEl, {
        x: left,
        width,
        duration,
        ease: "power3.out",
    });
};

