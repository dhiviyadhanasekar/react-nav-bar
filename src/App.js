import "./styles.css";
import NavigationBar from "./atoms/navigationBar";

export default function App() {
  return (
    <div className="App">
      <h1>React Navigation bar</h1>
      <NavigationBar
        items={[
          {
            value: "One"
          },
          { value: "Two" },
          { value: "Three" }
        ]}
      />
    </div>
  );
}
