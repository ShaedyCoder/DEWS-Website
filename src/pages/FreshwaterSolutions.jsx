import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Droplets, 
  Sparkles, 
  Zap, 
  Flame, 
  Wind, 
  FlaskConical,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function FreshwaterSolutions() {
  const applications = [
    {
      icon: Sparkles,
      title: "Cleaning & Rinsing",
      description: "Demineralised water is ideal for rinsing tanks and washing pipelines because it removes chemical traces without leaving behind mineral deposits.",
      details: [
        "Removes residues without leaving scale or spots",
        "No mineral buildup on cleaned surfaces",
        "Suitable for tanks that previously held chemicals",
        "Ensures pipelines are thoroughly flushed"
      ],
      why: "Regular tap water contains dissolved minerals that leave residue when it evaporates. Demineralised water eliminates this problem, giving you a clean, deposit-free surface."
    },
    {
      icon: Zap,
      title: "Electrolysers",
      description: "Electrolysers used in hydrogen production require high-purity water. Demineralised water ensures stable operations and better results.",
      details: [
        "Stable electrochemical reactions",
        "Higher purity hydrogen output",
        "Reduced electrode degradation",
        "Longer equipment lifespan"
      ],
      why: "Minerals in water can interfere with the electrolysis process and damage electrodes over time. Using demineralised water keeps the system running efficiently and extends the life of expensive equipment."
    },
    {
      icon: Flame,
      title: "Boilers",
      description: "Boilers operate more efficiently with demineralised water because there are no minerals to form scale on heat transfer surfaces.",
      details: [
        "No mineral scale formation",
        "Better heat transfer efficiency",
        "Lower fuel consumption",
        "Reduced maintenance requirements"
      ],
      why: "Scale acts as an insulator, forcing boilers to work harder to produce the same amount of steam. Without scale buildup, heat transfers more effectively, meaning less fuel is needed for the same output."
    },
    {
      icon: Wind,
      title: "Cooling Systems",
      description: "In cooling towers and closed-loop systems, demineralised water prevents the mineral buildup that reduces efficiency over time.",
      details: [
        "Keeps pipes and heat exchangers clean",
        "Maintains cooling efficiency",
        "Water can be recirculated longer",
        "Less water wasted through blowdown"
      ],
      why: "Minerals naturally concentrate as water evaporates in cooling systems. Eventually, the water becomes too mineral-rich and must be discharged. Using demineralised water slows this process, allowing water to be reused for longer periods and reducing waste."
    },
    {
      icon: FlaskConical,
      title: "Chemical Manufacturing",
      description: "Many chemical processes are sensitive to impurities in water. Demineralised water provides a neutral base that won't interfere with reactions.",
      details: [
        "Does not introduce unwanted ions",
        "Consistent reaction conditions",
        "Fewer failed or off-spec batches",
        "Less reprocessing required"
      ],
      why: "Even small amounts of minerals can alter chemical reactions, leading to batches that don't meet specifications. Using demineralised water removes this variable, improving consistency and reducing waste from failed production runs."
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
              Demineralised Water for Industrial Applications
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Understanding when and why to use demineralised water can significantly impact 
              your operational efficiency, equipment longevity, and overall costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Demineralised Water */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What is Demineralised Water?
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Demineralised water (also called demin water or DM water) is water that has had 
                  its mineral content removed through processes like reverse osmosis, ion exchange, 
                  or distillation.
                </p>
                <p>
                  Normal tap water and even desalinated water contain dissolved minerals such as 
                  calcium, magnesium, sodium, and chloride. While these minerals are harmless for 
                  drinking, they can cause problems in industrial processes—forming scale, 
                  interfering with chemical reactions, or damaging sensitive equipment.
                </p>
                <p>
                  By removing these minerals, demineralised water provides a "clean slate" that 
                  won't leave deposits, interfere with processes, or accelerate equipment wear.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Key Differences</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Tap Water</p>
                    <p className="text-sm text-slate-500">Contains dissolved minerals; suitable for drinking but can cause scale and deposits</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Desalinated Water</p>
                    <p className="text-sm text-slate-500">Salt removed; may still contain some minerals; suitable for drinking and domestic use</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-teal-200">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Demineralised Water</p>
                    <p className="text-sm text-slate-500">Minerals removed; ideal for industrial processes requiring high-purity water</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Common Applications
            </h2>
            <p className="text-lg text-slate-600">
              Demineralised water is used across many industries wherever mineral content 
              would cause operational or quality problems.
            </p>
          </motion.div>

          <div className="space-y-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Main Content */}
                  <div className="lg:col-span-2 p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-[#C6E832]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <app.icon className="w-7 h-7 text-[#2E3B8E]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-900 mb-2">{app.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{app.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {app.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-600">
                          <CheckCircle2 className="w-5 h-5 text-[#C6E832] flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-slate-50 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-slate-200">
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                      Why It Matters
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {app.why}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational & Environmental Benefits */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl p-8 lg:p-10"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Operational Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Reduced equipment downtime from scale-related issues",
                  "Extended lifespan of boilers, heat exchangers, and other equipment",
                  "Lower maintenance costs and fewer emergency repairs",
                  "More consistent product quality in manufacturing",
                  "Improved efficiency in heat transfer and chemical processes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-[#C6E832] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-[#C6E832]/10 rounded-2xl p-8 lg:p-10"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Environmental Considerations</h3>
              <ul className="space-y-4">
                {[
                  "Lower fuel consumption when boilers operate efficiently",
                  "Reduced water waste in cooling systems",
                  "Fewer chemical treatments required to manage scale",
                  "Less frequent equipment replacement",
                  "Reduced waste from failed production batches"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#2E3B8E] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-white rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">
                    <strong className="text-slate-800">Note:</strong> These are general operational benefits. 
                    Specific improvements will depend on your current systems and processes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Link to RO Systems */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 max-w-4xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  How We Produce Demineralised Water
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Learn about reverse osmosis systems and how DEWS can design, build, and operate 
                  water treatment solutions tailored to your needs.
                </p>
                <Link to={createPageUrl('ROSystems')}>
                  <Button className="bg-slate-900 hover:bg-slate-800">
                    Explore RO Systems
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1581093458791-9d42cc030552?w=600&auto=format&fit=crop&q=80"
                  alt="Water treatment systems"
                  className="rounded-xl"
                />
              </div>
            </div>
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
              Need Demineralised Water?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Whether you need a one-time supply or an ongoing solution, we can help you 
              get the water quality your operations require.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-[#C6E832] text-[#2E3B8E] hover:bg-[#B0C828] px-8 py-6 text-lg font-medium">
                Discuss Your Requirements
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}