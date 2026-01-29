import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Droplets, 
  Ship, 
  Gauge,
  CheckCircle2,
  ArrowRight,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function DesalinatedWater() {
  const benefits = [
    {
      icon: Ship,
      title: "Flexibility",
      description: "Delivery windows aligned with your vessel operations, with fast response times"
    },
    {
      icon: Gauge,
      title: "Competitive Rates",
      description: "ZERO water conservation tax and No waterborne fees."
    }
  ];

  const applications = [
    "Crew drinking water and domestic use onboard vessels",
    "Offshore platform freshwater supply",
    "Barge operations requiring potable water",
    "Emergency or supplementary water supply",
    "Remote maritime locations without shore connections"
  ];

  const processSteps = [
    {
      title: "Seawater Intake",
      description: "Raw seawater is drawn from the ocean through intake systems on our vessels."
    },
    {
      title: "Pre-Treatment",
      description: "Filtration removes suspended solids, protecting the RO membranes from fouling."
    },
    {
      title: "Reverse Osmosis",
      description: "High-pressure pumps force seawater through semi-permeable membranes, separating salt and impurities."
    },
    {
      title: "Post-Treatment",
      description: "Remineralisation and pH adjustment ensure the water meets drinking water standards."
    },
    {
      title: "Storage & Delivery",
      description: "Freshwater is stored in onboard tanks and delivered directly to your vessel or facility."
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
              <span className="text-[#C6E832] text-sm font-medium">Our Core Business</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Desalinated Water Supply
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              DEWS operates a fleet of water tankers equipped with onboard desalination plants, 
              delivering up to 1,000 metric tons of freshwater daily to vessels and offshore installations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Desalinated Water */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Freshwater from Seawater
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Desalinated water is freshwater produced by removing salt and minerals from seawater through 
                  reverse osmosis. This process transforms abundant seawater into potable water suitable for 
                  drinking and domestic use.
                </p>
                <p>
                  For maritime operations, desalinated water provides a reliable, locally-produced alternative 
                  to shore-supplied freshwater. Our vessels produce this water onboard and deliver it directly 
                  to your location, ensuring you have the supply you need when you need it.
                </p>
                <p>
                  The desalination process we use removes over 99% of dissolved salts and impurities, producing 
                  water that meets drinking water quality standards. Post-treatment ensures proper mineral balance 
                  and pH for safe consumption.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop&q=80" 
                alt="Desalination process"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              WHY US?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-white rounded-lg p-12 border-4 border-[#2E3B8E] hover:shadow-2xl hover:border-[#C6E832] transition-all duration-300 cursor-pointer relative overflow-hidden text-center"
              >
                <div className="flex flex-col items-center h-full">
                  <benefit.icon className="w-20 h-20 text-slate-900 mb-6" strokeWidth={1.5} />
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-slate-800 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">{benefit.description}</p>
                  <span className="text-sm text-slate-400 mt-auto pt-8 group-hover:opacity-0 transition-opacity duration-300">Hover for details</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Desalination Process
            </h2>
            <p className="text-lg text-slate-300">
              From seawater intake to delivery, our onboard systems produce quality freshwater through a proven multi-stage process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C6E832]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C6E832] font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-12 text-center"
          >
            <Ship className="w-16 h-16 text-[#2E3B8E] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Meet Our Fleet
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our vessels DEWS and PRISM are equipped with state-of-the-art desalination systems, 
              delivering reliable freshwater supply across Singapore waters.
            </p>
            <Link to={createPageUrl('Fleet')}>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                View Fleet Details
                <ArrowRight className="ml-2 w-5 h-5" />
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
              Need Freshwater Supply?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Contact us to discuss your requirements for regular or on-demand desalinated water delivery.
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