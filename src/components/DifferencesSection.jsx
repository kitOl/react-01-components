import { useState } from "react";
import Button from "./Button/Button";
import { differences } from "../data";

export default function DifferencesSection() {
  const [contentType, setcontentType] = useState(null);

  function handleClick(type) {
    setcontentType(type);
    console.log(contentType);
  }
  return (
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
  );
}
