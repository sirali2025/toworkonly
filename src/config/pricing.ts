import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  BarChart3,
  Briefcase,
  Clock,
  Layers,
  TrendingDown,
  TrendingUp,
  Zap
} from 'lucide-react';

export type PricingModuleConfig = {
  id: string;
  title: string;
  shortDescription: string;
  bullets: string[];
  Icon: LucideIcon;
  accent: {
    from: string;
    to: string;
  };
};

export const pricingModulesConfig: PricingModuleConfig[] = [
  {
    id: 'hourly',
    title: 'Hourly Pricing',
    shortDescription: 'Pay only for the time it takes to build your automation.',
    bullets: ['Best for small projects', 'Transparent time logs', 'Flexible scope'],
    Icon: Clock,
    accent: { from: '#22d3ee', to: '#a78bfa' }
  },
  {
    id: 'project',
    title: 'Project-Based Pricing',
    shortDescription: 'Fixed price for a clearly defined automation build.',
    bullets: ['Clear deliverables', 'Predictable budget', 'Timeline-driven'],
    Icon: Briefcase,
    accent: { from: '#38bdf8', to: '#34d399' }
  },
  {
    id: 'subscription',
    title: 'Subscription (Monthly Retainer)',
    shortDescription: 'Continuous improvements, maintenance, and new workflows monthly.',
    bullets: ['Ongoing optimization', 'Priority support', 'Monthly roadmap'],
    Icon: BarChart3,
    accent: { from: '#60a5fa', to: '#22d3ee' }
  },
  {
    id: 'cost-saving',
    title: 'Cost-Saving Pricing',
    shortDescription: 'Pricing linked to verified operational savings.',
    bullets: ['Aligned incentives', 'Baseline audit', 'Savings verification'],
    Icon: TrendingDown,
    accent: { from: '#34d399', to: '#22c55e' }
  },
  {
    id: 'revenue',
    title: 'Revenue-Based Pricing',
    shortDescription: 'Pay based on incremental revenue produced by automation.',
    bullets: ['Shared upside', 'Attribution tracking', 'Setup + share'],
    Icon: TrendingUp,
    accent: { from: '#f472b6', to: '#22d3ee' }
  },
  {
    id: 'value',
    title: 'Value-Based Pricing',
    shortDescription: 'Price anchored to business impact, not hours.',
    bullets: ['Outcome-focused', 'Mission-critical fit', 'High-leverage'],
    Icon: Zap,
    accent: { from: '#a78bfa', to: '#22d3ee' }
  },
  {
    id: 'hybrid',
    title: 'Hybrid Pricing',
    shortDescription: 'Blend fixed, hourly, and performance for complex systems.',
    bullets: ['Balanced risk', 'Lower setup', 'Evolves over time'],
    Icon: Layers,
    accent: { from: '#22d3ee', to: '#fb7185' }
  },
  {
    id: 'usage',
    title: 'Usage-Based Pricing',
    shortDescription: 'Pay per run or per resource—scales with real usage.',
    bullets: ['Great for high-traffic', 'Tiered unit costs', 'Execution logs'],
    Icon: Activity,
    accent: { from: '#22d3ee', to: '#fbbf24' }
  }
];
