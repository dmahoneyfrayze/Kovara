"use client";

import { useEffect, useState } from "react";

export function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 6,
        hours: 9,
        minutes: 52,
        seconds: 1,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                } else {
                    // Reset or stop
                    return { days: 6, hours: 9, minutes: 52, seconds: 1 };
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-red-50 border border-red-100 p-4 rounded-lg my-6">
            <div className="flex items-center justify-between mb-2">
                <span className="text-red-600 font-bold uppercase text-sm tracking-wider">Presale 30% Off</span>
                <span className="text-xs text-red-500 font-semibold">Sale ends in:</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-white rounded border border-red-100 p-2">
                    <span className="block text-xl font-bold text-slate-900">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-500 uppercase">Days</span>
                </div>
                <div className="bg-white rounded border border-red-100 p-2">
                    <span className="block text-xl font-bold text-slate-900">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-500 uppercase">Hrs</span>
                </div>
                <div className="bg-white rounded border border-red-100 p-2">
                    <span className="block text-xl font-bold text-slate-900">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-500 uppercase">Mins</span>
                </div>
                <div className="bg-white rounded border border-red-100 p-2">
                    <span className="block text-xl font-bold text-slate-900">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-[10px] text-slate-500 uppercase">Secs</span>
                </div>
            </div>
        </div>
    );
}
