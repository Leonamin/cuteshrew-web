import { cn } from "@/utils/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonSize = "34" | "36" | "40" | "48";
type ButtonColor = "primary" | "secondary" | "outline" | "error" | "tertiary";
type ButtonRadius = "2" | "4" | "8" | "12" | "16" | "20" | "24" | "28" | "32" | "circle";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  className?: string;
  borderRadius?: ButtonRadius;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

const sizeClass = {
  "34": "px-3 py-2 text-caption1m",
  "36": "px-3 py-2 text-body2m",
  "40": "px-4 py-2.5 text-body2m",
  "48": "px-4 py-3 text-body1m",
} as const;

const colorClass = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-green-500 text-white hover:bg-green-600",
  outline: "bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-50 hover:text-gray-700",
  error: "bg-red-500 text-white hover:bg-red-600",
  tertiary: "bg-gray-500 text-white hover:bg-gray-600",
} as const;

const radiusClass = {
  "2": "rounded-sm",
  "4": "rounded",
  "8": "rounded-lg",
  "12": "rounded-xl",
  "16": "rounded-2xl",
  "20": "rounded-3xl",
  "24": "rounded-3xl",
  "28": "rounded-3xl",
  "32": "rounded-3xl",
  "circle": "rounded-full",
} as const;

const shadowClass = {
  primary: "hover:shadow-primaryShadow",
  secondary: "hover:shadow-secondaryShadow",
  outline: "hover:shadow-tertiaryShadow",
  error: "hover:shadow-dangerShadow",
  tertiary: "hover:shadow-tertiaryShadow",
} as const;

export const SolidButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    size = "40",
    color = "primary",
    fullWidth = false,
    className,
    children,
    disabled,
    borderRadius = "12",
    prefixIcon,
    suffixIcon,
    ...props
  }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center transition-colors duration-200 cursor-pointer",
          fullWidth ? "justify-between px-6 w-full" : "justify-center gap-2",
          sizeClass[size],
          colorClass[color],
          shadowClass[color],
          radiusClass[borderRadius],
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        disabled={disabled}
        {...props}
      >
        {prefixIcon && (
          <span className="flex items-center" style={{ width: "16px", height: "16px" }}>
            {prefixIcon}
          </span>
        )}
        <span className="flex-1 text-center">{children}</span>
        {suffixIcon && (
          <span className="flex items-center" style={{ width: "16px", height: "16px" }}>
            {suffixIcon}
          </span>
        )}
      </button>
    );
  }
);

SolidButton.displayName = "SolidButton";
