import "./styles.css";
import NavigationBar, { NavigationTypes } from "./atoms/navigationBar";

export default function App() {
  return (
    <div className="App">
      <h1>React Nested Navigation bar</h1>
      <NavigationBar
        type={NavigationTypes.NAV_BAR}
        items={[
          {
            value: "One",
            items: [
              { value: "Orange", items: [{ value: "Mandarin" }] },
              { value: "Apple" }
            ]
          },
          { value: "Two", link: "www.google.com" },
          { value: "Three" }
        ]}
      />
    </div>
  );
}
