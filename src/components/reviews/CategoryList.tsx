
import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Smartphone, 
  Utensils, 
  Home, 
  ShoppingBag, 
  Car, 
  Laptop, 
  HeartPulse, 
  Brush,
  LucideIcon
} from "lucide-react";

interface CategoryProps {
  name: string;
  icon: LucideIcon;
  color: string;
  count: number;
}

const categories: CategoryProps[] = [
  {
    name: "Technology",
    icon: Smartphone,
    color: "bg-blue-50 text-blue-600",
    count: 524
  },
  {
    name: "Restaurants",
    icon: Utensils,
    color: "bg-orange-50 text-orange-600",
    count: 348
  },
  {
    name: "Home & Garden",
    icon: Home,
    color: "bg-green-50 text-green-600",
    count: 215
  },
  {
    name: "Fashion",
    icon: ShoppingBag,
    color: "bg-pink-50 text-pink-600",
    count: 189
  },
  {
    name: "Automotive",
    icon: Car,
    color: "bg-red-50 text-red-600",
    count: 132
  },
  {
    name: "Electronics",
    icon: Laptop,
    color: "bg-purple-50 text-purple-600",
    count: 287
  },
  {
    name: "Health",
    icon: HeartPulse,
    color: "bg-emerald-50 text-emerald-600",
    count: 165
  },
  {
    name: "Beauty",
    icon: Brush,
    color: "bg-violet-50 text-violet-600",
    count: 201
  }
];

const CategoryItem: React.FC<CategoryProps> = ({ name, icon: Icon, color, count }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/explore?category=${name.toLowerCase()}`);
  };
  
  return (
    <div 
      className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer bg-white"
      onClick={handleClick}
    >
      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-3", color)}>
        <Icon size={24} />
      </div>
      <h3 className="text-sm font-medium text-gray-900">{name}</h3>
      <span className="text-xs text-gray-500 mt-1">{count} reviews</span>
    </div>
  );
};

const CategoryList: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <CategoryItem key={category.name} {...category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
