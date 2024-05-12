export default function Stats() {
  return (
    <section className="stats">
      <Stat number={0} label="words" />
      <Stat number={0} label="characters" />
      <Stat number={280} label="instagram" />
      <Stat number={2200} label="facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
