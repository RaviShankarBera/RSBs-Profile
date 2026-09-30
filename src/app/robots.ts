import type { MetadataRoute } from "next";
import { siteMeta } from "@/content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteMeta.url}/sitemap.xml`,
  };
}
