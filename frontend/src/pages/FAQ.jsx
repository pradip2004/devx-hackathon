import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is a Hackathon?",
            answer: "A hackathon is a collaborative event where participants work in teams to create innovative solutions to specific problems within a limited time frame. It's a great opportunity to learn, network, and build something amazing!"
        },
        {
            question: "Who can participate in the Hackathon?",
            answer: "The hackathon is open to all college students. Teams can have 2-4 members. Each team must have at least one member who is currently enrolled in a college or university."
        },
        {
            question: "What are the prizes?",
            answer: "We have exciting prizes worth over ₹1,00,000! The winning team will receive cash prizes, swag, and opportunities for internships. Check out our Prize section for more details."
        },
        {
            question: "Do I need to have coding experience?",
            answer: "While coding experience is helpful, it's not mandatory. We welcome participants of all skill levels. The focus is on innovation and problem-solving. We'll also have mentors available to help you throughout the event."
        },
        {
            question: "What should I bring?",
            answer: "Bring your laptop, charger, student ID, and any other tools you might need. We'll provide food, drinks, and workspace. Make sure to bring your creativity and enthusiasm!"
        },
        {
            question: "Is there a registration fee?",
            answer: "No, participation in the hackathon is completely free! We want to make it accessible to all talented students."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-black relative">
            {/* Background gradient */}
            <div className='absolute inset-0 bg-[radial-gradient(35%_35%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]'></div>
            
            <div className="relative z-10 container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-white/60 text-lg">
                            Find answers to common questions about the hackathon
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className="backdrop-blur-lg bg-black/30 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-purple-500/50"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 flex items-center justify-between text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <HelpCircle className="w-6 h-6 text-purple-500" />
                                        <h3 className="text-xl font-semibold text-white">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    {openIndex === index ? (
                                        <ChevronUp className="w-5 h-5 text-white/60" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-white/60" />
                                    )}
                                </button>
                                
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                                >
                                    <div className="p-6 pt-0 text-white/80">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="mt-16 text-center">
                        <p className="text-white/60 mb-4">
                            Still have questions? We're here to help!
                        </p>
                        <a 
                            href="mailto:contact@hackathon.com" 
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 rounded-lg transition-all duration-300 font-medium text-white shadow-lg hover:shadow-purple-500/25"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;