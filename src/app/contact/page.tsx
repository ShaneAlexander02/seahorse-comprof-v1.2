"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, MapPin, Phone, Mail, User } from "lucide-react";

export default function ContactPage() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState("jakarta");

  return (
    <>
      {/* Navigation */}
      <nav
        style={{ backgroundColor: "#ffffff" }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b"
      >
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
              {["Home", "About", "Services", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (item === "Home") {
                      router.push("/");
                    } else if (item === "Contact") {
                      router.push("/contact");
                    } else {
                      router.push(`/#${item.toLowerCase()}`);
                    }
                  }}
                  style={{
                    color: "#760000",
                    borderBottom:
                      item === "Contact" ? "2px solid #760000" : "none",
                  }}
                  className="px-3 py-2 text-mb font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (item === "Home") {
                      router.push("/");
                    } else if (item === "Contact") {
                      router.push("/contact");
                    } else {
                      router.push(`/#${item.toLowerCase()}`);
                    }
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md text-lg"
                  style={{
                    color: "#760000",
                    fontWeight: item === "Contact" ? "bold" : "normal",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="min-h-screen bg-gray-50">
        {/* Title */}
        <section className="pt-21 py-4 bg-[#760000] text-white text-center">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
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

        {/* Contact Info + Form */}
        <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all duration-700 ease-out opacity-0 animate-fadeInUp">
            {/* Location Tabs */}
            <div className="border-b mb-6">
              <div className="flex flex-wrap gap-1 mb-4">
                {[
                  { id: "jakarta", label: "JAKARTA" },
                  { id: "balikpapan", label: "BALIKPAPAN" },
                  { id: "handil", label: "HANDIL TIGA" },
                  { id: "sangatta", label: "SANGATTA" }
                ].map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setActiveLocation(location.id)}
                    className={`px-2 py-2 font-semibold text-sm transition-colors ${
                      activeLocation === location.id
                        ? "border-b-2 border-red-800 text-red-800"
                        : "text-gray-600 hover:text-red-800"
                    }`}
                  >
                    {location.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {activeLocation === "jakarta" && (
                <div>
                  <h4 className="text-lg font-bold text-red-800 mb-4 border-b border-gray-200 pb-2">
                    PT SEA HORSE - Jakarta
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-red-800" />
                        <h5 className="font-semibold text-red-800">Address</h5>
                      </div>
                      <div className="ml-6 space-y-1 text-sm">
                        <p>Multivision Tower 5th Floor Unit 5</p>
                        <p>Jl. Kuningan Mulia Lot 9B</p>
                        <p>Jakarta 12980, Indonesia</p>
                        <p>Co. Reg No. 9120101202577</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4 text-red-800" />
                        <span className="font-semibold text-sm">Tel: (+62) 21 2938 0018</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Mail className="w-4 h-4 text-red-800" />
                        <h5 className="font-semibold text-red-800">Email</h5>
                      </div>
                      <div className="ml-6 space-y-1 text-sm">
                        <p>general@seahorse.co.id</p>
                        <p>marketing@seahorse.co.id</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-red-800" />
                        <h5 className="font-semibold text-red-800">Contact Persons</h5>
                      </div>
                      <div className="ml-6 space-y-1 text-sm">
                        <p><strong>Director:</strong> Ms. Maria Dharmaputri</p>
                        <p><strong>General Manager:</strong> Mr. Winston Foo</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeLocation === "balikpapan" && (
                <div>
                  <h4 className="text-lg font-bold text-red-800 mb-4 border-b border-gray-200 pb-2">
                    PT SEA HORSE - Balikpapan
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-red-800" />
                        <h5 className="font-semibold text-red-800">Address</h5>
                      </div>
                      <div className="ml-6 space-y-1 text-sm">
                        <p>Complex Balikpapan Permai Block L No. 6 Jl. Jenderal Sudirman</p>
                        <p>Balikpapan 76114, East Kalimantan, Indonesia</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4 text-red-800" />
                        <span className="font-semibold text-sm">Tel: (+62) 542 427 048 / 542 427 077</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Mail className="w-4 h-4 text-red-800" />
                        <span className="font-semibold text-sm">Email: bppn@seahorse.co.id</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-red-800" />
                        <h5 className="font-semibold text-red-800">Contact Person</h5>
                      </div>
                      <div className="ml-6 text-sm">
                        <p><strong>Branch Manager:</strong> Mr. Hasri Umar</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeLocation === "handil" && (
                <div>
                  <h4 className="text-lg font-bold text-red-800 mb-4 border-b border-gray-200 pb-2">
                    PT SEA HORSE - Handil Tiga
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-red-800" />
                        <h5 className="font-semibold text-red-800">Address</h5>
                      </div>
                      <div className="ml-6 space-y-1 text-sm">
                        <p>Jl. Tahir RT.XI RW.02 NO.19</p>
                        <p>Handil Dua - Muara Jawa 75261, East Kalimantan, Indonesia</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4 text-red-800" />
                        <div className="text-sm">
                          <p><strong>Tel:</strong> (+62) 541 691 830</p>
                          <p><strong>Mobile:</strong> (+62) 812-5115-4480</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Mail className="w-4 h-4 text-red-800" />
                        <span className="font-semibold text-sm">Email: smo@seahorse.co.id</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-red-800" />
                        <h5 className="font-semibold text-red-800">Contact Person</h5>
                      </div>
                      <div className="ml-6 text-sm">
                        <p><strong>Base Supervisor:</strong> Mr. Supandi</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeLocation === "sangatta" && (
                <div>
                  <h4 className="text-lg font-bold text-red-800 mb-4 border-b border-gray-200 pb-2">
                    PT SEA HORSE - Sangatta
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-red-800" />
                        <h5 className="font-semibold text-red-800">Address</h5>
                      </div>
                      <div className="ml-6 space-y-1 text-sm">
                        <p>Jln. APT Pranoto RT 09 No. 06</p>
                        <p>Sangatta 75611, East Kalimantan, Indonesia</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4 text-red-800" />
                        <div className="text-sm">
                          <p><strong>Tel:</strong> (+62) 549 24254</p>
                          <p><strong>Mobile:</strong> (+62) 811 580 698</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Mail className="w-4 h-4 text-red-800" />
                        <span className="font-semibold text-sm">Email: agency@seahorse.co.id</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-red-800" />
                        <h5 className="font-semibold text-red-800">Contact Person</h5>
                      </div>
                      <div className="ml-6 text-sm">
                        <p><strong>Operations Coordinator:</strong> Mr. Syarifudin</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
          </div>

          {/* Form Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all duration-700 ease-out opacity-0 animate-fadeInUp delay-200">
            <h3 className="text-2xl font-bold mb-4">Get in Touch with Us!</h3>
            <form
              action="https://formspree.io/f/mgejrddd"
              method="post"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Name/Institution"
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="tel"
                name="phonenumber"
                placeholder="Enter Phone Number"
                pattern="[0-9]{7,}"
                required
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                name="message"
                placeholder="Your Feedback or Inquiry"
                required
                rows={5}
                className="w-full p-3 border rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#760000] text-white py-3 rounded-lg hover:bg-red-900 transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </main>

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
