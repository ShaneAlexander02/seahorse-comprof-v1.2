"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, MapPin, Phone, Mail, User } from "lucide-react";
import { useLanguage } from '../components/LanguageContext';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export default function ContactPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState("jakarta");

  // Helper function for absolute image paths - ADDED THIS
  const getImagePath = (imagePath: string) => {
    const basePath = "/seahorse-comprof-v1.2"; // Your GitHub repo name
    return `${basePath}${imagePath}`;
  };

  const scrollToSection = (sectionId: string) => {
    router.push(`/#${sectionId}`);
  };

  return (
    <>
      {/* Navigation - Updated to match main page */}
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
                      if (item.section === "home") {
                        router.push("/");
                      } else if (item.section === "contact") {
                        router.push("/contact");
                      } else {
                        router.push(`/#${item.section}`);
                      }
                    }}
                    style={{
                      color: "#760000",
                      borderBottom:
                        item.section === "contact" ? "2px solid #760000" : "none",
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
                    if (item.section === "home") {
                      router.push("/");
                    } else if (item.section === "contact") {
                      router.push("/contact");
                    } else {
                      router.push(`/#${item.section}`);
                    }
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md text-md"
                  style={{
                    color: "#760000",
                    fontWeight: item.section === "contact" ? "bold" : "normal",
                  }}
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="min-h-screen bg-gray-50">
        {/* Title */}
        <section className="pt-24 py-4 bg-[#760000] text-white text-center">
          <h1 className="text-3xl font-bold mb-2">{t('contact.title')}</h1>
        </section>

        {/* Map */}
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.393043871214!2d106.83362939999999!3d-6.211781200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f50bbf82b827%3A0x4e12dcbac3cde9bd!2sSea%20Horse%2C%20PT.!5e0!3m2!1sid!2sid!4v1754793213570!5m2!1sid!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Info - Full Width */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Location Tabs */}
          <div className="bg-white shadow-lg rounded-lg p-8 transform transition-all duration-700 ease-out opacity-0 animate-fadeInUp">
            <div className="border-b mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.locations.title')}
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { id: "jakarta", label: "JAKARTA" },
                  { id: "balikpapan", label: "BALIKPAPAN" },
                  { id: "handil", label: "HANDIL TIGA" },
                  { id: "sangatta", label: "SANGATTA" },
                ].map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setActiveLocation(location.id)}
                    className={`px-4 py-3 font-semibold text-base transition-colors rounded-lg ${
                      activeLocation === location.id
                        ? "bg-red-800 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-800"
                    }`}
                  >
                    {location.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {activeLocation === "jakarta" && (
                <>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-800 mb-6 border-b border-gray-200 pb-3">
                      {t('contact.jakarta.title')}
                    </h3>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-red-800 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-red-800 mb-3">
                            {t('contact.address')}
                          </h4>
                          <div className="space-y-1 text-base text-gray-800 leading-relaxed">
                            <p className="font-medium">
                              Multivision Tower 5th Floor Unit 5
                            </p>
                            <p>Jl. Kuningan Mulia Lot 9B</p>
                            <p>Jakarta 12980, Indonesia</p>
                            <p className="text-sm text-gray-600 mt-2">
                              Co. Reg No. 9120101202577
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Phone className="w-6 h-6 text-red-800" />
                        <h4 className="font-bold text-red-800">{t('contact.phone')}</h4>
                      </div>
                      <p className="text-lg text-gray-800 font-medium ml-9">
                        (+62) 21 2938 0018
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <Mail className="w-6 h-6 text-red-800 mt-1" />
                        <div>
                          <h4 className="font-bold text-red-800 mb-3">
                            {t('contact.email')}
                          </h4>
                          <div className="space-y-2 ml-0">
                            <div className="bg-white p-3 rounded border-l-4 border-red-800">
                              <p className="text-base text-gray-800 font-medium">
                                general@seahorse.co.id
                              </p>
                              <p className="text-sm text-gray-600">
                                General Inquiries
                              </p>
                            </div>
                            <div className="bg-white p-3 rounded border-l-4 border-red-800">
                              <p className="text-base text-gray-800 font-medium">
                                marketing@seahorse.co.id
                              </p>
                              <p className="text-sm text-gray-600">
                                Marketing & Business
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <User className="w-6 h-6 text-red-800 mt-1" />
                        <div>
                          <h4 className="font-bold text-red-800 mb-3">
                            {t('contact.personnel')}
                          </h4>
                          <div className="space-y-3 ml-0">
                            <div className="bg-white p-3 rounded">
                              <p className="font-semibold text-gray-800">
                                Ms. Maria Dharmaputri
                              </p>
                              <p className="text-sm text-gray-600">Director</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                              <p className="font-semibold text-gray-800">
                                Mr. Winston Foo
                              </p>
                              <p className="text-sm text-gray-600">
                                General Manager
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeLocation === "balikpapan" && (
                <>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-800 mb-6 border-b border-gray-200 pb-3">
                      {t('contact.balikpapan.title')}
                    </h3>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-red-800 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-red-800 mb-3">
                            {t('contact.branch.address')}
                          </h4>
                          <div className="space-y-1 text-base leading-relaxed">
                            <p className="font-medium text-gray-800">
                              Complex Balikpapan Permai Block L No. 6
                            </p>
                            <p className="font-medium text-gray-800">
                              Jl. Jenderal Sudirman
                            </p>
                            <p className="font-medium text-gray-800">
                              Balikpapan 76114, East Kalimantan
                            </p>
                            <p className="font-medium text-gray-800">
                              Indonesia
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Phone className="w-6 h-6 text-red-800" />
                        <h4 className="font-bold text-red-800">{t('contact.phone')}</h4>
                      </div>
                      <div className="ml-9 space-y-1">
                        <p className="text-lg text-gray-800 font-medium">
                          (+62) 542 427 048
                        </p>
                        <p className="text-lg text-gray-800 font-medium">
                          (+62) 542 427 077
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <Mail className="w-6 h-6 text-red-800 mt-1" />
                        <div>
                          <h4 className="font-bold text-red-800 mb-3">
                            {t('contact.email.single')}
                          </h4>
                          <div className="bg-white p-4 rounded border-l-4 border-red-800">
                            <p className="text-lg text-gray-800 font-medium">
                              bppn@seahorse.co.id
                            </p>
                            <p className="text-sm text-gray-600">
                              Balikpapan Operations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <User className="w-6 h-6 text-red-800 mt-1" />
                        <div>
                          <h4 className="font-bold text-red-800 mb-3">
                            {t('contact.management')}
                          </h4>
                          <div className="bg-white p-4 rounded">
                            <p className="font-semibold text-gray-800 text-lg">
                              Mr. Hasri Umar
                            </p>
                            <p className="text-base text-gray-600">
                              Branch Manager
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeLocation === "handil" && (
                <>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-800 mb-6 border-b border-gray-200 pb-3">
                      {t('contact.handil.title')}
                    </h3>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-red-800 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-red-800 mb-3">
                            {t('contact.base.address')}
                          </h4>
                          <div className="space-y-1 text-base leading-relaxed">
                            <p className="font-medium text-gray-800">
                              Jl. Tahir RT.XI RW.02 NO.19
                            </p>
                            <p className="font-medium text-gray-800">
                              Handil Dua - Muara Jawa 75261
                            </p>
                            <p className="font-medium text-gray-800">
                              East Kalimantan, Indonesia
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Phone className="w-6 h-6 text-red-800" />
                        <h4 className="font-bold text-red-800">{t('contact.phone')}</h4>
                      </div>
                      <p className="text-lg text-gray-800 font-medium ml-9">
                        (+62) 541 691 830
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <Mail className="w-6 h-6 text-red-800 mt-1" />
                        <div>
                          <h4 className="font-bold text-red-800 mb-3">
                            {t('contact.email.single')}
                          </h4>
                          <div className="bg-white p-4 rounded border-l-4 border-red-800">
                            <p className="text-lg text-gray-800 font-medium">
                              smo@seahorse.co.id
                            </p>
                            <p className="text-sm text-gray-600">
                              Site Management Office
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <User className="w-6 h-6 text-red-800 mt-1" />
                        <div>
                          <h4 className="font-bold text-red-800 mb-3">
                            {t('contact.base.management')}
                          </h4>
                          <div className="bg-white p-4 rounded">
                            <p className="font-semibold text-gray-800 text-lg">
                              Mr. Supandi
                            </p>
                            <p className="text-base text-gray-600">
                              Base Supervisor
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activeLocation === "sangatta" && (
                <>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-red-800 mb-6 border-b border-gray-200 pb-3">
                      {t('contact.sangatta.title')}
                    </h3>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-red-800 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-red-800 mb-3">
                            {t('contact.address')}
                          </h4>
                          <div className="space-y-1 text-base leading-relaxed">
                            <p className="font-medium text-gray-800">
                              Jln. APT Pranoto RT 09 No. 06
                            </p>
                            <p className="font-medium text-gray-800">
                              Sangatta 75611
                            </p>
                            <p className="font-medium text-gray-800">
                              East Kalimantan, Indonesia
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Phone className="w-6 h-6 text-red-800 flex-shrink-0" />
                        <h4 className="font-bold text-red-800">{t('contact.phone')}</h4>
                      </div>
                      <p className="text-lg font-medium text-gray-800 ml-9">
                        (+62) 549 24254
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <Mail className="w-6 h-6 text-red-800 mt-1 flex-shrink-0" />
                        <div className="w-full">
                          <h4 className="font-bold text-red-800 mb-3">
                            {t('contact.email.single')}
                          </h4>
                          <div className="bg-white p-4 rounded border-l-4 border-red-800">
                            <p className="text-lg text-gray-800 font-medium">
                              agency@seahorse.co.id
                            </p>
                            <p className="text-sm text-gray-600">
                              Agency Operations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <User className="w-6 h-6 text-red-800 mt-1 flex-shrink-0" />
                        <div className="w-full">
                          <h4 className="font-bold text-red-800 mb-3">
                            {t('contact.operations.management')}
                          </h4>
                          <div className="bg-white p-4 rounded">
                            <p className="font-semibold text-gray-800 text-lg">
                              Mr. Syarifudin
                            </p>
                            <p className="text-base text-gray-600">
                              Operations Coordinator
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Contact */}
            <div className="pl-0 md:pl-8">
              <h4 className="text-md font-semibold mb-3">{t('footer.contact')}</h4>
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
              <h4 className="text-md font-semibold mb-3">{t('footer.quicklinks')}</h4>
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
                        if (item.section === "home") {
                          router.push("/");
                        } else if (item.section === "contact") {
                          router.push("/contact");
                        } else {
                          router.push(`/#${item.section}`);
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
              <h4 className="text-md font-semibold mb-3">{t('footer.legal')}</h4>
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
        <p className="text-white py-3">
          {t('footer.copyright')}
        </p>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </>
  );
}