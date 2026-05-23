import { Linkedin, Github, Instagram, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Mobile & Tablet: Stacked Layout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Copyright Text */}
          <p className="text-xs sm:text-sm font-sans text-center sm:text-left order-2 sm:order-1">
            © 2025 MUHAD K. All rights reserved.
          </p>

          {/* Social Media Icons - Right side */}
          {/* <div className="hidden lg:flex items-center space-x-1">
            <a
              href="https://linkedin.com/in/muhadk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <i className="fa fa-linkedin-square text-lg"></i>
            </a>
            <a
              href="https://github.com/muhadkprsnl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <i className="fa fa-github text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/mu_aadk.12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <i className="fa fa-instagram text-lg"></i>
            </a>
            <a
              href="https://www.medium.com/muhadk12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <i className="fa fa-medium text-lg"></i>
            </a>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
          </div> */}
          <div className="flex items-center space-x-4 order-1 sm:order-2">
            <a
              href="https://linkedin.com/in/muhadk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <i className="fa fa-linkedin-square text-lg"></i>
            </a>
            <a
              href="https://github.com/muhadkprsnl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <i className="fa fa-github text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/mu_aadk.12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <i className="fa fa-instagram text-lg"></i>
            </a>
            {/* <a
              href="https://www.medium.com/muhadk12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <i className="fa fa-medium text-lg"></i>
            </a> */}
          </div>

          {/* Optional: Additional links for mobile */}
          <div className="mt-4 sm:hidden text-center">
            {/* <div className="flex justify-center space-x-4 text-xs text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div> */}
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
