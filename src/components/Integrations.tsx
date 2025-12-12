import { ArrowRight, Mail, MessageSquare, Calendar, Sheet, ShoppingCart, CreditCard, Box, Zap, Lightbulb, Brain, Share2, Slack, MessageCircle, DollarSign, PlayCircle, FileText } from 'lucide-react';

const integrations = [
  { name: 'WhatsApp', icon: MessageSquare, description: 'Direct messaging' },
  { name: 'Telegram', icon: MessageCircle, description: 'Instant communication' },
  { name: 'Gmail', icon: Mail, description: 'Email automation' },
  { name: 'Google Calendar', icon: Calendar, description: 'Schedule management' },
  { name: 'Google Sheets', icon: Sheet, description: 'Data spreadsheets' },
  { name: 'Shopify', icon: ShoppingCart, description: 'E-commerce store' },
  { name: 'Stripe', icon: CreditCard, description: 'Payment processing' },
  { name: 'WooCommerce', icon: Box, description: 'WordPress commerce' },
  { name: 'Make', icon: Zap, description: 'Workflow automation' },
  { name: 'Zapier', icon: Lightbulb, description: 'App integration' },
  { name: 'OpenAI', icon: Brain, description: 'AI models' },
  { name: 'Anthropic', icon: Lightbulb, description: 'Claude AI' },
  { name: 'Meta API', icon: Share2, description: 'Meta platforms' },
  { name: 'Instagram Graph API', icon: Share2, description: 'Instagram access' },
  { name: 'X API', icon: Share2, description: 'Twitter integration' },
  { name: 'Twilio', icon: MessageSquare, description: 'SMS & voice' },
  { name: 'Notion', icon: FileText, description: 'Knowledge base' },
  { name: 'Slack', icon: Slack, description: 'Team messaging' },
  { name: 'Discord', icon: MessageCircle, description: 'Community chat' },
  { name: 'PayPal', icon: DollarSign, description: 'Payments' },
  { name: 'YouTube API', icon: PlayCircle, description: 'Video platform' },
  { name: 'Facebook Conversions', icon: Share2, description: 'Conversion tracking' },
];

export default function Integrations() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden" id="integrations">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#FF00FB]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Integrations &<br />
            <span className="gradient-text">Connected Apps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with 1000+ apps and streamline your workflow with seamless integrations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={index}
                className="integration-card group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="integration-logo">
                  <Icon className="w-8 h-8 text-[#FF00FB] group-hover:text-white transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-[#FF00FB] transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    {integration.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center pt-8 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
          <button className="group gradient-button px-10 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-3 shadow-2xl">
            View all integrations
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
