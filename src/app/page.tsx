"use client";

import Router from 'next/router';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Ship, Anchor, Users, Award, Menu, X } from 'lucide-react';


const SeaHorseWebsite = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav style={{ backgroundColor: '#ffffff' }} className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-9">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="P.T. Sea Horse Logo"
                width={180}
                height={180}
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
                      scrollToSection(item.toLowerCase()); // ✅ Scroll for others
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
                      router.push('/contact'); // ✅ redirect to contact page
                    } else {
                      scrollToSection(item.toLowerCase()); // ✅ scroll for others
                    }
                    setIsMenuOpen(false); // ✅ close menu after click
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
  <div className="absolute inset-0">
    <Image
      src="/carousel-1.jpg"
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
          Established in 1972, P.T. Sea Horse is a major marine services provider for the Indonesian Oil & Gas exploration, production, mining, and transportation industries.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollToSection('services')}
            style={{ backgroundColor: '#ffffff', color: '#760000' }}
            className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
          >
            Our Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            style={{ border: '1px solid white', color: 'white' }}
            className="px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Contact Us
          </button>
        </div>
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

{/* Our Expertise Section */}
<section className="pt-12 pb-18" style={{ background: 'linear-gradient(135deg, #760000 0%, #9b1c1c 100%)' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
      <p className="text-lg text-red-100 max-w-2xl mx-auto">
        Delivering trusted marine solutions with unmatched experience in the industry.
      </p>
    </div>

    {/* Cards Container */}
    <div className="bg-white rounded-3xl p-10 shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-300">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Column - Expertise */}
        <div>
          <ul className="space-y-6">
            {[
              { title: "Vessel Sales & Purchase", desc: "Expert brokerage services for vessel transactions" },
              { title: "Vessel Chartering", desc: "Hook-up, commissioning, supply boats, and accommodation barges" },
              { title: "Logistics & Shipping", desc: "Cargo movement, expediting, and international freight forwarding" }
            ].map((item) => (
              <li key={item.title} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-100 text-[#760000] flex items-center justify-center rounded-full font-bold text-lg">
                  ✓
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">{item.title}</div>
                  <div className="text-gray-600">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Authorized Agent */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Authorized Agent</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We are the sole authorized service and spare parts agent for Doen Pacific Pty. Ltd. in Indonesia, providing comprehensive technical support for all Doen Waterjet models.
          </p>
          <a 
            href="http://www.doen.com" 
            target="_blank" 
            className="inline-block px-6 py-2 mt-2 bg-[#760000] text-white rounded-lg shadow hover:bg-red-800 transition-colors"
          >
            Visit www.doen.com
          </a>
        </div>

      </div>
    </div>
  </div>
</section>

{/* About Section */}
<section id="about" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-22">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">About PT Sea Horse</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        A trusted partner in Indonesia's marine industry with over five decades of excellence
      </p>
    </div>

    {/* Top 3 Services */}
    <div className="grid gap-10 md:grid-cols-3 mb-16">
      {[
        {
          icon: <Ship className="w-8 h-8 text-white" />,
          title: "Ship Management",
          description:
            "Comprehensive ship owning and management services with extensive experience in vessel operations and maintenance.",
        },
        {
          icon: <Anchor className="w-8 h-8 text-white" />,
          title: "Offshore Operations",
          description:
            "Specialized offshore services including rig mobilization, anchor handling, and towing operations for the oil & gas industry.",
        },
        {
          icon: <Users className="w-8 h-8 text-white" />,
          title: "Agency Services",
          description:
            "Port and shipping agency services for major international shipowners, providing comprehensive logistics support.",
        },
      ].map((item) => (
        <div key={item.title} className="text-center">
          {/* Icon in red box */}
          <div className="flex justify-center">
            <div className="bg-[#760000] p-6">
              {item.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-6 text-lg font-semibold text-gray-900">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-gray-600 max-w-xs mx-auto">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marine services tailored to meet your specific operational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Ship className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Offshore Services</h3>
              <p className="text-gray-700">Rig mobilization/demobilization, anchor-handling, and towing operations for offshore projects.</p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vessels Charter</h3>
              <p className="text-gray-700">AHTS, tugs, hook-up vessels, supply boats, accommodation barges, and specialized vessels.</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Brokerage</h3>
              <p className="text-gray-700">Active vessel sales and purchasing brokerage services sourced globally for our clients.</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chartering</h3>
              <p className="text-gray-700">35+ years experience offering vessels from major shipowners of specialized offshore vessels.</p>
            </div>

            <div className="group bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Shipping & Logistics</h3>
              <p className="text-gray-700">Cargo movement, expediting, international freight forwarding, and comprehensive logistics support.</p>
            </div>

            <div className="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Agency Work</h3>
              <p className="text-gray-700">General/port shipping agents for major shipowners providing agency services at various Indonesian ports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Memberships</h2>
            <p className="text-lg text-gray-600">Maintaining the highest standards in quality and service</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ISO 9001</h3>
              <p className="text-sm text-gray-600">Quality Management System</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ISO 14001</h3>
              <p className="text-sm text-gray-600">Environmental Management</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ISO 45001</h3>
              <p className="text-sm text-gray-600">Occupational Health & Safety</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">INSA Member</h3>
              <p className="text-sm text-gray-600">Indonesian National Shipowners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Ship className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">P.T. SEA HORSE</h3>
                  <p className="text-sm text-gray-400">Est. 1972</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leading marine services provider for Indonesian Oil & Gas exploration, production, mining, and transportation industries.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Ship Owning & Management</li>
                <li>Offshore Services</li>
                <li>Vessel Brokerage</li>
                <li>Shipping & Logistics</li>
                <li>Agency Work</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal Information</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Business License: 2XXXIV-422/AT.54</p>
                <p>NIB: 9120101202577</p>
                <p>INSA Member: 343/INSA/VIII/1998</p>
                <p>KADIN Certificate: 230331-030586</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 P.T. SEA HORSE. All rights reserved. | ISO 9001, ISO 14001, ISO 45001 Certified</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SeaHorseWebsite;