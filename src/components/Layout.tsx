import React, {useEffect, useRef, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import {useScrollContext} from "../contexts/ScrollContext";
import {useLocation} from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
    const { scrollPositions, setScrollPosition } = useScrollContext();
    const location = useLocation();
    const mainRef = useRef<HTMLDivElement>(null);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const savedPosition = scrollPositions[location.pathname] || 0;

        if (mainRef.current) {
            mainRef.current.scrollTop = savedPosition;
        }
    }, [scrollPositions, location.pathname]);

    const handleScroll = () => {
        if (mainRef.current) {

            if (timer !== null) {
                clearTimeout(timer);
            }

            const currentScrollPosition = mainRef.current.scrollTop
            const path = location.pathname

            setTimer(setTimeout(() => setScrollPosition(path, currentScrollPosition), 200));
        }
    }

    useEffect(() => {
        const currentMainRef = mainRef.current;

        if (currentMainRef) {
            currentMainRef.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (currentMainRef) {
                currentMainRef.removeEventListener('scroll', handleScroll);
            }

            if (timer != null) {
                clearTimeout(timer)
            }
        };
    }, [handleScroll, setScrollPosition]);

    return (
        <div className="flex flex-col w-svw h-svh overflow-hidden">
            <Header />
            <main ref={mainRef} className="flex flex-col flex-grow overflow-y-auto scrollbar-gutter-stable bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-800 dark:to-purple-900 max-w-full w-svw xl:w-auto">
                <div className="container mx-auto p-1 md:p-2 lg:p-4 flex-grow w-full">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}