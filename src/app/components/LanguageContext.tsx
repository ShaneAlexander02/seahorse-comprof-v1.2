"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
    'hero.description': 'Established in 1972, PT Sea Horse is a major marine service provider for the Indonesian Oil & Gas exploration, production, mining, and transportation industries.',
    'hero.stats.experience': 'Years Experience',
    'hero.stats.locations': 'Office Locations',
    'hero.stats.certified': 'Certified',
    'hero.stats.operations': 'Operations',
    
    // About Section
    'about.title': 'About Us',
    'about.p1': 'We are a major marine service provider in Indonesian Oil & Gas exploration and production, also involved in mining and transportation industries. Furthermore, we have represented some of the world\'s largest shipowners.',
    'about.p2': 'Hence, we have the ability to supply tugs and support vessels to work in deep water locations and the capacity to supply vessels even when the job needs to be done on very short notice. This has enabled us to work with confidence for our customers\' needs. Some of our main activities include: ',
    'about.activity1': 'Ship Owning and Management',
    'about.activity2': 'Vessel Chartering Including Sale & Purchase of these Vessels',
    'about.activity3': 'Operations for Tug Services (Harbour and Offshore)',
    'about.activity4': 'Shipping Agency (port, vessel & crew clearance, etc)',
    'about.activity5': 'Being the general agent for coal shipping operations',
    
    // Expertise Section
    'expertise.title': 'Official Authorization & Business Credentials',
    'expertise.subtitle': 'Recognized and trusted in the marine industry with verified partnerships and licenses.',
    'expertise.doen.description': 'We are the sole agent for Doen Pacific Pty. Ltd. PT Sea Horse which provides complete technical support for all Doen Waterjet models in Indonesia, including servicing and spare parts.',
    'expertise.license1.title': 'Shipping Business License',
    'expertise.license1.desc': 'No: BXXXIV-422/AT.54',
    'expertise.license2.title': 'Business Identification Number (NIB)',
    'expertise.license2.desc': 'No: 9210101202577',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive marine services tailored to meet your specific operational needs.',
    'services.offshore.title': 'Offshore Services',
    'services.offshore.desc': 'Rig mobilisation / demobilisation, anchor-handling, towing of work/material barges, vessels, etc.',
    'services.vessels.title': 'Vessels',
    'services.vessels.desc': 'Anchor-handling tugs, supply (AHTS) tugs, hook-up and commissioning vessels, supply boats, accommodation, flat-top barges, crew boats and other specialised vessels.',
    'services.brokerage.title': 'Brokerage',
    'services.brokerage.desc': 'PT Sea Horse is a trusted vessel broker for sales & purchase / chartering inquiries. We are able to source for all types of vessels worldwide for our clients.',
    'services.shipping.title': 'Shipping & Logistics',
    'services.shipping.desc': 'PT Sea Horse specializes in cargo movement, expediting, and international freight forwarding. We handle coal, drilling pipes, containers, and general cargo. As shipping agents for major global shipowners, we serve ports across Indonesia.',
    
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
    'nav.about': 'Tentang Kami',
    'nav.services': 'Layanan',
    'nav.contact': 'Kontak',
    
    // Hero Section
    'hero.title': 'Perusahaan Pelayaran',
    'hero.subtitle': 'Terkemuka di Indonesia',
    'hero.description': 'Didirikan pada tahun 1972, PT Sea Horse merupakan perusahaan penyedia jasa kelautan untuk industri eksplorasi, produksi, pertambangan, dan transportasi Minyak & Gas di Indonesia.',
    'hero.stats.experience': 'Tahun Pengalaman',
    'hero.stats.locations': 'Lokasi Kantor',
    'hero.stats.certified': 'Bersertifikat',
    'hero.stats.operations': 'Operasional',
    
    // About Section  
    'about.title': 'Tentang Kami',
    'about.p1': 'Kami adalah penyedia layanan kelautan dalam eksplorasi dan produksi minyak & gas di Indonesia, juga terlibat dalam industri pertambangan dan transportasinya. Selain itu, kami telah mewakili beberapa pemilik kapal terbesar di dunia.',
    'about.p2': 'Oleh karena itu, kami memiliki kemampuan untuk menyediakan kapal tunda dan kapal pendukung untuk bekerja di lokasi perairan yang dalam, dan mempunyai  kapasitas untuk menyediakan kapal bahkan ketika pekerjaan harus diselesaikan dalam waktu yang sangat singkat. Beberapa kegiatan utama kami meliputi:',
    'about.activity1': 'Kepemilikan dan Pengelolaan Kapal',
    'about.activity2': 'Penyewaan Kapal termasuk Penjualan & Pembelian Kapal',
    'about.activity3': 'Kegiatan Operasional untuk Kapal Tunda (Di Pelabuhan dan Lepas Pantai)',
    'about.activity4': 'Keagenan Kapal (Pelabuhan, Ijin Masuk/Keluar Kapal dan Awak Kapal, dan lain-lain)',
    'about.activity5': 'Agen Umum untuk Kegiatan Pengiriman Batu Bara',
    
    // Expertise Section
    'expertise.title': 'Agen Resmi, Terpecaya dan Terdaftar',
    'expertise.subtitle': 'Diakui dan dipercaya dalam dengan kemitraan dan lisensi yang terverifikasi.',
    'expertise.doen.description': 'Kami adalah agen resmi dari Doen Pacific Pty. Ltd. PT Sea Horse menyediakan dukungan teknis lengkap untuk semua model jet kapal Doen di Indonesia, termasuk servis dan suku cadang.',
    'expertise.license1.title': 'Ijin Usaha Pelayaran',
    'expertise.license1.desc': 'No: BXXXIV-422/AT.54',
    'expertise.license2.title': 'Nomor Induk Berusaha (NIB)',
    'expertise.license2.desc': 'No: 9210101202577',
    
    // Services Section
    'services.title': 'Pelayanan Kami',
    'services.subtitle': 'Layanan kelautan komprehensif yang disesuaikan untuk memenuhi kebutuhan operasional spesifik Anda.',
    'services.offshore.title': 'Layanan Lepas Pantai',
    'services.offshore.desc': 'Mobilisasi / demobilisasi rig, penanganan jangkar, dan penarikan kapal tongkang untuk barang / material, kapal, dll.',
    'services.vessels.title': 'Kapal',
    'services.vessels.desc': 'Anchor-handling tugs (AHT), Anchor-handling tugs supply (AHTS), Accommodation work barge (AWB), Kapal pendukung, Kapal tongkang, Kapal awak/krew dan kapal khusus lainnya.',
    'services.brokerage.title': 'Broker',
    'services.brokerage.desc': 'PT Sea Horse adalah broker kapal tepercaya untuk kebutuhan jual beli/penyewaan kapal. Kami dapat menyediakan semua jenis kapal di seluruh dunia untuk klien kami.',
    'services.shipping.title': 'Pengiriman dan Logistik',
    'services.shipping.desc': 'PT Sea Horse mempunyai pengalaman dalam pemindahan kargo, ekspedisi, dan pengiriman barang internasional. Kami menangani muatan seperti batu bara, pipa pengeboran, kontainer, dan kargo umum. Sebagai agen pengiriman untuk pemilik kapal global besar, kami melayani pelabuhan di seluruh Indonesia.',
    
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
    'certifications.iso14001.desc': 'Manajemen \n Lingkungan',
    'certifications.iso14001.cert': 'No. Sert. 32E13036',
    'certifications.iso45001': 'ISO 45001',
    'certifications.iso45001.desc': 'Kesehatan & Keselamatan Kerja',
    'certifications.iso45001.cert': 'No. Sert. 20O13036',
    'certifications.kadin': 'Anggota KADIN',
    'certifications.kadin.desc': 'Kamar Dagang \n Indonesia',
    'certifications.kadin.reg': 'No. Reg. 230331-030586',
    
    // Contact Page
    'contact.title': 'Hubungi Kami',
    'contact.locations.title': 'Lokasi Kami',
    'contact.jakarta.title': 'PT SEA HORSE - Kantor Jakarta',
    'contact.balikpapan.title': 'PT SEA HORSE - Kantor Cabang Balikpapan',
    'contact.handil.title': 'PT SEA HORSE - Pangkalan Kapal Handil Tiga',
    'contact.sangatta.title': 'PT SEA HORSE - Kantor Cabang Sangatta',
    'contact.address': 'Alamat Kantor',
    'contact.branch.address': 'Alamat Kantor',
    'contact.base.address': 'Alamat Pangkalan',
    'contact.phone': 'Telepon',
    'contact.email': 'Alamat Email',
    'contact.email.single': 'Alamat Email',
    'contact.personnel': 'Narahubung',
    'contact.management': 'Kepala Cabang',
    'contact.base.management': 'Pengawas Pangkalan',
    'contact.operations.management': 'Koordinator Operasional',
    
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
  const [language, setLanguage] = useState<Language>('id');
  const [isInitialized, setIsInitialized] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
      setLanguage(savedLanguage);
    }
    setIsInitialized(true);
  }, []);

  // Save language to localStorage when it changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  // Don't render until we've loaded the saved language
  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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