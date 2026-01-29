import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Newspaper, 
  Calendar,
  ArrowRight,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function News() {
  // Placeholder news items - to be replaced with actual content
  const newsItems = [
    {
      id: 1,
      title: "DEWS Expands Fleet Capacity",
      date: "2024-01-15",
      excerpt: "With growing demand for freshwater supply services, DEWS has invested in expanding operational capacity to better serve clients across the region.",
      image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&auto=format&fit=crop&q=80",
      category: "Company News"
    },
    {
      id: 2,
      title: "Supporting Singapore's Maritime Sector",
      date: "2023-11-20",
      excerpt: "DEWS continues to provide reliable freshwater supply to vessels operating in Singapore waters, supporting the maritime industry's operational needs.",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&auto=format&fit=crop&q=80",
      category: "Industry"
    },
    {
      id: 3,
      title: "Water Quality Standards in Focus",
      date: "2023-09-10",
      excerpt: "Maintaining consistent water quality is essential for our clients. Here's how DEWS ensures every delivery meets the required standards.",
      image: "https://images.unsplash.com/photo-1581093458791-9d42cc030552?w=600&auto=format&fit=crop&q=80",
      category: "Operations"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

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
              <Newspaper className="w-4 h-4 text-[#C6E832]" />
              <span className="text-[#C6E832] text-sm font-medium">Golden Times</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Stay updated with the latest from DEWS—company news, industry insights, 
              and operational updates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#2E3B8E] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-[#2E3B8E] hover:text-[#253075] hover:bg-transparent">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" className="px-8">
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Stay Informed
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Subscribe to receive updates about DEWS and the water solutions industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
              />
              <Button className="bg-[#2E3B8E] hover:bg-[#253075] h-12 px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
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
              Have a Story to Share?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              We welcome industry news and partnership announcements. 
              Get in touch with our communications team.
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