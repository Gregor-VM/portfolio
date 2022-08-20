import { useEffect, useState } from "react";

interface Ref {
  current: HTMLDivElement | HTMLHeadingElement
}

const useScrollRefProp = (myRef : Ref, handleSetRef : (ref: string | null) => void, currentRef : string, thisRefName: string) => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {

    if (myRef?.current && (currentRef === thisRefName)) {
      handleSetRef(null);
      setScroll(true);
    }
  }, [currentRef]);

  useEffect(() => {
    if(scroll){
      myRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setScroll(false);
    }
  }, [scroll])

  return scroll;

}

export default useScrollRefProp;
