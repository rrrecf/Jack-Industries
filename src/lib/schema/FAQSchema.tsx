import { FAQPage } from 'schema-dts';

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } as FAQPage;
}; 