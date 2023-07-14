# events-hook

Easily sharing state between component

## Example

```js
import { useGetValue } from "events-hook";

export const Receiver = () => {
    const value = useGetValue("test");
    return <div>{JSON.stringify(value)}</div>;
};
```

```js
import { useSetValue } from "events-hook";

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
```

See `example/` for a working example

## License

Licensed under the MIT License - [LICENSE](LICENSE)
