
// Mock data for reviews
export interface Review {
  id: string;
  title: string;
  rating: number;
  content: string;
  userName: string;
  userAvatar?: string;
  date: string;
  helpful: number;
  notHelpful: number;
  comments: number;
  tags: string[];
  featured?: boolean;
  category: string;
}

export interface Comment {
  id: string;
  reviewId: string;
  content: string;
  userName: string;
  userAvatar?: string;
  date: string;
  helpful: number;
  notHelpful: number;
}

// Generate 20 mock reviews
export const mockReviews: Review[] = [
  {
    id: "1",
    title: "Incredible Experience with the Latest iPad Pro",
    rating: 4.5,
    content: "I've been using the new iPad Pro for a month now and it has completely transformed my workflow. The display is stunning, and the M2 chip makes everything incredibly fast. Battery life is excellent, lasting me a full day of work without any issues. The Apple Pencil is responsive and feels natural to use. The only downside is the price, but I think it's worth it for the quality and performance you get.",
    userName: "Michael Thompson",
    userAvatar: "",
    date: "2023-04-15T10:30:00Z",
    helpful: 28,
    notHelpful: 3,
    comments: 12,
    tags: ["Technology", "iPad", "Apple"],
    featured: true,
    category: "products"
  },
  {
    id: "2",
    title: "Disappointed with Customer Service at Cloud Hosting",
    rating: 2,
    content: "I've been using Cloud Hosting for my business website for 2 years, but their recent customer service changes have been terrible. Wait times are now over an hour, and the representatives seem poorly trained. I had an issue with my site going down, and it took them 3 days to resolve what used to be fixed in hours. Looking for alternatives now.",
    userName: "Sarah Johnson",
    userAvatar: "",
    date: "2023-05-20T14:15:00Z",
    helpful: 45,
    notHelpful: 8,
    comments: 23,
    tags: ["Service", "Web Hosting", "Support"],
    featured: true,
    category: "services"
  },
  {
    id: "3",
    title: "Best Noise-Cancelling Headphones I've Ever Tried",
    rating: 5,
    content: "These headphones have exceeded all my expectations. The noise cancellation is so good that I can't hear anything around me, even in a noisy coffee shop. Sound quality is excellent, with rich bass and clear highs. Battery life is impressive too, lasting around 30 hours on a single charge. The build quality feels premium and they're comfortable to wear for long periods. Highly recommend!",
    userName: "David Chen",
    userAvatar: "",
    date: "2023-06-10T09:45:00Z",
    helpful: 37,
    notHelpful: 2,
    comments: 15,
    tags: ["Technology", "Audio", "Headphones"],
    featured: true,
    category: "products"
  },
  {
    id: "4",
    title: "Amazing Italian Restaurant in Downtown",
    rating: 4.5,
    content: "Had dinner here last weekend and the food was incredible. The pasta is made fresh in-house and you can really taste the difference. Service was attentive without being intrusive, and the ambiance was perfect for our anniversary dinner. Prices are on the higher side, but the quality justifies it. Their tiramisu is the best I've had outside of Italy!",
    userName: "Emily Rodriguez",
    userAvatar: "",
    date: "2023-07-05T20:30:00Z",
    helpful: 19,
    notHelpful: 1,
    comments: 7,
    tags: ["Restaurant", "Italian", "Dining"],
    category: "restaurants"
  },
  {
    id: "5",
    title: "Overpriced and Underwhelming Smart Watch",
    rating: 2.5,
    content: "After all the hype, I was expecting much more from this smart watch. The battery barely lasts a day with normal use, and several of the health tracking features are inaccurate. The sleep tracking seems completely random. The build quality is good, but for this price point, the performance should be much better. Save your money and look at competitors.",
    userName: "Jason Miller",
    userAvatar: "",
    date: "2023-08-12T11:20:00Z",
    helpful: 52,
    notHelpful: 14,
    comments: 31,
    tags: ["Technology", "Wearables", "Smart Watch"],
    category: "products"
  },
  {
    id: "6",
    title: "Great Value Fitness Membership",
    rating: 4,
    content: "I've been a member of this gym for 6 months now and I'm really happy with it. The equipment is modern and well-maintained, and there's rarely a wait even during peak hours. Classes are included in the membership and the instructors are knowledgeable. The locker rooms are clean, and the 24/7 access is super convenient. Only giving 4 stars instead of 5 because the parking can be difficult during busy times.",
    userName: "Alex Morgan",
    userAvatar: "",
    date: "2023-09-01T16:45:00Z",
    helpful: 23,
    notHelpful: 3,
    comments: 8,
    tags: ["Fitness", "Gym", "Health"],
    category: "services"
  },
  {
    id: "7",
    title: "Revolutionized My Productivity Workflow",
    rating: 5,
    content: "This task management app has completely changed how I organize my work and personal life. The interface is intuitive and visually appealing. I especially love the calendar integration and the way it helps break down large projects into manageable tasks. The mobile app syncs perfectly with the desktop version, and the widgets are actually useful. Worth every penny of the subscription.",
    userName: "Samantha Lee",
    userAvatar: "",
    date: "2023-10-18T08:30:00Z",
    helpful: 41,
    notHelpful: 2,
    comments: 17,
    tags: ["Software", "Productivity", "Apps"],
    category: "apps"
  },
  {
    id: "8",
    title: "Disappointing Beach Resort Experience",
    rating: 2,
    content: "The photos online look nothing like the actual resort. Our room was dated and had a musty smell. The beach was beautiful but overcrowded, and there weren't enough lounge chairs. Food at the resort was mediocre and overpriced. Staff seemed overwhelmed and service was slow. The only redeeming quality was the pool area, which was well-maintained. Would not recommend for the price they're charging.",
    userName: "Robert Wilson",
    userAvatar: "",
    date: "2023-11-07T19:15:00Z",
    helpful: 34,
    notHelpful: 5,
    comments: 21,
    tags: ["Travel", "Resort", "Vacation"],
    category: "hotels"
  },
  {
    id: "9",
    title: "Life-Changing Coffee Machine",
    rating: 5,
    content: "As a coffee enthusiast, I've tried many machines, but this one is exceptional. It's easy to use yet produces cafe-quality espresso. The milk frother creates perfect microfoam for lattes and cappuccinos. It heats up quickly and is easy to clean. Yes, it's expensive, but considering I'm saving $5 a day not buying coffee out, it will pay for itself within months. If you love good coffee, this is worth the investment.",
    userName: "Jennifer Kim",
    userAvatar: "",
    date: "2023-12-03T07:45:00Z",
    helpful: 29,
    notHelpful: 1,
    comments: 14,
    tags: ["Kitchen", "Appliances", "Coffee"],
    category: "products"
  },
  {
    id: "10",
    title: "Unreliable Food Delivery Service",
    rating: 1.5,
    content: "I've used this service about 10 times, and 4 of those orders had major issues. Food arrives cold, items are missing, and once they delivered the completely wrong order. Customer service is difficult to reach, and their resolution is usually just a small credit, not a full refund. The app itself is buggy and sometimes crashes during ordering. There are better alternatives out there.",
    userName: "Thomas Greene",
    userAvatar: "",
    date: "2024-01-15T18:20:00Z",
    helpful: 63,
    notHelpful: 7,
    comments: 38,
    tags: ["Delivery", "Food", "Service"],
    category: "services"
  },
  {
    id: "11",
    title: "Perfect Family SUV",
    rating: 4.5,
    content: "We've had this SUV for a year now and it's been perfect for our family of five. Plenty of space for passengers and cargo, and the third row is actually usable for adults. Fuel economy is decent for a vehicle this size. The safety features give us peace of mind, especially the blind spot monitoring and emergency braking. The infotainment system could be more intuitive, but overall we're very satisfied with our purchase.",
    userName: "Lisa Johnson",
    userAvatar: "",
    date: "2024-02-09T12:30:00Z",
    helpful: 27,
    notHelpful: 3,
    comments: 11,
    tags: ["Automotive", "SUV", "Family"],
    category: "products"
  },
  {
    id: "12",
    title: "Impressive Online Coding Bootcamp",
    rating: 4,
    content: "I completed this 12-week bootcamp recently and I'm impressed with the quality of instruction. The curriculum is well-structured and up-to-date with current industry practices. The instructors are knowledgeable and accessible. The projects are challenging and provided great portfolio pieces. Job assistance was helpful but not as extensive as advertised. Overall, it was a worthwhile investment that helped me transition into a new career.",
    userName: "Daniel Park",
    userAvatar: "",
    date: "2024-03-22T15:10:00Z",
    helpful: 32,
    notHelpful: 4,
    comments: 19,
    tags: ["Education", "Coding", "Career"],
    category: "services"
  },
  {
    id: "13",
    title: "Beautiful but Impractical Designer Lamp",
    rating: 3,
    content: "This lamp is stunningly beautiful and definitely a conversation piece in our living room. The design is unique and the materials feel high-quality. However, it's not very practical as actual lighting - it doesn't provide enough light to read by, and the switch is awkwardly placed. If you're buying it as a decorative piece, you'll love it, but if you need functional lighting, look elsewhere.",
    userName: "Olivia Martinez",
    userAvatar: "",
    date: "2024-04-05T09:25:00Z",
    helpful: 18,
    notHelpful: 2,
    comments: 6,
    tags: ["Home Decor", "Lighting", "Design"],
    category: "products"
  },
  {
    id: "14",
    title: "Hidden Gem Brunch Spot",
    rating: 5,
    content: "I can't believe I hadn't discovered this place sooner! Their brunch menu is creative and delicious. The avocado toast with poached eggs and spicy sauce is the best I've had. Coffee is sourced from a local roaster and perfectly prepared. The space is cozy with a great atmosphere, though it gets busy on weekends so go early or be prepared to wait. Service is friendly and attentive. Prices are reasonable for the quality.",
    userName: "Chris Nelson",
    userAvatar: "",
    date: "2024-05-20T11:40:00Z",
    helpful: 21,
    notHelpful: 0,
    comments: 9,
    tags: ["Restaurant", "Brunch", "Cafe"],
    category: "restaurants"
  },
  {
    id: "15",
    title: "Overhyped Streaming Service",
    rating: 2,
    content: "I subscribed after hearing everyone talk about their original content, but I'm unimpressed. Yes, they have a few good shows, but the overall library is limited compared to competitors. The interface is clunky and recommendations are often way off base. Video quality frequently degrades despite my fast internet connection. Customer service was unhelpful when I reported issues. Not worth the monthly fee.",
    userName: "Rachel White",
    userAvatar: "",
    date: "2024-06-14T20:05:00Z",
    helpful: 39,
    notHelpful: 12,
    comments: 26,
    tags: ["Streaming", "Entertainment", "TV"],
    category: "services"
  },
  {
    id: "16",
    title: "Game-Changing Wireless Earbuds",
    rating: 4.5,
    content: "These earbuds have exceeded my expectations in almost every way. Sound quality is excellent with deep bass and clear highs. The active noise cancellation works remarkably well for their size. Battery life is impressive - I get about 6 hours on a charge, and the case provides 3-4 additional charges. They stay in place during workouts, and the touch controls are responsive. The companion app offers useful customization. Only complaint is occasional connectivity issues with my laptop.",
    userName: "Kevin Zhang",
    userAvatar: "",
    date: "2024-07-02T14:50:00Z",
    helpful: 24,
    notHelpful: 2,
    comments: 13,
    tags: ["Technology", "Audio", "Wireless"],
    category: "products"
  },
  {
    id: "17",
    title: "Fantastic Local Plumbing Service",
    rating: 5,
    content: "Called them for an emergency leak and they arrived within an hour. The plumber was professional, knowledgeable, and efficient. He explained the issue clearly and provided multiple repair options with transparent pricing. The work was completed quickly and the quality has held up. They even followed up a week later to ensure everything was still working properly. Will definitely use their services again and recommend to others.",
    userName: "Stephanie Brown",
    userAvatar: "",
    date: "2024-07-30T16:15:00Z",
    helpful: 31,
    notHelpful: 1,
    comments: 7,
    tags: ["Service", "Plumbing", "Repairs"],
    category: "services"
  },
  {
    id: "18",
    title: "Disappointing Ultra HD Smart TV",
    rating: 2.5,
    content: "The picture quality isn't nearly as good as advertised. Colors look washed out even after calibration, and motion handling is poor during fast-action scenes. The smart interface is sluggish and cluttered with ads. Several streaming apps have crashed or frozen. The remote feels cheap and the button layout is confusing. For this price range, there are much better options available from other manufacturers.",
    userName: "Marcus Johnson",
    userAvatar: "",
    date: "2024-08-17T13:35:00Z",
    helpful: 47,
    notHelpful: 9,
    comments: 29,
    tags: ["Technology", "TV", "Electronics"],
    category: "products"
  },
  {
    id: "19",
    title: "Excellent Dog Grooming Service",
    rating: 5,
    content: "I've tried several groomers for my anxious rescue dog, and this is the only place where he seems comfortable. The staff are patient and gentle, and they never rush the process. They listen to exactly what you want and deliver results that exceed expectations. The facility is clean and they use high-quality products. Prices are fair for the level of service. My dog actually gets excited now when we pull into their parking lot!",
    userName: "Grace Taylor",
    userAvatar: "",
    date: "2024-09-08T10:25:00Z",
    helpful: 22,
    notHelpful: 0,
    comments: 10,
    tags: ["Pets", "Grooming", "Service"],
    category: "services"
  },
  {
    id: "20",
    title: "Reliable and Feature-Rich Password Manager",
    rating: 4.5,
    content: "After trying several password managers, I've finally found one that has the right balance of security, features, and ease of use. The auto-fill works consistently across devices, and the password generator creates strong, unique passwords. The secure notes and document storage features are handy bonuses. Cross-platform syncing is seamless between my phone, tablet, and computers. The interface is clean and intuitive. Well worth the annual subscription fee for peace of mind.",
    userName: "Nathan Patel",
    userAvatar: "",
    date: "2024-10-01T09:05:00Z",
    helpful: 33,
    notHelpful: 2,
    comments: 16,
    tags: ["Software", "Security", "Productivity"],
    category: "apps"
  }
];

