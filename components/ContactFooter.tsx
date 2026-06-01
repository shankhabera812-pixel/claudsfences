import Image from 'next/image';

export default function ContactFooter() {
  return (
    <footer className="bg-navy border-t border-white/10 pt-10 pb-8">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {/* Left Column */}
          <div>
            <Image 
              src="/images/claudlogo.png" 
              alt="Claud's Fences" 
              width={300} 
              height={80} 
              className="site-logo site-logo--footer mb-4 w-auto h-[80px]" 
            />
            <p className="text-white/65 text-[14px] mb-1">Shrewsbury, MA</p>
            <a
              href="tel:+17743862977"
              className="block text-white text-[14px] hover:text-accent transition-colors duration-150 mb-1"
            >
              (774) 386-2977
            </a>
            <a
              href="mailto:claudsfences@gmail.com"
              className="block text-white/65 text-[14px] hover:text-white transition-colors duration-150"
            >
              claudsfences@gmail.com
            </a>
          </div>

          {/* Right Column */}
          <div className="md:text-right">
            {/* Footer Nav Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 md:justify-end">
              <a
                href="#why-us"
                className="text-white text-[14px] no-underline hover:text-accent transition-colors duration-150"
              >
                About
              </a>
              <a
                href="#services"
                className="text-white text-[14px] no-underline hover:text-accent transition-colors duration-150"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-white text-[14px] no-underline hover:text-accent transition-colors duration-150"
              >
                Our Work
              </a>
            </div>

            {/* Social Row */}
            <div className="flex gap-3 md:justify-end mt-2">
              {/* TODO: Replace [FACEBOOK_URL_PLACEHOLDER] with verified Claud's Fences Facebook page URL before launch */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Claud's Fences on Facebook"
                className="text-white hover:text-accent transition-colors duration-150"
              >
                {/* Facebook icon — simple SVG */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <p className="text-white/50 text-[12px] text-center pt-6 border-t border-white/10">
          © 2026 Claud&apos;s Fences · Shrewsbury, MA
        </p>
      </div>
    </footer>
  );
}
