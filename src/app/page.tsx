"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Anchor, Ship, Handshake, Package  } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const SeaHorseWebsite = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Helper function for absolute image paths
  const getImagePath = (imagePath: string) => {
    const basePath = '/seahorse-comprof-v1.2'; // Your GitHub repo name
    return `${basePath}${imagePath}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Animation variants - Fixed TypeScript errors
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ overflow: 'hidden auto' }}>
      {/* Navigation */}
      <nav style={{ backgroundColor: '#ffffff' }} className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-9">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center">
              <Image
                src={getImagePath("/logo.jpg")}
                alt="P.T. Sea Horse Logo"
                width={120}
                height={120}
                className="rounded-lg mb-2"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (item === 'Contact') {
                      router.push('/contact'); // ✅ Go to contact page
                    } else {
                      scrollToSection(item.toLowerCase());
                    }
                  }}
                  style={{
                    color: '#760000',
                    borderBottom: activeSection === item.toLowerCase() ? '2px solid #760000' : 'none'
                  }}
                  className="px-3 py-2 text-md font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md"
              style={{ color: '#760000' }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (item === 'Contact') {
                      router.push('/contact'); // ✅ Go to contact page
                    } else {
                      scrollToSection(item.toLowerCase());
                    }
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md text-md"
                  style={{ color: '#760000' }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 text-white relative"
      >
        {/* Background Image */}
        <div className="absolute top-12 left-0 right-0 bottom-0">
          <Image
            src={getImagePath("/carousel-1.jpg")}
            alt="Marine Background"
            fill
            style={{ objectFit: 'cover', filter: 'brightness(60%)' }}
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Leading Marine Services
                <span className="block text-white">Provider in Indonesia</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-white">
                Established in 1972, PT Sea Horse is a major marine services provider for the Indonesian Oil & Gas exploration, production, mining, and transportation industries.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Years Experience', value: '50+' },
                    { label: 'Office Locations', value: '4' },
                    { label: 'Certified', value: 'ISO' },
                    { label: 'Operations', value: '24/7' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-white">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* About Us Section */}
<motion.section 
  id="about" 
  className="pt-14 pb-18 bg-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={staggerContainer}
>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/*Left Content */}
      <motion.div variants={slideInLeft}>
        <motion.h2 
          className="text-3xl mb-4 sm:text-4xl font-bold text-[
#760000]"
          variants={fadeInUp}
        >
          About Us
        </motion.h2>
        <motion.p 
          className="text-gray-850 mb-4 leading-relaxed text-justify"
          variants={fadeInUp}
        >
          We are a major marine services provider for the Indonesian Oil & Gas exploration and production, Mining and Transportation Industries.
          Furthermore, we have represented some of the world&apos;s largest shipowners.
        </motion.p>
        <motion.p 
          className="text-gray-850 mb-4 leading-relaxed text-justify"
          variants={fadeInUp}
        > 
          Hence, We have the ability to supply tugs and support vessels to work in deep water locations and the capacity to supply vessels in tight situations. 
          This has enable us to work with confidence for our customer&apos;s needs. Some of our main activities include:
        </motion.p>

        <motion.ul 
          className="mt-6 space-y-4"
          variants={staggerContainer}
        >
          {[
            "Ship Owning and Management",
            "Vessel Chartering and Sale & Purchase",
            "Operations for Tug Services (Harbour and Offshore)",
            "Shipping Agency (Port, Vessel & Crew Clearance, etc)",
            "General Agent for Coal Ship Operations and others"
          ].map((item) => (
            <motion.li 
              key={item}
              className="flex items-center space-x-3"
              variants={fadeInUp}
            >
              <span className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-full text-[
#760000] font-bold">✓</span>
              <span className="text-gray-800 font-medium">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        className="relative flex justify-center pt-6"
        variants={slideInRight}
      >
        <Image
          src={getImagePath("/carousel-2.jpg")}
          alt="About PT Sea Horse"
          width={500}
          height={350}
          className="rounded-lg shadow-lg object-cover"
        />
      </motion.div>
    </div>
  </div>
</motion.section>

{/* Our Expertise Section */}
<motion.section 
  className="pt-14 pb-18 bg-[#760000]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={staggerContainer}
>
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    {/* Section Title */}
    <motion.div 
      className="text-center mb-10"
      variants={fadeInUp}
    >
      <h2 className="text-3xl mb-4 sm:text-4xl font-bold text-white">
        Official Authorization & Business Credentials
      </h2>
      <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
        Recognized and trusted in the marine industry with verified partnerships and licenses.
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-14 items-center">
      {/* Left Column - Authorized Agent */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
        variants={slideInLeft}
      >
        <div className="flex flex-col items-center lg:items-start">
          <Image
            src={getImagePath("/Doenlogo.png")}
            alt="Doen Waterjets Logo"
            width={200}
            height={70}
            className="mb-6"
          />
          <p className="text-gray-850 leading-relaxed text-justify transition-colors duration-300">
            We are the sole authorized service and spare parts agent for Doen Pacific Pty. Ltd. PT Sea Horse provides complete technical support for all Doen Waterjet models in Indonesia.
          </p>
          <a
            href="http://www.doen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center px-5 py-2.5 bg-[#760000] text-white rounded-md shadow hover:bg-red-800 transition-colors duration-300"
          >
            <span>www.doen.com</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Right Column - Licences */}
      <motion.div 
        className="space-y-8"
        variants={staggerContainer}
      >
        {[
          { title: 'Shipping Business License', desc: 'No: BXXXIV-422/AT.54' },
          { title: 'Business Identification Number (NIB)', desc: 'No: 9210101202577' },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-white rounded-xl shadow-lg p-6 flex items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
            variants={slideInRight}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-[#760000]/10 text-[#760000] flex items-center justify-center rounded-full font-bold text-lg">
              <span>✓</span>
            </div>
            
            <div className="ml-4">
              <div className="font-semibold text-gray-900 text-lg transition-colors duration-300">
                {item.title}
              </div>
              <div className="text-gray-600 transition-colors duration-300">
                {item.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</motion.section>

{/* Services Section */}
<motion.section 
  id="services" 
  className="pt-14 pb-18 bg-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={staggerContainer}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      className="text-center mb-16"
      variants={fadeInUp}
    >
      <h2 className="text-3xl mb-4 sm:text-4xl font-bold text-[#760000]">
        Our Services
      </h2>
      <div className="w-24 h-0.5 bg-[#760000] mx-auto"></div>
      <p className="text-l text-gray-800 mt-8 max-w-3xl mx-auto">
        Comprehensive marine services tailored to meet your specific operational needs
      </p>
    </motion.div>

    {/* Services Grid - All Left Aligned */}
    <div className="space-y-16">
      {[
        { 
          title: "Offshore Services", 
          icon: Anchor,
          text: "Rig mobilisation / demobilisation and moves, anchor-handling, and towing.",
          number: "01"
        },
        { 
          title: "Vessels", 
          icon: Ship,
          text: "AHTS, tugs, hook-up and commissioning vessels, supply boats, accommodation and flat-top barges, crew boats and other specialised vessels.",
          number: "02"
        },
        { 
          title: "Brokerage", 
          icon: Handshake,
          text: "PT Sea Horse is a trusted vessel broker for Sales & Purchase / Chartering inquiries. We can source for all types of vessels from all over the world for our clients.",
          number: "03"
        },
        { 
          title: "Shipping & Logistics", 
          icon: Package,
          text: "PT Sea Horse specializes in cargo movement, expediting, and international freight forwarding. We handle coal, drilling pipes, containers, and general cargo. As shipping agents for major global shipowners, we serve ports across Indonesia.",
          number: "04"
        }
      ].map((service, index) => (
        <motion.div
          key={service.title}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"
          variants={fadeInUp}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Icon Side - Always on the left */}
          <motion.div 
            className="flex-shrink-0 lg:w-1/3 flex justify-center lg:justify-start"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              {/* Main circle container */}
              <motion.div 
                className="relative w-32 h-32 bg-[#760000]/10 rounded-full flex items-center justify-center hover:bg-[#760000]/15 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Service number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#760000] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {service.number}
                </div>
                
                {/* Icon */}
                <service.icon size={60} className="text-[#760000]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side - Always on the right with left alignment and justified text */}
          <motion.div 
            className="flex-1 lg:w-2/3 text-center lg:text-left"
            variants={fadeInUp}
          >
            {/* Service title with decorative line */}
            <div className="flex items-center gap-4 justify-center lg:justify-start mb-6">
              <div className="hidden lg:block w-12 h-0.5 bg-[#760000]" />
              
              <h3 className="font-bold text-2xl lg:text-3xl text-[#760000]">
                {service.title}
              </h3>
            </div>

            {/* Service description with justified text */}
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed text-justify">
              {service.text}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>

    {/* Bottom decorative element */}
    <div className="mt-16 flex justify-center">
      <div className="w-16 h-0.5 bg-[#760000]"></div>
    </div>
  </div>
</motion.section>

{/* Certifications Section */}
<motion.section 
  className="pt-14 pb-18" 
  style={{ background: 'linear-gradient(135deg, #760000 0%)' }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={staggerContainer}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      className="text-center mb-12"
      variants={fadeInUp}
    >
      <h2 className="text-3xl font-bold text-white mb-4">Certifications and Memberships</h2>
      <p className="text-md text-white">Maintaining the highest standards in quality and service</p>
    </motion.div>

    {/* Certifications */}
    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center"
      variants={staggerContainer}
    >
      {/* INSA Membership */}
      <motion.div 
        className="bg-white rounded-lg p-6 text-center shadow-lg"
        variants={scaleUp}
        whileHover={{ 
          scale: 1.05, 
          transition: { duration: 0.3 }
        }}
      >
        <div className="w-24 h-24 mx-auto mb-4 rounded-lg p-2">
          <Image src={getImagePath("/Logoinsa.png")} alt="INSA Logo" width={80} height={80} className="w-full h-full object-contain" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">INSA Member</h3>
        <p className="text-sm text-gray-600">Indonesian National Shipowners Association</p>
        <p className="text-xs text-gray-500 mt-1">Reg. No. 343/INSA/VIII/1998</p>
      </motion.div>

      {/* ISO 9001 */}
      <motion.div 
        className="bg-white rounded-lg p-6 text-center shadow-lg"
        variants={scaleUp}
        whileHover={{ 
          scale: 1.05, 
          transition: { duration: 0.3 }
        }}
      >
        <div className="w-24 h-24 mx-auto mb-4 rounded-lg p-2">
          <Image src={getImagePath("/LogoISO9001.jpg")} alt="ISO 9001 Logo" width={80} height={80} className="w-full h-full object-contain" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">ISO 9001</h3>
        <p className="text-sm text-gray-600">Quality Management System</p>
        <p className="text-xs text-gray-500 mt-1">Cert. No. 55Q13036</p>
      </motion.div>

      {/* ISO 14001 */}
      <motion.div 
        className="bg-white rounded-lg p-6 text-center shadow-lg"
        variants={scaleUp}
        whileHover={{ 
          scale: 1.05, 
          transition: { duration: 0.3 }
        }}
      >
        <div className="w-24 h-24 mx-auto mb-4 rounded-lg p-2">
          <Image src={getImagePath("/LogoISO14001.jpg")} alt="ISO 14001 Logo" width={80} height={80} className="w-full h-full object-contain" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">ISO 14001</h3>
        <p className="text-sm text-gray-600">Environmental Management</p>
        <p className="text-xs text-gray-500 mt-1">Cert. No. 32E13036</p>
      </motion.div>

      {/* ISO 45001 */}
      <motion.div 
        className="bg-white rounded-lg p-6 text-center shadow-lg"
        variants={scaleUp}
        whileHover={{ 
          scale: 1.05, 
          transition: { duration: 0.3 }
        }}
      >
        <div className="w-24 h-24 mx-auto mb-4 rounded-lg p-2">
          <Image src={getImagePath("/LogoISO45001.jpg")} alt="ISO 45001 Logo" width={30} height={30} className="w-full h-full object-contain" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">ISO 45001</h3>
        <p className="text-sm text-gray-600">Occupational Health & Safety</p>
        <p className="text-xs text-gray-500 mt-1">Cert. No. 20O13036</p>
      </motion.div>

      {/* KADIN */}
      <motion.div 
        className="bg-white rounded-lg p-6 text-center shadow-lg"
        variants={scaleUp}
        whileHover={{ 
          scale: 1.05, 
          transition: { duration: 0.3 }
        }}
      >
        <div className="w-24 h-24 mx-auto mb-4 rounded-lg p-2">
          <Image src={getImagePath("/Logokadin.png")} alt="KADIN Logo" width={80} height={80} className="w-full h-full object-contain" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">KADIN Member</h3>
        <p className="text-sm text-gray-600">Indonesian Chamber of Commerce</p>
        <p className="text-xs text-gray-500 mt-1">Reg. No. 230331-030586</p>
      </motion.div>
    </motion.div>
  </div>
</motion.section>

{/* Footer */}
<footer className="bg-white text-gray-900 py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      
      {/* Contact */}
      <div className="pl-0 md:pl-8">
        <h4 className="text-md font-semibold mb-3">Contact</h4>
        <div className="space-y-1 text-sm text-gray-600">
          <p className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Multivision Tower 5th Floor Unit 5.</span>
          </p>
          <p className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+62 21 2938 0018</span>
          </p>
          <p className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>general@seahorse.co.id</span>
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="text-justify md:text-left pl-0 md:pl-15">
        <h4 className="text-md font-semibold mb-3">Quick Links</h4>
        <div className="space-y-1 flex flex-col items-justify md:items-start">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <div key={item}>
              <button
                onClick={() => {
                  if (item === 'Contact') {
                    router.push('/contact');
                  } else {
                    scrollToSection(item.toLowerCase());
                  }
                }}
                className="text-sm text-gray-600 hover:text-[#760000] transition-colors cursor-pointer"
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Information */}
      <div className="pl-0 md:pl-8">
        <h4 className="text-md font-semibold mb-3">Legal Information</h4>
        <div className="space-y-1 text-sm text-gray-600">
          <p>Business License: BXXXIV-422/AT.54</p>
          <p>NIB: 9120101202577</p>
          <p>INSA Member: 343/INSA/VIII/1998</p>
          <p>KADIN Certificate: 230331-030586</p>
        </div>
      </div>

    </div>
  </div>
</footer>
              {/* Full-width red copyright section */}
        <div className="w-full text-center text-sm" style={{ backgroundColor: '#760000' }}>
          <p className="text-white py-3">&copy; 2025 P.T. SEA HORSE. All rights reserved. | ISO 9001, ISO 14001, ISO 45001 Certified</p>
        </div>
    </div>
  );
};
export default SeaHorseWebsite;