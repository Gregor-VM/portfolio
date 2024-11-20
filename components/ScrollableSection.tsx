import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

type IScrollableSectionProps = {
    id: string;
};
  
export const ScrollableSection: React.FC<IScrollableSectionProps> = ({id, children}) => {
    const router = useRouter();
    const hashMatchRegex = useRef(new RegExp(/(?<=#)\w*/));
    const scrollTargetElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const match = router.asPath.match(hashMatchRegex.current);
        if (match && match[0] === id) {
            scrollTargetElementRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [id, router.asPath]);

    return (
        <div ref={scrollTargetElementRef}>
        {children}
        </div>
    );
};