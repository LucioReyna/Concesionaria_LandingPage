'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface VehicleGalleryProps {
    images: string[]
    alt: string
}

export function VehicleGallery({ images, alt }: VehicleGalleryProps) {
    const [activeSlide, setActiveSlide] = useState(0)
    const [selectedImage, setSelectedImage] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // Sync dots with scroll position on mobile
    const handleScroll = () => {
        if (!scrollContainerRef.current) return
        const { scrollLeft, clientWidth } = scrollContainerRef.current
        const newActiveSlide = Math.round(scrollLeft / clientWidth)
        if (newActiveSlide !== activeSlide) {
            setActiveSlide(newActiveSlide)
        }
    }

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
            return () => scrollContainer.removeEventListener('scroll', handleScroll)
        }
    }, [activeSlide])

    // Use the first image if the array is empty
    const displayImages = images.length > 0 ? images : ["/placeholder.svg"]

    return (
        <div className="space-y-8">
            {/* Desktop Gallery (Hidden on mobile) */}
            <div className="hidden md:block space-y-8">
                <div className="relative aspect-[16/9] rounded-none overflow-hidden border border-white/5 bg-black">
                    <Image
                        src={displayImages[selectedImage]}
                        alt={alt}
                        fill
                        className="object-cover opacity-90 transition-opacity duration-500"
                        priority
                        sizes="(max-width: 768px) 100vw, 66vw"
                    />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-6">
                    {displayImages.map((img, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedImage(i)}
                            className={cn(
                                "relative aspect-video rounded-none overflow-hidden border transition-all duration-300 cursor-pointer bg-card",
                                selectedImage === i
                                    ? "border-primary opacity-100"
                                    : "border-white/5 opacity-50 hover:opacity-100"
                            )}
                        >
                            <Image
                                src={img}
                                alt={`${alt} thumbnail ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="15vw"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Carousel (Visible on mobile only) */}
            <div className="md:hidden relative group">
                {/* Edge Gradients - Visual cue for more content */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none opacity-50" />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none opacity-50" />

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-pan-y"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {displayImages.map((img, i) => (
                        <div
                            key={i}
                            className="flex-[0_0_100%] snap-center relative aspect-[4/3] w-full px-6"
                        >
                            <div className="relative w-full h-full rounded-none overflow-hidden border border-white/5 bg-black">
                                <Image
                                    src={img}
                                    alt={`${alt} view ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    loading={i === 0 ? "eager" : "lazy"}
                                    sizes="100vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {displayImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                scrollContainerRef.current?.scrollTo({
                                    left: i * scrollContainerRef.current.clientWidth,
                                    behavior: 'smooth'
                                })
                            }}
                            className={cn(
                                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                activeSlide === i
                                    ? "bg-primary w-4"
                                    : "bg-white/20"
                            )}
                            aria-label={`Ir a imagen ${i + 1}`}
                            aria-current={activeSlide === i ? "true" : "false"}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
