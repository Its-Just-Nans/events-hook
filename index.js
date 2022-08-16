import { useEffect, useRef, useState } from "react";

const instance = new EventTarget();

export const useGetInstance = () => {
    return instance;
};

export const useSetValue = (str) => {
    const instance = useGetInstance();
    return (obj) => {
        instance.dispatchEvent(new CustomEvent(str, { detail: obj }));
    };
};

export const useGetValue = (str) => {
    const instance = useGetInstance();
    const refValue = useRef(null);
    const [state, setState] = useState(null);
    refValue.current = state;
    const callback = (currentEvent) => {
        setState(currentEvent.detail);
    };
    useEffect(() => {
        instance.addEventListener(str, callback);
        return () => {
            instance.removeEventListener(str, callback);
        };
    });
    return refValue.current;
};
