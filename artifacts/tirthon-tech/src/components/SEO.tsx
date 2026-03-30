import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  type?: "website" | "article";
  jsonLd?: object;
  keywords?: string;
}

const BASE_URL = "https://tirthontech.com";
const DEFAULT_OG_IMAGE = "/opengraph.jpg";

export function SEO({
  title,
  description,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  jsonLd,
  keywords,
}: SEOProps) {
  const fullTitle = title.includes("Tirthon Tech")
    ? title
    : `${title} | Tirthon Tech`;
  const canonicalUrl = `${BASE_URL}${path}`;
  const ogImageUrl = `${BASE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Per-page JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
