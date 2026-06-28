const values = [
  {
    number: "01",
    title: "Qualität",
    description: "Hochwertige Produkte für ein perfektes Ergebnis.",
  },
  {
    number: "02",
    title: "Hygiene",
    description: "Sterile Werkzeuge und höchste Sauberkeitsstandards.",
  },
  {
    number: "03",
    title: "Persönlich",
    description: "Individuelle Beratung und ausreichend Zeit für jede Kundin.",
  },
];

export default function Values() {
  return (
    <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-3">
      {values.map((value) => (
        <div key={value.number} className="text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-[var(--color-muted)]">
            {value.number}
          </p>
          <div className="mx-auto mt-4 h-px w-12 bg-[var(--color-border)]" />
          <h3 className="mt-4 text-x1 font-semibold text-[var(--color-primary)]">
            {value.title}
          </h3>

          <p className="mt-3 leading-7 text-[var(--color-muted)]">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  );
}
