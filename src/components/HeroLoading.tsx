import { useEffect, useState } from "react";
import { GradientText } from "@/components/ui/shadcn-io/gradient-text/index";

const HeroLoading = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        console.log("HeroLoading mounted");

        // Faster loading - complete after 1 second
        const timeout = setTimeout(() => {
            console.log("Loading complete");
            setIsFadingOut(true);
            setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => {
                    console.log("Calling onLoadingComplete");
                    onLoadingComplete();
                }, 150);
            }, 300);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [onLoadingComplete]);

    if (!isVisible) return null;

    return (
        <div className={`
            fixed inset-0 z-[9999] bg-black flex items-center justify-center
            transition-all duration-500 ease-in-out
            ${isFadingOut ? 'opacity-0 -translate-y-8' : 'opacity-100 translate-y-0'}
        `}>
            <div className={`
                relative z-10 text-center
                transition-all duration-500 ease-in-out
                ${isFadingOut ? 'opacity-0 -translate-y-6 scale-95' : 'opacity-100 translate-y-0 scale-100'}
            `}>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tighter">
                    <GradientText
                        text="Muhad K"
                        gradient="linear-gradient(90deg, #3b82f6 0%, #ef4444 100%)"
                        className="font-oswald font-extralight"
                    />
                </h1>
            </div>
        </div>
    );
};
// ss

export default HeroLoading;
