import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Droplets, 
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Cog,
  Settings,
  Wrench,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ROSystems() {
  const howItWorks = [
    {
      step: 1,
      title: "Seawater Intake",
      description: "Seawater is drawn through intake screens that filter out larger debris and marine life."
    },
    {
      step: 2,
      title: "Pre-Treatment",
      description: "The water passes through additional filtration to remove particles, sediment, and organic matter that could damage the membranes."
    },
    {
      step: 3,
      title: "High-Pressure Pumping",
      description: "Powerful pumps push the pre-treated water against the RO membranes at high pressure."
    },
    {
      step: 4,
      title: "Reverse Osmosis",
      description: "Water molecules pass through the semi-permeable membranes while salt, minerals, and impurities are rejected and discharged as brine."
    },
    {
      step: 5,
      title: "Post-Treatment",
      description: "The purified water may be remineralised or further treated depending on its intended use (drinking water vs. industrial applications)."
    },
    {
      step: 6,
      title: "Storage & Distribution",
      description: "The freshwater is stored in tanks ready for delivery or immediate use."
    }
  ];

  const dboServices = [
    {
      icon: Settings,
      title: "Design",
      description: "We assess your water requirements—quality, quantity, and intended use—then design a system sized and configured for your specific situation."
    },
    {
      icon: Wrench,
      title: "Build",
      description: "Our team handles procurement, fabrication, and installation. We ensure the system is properly integrated with your existing infrastructure."
    },
    {
      icon: Cog,
      title: "Operate",
      description: "We manage day-to-day operations including monitoring, maintenance, chemical dosing, and quality testing—giving you consistent water supply without the operational burden."
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
              <span className="text-[#C6E832] text-sm font-medium">Technology</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Reverse Osmosis Systems
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Reverse osmosis is the technology at the heart of modern desalination. 
              Here's how it works and how DEWS can help you implement it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is RO */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What is Reverse Osmosis?
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Reverse osmosis (RO) is a water purification process that uses pressure to push water 
                  through a semi-permeable membrane. The membrane acts like a very fine filter—it allows 
                  water molecules to pass through while blocking salt, minerals, and other dissolved substances.
                </p>
                <p>
                  The "reverse" in reverse osmosis refers to the direction of flow. In natural osmosis, 
                  water moves from a less concentrated solution to a more concentrated one. RO uses pressure 
                  to reverse this natural process, forcing water away from the concentrated (salty) side 
                  to produce purified water.
                </p>
                <p>
                  RO is now the dominant technology for seawater desalination worldwide because it is 
                  more energy-efficient than older thermal methods and can be scaled to suit different 
                  applications—from small shipboard units to large municipal plants.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581093458791-9d42cc030552?w=800&auto=format&fit=crop&q=80"
                alt="Water treatment facility"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How the Process Works
            </h2>
            <p className="text-lg text-slate-600">
              A typical RO desalination system involves several stages to ensure the water produced 
              is clean, safe, and suitable for its intended purpose.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#2E3B8E] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="w-0.5 h-16 bg-[#C6E832]/30 mx-auto mt-2" />
                  )}
                </div>
                <div className="bg-white rounded-xl p-6 border border-slate-200 flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of RO */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose RO Desalination?
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Energy Efficiency", desc: "Uses significantly less energy than thermal desalination methods" },
                  { title: "Scalability", desc: "Systems can be sized from small portable units to large industrial plants" },
                  { title: "Consistent Quality", desc: "Produces predictable water quality regardless of source water variations" },
                  { title: "Compact Footprint", desc: "RO systems require less space than equivalent thermal systems" },
                  { title: "Proven Technology", desc: "Well-established with decades of operational experience worldwide" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-[#C6E832] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-slate-900 rounded-2xl p-8 lg:p-10"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                RO vs Traditional Supply
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                When comparing RO-based water production to traditional water supply methods, 
                several factors come into play:
              </p>
              <div className="space-y-4">
                {[
                  "Independence from shore-based water infrastructure",
                  "Ability to produce water on-demand at point of use",
                  "Reduced reliance on water barging from distant sources",
                  "Potential for lower long-term operating costs"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-[#C6E832] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-slate-800 rounded-xl">
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-400">
                    <strong className="text-slate-200">Note:</strong> Specific cost comparisons depend on 
                    your location, water requirements, and existing infrastructure. We can provide a 
                    detailed assessment for your situation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DBO Services */}
      <section className="py-20 lg:py-28 bg-[#C6E832]/10">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              DEWS Design, Build & Operate Services
            </h2>
            <p className="text-lg text-slate-600">
              Beyond supplying water, DEWS can develop complete RO systems tailored to your needs—
              from initial design through ongoing operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {dboServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 border border-[#C6E832]"
              >
                <div className="w-14 h-14 bg-[#C6E832]/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#2E3B8E]" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">When to Consider a DBO Arrangement</h4>
                <p className="text-slate-600 leading-relaxed">
                  A DBO arrangement makes sense when you need reliable water supply but prefer not to 
                  manage the technical complexity of water treatment operations in-house. This model 
                  provides you with guaranteed water quality and quantity while DEWS handles the 
                  engineering, maintenance, and operational expertise.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in an RO Solution?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss your water requirements and explore whether a custom RO system 
              makes sense for your operation.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-[#C6E832] text-[#2E3B8E] hover:bg-[#B0C828] px-8 py-6 text-lg font-medium">
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}