import Link from "next/link";
import { Instagram, Facebook, Twitter, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    products: [
      { name: "سرویس آشپزخانه", href: "/category/kitchen" },
      { name: "ظروف پذیرایی", href: "/category/dining" },
      { name: "کتری و قوری", href: "/category/teapot" },
      { name: "قابلمه و زودپز", href: "/category/pots" },
    ],
    company: [
      { name: "درباره ما", href: "/aboutUs" },
      { name: "تماس با ما", href: "/contact" },
      // { name: "وبلاگ", href: "/blog" },
    ],
    support: [
      { name: "راهنمای خرید", href: "/help/shopping" },
      { name: "شرایط بازگشت", href: "/help/returns" },
      // { name: "حریم خصوصی", href: "/privacy" },
      // { name: "قوانین و مقررات", href: "/terms" },
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
            <div className="flex items-center space-x-3 cursor-default">
                <Phone className="h-5 w-5" />
                <span>٠٩١٢١٩٦٥٣٣٩</span>
              </div>
              <div className="flex items-center space-x-3 cursor-default">
                <Phone className="h-5 w-5" />
                <span>٠٩١٠٩٥٩٠٩٦٣</span>
              </div>
             

              {/* <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>info@riverkala.com</span>
              </div> */}
              <div className="flex items-center space-x-3 cursor-default">
                <MapPin className="h-5 w-5 shrink-0" />
                <span>
                  تهران ميدان شوش خ صابونيان پاساژ الماس طبقه اول پلاك ٣٨٨
                </span>
              </div>
            </div>
            <div className="flex flex-row items-start space-x-4 mt-6 h-fit">
              <a
                href="https://www.instagram.com/moltini_trading"
                target="_blank"
                className="hover:text-blue-400 cursor-pointer mt-0.5"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb5ws8OHAdNecjaki33b"
                target="_blank"
                className="hover:text-blue-400 cursor-pointer h-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-4.95a9 9 0 1 1 3.45 3.45L3 21z" />
                  <path d="M16.2 14.2c-.4 1-1.1 1.5-2 1.2-1.8-.5-3.3-2-4.3-3.6-.7-1.1-.8-2.2.4-2.6.3-.1.6-.1.9.1.2.1.6.6.8.8.1.1.2.3.2.5 0 .2-.2.4-.3.6-.2.2-.3.4-.1.7.3.5 1 1.4 1.8 2 .2.2.5.3.7.2.3-.1.5-.3.7-.5.1-.2.4-.2.6-.1.3.2.8.5 1.1.7.2.2.3.5.2.8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          {/* <div>
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
          </div> */}

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
            © {new Date().getFullYear()} moltini. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
