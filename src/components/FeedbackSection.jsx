import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "help",
  });
  // const [name, setName] = useState("");
  // const [hasError, setHasError] = useState(true);
  // const [reason, setReason] = useState("help");

  function handleNameCnange(e) {
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
      hasError: e.target.value.trim().length === 0,
    }));
    // setName();
    // setHasError();

    // setForm({
    //   name: e.target.value,
    //   hasError: e.target.value.trim().length === 0,
    // });
  }

  // function toggleError() {
  // setHasError(!hasError);
  // setHasError((prev) => !prev);
  // }

  return (
    <section>
      <h3>Обратная связь</h3>

      {/* <Button onClick={toggleError}>Toggle error</Button> */}

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{ border: form.hasError ? "1px solid red" : null }}
          onChange={handleNameCnange}
        />

        <label htmlFor="reason">Тема обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, reason: e.target.value }))
          }
          // onChange={(e) => setReason(e.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>

      <pre>
        {JSON.stringify(form, null, 2)}
        {/* Name: {form.name}
        <br />
        Reason: {form.reason} */}
      </pre>
    </section>
  );
}
