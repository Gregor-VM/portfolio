import { useRouter } from "next/router";
import { useEffect, useRef, type ReactNode } from "react";

interface ScrollableSectionProps {
  id: string;
  children: ReactNode;
}
  
export function ScrollableSection({ id, children }: ScrollableSectionProps) {
  const router = useRouter();
  const scrollTargetElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    if (hash === id) {
      scrollTargetElementRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [id, router.asPath]);

  return <div ref={scrollTargetElementRef}>{children}</div>;
}
