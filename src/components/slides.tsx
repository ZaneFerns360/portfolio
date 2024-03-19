import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    imageUrl: string; // New prop for image URL
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      console.log("%cHi Joy", "color: red; font-size: 2em;"); // Adjust font-size as desired
      console.log("%cHi Joy", "color: orange; font-size: 2em;");
      console.log("%cHi Joy", "color: yellow; font-size: 2em;");
      console.log("%cHi Joy", "color: green; font-size: 2em;");
      console.log("%cHi Joy", "color: blue; font-size: 2em;");
      console.log("%cHi Joy", "color: indigo; font-size: 2em;");
      console.log("%cHi Joy", "color: violet; font-size: 2em;");
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden pb-2 font-ls",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[250px] max-w-full flex-shrink-0 rounded-2xl border border-slate-700 px-8 py-6 md:w-[300px] "
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <blockquote className="flex items-center justify-between">
              <span className="text-center text-2xl font-normal leading-[1.6] text-white">
                {item.name}
              </span>
              <img
                src={item.imageUrl} // Display image to the right of text
                alt={`${item.name} `}
                className="h-16 w-16" // Set fixed size for the image
              />
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
