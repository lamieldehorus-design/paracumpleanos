import { FAQItem } from '../types';

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  className?: string;
}

export function FAQSection({
  faqs,
  title = 'Preguntas frecuentes',
  className = 'section section-soft',
}: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={className}>
      <div className="wrap narrow faq-section">
        <h2>{title}</h2>
        {faqs.map((faq, idx) => {
          const qText = faq.question || faq.q || '';
          const aText = faq.answer || faq.a || '';
          if (!qText) return null;
          return (
            <details key={idx}>
              <summary>{qText}</summary>
              <p>{aText}</p>
            </details>
          );
        })}
      </div>
    </section>
  );
}
