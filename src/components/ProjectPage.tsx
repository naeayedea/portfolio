import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ZoomIn, ZoomOut, X } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ProjectPage.css';

interface ProjectPageProps {
    title: string;
    description: string;
    headerImage: string;
    carouselImages: string[];
    sections: {
        title: string;
        content: string;
        image: string;
        links: { linkName: string, url: string}[]
    }[];
}

export default function ProjectPage({ title, description, headerImage, carouselImages, sections }: ProjectPageProps) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isImageOpen, setIsImageOpen] = useState(false);
    const sectionRefs = useRef(sections.map(() => React.createRef<HTMLDivElement>()));
    const sliderRef = useRef<Slider>(null);

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
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="h-96 bg-cover bg-center" style={{ backgroundImage: `url(${headerImage})` }}>
                <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-white">{title}</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">{description}</p>

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
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
                                <p className="text-gray-700 dark:text-gray-300">{section.content}</p>
                            </div>
                            <div className="md:w-1/2 relative group cursor-pointer" onClick={() => openImage(index)}>
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full md:w-1/2 aspect-square object-cover rounded-lg select-none"
                                />
                                <div
                                    className="absolute bottom-1 right-1 md:right-1/2 flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ZoomIn className="text-gray-300" size={24}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isImageOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 cursor-zoom-out" onClick={closeImage}>
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
                        aria-label="Close image"
                        onClick={closeImage}
                    >
                        <X size={24}/>
                    </button>
                    <div className="relative cursor-pointer" onClick={closeImage}>
                        <img
                            src={sections[currentImage].image}
                            alt={sections[currentImage].title}
                            className="max-w-full max-h-[90vh] object-contain select-none"
                        />
                        <button
                            className="absolute bottom-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
                            aria-label="Unzoom image"
                            onClick={closeImage}
                        >
                            <ZoomOut size={24}/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}