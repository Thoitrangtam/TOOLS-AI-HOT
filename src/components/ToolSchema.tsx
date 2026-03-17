import React from 'react';
import { AITool } from '../data/tools';

interface SchemaProps {
  tool: AITool;
  language: 'en' | 'vi';
}

export const ToolSchema: React.FC<SchemaProps> = ({ tool, language }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "operatingSystem": "Web",
    "applicationCategory": tool.category,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": tool.rating,
      "reviewCount": tool.reviewCount
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": tool.description[language],
    "image": tool.logo
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};
