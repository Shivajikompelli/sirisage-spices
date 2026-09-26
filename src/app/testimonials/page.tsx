import { testimonials } from "@/data/testimonials";

export default function TestimonialsPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-serif text-3xl text-ink">What Our Customers Say</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote key={t.id} className="rounded-card border border-ink/10 bg-white p-6">
            <p className="text-sm text-ink/80">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4 text-xs text-ink/50">{t.theme}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
