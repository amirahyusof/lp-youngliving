"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Carousel({ children, showControls = true, autoPlay = false, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const childrenArray = React.Children.toArray(children);
  const childCount = childrenArray.length;

  const handlePrev = () => {
    if (!containerRef.current || !contentRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const newIndex = Math.max(0, currentIndex - 1);

    setCurrentIndex(newIndex);
    setTranslateX(-newIndex * containerWidth);
  };

  const handleNext = () => {
    if (!containerRef.current || !contentRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const contentWidth = contentRef.current.scrollWidth;
    const maxTranslateX = -(contentWidth - containerWidth);

    const newIndex = Math.min(childCount - 1, currentIndex + 1);
    const newTranslateX = -newIndex * containerWidth;

    // Don't scroll past the end
    if (newTranslateX < maxTranslateX) {
      setCurrentIndex(newIndex - 1);
      setTranslateX(maxTranslateX);
    } else {
      setCurrentIndex(newIndex);
      setTranslateX(newTranslateX);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        handleNext();
      }, interval);

      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      setTranslateX(-currentIndex * containerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  return (
    <div className="relative">
      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={contentRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {children}
        </div>
      </div>

      {showControls && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-6 w-6 text-emerald-600" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            onClick={handleNext}
            disabled={currentIndex >= childCount - 1}
          >
            <ChevronRight className="h-6 w-6 text-emerald-600" />
            <span className="sr-only">Next slide</span>
          </Button>
        </>
      )}
    </div>
  );
}

export function CarouselItem({ children }) {
  return <div className="min-w-full md:px-4">{children}</div>;
}
