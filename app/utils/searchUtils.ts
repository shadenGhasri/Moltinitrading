export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description?: string;
  rating?: number;
  inStock?: boolean;
}

// Sample products data - in a real app, this would come from an API
export const allProducts: Product[] = [
  {
    id: 1,
    name: 'سرویس آشپزخانه 17 پارچه',
    price: '2,500,000',
    image: 'https://placehold.co/300x300',
    category: 'سرویس آشپزخانه',
    description: 'سرویس کامل آشپزخانه شامل بشقاب، کاسه و فنجان',
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: 'قابلمه استیل 5 پارچه',
    price: '1,800,000',
    image: 'https://placehold.co/300x300',
    category: 'قابلمه و زودپز',
    description: 'ست قابلمه استیل با کیفیت بالا',
    rating: 4.2,
    inStock: true
  },
  {
    id: 3,
    name: 'کتری و قوری طرح چوب',
    price: '950,000',
    image: 'https://placehold.co/300x300',
    category: 'کتری و قوری',
    description: 'کتری و قوری زیبا با طرح چوب طبیعی',
    rating: 4.0,
    inStock: false
  },
  {
    id: 4,
    name: 'سرویس پذیرایی چینی',
    price: '3,200,000',
    image: 'https://placehold.co/300x300',
    category: 'ظروف پذیرایی',
    description: 'سرویس پذیرایی چینی با کیفیت عالی',
    rating: 4.8,
    inStock: true
  },
  {
    id: 5,
    name: 'مخلوط کن برقی',
    price: '1,200,000',
    image: 'https://placehold.co/300x300',
    category: 'لوازم برقی',
    description: 'مخلوط کن برقی با قدرت بالا',
    rating: 4.3,
    inStock: true
  },
  {
    id: 6,
    name: 'چای‌ساز برقی',
    price: '850,000',
    image: 'https://placehold.co/300x300',
    category: 'لوازم برقی',
    description: 'چای‌ساز برقی با تایمر دیجیتال',
    rating: 4.1,
    inStock: true
  },
  {
    id: 7,
    name: 'سرویس قاشق و چنگال استیل',
    price: '1,500,000',
    image: 'https://placehold.co/300x300',
    category: 'قاشق و چنگال',
    description: 'ست کامل قاشق و چنگال استیل',
    rating: 4.6,
    inStock: true
  },
  {
    id: 8,
    name: 'ظرف نگهداری غذا',
    price: '450,000',
    image: 'https://placehold.co/300x300',
    category: 'ظروف نگهداری',
    description: 'ظرف نگهداری غذا با درب محکم',
    rating: 4.0,
    inStock: true
  },
  {
    id: 9,
    name: 'سرویس قهوه‌خوری',
    price: '1,800,000',
    image: 'https://placehold.co/300x300',
    category: 'سرویس قهوه‌خوری',
    description: 'سرویس قهوه‌خوری با طراحی مدرن',
    rating: 4.4,
    inStock: true
  },
  {
    id: 10,
    name: 'پنکیک‌ساز برقی',
    price: '750,000',
    image: 'https://placehold.co/300x300',
    category: 'لوازم برقی',
    description: 'پنکیک‌ساز برقی با صفحه نچسب',
    rating: 4.2,
    inStock: true
  },
  {
    id: 11,
    name: 'سرویس چای‌خوری 6 نفره',
    price: '2,100,000',
    image: 'https://placehold.co/300x300',
    category: 'سرویس چای‌خوری',
    description: 'سرویس چای‌خوری کامل برای 6 نفر',
    rating: 4.7,
    inStock: true
  },
  {
    id: 12,
    name: 'ظرف مایکروویو',
    price: '320,000',
    image: 'https://placehold.co/300x300',
    category: 'ظروف مایکروویو',
    description: 'ظرف مخصوص مایکروویو با درب محکم',
    rating: 4.1,
    inStock: true
  }
];

export interface SearchFilters {
  category?: string;
  priceRange?: [number, number];
  inStock?: boolean;
  minRating?: number;
}

export interface SortOptions {
  field: 'name' | 'price' | 'category' | 'rating';
  order: 'asc' | 'desc';
}

// Search function
export const searchProducts = (
  query: string,
  products: Product[] = allProducts,
  filters?: SearchFilters
): Product[] => {
  if (!query.trim()) {
    return [];
  }

  let filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.description?.toLowerCase().includes(query.toLowerCase())
  );

  // Apply filters
  if (filters) {
    if (filters.category && filters.category !== 'all') {
      filteredProducts = filteredProducts.filter(product => 
        product.category === filters.category
      );
    }

    if (filters.priceRange) {
      filteredProducts = filteredProducts.filter(product => {
        const price = parseInt(product.price.replace(/,/g, ''));
        return price >= filters.priceRange![0] && price <= filters.priceRange![1];
      });
    }

    if (filters.inStock !== undefined) {
      filteredProducts = filteredProducts.filter(product => 
        product.inStock === filters.inStock
      );
    }

    if (filters.minRating) {
      filteredProducts = filteredProducts.filter(product => 
        (product.rating || 0) >= filters.minRating!
      );
    }
  }

  return filteredProducts;
};

// Sort products
export const sortProducts = (
  products: Product[],
  sortOptions: SortOptions
): Product[] => {
  return [...products].sort((a, b) => {
    let aValue: string | number;
    let bValue: string | number;

    switch (sortOptions.field) {
      case 'price':
        aValue = parseInt(a.price.replace(/,/g, ''));
        bValue = parseInt(b.price.replace(/,/g, ''));
        break;
      case 'category':
        aValue = a.category;
        bValue = b.category;
        break;
      case 'rating':
        aValue = a.rating || 0;
        bValue = b.rating || 0;
        break;
      default:
        aValue = a.name;
        bValue = b.name;
    }

    if (sortOptions.order === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
};

// Get unique categories
export const getCategories = (products: Product[] = allProducts): string[] => {
  return Array.from(new Set(products.map(p => p.category)));
};

// Format price for display
export const formatPrice = (price: string): string => {
  return parseInt(price.replace(/,/g, '')).toLocaleString('fa-IR');
};

// Debounce function for search input
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}; 