"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { cn } from "@/lib/utils";

// Main AnimatedCard Component
interface AnimatedCardProps {
  title?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  actions?: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
  }>;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bodyClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
  actionsClassName?: string;
}

export function AnimatedCard({
  title,
  description,
  image,
  actions = [],
  children,
  className,
  containerClassName,
  bodyClassName,
  titleClassName,
  descriptionClassName,
  imageClassName,
  actionsClassName,
}: AnimatedCardProps) {
  return (
    <CardContainer className={cn("inter-var", containerClassName)}>
      <CardBody
        className={cn(
          "bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border",
          bodyClassName
        )}
      >
        {title && (
          <CardItem
            translateZ="50"
            className={cn(
              "text-xl font-bold text-neutral-600 dark:text-white",
              titleClassName
            )}
          >
            {title}
          </CardItem>
        )}
        
        {description && (
          <CardItem
            as="p"
            translateZ="60"
            className={cn(
              "text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300",
              descriptionClassName
            )}
          >
            {description}
          </CardItem>
        )}
        
        {image && (
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={image.src}
              height={image.height || 1000}
              width={image.width || 1000}
              className={cn(
                "h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl",
                imageClassName
              )}
              alt={image.alt}
            />
          </CardItem>
        )}
        
        {children && (
          <CardItem translateZ="70" className="w-full">
            {children}
          </CardItem>
        )}
        
        {actions.length > 0 && (
          <div className={cn("flex justify-between items-center mt-20", actionsClassName)}>
            {actions.map((action, index) => (
              <CardItem
                key={index}
                translateZ="20"
                as={action.href ? "a" : "button"}
                {...(action.href ? { href: action.href, target: "__blank" } : {})}
                {...(action.onClick ? { onClick: action.onClick } : {})}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-normal transition-colors",
                  action.variant === "primary"
                    ? "bg-black dark:bg-white dark:text-black text-white font-bold"
                    : "dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800",
                  className
                )}
              >
                {action.label}
              </CardItem>
            ))}
          </div>
        )}
      </CardBody>
    </CardContainer>
  );
} 