import { useState } from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import { ways, differences } from "./data";

export default function App() {
  const [contentType, setcontentType] = useState(null);

  function handleClick(type) {
    setcontentType(type);
    console.log(contentType);
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
          <Button
            isActive={contentType === "way"}
            onClick={() => handleClick("way")}
          >
            Подход
          </Button>
          <Button
            isActive={contentType === "easy"}
            onClick={() => handleClick("easy")}
          >
            Доступность
          </Button>
          <Button
            isActive={contentType === "program"}
            onClick={() => handleClick("program")}
          >
            Концентрация
          </Button>

          {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Click the Button</p>
          )} */}

          {/* {!contentType ? <p>Click the Button</p> : null}
          {contentType ? <p>{differences[contentType]}</p> : null} */}

          {!contentType && <p>Click the Button</p>}
          {contentType && <p>{differences[contentType]}</p>}
        </section>
      </main>
    </div>
  );
}
