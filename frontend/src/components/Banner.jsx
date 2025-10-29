import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const SAMPLE_CODE = `// Simple debounce utility
function debounce(fn, wait = 300) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Example usage
const handleResize = debounce(() => {
  console.log("resized");
}, 250);

window.addEventListener("resize", handleResize);`;

const TYPING_INTERVAL = 18;
const PAUSE_AFTER_FINISH = 2200; 

const Banner = () => {
    const [visibleText, setVisibleText] = useState("");
    const [typingIndex, setTypingIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [loop, setLoop] = useState(0);
    const mounted = useRef(true);

    useEffect(() => {
        mounted.current = true;
        let timer;

        const typeNext = () => {
            if (!mounted.current) return;
            if (typingIndex >= SAMPLE_CODE.length) {
                setIsPaused(true);
                timer = setTimeout(() => {
                    if (!mounted.current) return;
                    setVisibleText("");
                    setTypingIndex(0);
                    setIsPaused(false);
                    setLoop((l) => l + 1);
                }, PAUSE_AFTER_FINISH);
                return;
            }

            setVisibleText((prev) => prev + SAMPLE_CODE[typingIndex]);
            setTypingIndex((i) => i + 1);
            timer = setTimeout(typeNext, TYPING_INTERVAL);
        };

        if (!isPaused) {
            timer = setTimeout(typeNext, TYPING_INTERVAL);
        }

        return () => {
            mounted.current = false;
            clearTimeout(timer);
        };
    }, [typingIndex, isPaused, loop]);

    return (
        <section className="w-full bg-gradient-to-r from-slate-50 to-white">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 py-20">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
                   

                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
                            Learn to Code — Build Real Projects
                        </h1>
                        <p className="mt-4 text-slate-600 text-sm md:text-base">
                            Practical, hands-on courses for Python, JavaScript, React, Data Science, and more.
                            Build portfolio-ready projects and get job-ready.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            <Link
                                to="/items"
                                className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg text-sm font-medium shadow hover:opacity-95 transition"
                            >
                                Browse Courses
                            </Link>

                        </div>
                        <p className="mt-6 text-xs text-slate-500">No credit card required — start learning today.</p>
                    </div>

                    
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="max-w-2xl w-full">
                            <div
                                className="rounded-xl bg-slate-900/95 ring-1 ring-slate-800/30 p-4 md:p-6 text-sm md:text-base flex flex-col"
                                style={{ height: "400px" }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block w-3 h-3 rounded-full bg-red-500" />
                                        <span className="inline-block w-3 h-3 rounded-full bg-amber-400" />
                                        <span className="inline-block w-3 h-3 rounded-full bg-emerald-400" />
                                    </div>
                                    <div className="text-xs text-slate-400">Live Preview</div>
                                </div>

                                <pre
                                    className="whitespace-pre-wrap break-words text-slate-100 font-mono text-xs md:text-sm leading-relaxed overflow-y-auto"
                                    aria-label="Animated JavaScript code example"
                                >
                                    <code>
                                        {visibleText}
                                        <span
                                            className="inline-block ml-0 w-[8px] md:w-[10px] h-[1em] align-bottom bg-slate-100/90 animate-[blink_1s_steps(2,end)_infinite]"
                                            style={{ verticalAlign: "text-bottom", marginLeft: 2 }}
                                            aria-hidden="true"
                                        />
                                    </code>
                                </pre>

                                <style>{`
                  @keyframes blink {
                    0% { opacity: 1; }
                    50% { opacity: 0; }
                    100% { opacity: 1; }
                  }
                  .animate-[blink_1s_steps\\(2,end\\)_infinite] {
                    animation: blink 1s steps(2, end) infinite;
                  }
                `}</style>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
