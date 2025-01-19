import React from 'react';
import { ShoppingBag, Tag, Truck, CreditCard } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "School Spirit T-Shirt",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    category: "Apparel"
  },
  {
    id: 2,
    name: "Team Hoodie",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    category: "Apparel"
  },
  {
    id: 3,
    name: "Sports Water Bottle",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    category: "Accessories"
  }
];

const features = [
  {
    icon: Tag,
    title: "Best Prices",
    description: "Quality products at affordable prices"
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Quick delivery to your doorstep"
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Safe and encrypted transactions"
  }
];

export function Buy() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Shop Spirit Wear</h1>
        <button className="flex items-center bg-[#5de0e6] text-white px-4 py-2 rounded-lg hover:bg-[#4bc5cb] transition-colors">
          <ShoppingBag className="w-4 h-4 mr-2" />
          Cart (0)
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="inline-block p-3 bg-[#5de0e6]/10 rounded-lg mb-4">
                <Icon className="w-6 h-6 text-[#5de0e6]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-[#5de0e6] mb-2">{product.category}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-bold">{product.price}</span>
                <button className="bg-[#5de0e6] text-white px-4 py-2 rounded-lg hover:bg-[#4bc5cb] transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}