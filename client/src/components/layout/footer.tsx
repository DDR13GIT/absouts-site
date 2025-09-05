import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import logoImage1 from "@assets/Absouts Logo Transparent 01_1757063958530.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-bg text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={logoImage1} alt="Absouts Logo" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/80 mb-4">
              Global outsourcing solutions for Cloud Accounting, BPO, and Software Development.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="w-10 h-10 bg-white/20 rounded-full hover:bg-white/30"
                data-testid="social-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-10 h-10 bg-white/20 rounded-full hover:bg-white/30"
                data-testid="social-twitter"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-10 h-10 bg-white/20 rounded-full hover:bg-white/30"
                data-testid="social-facebook"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-white/80">
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="footer-service-cloud-accounting">Cloud Accounting</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="footer-service-bpo">BPO Services</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="footer-service-software">Software Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="footer-service-payroll">Payroll Management</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="footer-service-tax">Tax Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3 text-white/80">
              <li><Link href="/about" className="hover:text-white transition-colors" data-testid="footer-about">About Us</Link></li>
              <li><Link href="/career" className="hover:text-white transition-colors" data-testid="footer-careers">Careers</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors" data-testid="footer-leadership">Leadership</Link></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-news">News & Updates</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-partners">Partners</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center" data-testid="footer-email">
                <i className="fas fa-envelope mr-3"></i>
                info@absouts.com
              </li>
              <li className="flex items-center" data-testid="footer-phone">
                <i className="fas fa-phone mr-3"></i>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center" data-testid="footer-location">
                <i className="fas fa-map-marker-alt mr-3"></i>
                Dhaka, Bangladesh
              </li>
            </ul>
            <Link href="/contact">
              <Button className="bg-accent text-primary hover:bg-accent/90 mt-4" data-testid="footer-contact-button">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm" data-testid="footer-copyright">
            © {currentYear} Absouts. All rights reserved.
          </p>
          <div className="flex space-x-6 text-white/60 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-privacy">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-terms">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
