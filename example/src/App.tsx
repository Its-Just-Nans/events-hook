import { Receiver } from "./Receiver";
import { Setter } from "./Setter";

function App() {
    return (
        <div className="App">
            <p>Two different components sharing value</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ border: "1px solid black", padding: "10px" }}>
                    <p>Component 1</p>
                    <Setter />
                </div>
                <br />
                <div style={{ border: "1px solid black", padding: "10px" }}>
                    <p>Component 2</p>
                    <Receiver />
                </div>
            </div>
        </div>
    );
}

export default App;
