// Promo animation link data
// Each column has 12 items for good visual density

export interface PromoLinkData {
  title: string;
  description?: string;
  icon: string;
  color: 'base' | 'primary' | 'secondary' | 'neutral';
  linkType: 'default' | 'newTab' | 'download';
}

// Left column - social media and community focused (16 items for better coverage when scrolling up)
export const leftColumnLinks: PromoLinkData[] = [
  { title: "Follow on Twitter", icon: "local:x", color: "base", linkType: "newTab" },
  { title: "GitHub Projects", icon: "local:github", color: "primary", linkType: "newTab" },
  { title: "Weekly Newsletter", description: "Subscribe for updates", icon: "local:mail", color: "secondary", linkType: "default" },
  { title: "Latest Blog Post", description: "Read my thoughts", icon: "local:read", color: "neutral", linkType: "default" },
  { title: "YouTube Channel", icon: "local:youtube", color: "base", linkType: "newTab" },
  { title: "Free eBook", description: "Download now", icon: "local:download", color: "primary", linkType: "download" },
  { title: "Discord Community", icon: "local:discord", color: "secondary", linkType: "newTab" },
  { title: "Portfolio Site", icon: "local:globe", color: "base", linkType: "newTab" },
  { title: "Dribbble Shots", icon: "local:dribbble", color: "neutral", linkType: "newTab" },
  { title: "Buy Me a Coffee", description: "Support my work", icon: "local:coffee", color: "primary", linkType: "newTab" },
  { title: "Instagram", icon: "local:instagram", color: "secondary", linkType: "newTab" },
  { title: "My Podcast", description: "Listen now", icon: "local:headphones", color: "base", linkType: "default" },
  { title: "Stack Overflow", icon: "local:code", color: "neutral", linkType: "newTab" },
  { title: "Dev.to Articles", description: "Tech writing", icon: "local:read", color: "primary", linkType: "newTab" },
  { title: "Ko-fi Support", icon: "local:heart", color: "secondary", linkType: "newTab" },
  { title: "Linktree Alt", icon: "local:link", color: "base", linkType: "newTab" },
];

// Center column - alternates between regular links and logo cards
export const centerColumnLinks: PromoLinkData[] = [
  { title: "About Me", icon: "local:id-card", color: "primary", linkType: "default" },
  { title: "LinkTower", description: "Open Source Link Hub", icon: "local:link", color: "base", linkType: "newTab" }, // Logo card
  { title: "Contact", icon: "local:send", color: "secondary", linkType: "default" },
  { title: "LinkTower", description: "Customize Your Links", icon: "local:sparkles", color: "primary", linkType: "newTab" }, // Logo card
  { title: "View Blog", icon: "local:read", color: "base", linkType: "default" },
  { title: "LinkTower", description: "Easy Setup", icon: "local:code", color: "neutral", linkType: "newTab" }, // Logo card
  { title: "LinkedIn", icon: "local:linkedin", color: "secondary", linkType: "newTab" },
  { title: "LinkTower", description: "Self-Hosted", icon: "local:globe", color: "base", linkType: "newTab" }, // Logo card
  { title: "My Resume", description: "Download PDF", icon: "local:download", color: "neutral", linkType: "download" },
  { title: "LinkTower", description: "Beautiful Themes", icon: "local:star", color: "secondary", linkType: "newTab" }, // Logo card
];

// Right column - more varied content
export const rightColumnLinks: PromoLinkData[] = [
  { title: "Spotify Playlist", icon: "local:spotify", color: "secondary", linkType: "newTab" },
  { title: "Twitch Stream", icon: "local:twitch", color: "base", linkType: "newTab" },
  { title: "Code Templates", description: "Free resources", icon: "local:code", color: "primary", linkType: "download" },
  { title: "Join Newsletter", icon: "local:mail", color: "neutral", linkType: "default" },
  { title: "Design Portfolio", icon: "local:figma", color: "base", linkType: "newTab" },
  { title: "Quick Tips", description: "Dev tricks", icon: "local:lightbulb", color: "secondary", linkType: "default" },
  { title: "Reddit Community", icon: "local:reddit", color: "primary", linkType: "newTab" },
  { title: "Shop Merch", description: "Get the gear", icon: "local:shopping-bag", color: "base", linkType: "default" },
  { title: "Patreon", description: "Support creators", icon: "local:heart", color: "neutral", linkType: "newTab" },
  { title: "Bluesky", icon: "local:bluesky", color: "secondary", linkType: "newTab" },
  { title: "Telegram Group", icon: "local:telegram", color: "primary", linkType: "newTab" },
  { title: "Gaming Setup", description: "My gear", icon: "local:gamepad", color: "base", linkType: "default" },
];

// Helper to check if a center column item should show logo
export function shouldShowLogo(index: number): boolean {
  return index % 2 === 1; // Every other item (1, 3, 5, 7, 9, 11)
}
