import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Ship, 
  Droplets, 
  Gauge, 
  Anchor,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Fleet() {
  const vessels = [
    {
      name: "DEWS",
      type: "Water Tanker with Desalination Plant",
      description: "Purpose-built vessel equipped with onboard desalination capability for freshwater production and supply.",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop&q=80"
    },
    {
      name: "PRISM",
      type: "Water Tanker with Desalination Plant",
      description: "Second vessel in our fleet, providing additional capacity and operational redundancy for reliable supply.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const equipment = [
    {
      category: "Desalination Systems",
      items: [
        "Reverse osmosis (RO) desalination units",
        "Pre-treatment filtration systems",
        "Post-treatment remineralisation (where required)"
      ]
    },
    {
      category: "Storage & Transfer",
      items: [
        "Freshwater storage tanks",
        "Transfer pumps and hoses",
        "Flow metering equipment"
      ]
    },
    {
      category: "Quality Control",
      items: [
        "Water quality monitoring instruments",
        "Salinity and TDS testing equipment",
        "Sampling and testing protocols"
      ]
    },
    {
      category: "Safety Equipment",
      items: [
        "Navigation and communication systems",
        "Safety gear per maritime regulations",
        "Emergency response equipment"
      ]
    }
  ];

  const specifications = [
    { label: "Fleet Size", value: "2 Vessels" },
    { label: "Combined Daily Capacity", value: "Up to 1,000 MT" },
    { label: "Operational Area", value: "Singapore & Region" },
    { label: "Water Type", value: "Desalinated Freshwater" }
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
              <Ship className="w-4 h-4 text-[#C6E832]" />
              <span className="text-[#C6E832] text-sm font-medium">Our Fleet</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Purpose-Built for Freshwater Supply
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Our fleet of water tankers is equipped with onboard desalination plants, 
              enabling us to produce and deliver freshwater directly to your vessels or facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vessel Images */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {vessels.map((vessel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={vessel.image} 
                    alt={vessel.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white text-2xl font-bold">{vessel.name}</p>
                    <p className="text-slate-200 text-sm">{vessel.type}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{vessel.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet List Table */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Fleet List
            </h2>
            <p className="text-lg text-slate-600">
              Detailed specifications of our water supply vessels
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Vessel Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Product Grade</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">IMO Number</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Length</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">DWT</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Full Load (mt)</th>
<th className="px-6 py-4 text-left text-sm font-semibold">Water Test Report</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-5 text-slate-900 font-semibold">PRISM</td>
                    <td className="px-6 py-5 text-slate-600">Freshwater</td>
                    <td className="px-6 py-5 text-slate-600">9547560</td>
                    <td className="px-6 py-5 text-slate-600">44</td>
                    <td className="px-6 py-5 text-slate-600">630</td>
                    <td className="px-6 py-5 text-slate-600">500</td>
<td className="px-6 py-5">
                      <a href="https://drive.google.com/file/d/16liH-0CnETHpiPoWsm5_MbENmu-8HUgD/view" target="_blank" rel="noopener noreferrer" className="text-[#2E3B8E] hover:text-[#C6E832] font-medium transition-colors">
                        PDF LINK
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-5 text-slate-900 font-semibold">DEWS</td>
                    <td className="px-6 py-5 text-slate-600">Freshwater</td>
                    <td className="px-6 py-5 text-slate-600">9787728</td>
                    <td className="px-6 py-5 text-slate-600">43</td>
                    <td className="px-6 py-5 text-slate-600">451</td>
                    <td className="px-6 py-5 text-slate-600">410</td>
<td className="px-6 py-5">
                      <a href="https://drive.google.com/file/d/1IVwtC20fDp5koHWspbG6WyTeuTCq4BYC/view" target="_blank" rel="noopener noreferrer" className="text-[#2E3B8E] hover:text-[#C6E832] font-medium transition-colors">
                        PDF LINK
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}