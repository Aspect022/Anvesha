"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, User } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav
      role="navigation"
      aria-label="Main"
      className="bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-2xl font-heading font-bold text-primary">Anvesha</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/info" className="text-muted-foreground hover:text-primary transition-colors">
              Info
            </Link>
            <Link
              href="/find-talent"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1"
            >
              <Search className="w-4 h-4" />
              <span>Find Talent</span>
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                <User className="w-4 h-4" />
                <span>Login</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors py-2">
                About
              </Link>
              <Link href="/info" className="text-muted-foreground hover:text-primary transition-colors py-2">
                Info
              </Link>
              <Link
                href="/find-talent"
                className="text-muted-foreground hover:text-primary transition-colors py-2 flex items-center space-x-2"
              >
                <Search className="w-4 h-4" />
                <span>Find Talent</span>
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors py-2">
                Contact
              </Link>
              <Link href="/auth" className="pt-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2 bg-transparent"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
