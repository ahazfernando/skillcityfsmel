import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.skillcityfs.com.au";

    const blogPosts = [1, 2, 3, 4, 5, 6, 7];
    const blogUrls = blogPosts.map((id) => ({
        url: `${baseUrl}/blog/${id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
        { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
        { url: `${baseUrl}/services/house-cleaning`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.85 },
        { url: `${baseUrl}/services/builders-cleaning`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.85 },
        { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
        { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.8 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
        ...blogUrls,
    ];
}
