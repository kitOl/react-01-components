import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
    // setModal((prev) => !prev);
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Показать информацию</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non sequi
          laudantium placeat atque laboriosam beatae labore libero, quibusdam
          corrupti explicabo optio, doloremque omnis animi ipsam mollitia qui.
          Officiis, voluptatum optio?
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
    </section>
  );
}
