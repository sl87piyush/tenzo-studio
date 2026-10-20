import { breadcrumbSchema } from "../seo";

export default function Breadcrumbs({ name, path }) {
  const items = [{ name: "Home", path: "/" }, { name, path }];
  return <>
    <nav className="seo-breadcrumbs container" aria-label="Breadcrumb">
      <ol><li><a href="/">Home</a></li><li aria-current="page">{name}</li></ol>
    </nav>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(items)).replace(/</g, "\\u003c") }} />
  </>;
}
