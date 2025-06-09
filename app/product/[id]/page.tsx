"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Heart, ShoppingCart, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { allProducts, formatPrice } from '../../utils/searchUtils';

const ProductDetailPage = () => {
  const params = useParams();
  const productId = parseInt(params.id as string);
  
  const [product, setProduct] = useState(allProducts.find(p => p.id === productId));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === productId);
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">محصول یافت نشد</h1>
            <Link 
              href="/"
              className="text-blue-600 hover:text-blue-800"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const images = [
    product.image,
    product.image, // In a real app, you'd have multiple images
    product.image,
    product.image
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 space-x-reverse mb-8">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              صفحه اصلی
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/search" className="text-gray-500 hover:text-gray-700">
              محصولات
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                {/* <Image
                  src={images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                /> */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">تصویر محصول</span>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-blue-500' : 'border-transparent'
                    }`}
                  >
                    {/* <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    /> */}
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs text-gray-500">{index + 1}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  {product.category}
                </p>
                
                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating!) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 mr-2">
                      {product.rating} از 5
                    </span>
                  </div>
                )}

                {/* Price */}
                <div className="mb-6">
                  <p className="text-3xl font-bold text-blue-600">
                    {formatPrice(product.price)} تومان
                  </p>
                  {!product.inStock && (
                    <p className="text-red-600 font-medium mt-2">
                      این محصول در حال حاضر موجود نیست
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">توضیحات</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  تعداد
                </label>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 h-10 border border-gray-300 rounded-lg text-center"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4 space-x-reverse">
                <button
                  disabled={!product.inStock}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
                >
                  <ShoppingCart className="inline-block ml-2 h-5 w-5" />
                  افزودن به سبد خرید
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Heart className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">دسته‌بندی:</span>
                    <span className="text-gray-900 mr-2">{product.category}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">وضعیت:</span>
                    <span className={`mr-2 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {product.inStock ? 'موجود' : 'ناموجود'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">محصولات مشابه</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProducts
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <div key={relatedProduct.id} className="group">
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                      {/* <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      /> */}
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">تصویر</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-sm text-gray-500">{relatedProduct.category}</h3>
                      <Link href={`/product/${relatedProduct.id}`} className="mt-1 block">
                        <p className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                          {relatedProduct.name}
                        </p>
                      </Link>
                      <p className="mt-1 text-lg font-bold text-gray-900">
                        {formatPrice(relatedProduct.price)} تومان
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailPage; 