'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Mail, Phone } from 'lucide-react'

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const Twitter = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
)

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const Youtube = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
)

const TikTok = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
)

const Google = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 14c-.6 3.5-3.8 6-7.5 6A8 8 0 0 1 2 12c0-4.4 3.6-8 8-8 2 0 3.8.8 5.2 2l-2.8 2.8c-.6-.7-1.5-1.2-2.4-1.2-2.5 0-4.6 2-4.6 4.5S7.5 16.5 10 16.5c2 0 3.7-1.3 4.3-3H10v-3.5h7.5v4z"/>
  </svg>
)

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    {href: '/gallery', label: 'Project Gallery'},
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-sm">
      {/* Top Bar */}
      <div 
        className={`w-full bg-primary text-white transition-all duration-300 overflow-hidden ${
          isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-full flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="mailto:info@joricbuilders.co.ke" className="flex items-center gap-1.5 hover:text-gray-200 transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">info@joricbuilders.co.ke</span>
            </a>
            <a href="tel:+254745114480" className="flex items-center gap-1.5 hover:text-gray-200 transition-colors">
              <Phone size={14} />
              <span>+254 745 114 480</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/joricbuilders/" className="hover:text-gray-200 transition-colors" aria-label="Facebook">
              <Facebook size={14} />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Twitter">
              <Twitter size={14} />
            </a>
            <a href="https://www.instagram.com/joricbuilders/" className="hover:text-gray-200 transition-colors" aria-label="Instagram">
              <Instagram size={14} />
            </a>
            <a href="https://www.tiktok.com/@joricbuilders?_r=1&_t=ZS-96KHaWUt9kb" className="hover:text-gray-200 transition-colors" aria-label="TikTok">
              <TikTok size={14} />
            </a>
            <a href="https://www.youtube.com/channel/UCrVT6srfS2PgS-d62_xDF_Q/about" className="hover:text-gray-200 transition-colors" aria-label="YouTube">
              <Youtube size={14} />
            </a>
            <a href="https://www.youtube.com/channel/UCrVT6srfS2PgS-d62_xDF_Q/about" className="hover:text-gray-200 transition-colors" aria-label="Google">
              <Google size={14} />
            </a>
          </div>
        </div>
      </div>

      <nav className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-22">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Joric Builders"
              width={100}
              height={100}
              className="h-18 w-auto"
            />
            <div className="hidden sm:block">
              <p className="font-black text-2xl text-primary">JORIC</p>
              <hr className="w-20 border-1 border-secondary" />
              <p className="text-lg text-accent font-semibold -mt-1">BUILDERS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:+254745114480"
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+254745114480"
              className="block px-4 py-2 bg-secondary text-white rounded-lg font-semibold text-center hover:bg-opacity-90 transition-all"
            >
              Call Now
            </a>
          </div>
        )}
        </div>
      </nav>
    </header>
  )
}
