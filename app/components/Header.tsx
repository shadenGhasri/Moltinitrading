import Link from 'next/link';
import { ShoppingCart, Search, User, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
          Moltini
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-gray-900">
              محصولات
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-gray-900">
              دسته‌بندی‌ها
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              درباره ما
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              تماس با ما
            </Link>
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="جستجو..."
                className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 