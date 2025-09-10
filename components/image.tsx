"use client";

import React, { useState, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  aspectRatio?: "square" | "video" | "portrait" | "landscape" | number;
  fit?: "cover" | "contain" | "fill" | "scale-down";
  lazy?: boolean;
  blur?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  overlay?: boolean;
  overlayContent?: React.ReactNode;
  priority?: boolean;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      fallback = "/placeholder-image.jpg",
      aspectRatio,
      fit = "cover",
      lazy = true,
      blur = false,
      rounded = "none",
      shadow = "none",
      overlay = false,
      overlayContent,
      priority = false,
      className,
      onLoad,
      onError,
      ...props
    },
    ref
  ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [imageSrc, setImageSrc] = useState(src);
    const [usedFallback, setUsedFallback] = useState(false);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setIsLoading(false);
      onLoad?.(e);
    };

    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setIsLoading(false);

      if (!usedFallback && fallback) {
        // Try fallback image first
        setUsedFallback(true);
        setImageSrc(fallback);
      } else {
        // If fallback also fails or no fallback, show error state
        setHasError(true);
      }

      onError?.(e);
    };

    const getAspectRatioClass = () => {
      if (typeof aspectRatio === "number") {
        return "";
      }
      switch (aspectRatio) {
        case "square":
          return "aspect-square";
        case "video":
          return "aspect-video";
        case "portrait":
          return "aspect-[3/4]";
        case "landscape":
          return "aspect-[4/3]";
        default:
          return "";
      }
    };

    const getRoundedClass = () => {
      switch (rounded) {
        case "sm":
          return "rounded-sm";
        case "md":
          return "rounded-md";
        case "lg":
          return "rounded-lg";
        case "full":
          return "rounded-full";
        default:
          return "";
      }
    };

    const getShadowClass = () => {
      switch (shadow) {
        case "sm":
          return "shadow-sm";
        case "md":
          return "shadow-md";
        case "lg":
          return "shadow-lg";
        case "xl":
          return "shadow-xl";
        default:
          return "";
      }
    };

    const getFitClass = () => {
      switch (fit) {
        case "contain":
          return "object-contain";
        case "fill":
          return "object-fill";
        case "scale-down":
          return "object-scale-down";
        default:
          return "object-cover";
      }
    };

    const containerStyle =
      typeof aspectRatio === "number"
        ? { aspectRatio: aspectRatio.toString() }
        : {};

    return (
      <div
        className={cn(
          "relative overflow-hidden",
          getAspectRatioClass(),
          getRoundedClass(),
          getShadowClass(),
          className
        )}
        style={containerStyle}
      >
        <img
          ref={ref}
          src={imageSrc}
          alt={alt}
          className={cn(
            "w-full h-full transition-all duration-300",
            getFitClass(),
            blur && "blur-sm",
            isLoading && "opacity-0",
            !isLoading && "opacity-100",
            hasError && "opacity-75"
          )}
          loading={lazy && !priority ? "lazy" : "eager"}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />

        {hasError && (
          <div className="absolute inset-0 bg-muted/50 flex items-center justify-center">
            <div className="text-muted-foreground text-center">
              <svg
                className="w-8 h-8 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5C2.962 18.333 3.924 20 5.464 20z"
                />
              </svg>
              <p className="text-xs">Failed to load</p>
            </div>
          </div>
        )}

        {overlay && overlayContent && (
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {overlayContent}
          </div>
        )}
      </div>
    );
  }
);

Image.displayName = "Image";
