import { useEffect, useRef, useState } from "react";

const useResizeObserver = () => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const [width, setWidth] = useState<string | undefined>();

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setWidth(`${entry.contentRect.width + 35}px`);
            }
        });

        if (ref.current) {
            resizeObserver.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                resizeObserver.unobserve(ref.current);
            }
        };
    }, []);

    return { ref, width };
};

export default useResizeObserver;
