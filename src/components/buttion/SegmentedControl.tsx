'use client'

import { useEffect, useRef, useState } from "react";

interface SegmentData<T> {
  label: string;
  value: T;
}

interface SegmentedControlProps<T extends string | number> {
  name: string;
  segments: SegmentData<T>[];
  callback: (value: T, index: number) => void;
  defaultIndex?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

const SegmentedControl = <T extends string | number>({
  name,
  segments,
  callback,
  defaultIndex = 0,
  paddingHorizontal = 8,
  paddingVertical = 5.5,
}: SegmentedControlProps<T>) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);
  const segmentRefs = useRef<HTMLDivElement[]>([]);
  const highlightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!segmentRefs.current[activeIndex] || !containerRef.current) return;

    const activeSegment = segmentRefs.current[activeIndex];
    const { offsetWidth, offsetLeft } = activeSegment;
    if (highlightRef.current) {
      highlightRef.current.style.width = `${offsetWidth}px`;
      highlightRef.current.style.transform = `translateX(${offsetLeft}px)`;
    }
  }, [activeIndex]);


  const onInputChange = (value: T, index: number) => {
    setActiveIndex(index);
    callback(value, index);
  };

  return (
    <div className="flex justify-center my-10" ref={containerRef}>
      <div
        className="relative flex bg-gray-100 rounded-lg w-full"
        style={{
          padding: `${paddingVertical}px ${paddingHorizontal}px`,
        }}
      >
        {/* 선택된 항목 하이라이트 */}
        <div
          ref={highlightRef}
          className="absolute top-1.5 bottom-1.5 left-0 bg-gray-50 rounded-lg transition-all duration-300"
        ></div>

        {segments.map((item, i) => (
          <div
            key={item.value.toString()}
            ref={(el) => {
              if (el) segmentRefs.current[i] = el;
            }}
            className="relative flex-1 text-center select-none"
            onClick={() => onInputChange(item.value, i)}
          >
            <input
              type="radio"
              id={item.label}
              name={name}
              value={item.value.toString()}
              checked={i === activeIndex}
              className="hidden"
              readOnly
            />
            <label
              htmlFor={item.label}
              className={`block py-2 font-semibold transition-all duration-300 text-gray-900"
                }`}
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SegmentedControl, type SegmentedControlProps, type SegmentData };