// Generate mock comments for the first review
export const mockComments: Comment[] = [
  {
    id: "101",
    reviewId: "1",
    content: "I completely agree with your assessment! The battery life is amazing, and the display makes everything look so crisp. Have you tried using it with the Magic Keyboard?",
    userName: "Jessica Lewis",
    date: "2023-04-16T09:20:00Z",
    helpful: 8,
    notHelpful: 1
  },
  {
    id: "102",
    reviewId: "1",
    content: "I'm thinking of upgrading from my 2020 iPad Pro. Do you think the performance difference is noticeable enough to justify the cost?",
    userName: "Ryan Chen",
    date: "2023-04-18T14:35:00Z",
    helpful: 5,
    notHelpful: 0
  },
  {
    id: "103",
    reviewId: "1",
    content: "Have you experienced any issues with the screen? I've heard some reports about the mini-LED blooming in dark rooms.",
    userName: "Amanda Johnson",
    date: "2023-04-22T19:40:00Z",
    helpful: 7,
    notHelpful: 2
  },
  {
    id: "104",
    reviewId: "1",
    content: "How's the performance with heavy creative apps like Procreate or Affinity Designer? Any lag when using large brushes or complex layers?",
    userName: "David Wong",
    date: "2023-04-25T11:15:00Z",
    helpful: 10,
    notHelpful: 0
  },
  {
    id: "105",
    reviewId: "1",
    content: "I disagree about the price being worth it. You can get a decent laptop with more functionality for the same cost. It's still just a tablet with limitations.",
    userName: "Eric Smith",
    date: "2023-04-29T16:50:00Z",
    helpful: 4,
    notHelpful: 9
  }
];

