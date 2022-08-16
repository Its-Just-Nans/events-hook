import { useGetValue } from "../../";

export const Receiver = () => {
    const value = useGetValue("test");
    return <div>{JSON.stringify(value)}</div>;
};
