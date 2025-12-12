import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, User, AtSign, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
        {/* Layered Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50/20 to-white -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FF00FB]/20 to-transparent rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
                    Let's Build <span className="gradient-text">Together</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ready to transform your business with AI? Get in touch and let's discuss your vision.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="contact-feature-card group cursor-pointer">
                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-[#FF00FB]/10 rounded-2xl text-[#FF00FB] group-hover:bg-[#FF00FB] group-hover:text-white transition-all duration-300">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-2">Email Us</h3>
                                <p className="text-gray-600 mb-2">
                                    Drop us a line and we'll get back to you within 24 hours
                                </p>
                                <a href="mailto:aks.ai.strategic.partner@gmail.com" className="text-[#FF00FB] font-semibold hover:text-[#CC00C9] transition-colors">
                                    aks.ai.strategic.partner@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-feature-card group cursor-pointer">
                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-[#FF00FB]/10 rounded-2xl text-[#FF00FB] group-hover:bg-[#FF00FB] group-hover:text-white transition-all duration-300">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-2">WhatsApp</h3>
                                <p className="text-gray-600 mb-2">
                                    Message us directly for quick responses
                                </p>
                                <a href="https://wa.me/212781390577" target="_blank" rel="noopener noreferrer" className="text-[#FF00FB] font-semibold hover:text-[#CC00C9] transition-colors">
                                    Start WhatsApp Chat
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-feature-card group cursor-pointer">
                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-[#FF00FB]/10 rounded-2xl text-[#FF00FB] group-hover:bg-[#FF00FB] group-hover:text-white transition-all duration-300">
                                <Send className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-2">Telegram</h3>
                                <p className="text-gray-600 mb-2">
                                    Chat with us instantly on Telegram
                                </p>
                                <a href="https://t.me/+212781390577" target="_blank" rel="noopener noreferrer" className="text-[#FF00FB] font-semibold hover:text-[#CC00C9] transition-colors">
                                    Start Telegram Chat
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF00FB]/10 rounded-bl-[100px] -z-0 opacity-50" />
                    
                    <h3 className="text-2xl font-bold mb-6 relative z-10">Send us a Message</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">Name</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF00FB] transition-colors" />
                                <input 
                                    type="text"
                                    value={formState.name}
                                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#FF00FB] focus:ring-2 focus:ring-[#FF00FB]/20 transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                            <div className="relative group">
                                <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF00FB] transition-colors" />
                                <input 
                                    type="email" 
                                    value={formState.email}
                                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#FF00FB] focus:ring-2 focus:ring-[#FF00FB]/20 transition-all"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
                            <div className="relative group">
                                <MessageCircle className="absolute left-4 top-6 w-5 h-5 text-gray-400 group-focus-within:text-[#FF00FB] transition-colors" />
                                <textarea 
                                    value={formState.message}
                                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 min-h-[150px] outline-none focus:border-[#FF00FB] focus:ring-2 focus:ring-[#FF00FB]/20 transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                />
                            </div>
                        </div>

                        <button 
                            type="submit"
                            className="w-full gradient-button text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-[#FF00FB]/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            <span>Send Message</span>
                            <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    </section>
  );
}
