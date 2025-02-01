import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ZoomIn, ZoomOut, X } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useScreenBreakpoint} from "../hooks/useScreenBreakpoint";
import {useMediaQuery} from "react-responsive";

interface ProjectPageProps {
    title: string;
    description: string;
    headerImage: string;
    carouselImages: string[];
    sections: {
        title: string;
        content: string;
        image: string;
        links: { linkName: string, url: string, local?: boolean}[]
        imageLeft?: boolean;
    }[];
}

export default function ProjectPage({ title, description, headerImage, carouselImages, sections }: ProjectPageProps) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isImageOpen, setIsImageOpen] = useState(false);
    const sectionRefs = useRef(sections.map(() => React.createRef<HTMLDivElement>()));
    const sliderRef = useRef<Slider>(null);
    const { isAbove } = useScreenBreakpoint("xs")
    const isTouchEnabled = useMediaQuery({query: `(pointer: coarse)`});

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeImage();
            }
        };

        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7500,
        pauseOnHover: true,
        swipe: true,
    };

    const openImage = (index: number) => {
        setCurrentImage(index);
        setIsImageOpen(true);
    };

    const closeImage = () => {
        setIsImageOpen(false);
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg overflow-hidden">
            <div className="h-96 bg-cover bg-left-top" style={{ backgroundImage: `url(${headerImage})` }}>
                <div className="h-full flex items-center justify-center bg-black bg-opacity-20 dark:bg-opacity-40">
                    <h1 className="text-md xs:text-xl sm:text-2xl lg:text-4xl font-bold text-white">{title}</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {carouselImages.length > 0 &&
                    <div className="mb-12 relative">
                        <Slider ref={sliderRef} {...settings}>
                            {carouselImages.map((image, index) => (
                                <div key={index} className="outline-none">
                                    <img
                                        src={image}
                                        alt={`Project image ${index + 1}`}
                                        className="w-full h-96 object-cover rounded-lg select-none"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                }

                {sections.map((section, index) => (
                    <div key={index} ref={sectionRefs.current[index]} className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{section.title}</h2>
                        <div className="flex flex-col md:flex-row">
                            <div className={`md:w-1/2 mb-4 md:mb-0 md:mr-4 p-6 ${section.imageLeft ? "md:order-2" : ""}`}>
                                <p className="text-gray-700 dark:text-gray-300">{section.content}</p>
                            </div>
                            <div className={`flex content-center justify-center md:w-1/2 relative group ${section.imageLeft ? "md:order-1" : ""} hover:opacity-70 dark:hover:opacity-80`} >
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full aspect-auto object-fit rounded-lg select-none cursor-pointer"
                                    onClick={() => openImage(index)}
                                />
                                <div
                                    className={`absolute bottom-1 right-1 flex items-center justify-center ${isTouchEnabled ? "opacity-100" : "opacity-0"} group-hover:opacity-100 transition-opacity duration-300 cursor-pointer bg-opacity-30 bg-black rounded-md z-50`}
                                    onClick={() => openImage(index)}
                                >
                                    <ZoomIn className="text-gray-100" size={isAbove ? 24 : 16}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isImageOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 cursor-zoom-out" onClick={closeImage}>
                    <button
                        className="absolute top-4 right-4 cursor-zoom-out text-white hover:text-gray-300 transition-colors duration-300"
                        aria-label="Close image"
                        onClick={closeImage}
                    >
                        <X size={24}/>
                    </button>
                    <div className="relative cursor-zoom-out rounded-md outline outline-2 outline-blue-600 outline-offset-1 lg:outline-offset-4 dark:outline-blue-400" onClick={closeImage}>
                        <div className={"max-w-[95svw] max-h-[95svh] 2xl:max-w-[60svw] rounded-md overflow-hidden"}>
                            <img
                                src={sections[currentImage].image}
                                alt={sections[currentImage].title}
                                className="select-none w-svw aspect-auto"
                            />
                            <button
                                className="absolute bottom-1 right-1 xl:hidden cursor-zoom-out text-white hover:text-gray-300 transition-colors duration-300 bg-opacity-30 bg-black rounded-md"
                                aria-label="Unzoom image"
                                onClick={closeImage}
                            >
                                <ZoomOut size={16}/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}