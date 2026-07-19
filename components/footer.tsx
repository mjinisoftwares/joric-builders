import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Share2, Heart, Music } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Joric Builders"
                width={40}
                height={40}
                className="h-10 w-auto"
              />

              <div>
                <p className="font-bold text-lg">JORIC</p>
                <p className="text-xs font-semibold -mt-1">BUILDERS</p>
              </div>
            </div>

            <p className="text-sm text-gray-200">
              Leading design-to-build construction solutions across Kenya using
              modern technology for durable, cost-effective builds.
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-200 hover:text-secondary transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-gray-200 hover:text-secondary transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="text-gray-200 hover:text-secondary transition"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-gray-200 hover:text-secondary transition"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>


          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>

            <ul className="space-y-2 text-sm text-gray-200">
              <li>Architectural Design</li>
              <li>Structural Engineering</li>
              <li>Precast Slab Systems</li>
              <li>Construction Management</li>
              <li>Interior Finishes</li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>

            <div className="space-y-3">

              <div className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />

                <div>
                  <p className="text-sm text-gray-200">
                    +254 745 114 480
                  </p>

                  <p className="text-xs text-gray-300">
                    Available on WhatsApp
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />

                <p className="text-sm text-gray-200">
                  info@joricbuilders.co.ke
                </p>
              </div>


              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />

                <p className="text-sm text-gray-200">
                  Thika Town, Kiambu County
                </p>
              </div>

            </div>
          </div>

        </div>



        {/* Social Links + Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 pb-4">

          <div className="flex justify-between items-center flex-wrap gap-4">

            <p className="text-sm text-gray-200">
              © {currentYear} Joric Builders Ltd. All rights reserved.
            </p>


            <div className="flex gap-4">

              <a
                href="https://www.facebook.com/joricbuilders/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-secondary rounded-lg transition"
                title="Visit our Facebook"
              >
                <Share2 size={20} />
              </a>


              <a
                href="https://www.instagram.com/joricbuilders/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-secondary rounded-lg transition"
                title="Visit our Instagram"
              >
                <Heart size={20} />
              </a>


              <a
                href="https://www.tiktok.com/@joricbuilders"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-secondary rounded-lg transition"
                title="Visit our TikTok"
              >
                <Music size={20} />
              </a>

            </div>

          </div>


          {/* Designed By Mjini Digital */}
          <div className="border-t border-primary-foreground/20 pt-4 mt-6 text-center">

            <p className="text-sm text-gray-300">

              Designed and handcoded by{" "}

              <Link
                href="https://www.mjinidigital.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-secondary hover:underline"
              >
                Mjini Digital
              </Link>

            </p>

          </div>


        </div>

      </div>
    </footer>
  )
}
