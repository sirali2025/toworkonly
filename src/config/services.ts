import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  Handshake,
  MessageCircle,
  PenTool,
  Settings,
  ShoppingCart,
  Sparkles,
  Target
} from 'lucide-react';

export type ServiceConfig = {
  id: string;
  title: string;
  shortDescription: string;
  highlights: string[];
  Icon: LucideIcon;
};

export const servicesConfig: ServiceConfig[] = [
  {
    id: 'strategic-partnership',
    title: 'Strategic Partnership',
    shortDescription: 'Long-term AI partnership that compounds revenue and efficiency.',
    highlights: [
      'Business process analysis & optimization',
      'Long-term AI infrastructure planning',
      'Continuous performance monitoring'
    ],
    Icon: Handshake
  },
  {
    id: 'sales-marketing',
    title: 'Sales & Marketing',
    shortDescription: 'AI-powered campaigns, content, and conversion automation.',
    highlights: [
      'AI content for ads, product pages, and socials',
      'Automated WhatsApp/Telegram/email sequences',
      'Smart lead scoring & CRM automation'
    ],
    Icon: ShoppingCart
  },
  {
    id: 'customer-support',
    title: 'Customer Support & Automation',
    shortDescription: 'Instant support + lower workload with multilingual automation.',
    highlights: [
      'Chatbots in multiple languages',
      'Ticket management & automated replies',
      'Escalation flows for complex queries'
    ],
    Icon: MessageCircle
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics & Reporting',
    shortDescription: 'Dashboards and predictive insight for faster decisions.',
    highlights: [
      'Sales & marketing dashboards',
      'Automated KPI reporting',
      'AI-driven trend prediction'
    ],
    Icon: BarChart3
  },
  {
    id: 'operations-automation',
    title: 'Operations & Workflow Automation',
    shortDescription: 'Replace repetitive operations with reliable, auditable workflows.',
    highlights: [
      'Order & fulfillment workflows',
      'Integration between tools & platforms',
      'Recurring task scheduling'
    ],
    Icon: Settings
  },
  {
    id: 'content-media',
    title: 'AI Content & Media Creation',
    shortDescription: 'High-quality content at scale—writing, visuals, and video.',
    highlights: [
      'AI-written articles & blog posts',
      'Motion graphics & AI video generation',
      'Image enhancement & design'
    ],
    Icon: PenTool
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation & Prospecting',
    shortDescription: 'Find, qualify, and contact ideal clients with precision.',
    highlights: [
      'Automated lead scraping & enrichment',
      'Targeted outreach workflows',
      'Lead scoring & prioritization'
    ],
    Icon: Target
  },
  {
    id: 'custom-workflows',
    title: 'Custom Workflows',
    shortDescription: 'Tailor-made automations for unique constraints and edge cases.',
    highlights: [
      'Custom AI agents',
      'Monitoring & optimization',
      'Integrations with existing tools & platforms'
    ],
    Icon: Sparkles
  }
];
