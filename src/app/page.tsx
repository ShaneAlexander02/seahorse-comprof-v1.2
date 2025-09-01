"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Anchor,
  Ship,
  Handshake,
  Package,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "./components/LanguageContext";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

const SeaHorseWebsite = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Helper function for absolute image paths
  const getImagePath = (imagePath: string) => {
    const basePath = "/seahorse-comprof-v1.2"; // GitHub repo name
    return `${basePath}${imagePath}`;
  };

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that section
    const hash = window.location.hash.substring(1);
    if (hash && ["home", "about", "services", "contact"].includes(hash)) {
      setActiveSection(hash);
      // Small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
        // Update URL hash without triggering a reload
        if (window.location.hash !== `#${currentSection}`) {
          history.replaceState(null, "", `#${currentSection}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
    setActiveSection(sectionId);
    // Update URL hash
    history.pushState(null, "", `#${sectionId}`);
  };

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const aboutImages: string[] = [
    getImagePath("/carousel-6.jpg"),
    getImagePath("/carousel-4.jpg"),
    getImagePath("/carousel-2.jpg"),
    getImagePath("/carousel-5.jpg"),
    getImagePath("/carousel-7.jpeg"),
  ];

  const [aboutIdx, setAboutIdx] = useState(0);
  const [aboutPaused, setAboutPaused] = useState(false);

  useEffect(() => {
    if (aboutPaused) return;
    const id = setInterval(() => {
      setAboutIdx((i) => (i + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [aboutPaused, aboutImages.length]);

  const prevAbout = () =>
    setAboutIdx((i) => (i - 1 + aboutImages.length) % aboutImages.length);
  const nextAbout = () => setAboutIdx((i) => (i + 1) % aboutImages.length);

  return (
    <div className="min-h-screen bg-white" style={{ overflow: "hidden auto" }}>
      
      {/* Navigation */}
<nav
  style={{ backgroundColor: "#ffffff" }}
  className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b"
>
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-9">
    <div className="flex justify-between items-center h-20">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={getImagePath("/logo.jpg")}
          alt="P.T. Sea Horse Logo"
          width={175}
          height={175}
          className="rounded-lg mb-2"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <div className="flex space-x-8">
          {[
            { key: "nav.home", section: "home" },
            { key: "nav.about", section: "about" },
            { key: "nav.services", section: "services" },
            { key: "nav.contact", section: "contact" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => {
                if (item.section === "contact") {
                  router.push("/contact");
                } else {
                  scrollToSection(item.section);
                }
              }}
              style={{
                color: "#760000",
                borderBottom:
                  activeSection === item.section
                    ? "2px solid #760000"
                    : "none",
              }}
              className="px-3 py-2 text-md font-medium transition-colors"
            >
              {t(item.key)}
            </button>
          ))}
        </div>
        <LanguageSwitcher />
      </div>

      {/* Mobile - Language Switcher and Menu Button */}
      <div className="md:hidden flex items-center space-x-3">
        <LanguageSwitcher />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md"
          style={{ color: "#760000" }}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-white border-t">
      <div className="px-4 py-2 space-y-1">
        {[
          { key: "nav.home", section: "home" },
          { key: "nav.about", section: "about" },
          { key: "nav.services", section: "services" },
          { key: "nav.contact", section: "contact" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => {
              if (item.section === "contact") {
                router.push("/contact");
              } else {
                scrollToSection(item.section);
              }
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md text-md"
            style={{ color: "#760000" }}
          >
            {t(item.key)}
          </button>
        ))}
      </div>
    </div>
  )}
</nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 text-white relative scroll-mt-12 md:scroll-mt-16"
      >
        {/* Background Image */}
        <div className="absolute top-12 left-0 right-0 bottom-0">
          <Image
            src={getImagePath("/carousel-1.jpg")}
            alt="Marine Background"
            fill
            style={{ objectFit: "cover", filter: "brightness(60%)" }}
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {t("hero.title")}
                <span className="block text-white">{t("hero.subtitle")}</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-white text-justify">
                {t("hero.description")}
              </p>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { labelKey: "hero.stats.experience", value: "50+" },
                    { labelKey: "hero.stats.locations", value: "4" },
                    { labelKey: "hero.stats.certified", value: "ISO" },
                    { labelKey: "hero.stats.operations", value: "24/7" },
                  ].map((stat) => (
                    <div key={stat.labelKey} className="text-center">
                      <div className="text-3xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white">
                        {t(stat.labelKey)}
                      </div>
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
        className="pt-14 pb-18 bg-white scroll-mt-12 md:scroll-mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={slideInLeft}>
              <motion.h2
                className="text-3xl mb-4 sm:text-4xl font-bold text-[#760000]"
                variants={fadeInUp}
              >
                {t("about.title")}
              </motion.h2>

              <motion.p
                className="text-gray-900 mb-4 leading-relaxed text-justify"
                variants={fadeInUp}
              >
                {t("about.p1")}
              </motion.p>

              <motion.p
                className="text-gray-900 mb-4 leading-relaxed text-justify"
                variants={fadeInUp}
              >
                {t("about.p2")}
              </motion.p>

              <motion.ul className="mt-6 space-y-4" variants={staggerContainer}>
                {[
                  "about.activity1",
                  "about.activity2",
                  "about.activity3",
                  "about.activity4",
                  "about.activity5",
                ].map((activityKey) => (
                  <motion.li
                    key={activityKey}
                    className="flex items-start space-x-3"
                    variants={fadeInUp}
                  >
                    <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#760000]/10 rounded-full text-[#760000] font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-900 font-medium leading-relaxed">
                      {t(activityKey)}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right Image Carousel */}
            <motion.div
              className="relative flex justify-center pt-12"
              variants={slideInRight}
            >
              <div
                className="relative w-full max-w-[520px] rounded-xl overflow-hidden shadow-lg"
                style={{ aspectRatio: "1/1.06" }}
                onMouseEnter={() => setAboutPaused(true)}
                onMouseLeave={() => setAboutPaused(false)}
              >
                {/* Slides */}
                {aboutImages.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`About slide ${i + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-700 ease-out ${
                      i === aboutIdx ? "opacity-100" : "opacity-0"
                    }`}
                    priority={i === 0}
                  />
                ))}

                {/* Arrows */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-3">
                  <button
                    onClick={prevAbout}
                    aria-label="Previous"
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-black/35 hover:bg-black/45 backdrop-blur flex items-center justify-center text-white transition"
                  >
                    {/* Left Chevron */}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextAbout}
                    aria-label="Next"
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-black/35 hover:bg-black/45 backdrop-blur flex items-center justify-center text-white transition"
                  >
                    {/* right chevron */}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                  {aboutImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setAboutIdx(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-1.5 w-1.5 rounded-full transition-all ${
                        i === aboutIdx ? "w-4 bg-white" : "bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
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
          <motion.div className="text-center mb-10" variants={fadeInUp}>
            <h2 className="text-3xl mb-4 sm:text-4xl font-bold text-white">
              {t("expertise.title")}
            </h2>
            <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
              {t("expertise.subtitle")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Column - Authorized Agent */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-100 transform hover:-translate-y-1 group"
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
                <p className="text-gray-900 leading-relaxed text-justify transition-colors duration-100">
                  {t("expertise.doen.description")}
                </p>
                <a
                  href="http://www.doen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center px-5 py-2.5 bg-[#760000] text-white rounded-md shadow hover:bg-red-800 transition-colors duration-100"
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right Column - Licences */}
            <motion.div className="space-y-8" variants={staggerContainer}>
              {[
                {
                  titleKey: "expertise.license1.title",
                  descKey: "expertise.license1.desc",
                },
                {
                  titleKey: "expertise.license2.title",
                  descKey: "expertise.license2.desc",
                },
              ].map((item) => (
                <motion.div
                  key={item.titleKey}
                  className="bg-white rounded-xl shadow-lg p-6 flex items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                  variants={slideInRight}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#760000]/10 text-[#760000] flex items-center justify-center rounded-full font-bold text-lg">
                    <span>✓</span>
                  </div>

                  <div className="ml-4">
                    <div className="font-semibold text-gray-900 text-lg transition-colors duration-300">
                      {t(item.titleKey)}
                    </div>
                    <div className="text-gray-600 transition-colors duration-300">
                      {t(item.descKey)}
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
        className="pt-14 pb-18 bg-white scroll-mt-12 md:scroll-mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl mb-4 sm:text-4xl font-bold text-[#760000]">
              {t("services.title")}
            </h2>
            <p className="text-l text-gray-900 mt-4 max-w-3xl mx-auto">
              {t("services.subtitle")}
            </p>
          </motion.div>

          {/* Services Grid - Alternating Layout */}
          <div className="space-y-16">
            {[
              {
                titleKey: "services.offshore.title",
                icon: Anchor,
                textKey: "services.offshore.desc",
                number: "01",
              },
              {
                titleKey: "services.vessels.title",
                icon: Ship,
                textKey: "services.vessels.desc",
                number: "02",
              },
              {
                titleKey: "services.brokerage.title",
                icon: Handshake,
                textKey: "services.brokerage.desc",
                number: "03",
              },
              {
                titleKey: "services.shipping.title",
                icon: Package,
                textKey: "services.shipping.desc",
                number: "04",
              },
            ].map((service, index) => (
              <motion.div
                key={service.titleKey}
                className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                variants={fadeInUp}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Icon Side */}
                <motion.div
                  className="flex-shrink-0 lg:w-1/4 flex justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <motion.div
                      className="relative w-32 h-32 bg-[#760000]/10 rounded-full flex items-center justify-center hover:bg-[#760000]/15 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#760000] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {service.number}
                      </div>
                      <service.icon size={60} className="text-[#760000]" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  className={`flex-1 lg:w-3/4 ${
                    index % 2 === 1 ? "lg:text-right" : "lg:text-left"
                  } text-center`}
                  variants={fadeInUp}
                >
                  <motion.div
                    className={`flex items-center gap-4 justify-center ${
                      index % 2 === 1 ? "lg:justify-end" : "lg:justify-start"
                    } mb-4`}
                    initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {index % 2 === 0 && (
                      <div className="hidden lg:block w-12 h-0.5 bg-[#760000]" />
                    )}
                    <h3 className="font-bold text-2xl lg:text-2xl text-[#760000]">
                      {t(service.titleKey)}
                    </h3>
                    {index % 2 === 1 && (
                      <div className="hidden lg:block w-12 h-0.5 bg-[#760000]" />
                    )}
                  </motion.div>

                  <motion.p
                    className={`text-gray-900 text-base lg:text-lg leading-relaxed max-w-xl ${
                      index % 2 === 1 ? "lg:ml-auto" : "mx-auto lg:mx-0"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  >
                    {t(service.textKey)}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        className="pt-14 pb-18"
        style={{ background: "linear-gradient(135deg, #760000 0%)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("certifications.title")}
            </h2>
            <p className="text-md text-white">{t("certifications.subtitle")}</p>
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
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg p-2">
                <Image
                  src={getImagePath("/Logoinsa.png")}
                  alt="INSA Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("certifications.insa")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("certifications.insa.desc")}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("certifications.insa.reg")}
              </p>
            </motion.div>

            {/* ISO 9001 */}
            <motion.div
              className="bg-white rounded-lg p-6 text-center shadow-lg"
              variants={scaleUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg p-2">
                <Image
                  src={getImagePath("/LogoISO9001.jpg")}
                  alt="ISO 9001 Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("certifications.iso9001")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("certifications.iso9001.desc")}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("certifications.iso9001.cert")}
              </p>
            </motion.div>

            {/* ISO 14001 */}
            <motion.div
              className="bg-white rounded-lg p-6 text-center shadow-lg"
              variants={scaleUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg p-2">
                <Image
                  src={getImagePath("/LogoISO14001.jpg")}
                  alt="ISO 14001 Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("certifications.iso14001")}
              </h3>
              <p className="text-sm text-gray-600 two-line-text">
                {t("certifications.iso14001.desc")}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("certifications.iso14001.cert")}
              </p>
            </motion.div>

            {/* ISO 45001 */}
            <motion.div
              className="bg-white rounded-lg p-6 text-center shadow-lg"
              variants={scaleUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg p-2">
                <Image
                  src={getImagePath("/LogoISO45001.jpg")}
                  alt="ISO 45001 Logo"
                  width={30}
                  height={30}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("certifications.iso45001")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("certifications.iso45001.desc")}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("certifications.iso45001.cert")}
              </p>
            </motion.div>

            {/* KADIN */}
            <motion.div
              className="bg-white rounded-lg p-6 text-center shadow-lg"
              variants={scaleUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg p-2">
                <Image
                  src={getImagePath("/Logokadin.png")}
                  alt="KADIN Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("certifications.kadin")}
              </h3>
              <p className="text-sm text-gray-600 two-line-text">
                {t("certifications.kadin.desc")}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("certifications.kadin.reg")}
              </p>
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
              <h4 className="text-md font-semibold mb-3">
                {t("footer.contact")}
              </h4>
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
              <h4 className="text-md font-semibold mb-3">
                {t("footer.quicklinks")}
              </h4>
              <div className="space-y-1 flex flex-col items-justify md:items-start">
                {[
                  { key: "nav.home", section: "home" },
                  { key: "nav.about", section: "about" },
                  { key: "nav.services", section: "services" },
                  { key: "nav.contact", section: "contact" },
                ].map((item) => (
                  <div key={item.key}>
                    <button
                      onClick={() => {
                        if (item.section === "contact") {
                          router.push("/contact");
                        } else {
                          scrollToSection(item.section);
                        }
                      }}
                      className="text-sm text-gray-600 hover:text-[#760000] transition-colors cursor-pointer"
                    >
                      {t(item.key)}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Information */}
            <div className="pl-0 md:pl-8">
              <h4 className="text-md font-semibold mb-3">
                {t("footer.legal")}
              </h4>
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
      <div
        className="w-full text-center text-sm"
        style={{ backgroundColor: "#760000" }}
      >
        <p className="text-white py-3">{t("footer.copyright")}</p>
      </div>
    </div>
  );
};

export default SeaHorseWebsite;