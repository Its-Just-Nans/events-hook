import { useSetValue } from "../../";

export const Setter = () => {
    const setter = useSetValue("test");
    return (
        <input
            onChange={(currentEvent) => {
                setter(currentEvent.target.value);
            }}
        />
    );
};
