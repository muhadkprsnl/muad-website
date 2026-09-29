import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface SplitTextProps {
    text: string | string[];
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string;
    splitType?: 'chars' | 'words' | 'lines';
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    threshold?: number;
    rootMargin?: string;
    textAlign?: 'left' | 'center' | 'right';
    stagger?: number;
    onLetterAnimationComplete?: () => void;
}

const SplitText = ({
    text,
    className = '',
    delay = 0,
    duration = 0.6,
    ease = 'power3.out',
    splitType = 'chars',
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    stagger = 0.02,
    onLetterAnimationComplete
}: SplitTextProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!textRef.current) return;

        const chars = textRef.current.querySelectorAll('.char');
        const words = textRef.current.querySelectorAll('.word');
        const lines = textRef.current.querySelectorAll('.line');

        let elements: Element[] = [];

        switch (splitType) {
            case 'chars':
                elements = Array.from(chars);
                break;
            case 'words':
                elements = Array.from(words);
                break;
            case 'lines':
                elements = Array.from(lines);
                break;
        }

        const tl = gsap.timeline({
            delay: delay / 1000,
            onComplete: onLetterAnimationComplete
        });

        tl.fromTo(elements,
            { ...from },
            {
                ...to,
                duration: duration,
                ease: ease,
                stagger: stagger
            }
        );

    }, {
        dependencies: [text],
        scope: containerRef,
        revertOnUpdate: true
    });

    const renderText = () => {
        if (Array.isArray(text)) {
            return text.map((line, lineIndex) => (
                <div key={lineIndex} className="line">
                    {line.split(' ').map((word, wordIndex) => (
                        <span key={wordIndex} className="word inline-block">
                            {word.split('').map((char, charIndex) => (
                                <span key={charIndex} className="char inline-block">
                                    {char}
                                </span>
                            ))}
                            {wordIndex < line.split(' ').length - 1 && ' '}
                        </span>
                    ))}
                </div>
            ));
        }

        return (
            <div className="line">
                {text.split(' ').map((word, wordIndex) => (
                    <span key={wordIndex} className="word inline-block">
                        {word.split('').map((char, charIndex) => (
                            <span key={charIndex} className="char inline-block">
                                {char}
                            </span>
                        ))}
                        {wordIndex < text.split(' ').length - 1 && ' '}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div ref={containerRef} className={className} style={{ textAlign }}>
            <div ref={textRef}>
                {renderText()}
            </div>
        </div>
    );
};

export default SplitText;