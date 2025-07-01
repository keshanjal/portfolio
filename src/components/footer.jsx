import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-transparent text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center">
        {/* Contact Info */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            © {new Date().getFullYear()} Anjal Kesarwani. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 items-center text-lg">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anjal-kesarwani-685508221/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#915eff] transition-colors flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>

          {/* Email */}
          <a
            href="mailto:anjalkesarwaniinfo@gmail.com"
            className="hover:text-[#915eff] transition-colors flex items-center gap-2"
          >
            <FaEnvelope /> anjalkesarwaniinfo@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
