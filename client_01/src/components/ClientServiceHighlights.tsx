import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ClientServiceHighlights = () => {
  return (
    <section className="py-12 md:py-20 bg-primary/10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <motion.h2
              className="text-[32px] md:text-[40px] lg:text-[48px] font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-black">Travellers'</span>
              <br />
              <span className="text-blue-600">Choice</span>
              <br />
              <span className="text-black">Best Client Support</span>
              <br />
              <span className="text-black">in Sri Lanka</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-[16px] md:text-[20px] lg:text-[24px] text-gray-700 mb-8 md:mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We are proud to have a strong relationship with our clients and we
              are committed to providing the best service to our clients.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Average Ratings */}
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1">
                  4.8
                </div>
                <div className="text-[10px] md:text-[12px] text-gray-600 font-medium">
                  Average Ratings
                </div>
              </div>

              {/* Total Reviews */}
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1">
                  5K
                </div>
                <div className="text-[10px] md:text-[12px] text-gray-600 font-medium">
                  Total Reviews
                </div>
              </div>

              {/* Services */}
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1">
                  24/7
                </div>
                <div className="text-[10px] md:text-[12px] text-gray-600 font-medium">
                  Services
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                See Our Clients
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-first lg:order-last"
          >
            {/* Main Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
              <img
                src="/girl1.png"
                alt="Travel photographer with camera"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientServiceHighlights;
