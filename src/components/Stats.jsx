export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.words} label="words" />
      <Stat number={stats.characters} label="characters" />
      <Stat number={stats.instagram} label="instagram" />
      <Stat number={stats.facebook} label="facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
