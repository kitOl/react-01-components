import { useState } from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import { ways, differences } from "./data";

export default function App() {
  const [content, setContent] = useState("Click Me!");

  function handleClick(type) {
    setContent(type);
    console.log(content);
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш поход к обучению</h3>

          <ul>
            <WayToTeach {...ways[0]} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
          </ul>
        </section>
        <section>
          <h1>Чем мы отличаемся от других</h1>
          <Button onClick={() => handleClick("way")}>Подход</Button>
          <Button onClick={() => handleClick("easy")}>Доступность</Button>
          <Button onClick={() => handleClick("program")}>Концентрация</Button>
          <p className="content">{differences[content]}</p>
        </section>
      </main>
    </div>
  );
}
