import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = ({ elementRef, onIntersect }) => {
    // const [isIntersecting, setIsIntersecting] = useState(false);
    const root = null, rootMargin = '0px', threshold = 0.5

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // setIsIntersecting(true);
                        onIntersect && onIntersect(true); // Call custom callback on intersection
                    } else {
                        // setIsIntersecting(false);
                        onIntersect && onIntersect(false); // Call custom callback on exit
                    }
                });
            },
            {
                root,
                rootMargin,
                threshold,
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        // Cleanup observer on component unmount or if ref changes
        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [onIntersect, elementRef]);

    // return { isIntersecting, elementRef };
    return true
};


export default useIntersectionObserver;
