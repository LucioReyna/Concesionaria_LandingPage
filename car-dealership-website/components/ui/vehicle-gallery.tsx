'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface VehicleGalleryProps {
    images: string[]
    alt: string
}

export function VehicleGallery({ images, alt }: VehicleGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // Sync active index with scroll position
    const handleScroll = () => {
        if (!scrollContainerRef.current) return
        const { scrollLeft, clientWidth } = scrollContainerRef.current
        const newIndex = Math.round(scrollLeft / clientWidth)
        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex)
        }
    }

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
            return () => scrollContainer.removeEventListener('scroll', handleScroll)
        }
    }, [activeIndex])

    const scrollToImage = (index: number) => {
        if (!scrollContainerRef.current) return
        scrollContainerRef.current.scrollTo({
            left: index * scrollContainerRef.current.clientWidth,
            behavior: 'smooth'
        })
    }

    // Use placeholder if the array is empty
    const displayImages = images.length > 0 ? images : ["/placeholder.svg"]

    return (
        <div className="space-y-8">
            {/* Unified Carousel (Swipeable on all screens) */}
            <div className="relative group">
                {/* Edge Gradients - Visual cue for more content (Mobile only) */}
                <div className="md:hidden absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none opacity-50" />
                <div className="md:hidden absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none opacity-50" />

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide touch-pan-y md:aspect-[16/9] aspect-[4/3]"
                >
                    {displayImages.map((img, i) => (
                        <div
                            key={i}
                            className="flex-[0_0_100%] snap-center relative w-full h-full md:px-0 px-6"
                        >
                            <div className="relative w-full h-full rounded-none overflow-hidden border border-white/5 bg-black">
                                <Image
                                    src={img}
                                    alt={`${alt} view ${i + 1}`}
                                    fill
                                    className="object-cover opacity-90"
                                    loading={i === 0 ? "eager" : "lazy"}
                                    sizes="(max-width: 768px) 100vw, 66vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Pagination Dots */}
                <div className="md:hidden flex justify-center gap-2 mt-6">
                    {displayImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToImage(i)}
                            className={cn(
                                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                activeIndex === i ? "bg-primary w-4" : "bg-white/20"
                            )}
                            aria-label={`Ir a imagen ${i + 1}`}
                            aria-current={activeIndex === i ? "true" : "false"}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop Thumbnails */}
            <div className="hidden md:grid grid-cols-4 gap-6">
                {displayImages.map((img, i) => (
                    <div
                        key={i}
                        onClick={() => scrollToImage(i)}
                        className={cn(
                            "relative aspect-video rounded-none overflow-hidden border transition-all duration-300 cursor-pointer bg-card",
                            activeIndex === i
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
    )
}

