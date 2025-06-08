import Link from 'next/link';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    products: [
      { name: 'سرویس آشپزخانه', href: '/category/kitchen' },
      { name: 'ظروف پذیرایی', href: '/category/dining' },
      { name: 'کتری و قوری', href: '/category/teapot' },
      { name: 'قابلمه و زودپز', href: '/category/pots' },
    ],
    company: [
      { name: 'درباره ما', href: '/about' },
      { name: 'تماس با ما', href: '/contact' },
      { name: 'وبلاگ', href: '/blog' },
      { name: 'فرصت‌های شغلی', href: '/careers' },
    ],
    support: [
      { name: 'راهنمای خرید', href: '/help/shopping' },
      { name: 'شرایط بازگشت', href: '/help/returns' },
      { name: 'حریم خصوصی', href: '/privacy' },
      { name: 'قوانین و مقررات', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تماس با ما</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>021-12345678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>info@riverkala.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" />
                <span>تهران، خیابان ولیعصر</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">محصولات</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">شرکت</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">پشتیبانی</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} RiverKala. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 