import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div>
      <div>
        <h1>Button</h1>
        <Button type={1} />
        <Button type={3} />
        <Button type={4} />
        <br />
        <Button type={2} />
        <Button type={5} />
        <Button type={6} />
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
}

export default App;
