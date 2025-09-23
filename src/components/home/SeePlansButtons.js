"use client";

export default function SeePlansButton({ 
    text = "See Plans", 
    className = "", 
    baseClasses = false,
    targetId = "package-prices-section",
    onClick,
    ...props 
}) {
    const defaultStyles = "inline-block bg-white text-[#0066CC] font-bold border border-none px-10 py-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer mt-7";
    
    // If baseClasses is true, add inline-block and cursor-pointer to custom className
    const finalClassName = baseClasses && className 
        ? `inline-block cursor-pointer ${className}`
        : (className || defaultStyles);

    const scrollToSection = () => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            scrollToSection();
        }
    };

    return (
        <div
            className={finalClassName}
            onClick={handleClick}
            {...props}
        >
            {text}
        </div>
    );
}