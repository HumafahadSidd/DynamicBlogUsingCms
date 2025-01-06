import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CommentSection from '@/components/commentsection';

export default function Blog() {
  const blogs = [
    { id: 1, title: 'Travel Blogs', image: '/camel.jpg', link: '/blog/FirstPost' },
    { id: 2, title: 'Destinations', image: '/destinations.jpg', link: '/blog/SecondPost' },
    { id: 3, title: 'About ', image: '/about.jpg', link: '/blog/thirdPost' },
  ];

  return (
    <div className="container mx-auto px-5 py-24 ">
      
      {/* Blog Gallery Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
          >
            <Link href={blog.link}>
              <Image
                className="object-cover w-full h-[300px]"
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
              />
              <h4 className='text-center font-semibold text-4xl mt-4'>{blog.title}</h4>
            </Link>
          </div>
        ))}
      </section>

      {/* Author Section */}
      <section className="mt-12 flex items-center gap-6">
        <Image
          src="/blog.jpg"
          width={100}
          height={100}
          alt="author"
          className="rounded-full object-cover"
          

        />
               <div>
          <h3 className="text-xl font-bold text-dark dark:text-light">Huma Fahad</h3>
          <p className="italic text-sm text-dark/80 dark:text-light/80">
            Experienced Web Developer | Learner of Next.js, React.js, Node.js, TypeScript & JavaScript
          </p>
        </div>
      </section>
      <CommentSection />
    </div>
  );
}
