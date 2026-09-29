import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Instagram, Github } from "lucide-react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );

        window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;

        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-muted-foreground  text-center"> GET IN TOUCH</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
                    CONTACT ME
                </h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-red-600 mb-4 sm:mb-6 mx-auto"></div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full"
                        />
                    </div>
                    <div>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full"
                        />
                    </div>
                    <div>
                        <Textarea
                            id="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full min-h-[150px]"
                        />
                    </div>
                    <div className="text-center">
                        <Button type="submit" className="bg-gray-900 px-8 py-2 hover:bg-gray-800 text-white">
                            Send Message
                        </Button>
                    </div>
                </form>
            </div >
        </section >
    );
};

export default ContactSection;