import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jennifer-and-patrick.weddinginvitationrsvp.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://jennifer-and-patrick.weddinginvitationrsvp.com#countdown",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://jennifer-and-patrick.weddinginvitationrsvp.com#gallery",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://jennifer-and-patrick.weddinginvitationrsvp.com#rsvp",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]
}
