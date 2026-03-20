import React from 'react';
import { AITool } from '../types';

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
      "reviewCount": tool.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": tool.pricing?.[language] === "Free" || tool.pricing?.[language] === "Miễn phí" ? "0" : undefined,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "description": tool.description?.[language] || "",
    "image": tool.logo,
    "url": `https://auraai.vn/tool/${tool.slug || tool.domain}`,
    "author": {
      "@type": "Organization",
      "name": "Aura AI"
    },
    "featureList": tool.features?.[language]?.join(", "),
    "screenshot": tool.screenshots?.[0]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};
