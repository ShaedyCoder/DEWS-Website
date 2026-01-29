import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Shield, 
  Award, 
  Users, 
  Cog, 
  Building2, 
  ArrowRight,
  CheckCircle2,
  Droplets
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function About() {
  const capabilities = [
    {
      phase: "Design",
      description: "We assess your water requirements and design systems tailored to your specific operational context, whether onshore or offshore."
    },
    {
      phase: "Build",
      description: "Our engineering team handles procurement, fabrication, and installation of water treatment systems to exacting standards."
    },
    {
      phase: "Operate",
      description: "We manage day-to-day operations, maintenance, and quality monitoring so you can focus on your core business."
    }
  ];

  const certifications = [
    {
      title: "Water Quality Processes",
      description: "Our treatment processes follow established protocols to ensure consistent water quality for drinking and domestic applications.",
      note: "[Note: Specific certifications such as HACCP or ISO standards to be added once confirmed]"
    },
    {
      title: "Singapore Regulatory Compliance",
      description: "We operate in accordance with Singapore's water quality and maritime regulations, maintaining the documentation and monitoring required for commercial operations."
    },
    {
      title: "Safety Standards",
      description: "Our vessels and systems adhere to maritime safety requirements, with regular inspections and maintenance schedules."
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
              <Building2 className="w-4 h-4 text-[#C6E832]" />
              <span className="text-[#C6E832] text-sm font-medium">About DEWS</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Singapore-Based Freshwater Solutions
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              DEWS Pte Ltd provides desalinated freshwater and demineralised water solutions 
              to maritime and industrial clients across Singapore and the region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Delivering Water Quality You Can Rely On
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Based in Singapore, DEWS operates a fleet of water tankers equipped with desalination plants, 
                  capable of supplying up to 900+ metric tons of freshwater daily. We serve vessels, 
                  offshore installations, and industrial facilities that require consistent, quality water supply.
                </p>
                <p>
                  Our freshwater meets standards suitable for drinking and domestic use—essential for crew welfare 
                  on vessels and for various industrial applications. For processes requiring higher purity, 
                  we also supply demineralised water that protects sensitive equipment and optimises operational efficiency.
                </p>
                <p>
                  Beyond supply, we offer Design, Build, and Operate (DBO) services for water treatment systems. 
                  This means we can develop a solution from initial concept through to ongoing operations, 
                  providing a single point of accountability for your water infrastructure.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&auto=format&fit=crop&q=80" 
                alt="Singapore waters"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C6E832]/20 rounded-xl flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-[#2E3B8E]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">900+</p>
                    <p className="text-sm text-slate-500">Daily Capacity</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design, Build, Operate */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Design, Build & Operate
            </h2>
            <p className="text-lg text-slate-600">
              We provide end-to-end water treatment solutions—from initial assessment and system design 
              through construction and ongoing operations management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#C6E832] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#C6E832]/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-[#2E3B8E]">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{cap.phase}</h3>
                <p className="text-slate-600 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>

          {/* BOT Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-slate-900 rounded-2xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Build–Operate–Transfer Model
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  For clients seeking a more comprehensive arrangement, we can structure projects as 
                  Build–Operate–Transfer (BOT) engagements. Under this model, DEWS finances, builds, 
                  and operates the water treatment facility for an agreed period, after which ownership 
                  transfers to you.
                </p>
                <p className="text-slate-400 text-sm">
                  This approach has been successfully used in Singapore's water sector, allowing organisations 
                  to access water infrastructure without the upfront capital investment, while ensuring 
                  professional operation throughout the contract term.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-4">
                  {['Build', 'Operate', 'Transfer'].map((step, i) => (
                    <div key={i} className="text-center">
                      <div className="w-16 h-16 mx-auto bg-[#C6E832]/20 rounded-full flex items-center justify-center mb-3">
                        <span className="text-[#C6E832] font-bold text-lg">{step[0]}</span>
                      </div>
                      <p className="text-white text-sm font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Quality & Standards
            </h2>
            <p className="text-lg text-slate-600">
              Operating from Singapore, we maintain the documentation, processes, and quality controls 
              expected of a professional water solutions provider.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-slate-50 rounded-2xl p-8"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Shield className="w-6 h-6 text-[#2E3B8E]" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{cert.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{cert.description}</p>
                {cert.note && (
                  <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                    {cert.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Business */}
      <section className="py-20 lg:py-28 bg-white">
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
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C6E832]/10 border border-[#C6E832]/20 rounded-full mb-6">
                <Droplets className="w-4 h-4 text-[#C6E832]" />
                <span className="text-[#C6E832] text-sm font-medium">Core Business</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Desalinated Water Supply
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  At the heart of DEWS, we are a <strong className="text-slate-900">desalinated water supplier</strong> serving 
                  vessels, barges, and offshore installations throughout Singapore and the region.
                </p>
                <p>
                  Our fleet of water tankers is equipped with onboard desalination plants, enabling us to produce 
                  up to 900+ metric tons of freshwater daily. This capacity ensures reliable supply for your 
                  maritime operations, regardless of location or weather conditions.
                </p>
                <p>
                  Whether you need regular scheduled deliveries or on-demand supply, our vessels are ready to 
                  provide quality desalinated freshwater that meets drinking water standards and supports crew welfare.
                </p>
              </div>
              <Link to={createPageUrl('Fleet')} className="inline-block mt-8">
                <Button className="bg-slate-900 hover:bg-slate-800">
                  View Our Fleet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Water Quality for Different Uses */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Water Quality for Your Needs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Drinking & Domestic Use</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our desalinated freshwater is suitable for drinking and domestic applications. 
                This is essential for crew welfare on vessels, where access to quality potable water 
                directly affects health and morale.
              </p>
              <ul className="space-y-2">
                {['Safe for human consumption', 'Suitable for cooking and hygiene', 'Meets domestic water standards'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Industrial Processes</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                For applications requiring higher purity, we supply demineralised water. 
                This removes minerals that would otherwise damage equipment or interfere with 
                sensitive processes.
              </p>
              <ul className="space-y-2">
                {['Boilers and cooling systems', 'Electrolysers and hydrogen production', 'Chemical manufacturing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to={createPageUrl('FreshwaterSolutions')}>
              <Button className="bg-slate-900 hover:bg-slate-800">
                Learn More About Demineralised Water
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
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
              Let's Discuss Your Water Needs
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Whether you're looking for regular freshwater supply or exploring a DBO arrangement, 
              we're ready to help.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-[#C6E832] text-[#2E3B8E] hover:bg-[#B0C828] px-8 py-6 text-lg font-medium">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}