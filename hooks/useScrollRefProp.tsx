import { useEffect } from "react";

const useScrollRefProp = (myRef, handleSetRef, currentRef, thisRefName) =>
  useEffect(() => {
    if (myRef?.current && currentRef === thisRefName) {
      myRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      handleSetRef(null);
    }
  }, [currentRef]);

export default useScrollRefProp;
