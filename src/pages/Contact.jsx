import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin,
  Send,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    enquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, enquiryType: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Singapore"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["enquiries@dews.sg"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+65 XXXX XXXX"]
    }
  ];

  const enquiryTypes = [
    { value: "freshwater-supply", label: "Freshwater Supply" },
    { value: "demin-water", label: "Demineralised Water" },
    { value: "ro-systems", label: "RO System Design/Build" },
    { value: "dbo-services", label: "Design, Build & Operate Services" },
    { value: "general", label: "General Enquiry" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C6E832]/10 border border-[#C6E832]/20 rounded-full mb-6">
              <Mail className="w-4 h-4 text-[#C6E832]" />
              <span className="text-[#C6E832] text-sm font-medium">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to discuss your water requirements? We're here to help you find 
              the right solution for your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C6E832]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#2E3B8E]" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 mb-1">{item.title}</p>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-slate-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
                <h3 className="font-semibold text-slate-900 mb-3">Operating Hours</h3>
                <p className="text-slate-600 mb-2">Monday – Friday: 9:00 AM – 6:00 PM</p>
                <p className="text-slate-600 mb-4">Saturday: 9:00 AM – 1:00 PM</p>
                <p className="text-sm text-slate-500">
                  For urgent operational enquiries outside these hours, please call our 24/7 operations line.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#C6E832]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-[#2E3B8E]" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent</h3>
                    <p className="text-slate-600 mb-8">
                      Thank you for your enquiry. Our team will review your message and 
                      get back to you within 1-2 business days.
                    </p>
                    <Button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          phone: '',
                          enquiryType: '',
                          message: ''
                        });
                      }}
                      variant="outline"
                    >
                      Send Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us an Enquiry</h2>
                    <p className="text-slate-600 mb-8">
                      Fill out the form below and we'll respond within 1-2 business days.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+65 XXXX XXXX"
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
  <Label htmlFor="enquiryType">Type of Enquiry</Label>
  <select
    id="enquiryType"
    name="enquiryType"
    value={formData.enquiryType}
    onChange={(e) => handleSelectChange(e.target.value)}
    className="h-12 w-full rounded-md border border-slate-200 bg-white px-3 text-sm"
  >
    <option value="">Select enquiry type</option>
    {enquiryTypes.map((type) => (
      <option key={type.value} value={type.value}>
        {type.label}
      </option>
    ))}
  </select>
</div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please describe your water requirements, including approximate volumes, intended use, and any specific quality requirements."
                          rows={6}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full bg-[#2E3B8E] hover:bg-[#253075] h-14 text-lg text-white !text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Enquiry
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-slate-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500">Map will be displayed here</p>
              <p className="text-sm text-slate-400 mt-2">Singapore</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
