import blog1 from "@/assets/blog/blogs/blog-1.png";
import blog2 from "@/assets/blog/blogs/blog-2.png";
import blog3 from "@/assets/blog/blogs/blog-3.png";

import recentBlog1 from "@/assets/blog/recent-blogs/recent-1.png";
import recentBlog2 from "@/assets/blog/recent-blogs/recent-2.png";
import recentBlog3 from "@/assets/blog/recent-blogs/recent-3.png";

export default function Blog() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts - Takes up 2/3 width on larger screens */}
          <div className="lg:col-span-2 space-y-8">
            <PostCard
              title="Going all-in with millennial design"
              date="14 Oct 2022"
              category="Wood"
              excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
              image={blog1.src}
            />
            <PostCard
              title="Exploring new ways of decorating"
              date="14 Oct 2022"
              category="Handmade"
              excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
              image={blog2.src}
            />
            <PostCard
              title="Handmade pieces that took time to make"
              date="14 Oct 2022"
              category="Wood"
              excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
              image={blog3.src}
            />
          </div>

          {/* Sidebar - Categories and Recent Posts */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-yellow-500">
                    Crafts (2)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-yellow-500">
                    Design (8)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-yellow-500">
                    Handmade (7)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-yellow-500">
                    Interior (1)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-yellow-500">
                    Wood (6)
                  </a>
                </li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                <li>
                  <RecentPost
                    title="Going all-in with millennial design"
                    date="03 Aug 2022"
                    image={recentBlog1.src}
                  />
                </li>
                <li>
                  <RecentPost
                    title="Exploring new ways of decorating"
                    date="03 Aug 2022"
                    image={recentBlog2.src}
                  />
                </li>
                <li>
                  <RecentPost
                    title="Handmade pieces that took time to make"
                    date="03 Aug 2022"
                    image={recentBlog3.src}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PostCardTypes {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

// Blog Post Card Component
function PostCard({ title, date, category, excerpt, image }: PostCardTypes) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-gray-500 text-sm">{date}</span>
          <span className="text-gray-500 text-sm">{category}</span>
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <a
          href="#"
          className="text-yellow-500 hover:text-yellow-600 font-medium"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

interface RecentPostTypes {
  title: string;
  date: string;
  image: string;
}

// Recent Post Item Component
function RecentPost({ title, date, image }: RecentPostTypes) {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div>
        <h4 className="text-md font-bold">{title}</h4>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
    </div>
  );
}
