"use client";

import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const slides = [
    {
        subtitle: "The Chloe Collection",
        title: "The Project Jacket",
        image: "/images/test01.jpg",
        link: "#",
    },
    {
        subtitle: "The Chloe Collection",
        title: "Another Stylish Jacket",
        image: "/images/test01.jpg",
        link: "#",
    },
    {
        subtitle: "The Chloe Collection",
        title: "Modern Winter Coat",
        image: "/images/test01.jpg",
        link: "#",
    },
];

export default function BannerSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            slides: { perView: 1 },
            duration: 1200,
            dragSpeed: 0.8,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
        },
        [
            (slider) => {
                let timeout: any;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 4000);
                }

                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    return (
        <section className="banner relative">
            <div ref={sliderRef} className="keen-slider">
                {slides.map((slide, idx) => (
                    <div
                        key={idx}
                        className="keen-slider__slide h-[500px] bg-center bg-cover flex items-center justify-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="bg-black/50 p-8 rounded text-center text-white max-w-xl">
                            <span className="text-sm tracking-widest uppercase block mb-2">
                                {slide.subtitle}
                            </span>
                            <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                            <a
                                href={slide.link}
                                className="inline-block px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                            >
                                Shop now
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => instanceRef.current?.moveToIdx(i)}
                        className={`w-3 h-3 rounded-full ${currentSlide === i ? "bg-red-600" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
