"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Content translations
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Leading Marine Services',
    'hero.subtitle': 'Provider in Indonesia',
    'hero.description': 'Established in 1972, PT Sea Horse is a major marine services provider for the Indonesian Oil & Gas exploration, production, mining, and transportation industries.',
    'hero.stats.experience': 'Years Experience',
    'hero.stats.locations': 'Office Locations',
    'hero.stats.certified': 'Certified',
    'hero.stats.operations': 'Operations',
    
    // About Section
    'about.title': 'About Us',
    'about.p1': 'We are a major marine services provider for the Indonesian Oil & Gas exploration and production, Mining and Transportation Industries. Furthermore, we have represented some of the world\'s largest shipowners.',
    'about.p2': 'Hence, We have the ability to supply tugs and support vessels to work in deep water locations and the capacity to supply vessels in tight situations. This has enable us to work with confidence for our customer\'s needs. Some of our main activities include:',
    'about.activity1': 'Ship Owning and Management',
    'about.activity2': 'Vessel Chartering and Sale & Purchase',
    'about.activity3': 'Operations for Tug Services (Harbour and Offshore)',
    'about.activity4': 'Shipping Agency (Port, Vessel & Crew Clearance, etc)',
    'about.activity5': 'General Agent for Coal Ship Operations and others',
    
    // Expertise Section
    'expertise.title': 'Official Authorization & Business Credentials',
    'expertise.subtitle': 'Recognized and trusted in the marine industry with verified partnerships and licenses.',
    'expertise.doen.description': 'We are the sole authorized service and spare parts agent for Doen Pacific Pty. Ltd. PT Sea Horse provides complete technical support for all Doen Waterjet models in Indonesia.',
    'expertise.license1.title': 'Shipping Business License',
    'expertise.license1.desc': 'No: BXXXIV-422/AT.54',
    'expertise.license2.title': 'Business Identification Number (NIB)',
    'expertise.license2.desc': 'No: 9210101202577',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive marine services tailored to meet your specific operational needs',
    'services.offshore.title': 'Offshore Services',
    'services.offshore.desc': 'Rig mobilisation / demobilisation and moves, anchor-handling, and towing',
    'services.vessels.title': 'Vessels',
    'services.vessels.desc': 'Anchor handling tugs supply (AHTS), tugs, hook-up and commissioning vessels, supply boats, accommodation and flat-top barges, crew boats and other specialised vessels',
    'services.brokerage.title': 'Brokerage',
    'services.brokerage.desc': 'PT Sea Horse is a trusted vessel broker for Sales & Purchase / Chartering inquiries. We can source for all types of vessels from all over the world for our clients',
    'services.shipping.title': 'Shipping & Logistics',
    'services.shipping.desc': 'PT Sea Horse specializes in cargo movement, expediting, and international freight forwarding. We handle coal, drilling pipes, containers, and general cargo. As shipping agents for major global shipowners, we serve ports across Indonesia',
    
    // Certifications Section
    'certifications.title': 'Certifications and Memberships',
    'certifications.subtitle': 'Maintaining the highest standards in quality and service',
    'certifications.insa': 'INSA Member',
    'certifications.insa.desc': 'Indonesian National Shipowners Association',
    'certifications.insa.reg': 'Reg. No. 343/INSA/VIII/1998',
    'certifications.iso9001': 'ISO 9001',
    'certifications.iso9001.desc': 'Quality Management System',
    'certifications.iso9001.cert': 'Cert. No. 55Q13036',
    'certifications.iso14001': 'ISO 14001',
    'certifications.iso14001.desc': 'Environmental Management',
    'certifications.iso14001.cert': 'Cert. No. 32E13036',
    'certifications.iso45001': 'ISO 45001',
    'certifications.iso45001.desc': 'Occupational Health & Safety',
    'certifications.iso45001.cert': 'Cert. No. 20O13036',
    'certifications.kadin': 'KADIN Member',
    'certifications.kadin.desc': 'Indonesian Chamber of Commerce',
    'certifications.kadin.reg': 'Reg. No. 230331-030586',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.locations.title': 'Our Locations',
    'contact.jakarta.title': 'PT SEA HORSE - Jakarta Office',
    'contact.balikpapan.title': 'PT SEA HORSE - Balikpapan Branch',
    'contact.handil.title': 'PT SEA HORSE - Handil Tiga Base',
    'contact.sangatta.title': 'PT SEA HORSE - Sangatta Office',
    'contact.address': 'Office Address',
    'contact.branch.address': 'Branch Address',
    'contact.base.address': 'Base Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email Addresses',
    'contact.email.single': 'Email Address',
    'contact.personnel': 'Key Personnel',
    'contact.management': 'Branch Management',
    'contact.base.management': 'Base Management',
    'contact.operations.management': 'Operations Management',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.quicklinks': 'Quick Links',
    'footer.legal': 'Legal Information',
    'footer.copyright': '© 2025 P.T. SEA HORSE. All rights reserved. | ISO 9001, ISO 14001, ISO 45001 Certified'
  },
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.services': 'Layanan',
    'nav.contact': 'Kontak',
    
    // Hero Section
    'hero.title': 'Penyedia Layanan Maritim',
    'hero.subtitle': 'Terdepan di Indonesia',
    'hero.description': 'Didirikan pada tahun 1972, PT Sea Horse adalah penyedia layanan maritim utama untuk industri eksplorasi, produksi, pertambangan, dan transportasi Minyak & Gas Indonesia.',
    'hero.stats.experience': 'Tahun Pengalaman',
    'hero.stats.locations': 'Lokasi Kantor',
    'hero.stats.certified': 'Bersertifikat',
    'hero.stats.operations': 'Operasional',
    
    // About Section  
    'about.title': 'Tentang Kami',
    'about.p1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'about.p2': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum:',
    'about.activity1': 'Lorem ipsum dolor sit amet',
    'about.activity2': 'Consectetur adipiscing elit',
    'about.activity3': 'Sed do eiusmod tempor incididunt',
    'about.activity4': 'Ut labore et dolore magna aliqua',
    'about.activity5': 'Ut enim ad minim veniam',
    
    // Expertise Section
    'expertise.title': 'Otorisasi Resmi & Kredensial Bisnis',
    'expertise.subtitle': 'Diakui dan dipercaya dalam industri maritim dengan kemitraan dan lisensi yang terverifikasi.',
    'expertise.doen.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'expertise.license1.title': 'Izin Usaha Pelayaran',
    'expertise.license1.desc': 'No: BXXXIV-422/AT.54',
    'expertise.license2.title': 'Nomor Induk Berusaha (NIB)',
    'expertise.license2.desc': 'No: 9210101202577',
    
    // Services Section
    'services.title': 'Layanan Kami',
    'services.subtitle': 'Layanan maritim komprehensif yang disesuaikan untuk memenuhi kebutuhan operasional spesifik Anda',
    'services.offshore.title': 'Layanan Lepas Pantai',
    'services.offshore.desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'services.vessels.title': 'Kapal',
    'services.vessels.desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    'services.brokerage.title': 'Pialang',
    'services.brokerage.desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    'services.shipping.title': 'Pengiriman & Logistik',
    'services.shipping.desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    
    // Certifications Section
    'certifications.title': 'Sertifikasi dan Keanggotaan',
    'certifications.subtitle': 'Mempertahankan standar tertinggi dalam kualitas dan layanan',
    'certifications.insa': 'Anggota INSA',
    'certifications.insa.desc': 'Asosiasi Pemilik Kapal Nasional Indonesia',
    'certifications.insa.reg': 'No. Reg. 343/INSA/VIII/1998',
    'certifications.iso9001': 'ISO 9001',
    'certifications.iso9001.desc': 'Sistem Manajemen Kualitas',
    'certifications.iso9001.cert': 'No. Sert. 55Q13036',
    'certifications.iso14001': 'ISO 14001',
    'certifications.iso14001.desc': 'Manajemen Lingkungan',
    'certifications.iso14001.cert': 'No. Sert. 32E13036',
    'certifications.iso45001': 'ISO 45001',
    'certifications.iso45001.desc': 'Kesehatan & Keselamatan Kerja',
    'certifications.iso45001.cert': 'No. Sert. 20O13036',
    'certifications.kadin': 'Anggota KADIN',
    'certifications.kadin.desc': 'Kamar Dagang Indonesia',
    'certifications.kadin.reg': 'No. Reg. 230331-030586',
    
    // Contact Page
    'contact.title': 'Hubungi Kami',
    'contact.locations.title': 'Lokasi Kami',
    'contact.jakarta.title': 'PT SEA HORSE - Kantor Jakarta',
    'contact.balikpapan.title': 'PT SEA HORSE - Cabang Balikpapan',
    'contact.handil.title': 'PT SEA HORSE - Pangkalan Handil Tiga',
    'contact.sangatta.title': 'PT SEA HORSE - Kantor Sangatta',
    'contact.address': 'Alamat Kantor',
    'contact.branch.address': 'Alamat Cabang',
    'contact.base.address': 'Alamat Pangkalan',
    'contact.phone': 'Telepon',
    'contact.email': 'Alamat Email',
    'contact.email.single': 'Alamat Email',
    'contact.personnel': 'Personel Kunci',
    'contact.management': 'Manajemen Cabang',
    'contact.base.management': 'Manajemen Pangkalan',
    'contact.operations.management': 'Manajemen Operasional',
    
    // Footer
    'footer.contact': 'Kontak',
    'footer.quicklinks': 'Tautan Cepat',
    'footer.legal': 'Informasi Legal',
    'footer.copyright': '© 2025 P.T. SEA HORSE. Seluruh hak cipta dilindungi. | Bersertifikat ISO 9001, ISO 14001, ISO 45001'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}