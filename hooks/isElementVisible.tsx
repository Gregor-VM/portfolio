import React, {useRef, useEffect, useState} from 'react'

function isElementVisible(threshold = 0.5) {

    const observeRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(entries => {
            setIsVisible(entries[0].isIntersecting);
            if(entries[0].isIntersecting){
                observer.unobserve(observeRef.current);
            }
        }, {threshold});

        observer.observe(observeRef.current);
        return () => {
            if(observeRef.current) observer.unobserve(observeRef.current);
        }
    }, []);


    return {observeRef, isVisible};
}

export default isElementVisible
