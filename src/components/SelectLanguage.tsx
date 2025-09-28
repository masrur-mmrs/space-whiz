"use client";

import React, { useState, KeyboardEvent, useEffect, useCallback } from "react";
import { LayoutGroup, motion } from "motion/react";

interface LanguageSelectProps {
    type: string;
    state: Language;
    setPreferences: (value: Preferences | ((val: Preferences) => Preferences)) => void;
}

const LanguageSelect : React.FC<LanguageSelectProps> = ({ type, state, setPreferences }) => {
    const [value, setValue] = useState<Language>(state);
    const options: Language[] = ["English", "Bangla"];

    const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
        const i = options.indexOf(value);
        if (e.key === "ArrowRight") setValue(options[(i + 1) % options.length]);
        if (e.key === "ArrowLeft") setValue(options[(i - 1 + options.length) % options.length]);
    };

    const updatePreferences = useCallback(
      () => {
        console.log("run")
        setPreferences((prev) => {
            return {
                ...prev,
                [type]: value,
            }
        })
      },
      [type, value, setPreferences],
    )
    
    useEffect(() => { 
        updatePreferences();
    }, [value]);

    return (
        <div className="grid place-items-center">
            <LayoutGroup>
                <div
                    role="radiogroup"
                    aria-label="Language"
                    onKeyDown={handleKey}
                    className="relative w-72 border rounded-2xl p-2 shadow"
                >
                    <div className="grid grid-cols-2">
                        {options.map((opt) => {
                        const active = value === opt;
                        return (
                            <button
                                key={opt}
                                role="radio"
                                aria-checked={active}
                                onClick={() => setValue(opt)}
                                className="relative h-10 rounded-xl px-4 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            >
                            <span className={`relative z-10 ${active ? "text-white" : "text-gray-500"}`}>
                               {opt === "English" ? "🇺🇸" : "🇧🇩"} {opt}
                            </span>
                            {active && (
                                <motion.div
                                    layoutId="segment"
                                    className="absolute inset-0 z-0 rounded-xl bg-cosmic-blue"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            </button>
                        );
                        })}
                    </div>
                </div>
            </LayoutGroup>
        </div>
    );
}

export default LanguageSelect