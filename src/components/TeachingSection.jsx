import WayToTeach from "./WayToTeach";
import { ways } from "../data";

export default function TeachingSection() {
  return (
    <section>
      <h3>Наш поход к обучению</h3>

      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}
        {/* <WayToTeach {...ways[1]} />
      <WayToTeach {...ways[2]} /> */}
      </ul>
    </section>
  );
}
