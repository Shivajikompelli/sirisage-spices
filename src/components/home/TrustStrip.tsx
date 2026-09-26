const SIGNALS = [
  "100% Pure & Natural",
  "Sourced from Trusted Farms",
  "No Artificial Additives",
  "Authentic Indian Flavours",
];

export function TrustStrip() {
  return (
    <section className="border-y border-ink/10 bg-parchment py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 text-center md:grid-cols-4">
        {SIGNALS.map((signal) => (
          <p key={signal} className="text-sm text-ink/80">
            {signal}
          </p>
        ))}
      </div>
    </section>
  );
}
