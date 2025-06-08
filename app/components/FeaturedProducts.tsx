import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'سرویس آشپزخانه 17 پارچه',
      price: '2,500,000',
      image: 'https://placehold.co/300x300',
      category: 'سرویس آشپزخانه',
    },
    {
      id: 2,
      name: 'قابلمه استیل 5 پارچه',
      price: '1,800,000',
      image: 'https://placehold.co/300x300',
      category: 'قابلمه و زودپز',
    },
    {
      id: 3,
      name: 'کتری و قوری طرح چوب',
      price: '950,000',
      image: 'https://placehold.co/300x300',
      category: 'کتری و قوری',
    },
    {
      id: 4,
      name: 'سرویس پذیرایی چینی',
      price: '3,200,000',
      image: 'https://placehold.co/300x300',
      category: 'ظروف پذیرایی',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">محصولات ویژه</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                {/* <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                /> */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100">
                    <ShoppingCart className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-500">{product.category}</h3>
                <Link href={`/product/${product.id}`} className="mt-1 block">
                  <p className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                    {product.name}
                  </p>
                </Link>
                <p className="mt-1 text-lg font-bold text-gray-900">{product.price} تومان</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            مشاهده همه محصولات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 