// Function to get a review by ID
export const getReviewById = (id: string): Review | undefined => {
  return mockReviews.find(review => review.id === id);
};

// Function to get comments for a review
export const getCommentsByReviewId = (reviewId: string): Comment[] => {
  return mockComments.filter(comment => comment.reviewId === reviewId);
};

// Function to filter reviews
export interface FilterOptions {
  search?: string;
  category?: string;
  rating?: number;
  sortBy?: string;
  tags?: string[];
}

export const filterReviews = (options: FilterOptions): Review[] => {
  let filtered = [...mockReviews];
  
  // Filter by search term
  if (options.search && options.search.trim() !== "") {
    const searchLower = options.search.toLowerCase();
    filtered = filtered.filter(review => 
      review.title.toLowerCase().includes(searchLower) ||
      review.content.toLowerCase().includes(searchLower) ||
      review.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }
  
  // Filter by category
  if (options.category && options.category !== "all") {
    filtered = filtered.filter(review => 
      review.category.toLowerCase() === options.category?.toLowerCase()
    );
  }
  
  // Filter by minimum rating
  if (options.rating && options.rating > 0) {
    filtered = filtered.filter(review => review.rating >= options.rating!);
  }
  
  // Filter by tags
  if (options.tags && options.tags.length > 0) {
    filtered = filtered.filter(review => 
      options.tags!.some(tag => review.tags.includes(tag))
    );
  }
  
  // Sort reviews
  if (options.sortBy) {
    switch (options.sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case "highest":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "lowest":
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      case "most-helpful":
        filtered.sort((a, b) => b.helpful - a.helpful);
        break;
      default:
        // Default to newest
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  } else {
    // Default sort by newest
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  
  return filtered;
};
