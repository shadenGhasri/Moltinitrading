"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, SortAsc, Grid, List } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Product, 
  searchProducts, 
  sortProducts, 
  getCategories, 
  formatPrice,
  SearchFilters,
  SortOptions 
} from '../utils/searchUtils';

const SearchResultsContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState<Product[]>([]);
  const [filteredResults, setFilteredResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);

  // Get unique categories
  const categories = ['all', ...getCategories()];

  // Search function
  const performSearch = async (searchQuery: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const searchResults = searchProducts(searchQuery);
    setResults(searchResults);
    setFilteredResults(searchResults);
    setIsLoading(false);
  };

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...results];

    // Apply filters
    const filters: SearchFilters = {
      category: selectedCategory !== 'all' ? selectedCategory : undefined,
      priceRange: priceRange
    };

    filtered = searchProducts(query, results, filters);

    // Apply sorting
    const sortOptions: SortOptions = {
      field: sortBy,
      order: sortOrder
    };

    filtered = sortProducts(filtered, sortOptions);
    setFilteredResults(filtered);
  }, [results, selectedCategory, priceRange, sortBy, sortOrder, query]);

  // Perform search when query changes
  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">در حال جستجو...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              نتایج جستجو برای "{query}"
            </h1>
            <p className="text-gray-600">
              {filteredResults.length} محصول یافت شد
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Filter className="ml-2 h-5 w-5" />
                  فیلترها
                </h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">دسته‌بندی</h4>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'همه دسته‌ها' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">محدوده قیمت</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="5000000"
                      step="100000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>0 تومان</span>
                      <span>{formatPrice(priceRange[1].toString())} تومان</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:w-3/4">
              {/* Sort and View Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-center space-x-4 space-x-reverse mb-4 sm:mb-0">
                  <label className="text-sm font-medium">مرتب‌سازی:</label>
                  <select
                    value={`${sortBy}-${sortOrder}`}
                    onChange={(e) => {
                      const [newSortBy, newSortOrder] = e.target.value.split('-') as [string, string];
                      setSortBy(newSortBy as 'name' | 'price' | 'category');
                      setSortOrder(newSortOrder as 'asc' | 'desc');
                    }}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="name-asc">نام (صعودی)</option>
                    <option value="name-desc">نام (نزولی)</option>
                    <option value="price-asc">قیمت (کم به زیاد)</option>
                    <option value="price-desc">قیمت (زیاد به کم)</option>
                    <option value="category-asc">دسته‌بندی (صعودی)</option>
                    <option value="category-desc">دسته‌بندی (نزولی)</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Products Grid/List */}
              {filteredResults.length > 0 ? (
                <div className={
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-4'
                }>
                  {filteredResults.map((product) => (
                    <div
                      key={product.id}
                      className={`bg-white rounded-lg shadow-sm border overflow-hidden ${
                        viewMode === 'list' ? 'flex' : ''
                      }`}
                    >
                      <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'}`}>
                        <div className="w-full h-full bg-gray-100">
                          {/* <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          /> */}
                        </div>
                      </div>
                      
                      <div className="p-4 flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {product.name}
                          </h3>
                          {!product.inStock && (
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                              ناموجود
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                        
                        {viewMode === 'list' && (
                          <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-blue-600">
                            {formatPrice(product.price)} تومان
                          </p>
                          
                          {product.rating && (
                            <div className="flex items-center">
                              <span className="text-yellow-400">★</span>
                              <span className="text-sm text-gray-600 mr-1">{product.rating}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-4 flex space-x-2 space-x-reverse">
                          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                            افزودن به سبد خرید
                          </button>
                          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            ♡
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    محصولی یافت نشد
                  </h3>
                  <p className="text-gray-600">
                    کلمات کلیدی دیگری را امتحان کنید یا فیلترها را تغییر دهید
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const SearchResultsPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">در حال بارگذاری...</p>
          </div>
        </div>
        <Footer />
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
};

export default SearchResultsPage; 