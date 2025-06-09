
import Link from 'next/link';

const Hero = () => {
  const categories = [
    { name: 'سرویس آشپزخانه', image: 'https://torobche.com/wp-content/uploads/2025/04/Home.Appliance.Photo_.739.JPG.Thmb_.webp', link: '/category/kitchen' },
    { name: 'کتری و قوری', image: 'https://sdmntprnortheu.oaiusercontent.com/files/00000000-f90c-61f4-ae3d-4fe8ad63b868/raw?se=2025-06-09T15%3A22%3A32Z&sp=r&sv=2024-08-04&sr=b&scid=5a19eb55-ca87-56f2-8009-793d95ac6531&skoid=eb780365-537d-4279-a878-cae64e33aa9c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-09T07%3A12%3A38Z&ske=2025-06-10T07%3A12%3A38Z&sks=b&skv=2024-08-04&sig=Ee/TBXJ2xdLHAdhnf/eY4%2B5Nm4CUwD7TMgPM8JsbrZc%3D', link: '/category/teapot' },
    { name: 'محصولات پیرکس', image: 'https://sdmntprnortheu.oaiusercontent.com/files/00000000-4698-61f4-89d5-6ef9712df3f8/raw?se=2025-06-09T15%3A19%3A22Z&sp=r&sv=2024-08-04&sr=b&scid=4a6f8640-b461-5f9d-a86a-8653d8017f40&skoid=eb780365-537d-4279-a878-cae64e33aa9c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-09T13%3A43%3A31Z&ske=2025-06-10T13%3A43%3A31Z&sks=b&skv=2024-08-04&sig=EqDisasszruTtN/GqzfrCt3P/u48KlD2i8Bn4OjrYoM%3D', link: '/category/pots' },
    { name: 'محصولات برقی', image: 'https://torobche.com/wp-content/uploads/2025/04/Home.Appliance.Photo_.7392.JPG.Thmb_.webp', link: '/category/dining' },

  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Banner */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8 bg-white">
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
              className="group relative h-64 rounded-lg overflow-hidden "
            >
              <img src ={category.image}
               className='object-contain w-full h-full bg-center bg-no-repeat absolute top-0 left-0 rounded-xl bg-white group-hover:scale-105 transition duration-300'/>
              <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-40 transition">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-gray-900 text-xl font-semibold">{category.name}</h3>
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