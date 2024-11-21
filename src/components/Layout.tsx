import React, {useEffect, useRef} from "react";
import Header from "./Header";
import Footer from "./Footer";
import {useScrollContext} from "../contexts/ScrollContext";
import {useLocation} from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
    const { scrollPositions, setScrollPosition } = useScrollContext();
    const location = useLocation();
    const mainRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const savedPosition = scrollPositions[location.pathname] || 0;
        if (mainRef.current) {
            mainRef.current.scrollTop = savedPosition;
        }

        const handleScroll = () => {
            if (mainRef.current) {
                setScrollPosition(location.pathname, mainRef.current.scrollTop);
            }
        };

        const currentMainRef = mainRef.current;

        if (currentMainRef) {
            currentMainRef.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (currentMainRef) {
                currentMainRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, [location.pathname, scrollPositions, setScrollPosition]);

    return (
        <div  className="flex flex-col h-screen overflow-hidden">
            <Header />
            <main ref={mainRef} className="flex-grow overflow-y-auto bg-gradient-to-br from-blue-400 to-purple-500">
                <div  className="container mx-auto px-4 py-8 ">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}