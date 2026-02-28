import { useState, useEffect } from 'react';

export const useTypingEffect = (texts: string[], typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout);
    }, [blink]);

    // Typing logic
    useEffect(() => {
        // If waiting at the end of a word
        if (subIndex === texts[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => setReverse(true), pauseDuration);
            return () => clearTimeout(timeout);
        }

        // If finished deleting a word - wrap in timeout to avoid sync setState in effect
        if (subIndex === 0 && reverse) {
            const timeout = setTimeout(() => {
                setReverse(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }, 300);
            return () => clearTimeout(timeout);
        }

        // Normal typing/deleting
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return `${texts[index].substring(0, subIndex)}${blink ? '|' : ''}`;
};
