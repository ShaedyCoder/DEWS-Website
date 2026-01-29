import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Droplets, Ship, Cog, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: Droplets,
      title: "Desalinated Freshwater Supply",
      description: "Reliable freshwater delivery to vessels and offshore operations via our purpose-built water barges."
    },
    {
      icon: Cog,
      title: "Demineralised Water Solutions",
      description: "High-purity water for industrial processes including electrolysers, boilers, and cooling systems."
    },
    {
      icon: Ship,
      title: "Design, Build & Operate",
      description: "End-to-end water treatment solutions from system design through commissioning and ongoing operations."
    }
  ];

  const valuePoints = [
    "Reduce operational downtime with consistent water quality",
    "Extend equipment lifespan through mineral-free supply",
    "Lower maintenance costs and chemical usage",
    "Support sustainability goals with efficient water systems"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        {/* Animated water droplets */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-teal-400/20 rounded-full"
              initial={{ y: -20, x: Math.random() * 100 + '%', opacity: 0 }}
              animate={{ 
                y: '100vh', 
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-[#C6E832]/10 border border-[#C6E832]/20 rounded-full mb-8"
            >
              <img src="https://flagcdn.com/w20/sg.png" srcSet="https://flagcdn.com/w40/sg.png 2x" alt="Singapore" className="w-6 h-4" />
              <span className="text-[#C6E832] text-base font-medium tracking-wide">Singapore-Based Water Solutions</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Your Trusted Partner for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6E832] to-[#A8E635]">
                Freshwater Solutions
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
            >
              DEWS delivers desalinated freshwater and demineralised water solutions that keep your operations running efficiently. 
              From maritime vessels to industrial facilities, we provide the water quality your processes demand.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to={createPageUrl('Solutions')}>
                <Button size="lg" className="bg-[#2E3B8E] hover:bg-[#253075] text-white px-8 py-6 text-lg">
                  Explore Solutions
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-[#2E3B8E] hover:bg-[#253075] text-white px-8 py-6 text-lg font-medium group">
                  Discuss Your Requirements
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Hero Image Placeholder Note */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-900/50 to-slate-900" />
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696d9f184eda294465cb2a7e/8e8785799_venti-views-1cqIcrWFQBI-unsplash.jpg" 
            alt="Aerial view of vessel operations"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      </section>

      {/* Singapore Credibility Bar */}
      <section className="bg-slate-50 border-y border-slate-200 py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#2E3B8E]" />
              <span>Singapore-Based Operations</span>
            </div>
            <div className="w-px h-6 bg-slate-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#2E3B8E]" />
              <span>Rigorous Quality Standards</span>
            </div>
            <div className="w-px h-6 bg-slate-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-[#2E3B8E]" />
              <span>Up to 1,000 MT Daily Capacity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-lg text-slate-300">
              From barge-based freshwater supply to comprehensive water treatment systems, 
              we provide solutions tailored to your operational needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-[#C6E832]/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#C6E832]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C6E832]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#C6E832]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to={createPageUrl('Solutions')}>
              <Button className="bg-[#2E3B8E] hover:bg-[#253075] text-white">
                Learn More About Our Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="pt-20 lg:pt-28 pb-10 lg:pb-14">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How Quality Water Creates Value
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you need freshwater for drinking and domestic use, or demineralised water for sensitive industrial processes, 
              the right water quality directly impacts your operational efficiency and equipment longevity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {valuePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl"
              >
                <div className="w-8 h-8 bg-[#C6E832]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#2E3B8E]" />
                </div>
                <p className="text-slate-700 font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Business Highlight */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop&q=80" 
                alt="Water supply barge operations"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center h-full"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Desalinated Water Supply for Marine Operations
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At the heart of our business, we supply desalinated freshwater to barges, vessels, and offshore installations. 
                Our fleet of water tankers, equipped with onboard desalination plants, delivers up to 1,000 metric tons of 
                freshwater daily across Singapore and the region.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                This reliable supply ensures your crew and operations have access to quality freshwater, 
                regardless of location or circumstances.
              </p>
              <Link to={createPageUrl('Fleet')}>
                <Button className="bg-slate-900 hover:bg-slate-800">
                  View Our Fleet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#2E3B8E] to-[#1F2970]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Discuss Your Water Requirements?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Whether you need regular freshwater supply or a custom water treatment solution, 
              our team is here to help.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-[#C6E832] text-[#2E3B8E] hover:bg-[#B0C828] px-8 py-6 text-lg font-medium">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );

}
