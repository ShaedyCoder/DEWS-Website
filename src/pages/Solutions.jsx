import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Droplets, 
  Ship, 
  Cog,
  ArrowRight,
  Filter,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Solutions() {
  const solutions = [
    {
      icon: Ship,
      title: "Desalinated Water Supply",
      description: "Our core business - delivering up to 1,000 MT of freshwater daily to vessels and offshore installations via our purpose-built water tankers with onboard desalination plants.",
      features: [
        "Fleet-based freshwater delivery",
        "Up to 1,000 MT daily capacity",
        "Suitable for drinking and domestic use",
        "Reliable maritime supply"
      ],
      page: "DesalinatedWater",
      badge: "Core Business"
    },
    {
      icon: Filter,
      title: "Demineralised Water",
      description: "High-purity water with minerals removed for industrial applications requiring ultra-clean water, preventing scale buildup and equipment damage.",
      features: [
        "Ideal for electrolysers and fuel cells",
        "Boiler and cooling system applications",
        "Prevents scale and corrosion",
        "Extends equipment lifespan"
      ],
      page: "FreshwaterSolutions",
      badge: "Industrial Grade"
    },
    {
      icon: Cog,
      title: "RO System Design, Build & Operate",
      description: "Complete water treatment solutions from initial design and installation through ongoing operation and maintenance of reverse osmosis systems.",
      features: [
        "Custom system design",
        "Professional installation",
        "Ongoing operation & maintenance",
        "Performance optimization"
      ],
      page: "ROSystems",
      badge: "Full Service"
    }
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
              <Droplets className="w-4 h-4 text-[#C6E832]" />
              <span className="text-[#C6E832] text-sm font-medium">Freshwater Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Water Solutions for Your Operations
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From barge-based desalinated water supply to industrial-grade demineralised water and complete 
              RO system services, we provide the water quality your operations demand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Solutions
            </h2>
            <p className="text-lg text-slate-600">
              Choose the water solution that fits your operational requirements
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl border-2 border-slate-200 hover:border-[#C6E832] transition-all duration-300 overflow-hidden group flex flex-col"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-[#C6E832]/10 rounded-xl flex items-center justify-center group-hover:bg-[#C6E832]/20 transition-colors">
                      <solution.icon className="w-7 h-7 text-[#2E3B8E]" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <Zap className="w-4 h-4 text-[#C6E832] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={createPageUrl(solution.page)}>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 group-hover:bg-[#2E3B8E]">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#2E3B8E] to-[#1F2970]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure Which Solution You Need?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Contact our team to discuss your water requirements and find the right solution for your operations.
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