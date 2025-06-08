import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const categories = [
    { name: 'سرویس آشپزخانه', image: 'https://placehold.co/400x300', link: '/category/kitchen' },
    { name: 'ظروف پذیرایی', image: 'https://placehold.co/400x300', link: '/category/dining' },
    { name: 'کتری و قوری', image: 'https://placehold.co/400x300', link: '/category/teapot' },
    { name: 'قابلمه و زودپز', image: 'https://placehold.co/400x300', link: '/category/pots' },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Banner */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8 bg-white">
          {/* <Image
            src="/images/moltiniHeader.jpg"
            alt="Featured Products"
            fill
            className="object-cover w-full h-full bg-cover bg-no-repeat absolute top-0 left-0"
            priority
          /> */}
          <img src ='/images/moltiniHeader.jpg' className='object-contain w-full h-full bg-center bg-no-repeat absolute top-0 left-0 rounded-xl'/>
          
          {/* <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">به فروشگاه مولتینی خوش آمدید</h1>
              <p className="text-xl mb-6">بهترین محصولات آشپزخانه و پذیرایی</p>
              <Link
                href="/products"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                مشاهده محصولات
              </Link>
            </div>
          </div> */}
        </div>

        

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.link}
              className="group relative h-64 rounded-lg overflow-hidden"
            >
              {/* <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              /> */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero; 