import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(true);
  const [reason, setReason] = useState("help");

  function handleNameCnange(e) {
    setName(e.target.value);
    setHasError(e.target.value.trim().length === 0);
  }

  function toggleError() {
    // setHasError(!hasError);
    setHasError((prev) => !prev);
  }

  return (
    <section>
      <h3>Обратная связь</h3>

      <Button onClick={toggleError}>Toggle error</Button>

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          style={{ border: hasError ? "1px solid red" : null }}
          onChange={handleNameCnange}
        />

        <label htmlFor="reason">Тема обращения</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        <Button disabled={hasError} isActive={!hasError}>
          Отправить
        </Button>
      </form>

      <pre>
        Name: {name}
        <br />
        Reason: {reason}
      </pre>
    </section>
  );
}
