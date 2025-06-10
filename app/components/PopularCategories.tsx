import Image from 'next/image';
import Link from 'next/link';

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'سرویس آشپزخانه',
      image: 'https://placehold.co/400x300',
      productCount: '120 محصول',
    },
    {
      id: 2,
      name: 'قابلمه و زودپز',
      image: 'https://placehold.co/400x300',
      productCount: '85 محصول',
    },
    {
      id: 3,
      name: 'کتری و قوری',
      image: 'https://placehold.co/400x300',
      productCount: '65 محصول',
    },
    {
      id: 4,
      name: 'ظروف پذیرایی',
      image: 'https://placehold.co/400x300',
      productCount: '95 محصول',
    },
    {
      id: 5,
      name: 'لوازم برقی',
      image: 'https://placehold.co/400x300',
      productCount: '75 محصول',
    },
    {
      id: 6,
      name: 'لوازم جانبی',
      image: 'https://placehold.co/400x300',
      productCount: '150 محصول',
    },
  ];

  return (
    <section className="vp-selected-categories after-clear py-16 bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            دسته‌بندی‌های محبوب
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            بهترین دسته‌بندی‌های لوازم آشپزخانه و پذیرایی را با کیفیت عالی و قیمت مناسب انتخاب کنید
          </p>
        </div>

        {/* Categories Grid - Laftika Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group block transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-32 md:h-40 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                    <div className="text-3xl text-gray-400">🏠</div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-4 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500 opacity-70">
                    {category.productCount}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        {/* <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            مشاهده همه دسته‌بندی‌ها
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default PopularCategories; 