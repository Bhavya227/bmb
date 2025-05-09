
import { Link } from "react-router-dom";
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Upper floor with main content */}
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* About section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Heart className="h-6 w-6 mr-2 text-primary" fill="currentColor" />
                BloodBank
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Our mission is to connect blood donors with those in need, 
                creating a community of life-savers. Every donation counts and 
                can save up to three lives.
              </p>
              <div className="flex space-x-5 mb-8">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <span className="text-gray-500">Ready to donate?</span>
                <Button asChild variant="default" size="sm">
                  <Link to="/register">Register Now</Link>
                </Button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 pb-1 border-b border-gray-800">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/" 
                    className="text-gray-400 hover:text-white flex items-center transition-colors"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-2" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/dashboard" 
                    className="text-gray-400 hover:text-white flex items-center transition-colors"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-2" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/donors" 
                    className="text-gray-400 hover:text-white flex items-center transition-colors"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-2" />
                    <span>Donors</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/tech-stack" 
                    className="text-gray-400 hover:text-white flex items-center transition-colors"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-2" />
                    <span>Tech Stack</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/register" 
                    className="text-gray-400 hover:text-white flex items-center transition-colors"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-2" />
                    <span>Register</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 pb-1 border-b border-gray-800">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-400">123 Blood Bank Street<br/>New York, NY 10001</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <a href="mailto:info@bloodbank.com" className="text-gray-400 hover:text-white transition-colors">
                    info@bloodbank.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lower floor with copyright and policy links */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} BloodBank. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
