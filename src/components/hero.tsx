// // import Link from 'next/link'
// //  import React, { useEffect, useState } from 'react'
// //  import {client } from '@/sanity/lib/client'
// //  type Post = {
// //    Title: string;
// //    discription: string;
// //    imageUrl: string;
// // };

// //  async function getData(): Promise<Post[]> {
// //    const fetchData = await client.fetch(`
// //      *[_type == 'post']{
// //        Title, 
// //        discription,
// //        "imageUrl": image.asset->url
// //     }
// //    `);
// //    return fetchData;
// //  }

// //  const Hero = () => {
// //    const [data, setData] = useState<Post[]>([]);

// //    useEffect(() => {
// //      async function fetchData() {
// //        const posts = await getData();
// //        setData(posts);
// //      }
// //      fetchData();
// //    }, []);

// // //   return (
// // //     <div className='h-min-screen'>
// // //       {data.map((val, i) => (
// // //         <div key={i}>                  
// // //           <h1>{val.Title}</h1>
// // //           <p>{val.discription}</p>
// // //           {/* You can include image rendering if needed */}
// // //           <img src={val.imageUrl} alt={val.Title} />
// // //         </div>
// // //       ))}

// // // export default function Hero() {
// // //   return (
// // //     <div>
// // //       <section className="text-gray-600 body-font">
// // //   <div className="container px-5 py-24 mx-auto">
// // //     <div className="flex flex-wrap -m-4">
// // //       <div className="p-4 md:w-1/3">
// // //         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
// // //           <img
// // //             className="lg:h-48 md:h-36 w-full object-cover object-center"
// // //             src="/blog.jpg"
// // //             alt="blogpic"
// // //           />
// // //           <div className="p-6">
// // //             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
// // //               discription
// // //             </h2>
// // //             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// // //               The Catalyzer
// // //             </h1>
// // //             <p className="leading-relaxed mb-3">
// // //               Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
// // //               microdosing tousled waistcoat.
// // //             </p>
// // //             <div className="flex items-center flex-wrap ">
// // //               <Link href="/blog/FirstPost" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
// // //                 Read More
// // //                 <svg
// // //                   className="w-4 h-4 ml-2"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                   strokeWidth={2}
// // //                   fill="none"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                 >
// // //                   <path d="M5 12h14" />
// // //                   <path d="M12 5l7 7-7 7" />
// // //                 </svg>
// // //               </Link>
// // //               <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
// // //                 <svg
// // //                   className="w-4 h-4 mr-1"
// // //                   stroke="currentColor"
// // //                   strokeWidth={2}
// // //                   fill="none"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
// // //                   <circle cx={12} cy={12} r={3} />
// // //                 </svg>
// // //                 1.2K
// // //               </span>
// // //               <span className="text-gray-400 inline-flex items-center leading-none text-sm">
// // //                 <svg
// // //                   className="w-4 h-4 mr-1"
// // //                   stroke="currentColor"
// // //                   strokeWidth={2}
// // //                   fill="none"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
// // //                 </svg>
// // //                 6
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <div className="p-4 md:w-1/3">
// // //         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
// // //           <img
// // //             className="lg:h-48 md:h-36 w-full object-cover object-center"
// // //             src="/Rectangle 30.png"
// // //             alt="blog"
// // //           />
// // //           <div className="p-6">
// // //             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
// // //               CATEGORY
// // //             </h2>
// // //             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// // //               The 400 Blows
// // //             </h1>
// // //             <p className="leading-relaxed mb-3">
// // //               Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
// // //               microdosing tousled waistcoat.
// // //             </p>
// // //             <div className="flex items-center flex-wrap">
// // //               <Link href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
// // //                 Learn More
// // //                 <svg
// // //                   className="w-4 h-4 ml-2"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                   strokeWidth={2}
// // //                   fill="none"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                 >
// // //                   <path d="M5 12h14" />
// // //                   <path d="M12 5l7 7-7 7" />
// // //                 </svg>
// // //               </Link>
// // //               <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
// // //                 <svg
// // //                   className="w-4 h-4 mr-1"
// // //                   stroke="currentColor"
// // //                   strokeWidth={2}
// // //                   fill="none"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
// // //                   <circle cx={12} cy={12} r={3} />
// // //                 </svg>
// // //                 1.2K
// // //               </span>
// // //               <span className="text-gray-400 inline-flex items-center leading-none text-sm">
// // //                 <svg
// // //                   className="w-4 h-4 mr-1"
// // //                   stroke="currentColor"
// // //                   strokeWidth={2}
// // //                   fill="none"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
// // //                 </svg>
// // //                 6
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <div className="p-4 md:w-1/3">
// // //         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
// // //           <img
// // //             className="lg:h-48 md:h-36 w-full object-cover object-center"
// // //             src="Rectangle 17.png"
// // //             alt="blog"
// // //           />
// // //           <div className="p-6">
// // //             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
// // //               Discription
// // //             </h2>
// // //             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// // //               Shooting Stars
// // //             </h1>
// // //             <p className="leading-relaxed mb-3">
// // //               Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
// // //               microdosing tousled waistcoat.
// // //             </p>
// // //             <div className="flex items-center flex-wrap ">
// // //               <Link href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
// // //                 Learn More
// // //                 <svg
// // //                   className="w-4 h-4 ml-2"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                   strokeWidth={2}
// // //                   fill="none"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                 >
// // //                   <path d="M5 12h14" />
// // //                   <path d="M12 5l7 7-7 7" />
// // //                 </svg>
// // //               </Link>
// // //               <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
// // //                 <svg
// // //                   className="w-4 h-4 mr-1"
// // //                   stroke="currentColor"
// // //                   strokeWidth={2}
// // //                   fill="none"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
// // //                   <circle cx={12} cy={12} r={3} />
// // //                 </svg>
// // //                 1.2K
// // //               </span>
// // //               <span className="text-gray-400 inline-flex items-center leading-none text-sm">
// // //                 <svg
// // //                   className="w-4 h-4 mr-1"
// // //                   stroke="currentColor"
// // //                   strokeWidth={2}
// // //                   fill="none"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
// // //                 </svg>
// // //                 6
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </div>

// // // </section>
// // // <div className="container px-5 py-24 mx-auto">
// // //     <div className="flex flex-wrap -m-4">
// // //       <div className="p-4 md:w-1/3">
// // //         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
// // //           <img
// // //             className="lg:h-48 md:h-36 w-full object-cover object-center"
// // //             src="/blog.jpg"
// // //             alt="blogpic"
// // //           />
// // //           <div className="p-6">
// // //             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
// // //               CATEGORY
// // //             </h2>
// // //             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// // //               The Catalyzer
// // //             </h1>
// // //             <p className="leading-relaxed mb-3">
// // //               Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
// // //               microdosing tousled waistcoat.
// // //             </p>
// // //             <div className="flex items-center flex-wrap ">
// // //               <Link href="blog/SecondPost" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
// // //                 Read More
// // //                 <svg
// // //                   className="w-4 h-4 ml-2"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                   strokeWidth={2}
// // //                   fill="none"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                 >
// // //                   <path d="M5 12h14" />
// // //                   <path d="M12 5l7 7-7 7" />
// // //                 </svg>
// // //               </Link>
// // //               <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
// // //                 <svg
// // //                   className="w-4 h-4 mr-1"
// // //                   stroke="currentColor"
// // //                   strokeWidth={2}
// // //                   fill="none"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
// // //                   <circle cx={12} cy={12} r={3} />
// // //                 </svg>
// // //                 1.2K
// // //               </span>
// // //               <span className="text-gray-400 inline-flex items-center leading-none text-sm">
// // //                 <svg
// // //                   className="w-4 h-4 mr-1"
// // //                   stroke="currentColor"
// // //                   strokeWidth={2}
// // //                   fill="none"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
// // //                 </svg>
// // //                 6
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <div className="p-4 md:w-1/3">
// // //         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
// // //           <img
// // //             className="lg:h-48 md:h-36 w-full object-cover object-center"
// // //             src="/Rectangle 30.png"
// // //             alt="blog"
// // //           />
// // //           <div className="p-6">
// // //             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
// // //               CATEGORY
// // //             </h2>
// // //             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// // //               The 400 Blows
// // //             </h1>
// // //             <p className="leading-relaxed mb-3">
// // //               Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
// // //               microdosing tousled waistcoat.
// // //             </p>
// // //             <div className="flex items-center flex-wrap">
// // //               <Link href="/blog/SecondPost" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
// // //                 Learn More
// // //                 <svg
// // //                   className="w-4 h-4 ml-2"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                   strokeWidth={2}
// // //                   fill="none"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                 >
// // //                   <path d="M5 12h14" />
// // //                   <path d="M12 5l7 7-7 7" />
// // //                 </svg>
// // //               </Link>
// //               {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
// //                 <svg
// //                   className="w-4 h-4 mr-1"
// //                   stroke="currentColor"
// //                   strokeWidth={2}
// //                   fill="none"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
// //                   <circle cx={12} cy={12} r={3} />
// //                 </svg>
// //                 1.2K
// //               </span>
// //               <span className="text-gray-400 inline-flex items-center leading-none text-sm">
// //                 <svg
// //                   className="w-4 h-4 mr-1"
// //                   stroke="currentColor"
// //                   strokeWidth={2}
// //                   fill="none"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
// //                 </svg>
// //                 6
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="p-4 md:w-1/3">
// //         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
// //           <img
// //             className="lg:h-48 md:h-36 w-full object-cover object-center"
// //             src="Rectangle 17.png"
// //             alt="blog"
// //           />
// //           <div className="p-6">
// //             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
// //               CATEGORY
// //             </h2>
// //             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// //               Shooting Stars
// //             </h1>
// //             <p className="leading-relaxed mb-3">
// //               Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
// //               microdosing tousled waistcoat.
// //             </p>
// //             <div className="flex items-center flex-wrap ">
// //               <Link href="/blog/thirdPost" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
// //                 Learn More
// //                 <svg
// //                   className="w-4 h-4 ml-2"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                   strokeWidth={2}
// //                   fill="none"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 >
// //                   <path d="M5 12h14" />
// //                   <path d="M12 5l7 7-7 7" />
// //                 </svg>
// //               </Link>
// //               <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
// //                 <svg
// //                   className="w-4 h-4 mr-1"
// //                   stroke="currentColor"
// //                   strokeWidth={2}
// //                   fill="none"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
// //                   <circle cx={12} cy={12} r={3} />
// //                 </svg>
// //                 1.2K
// //               </span>
// //               <span className="text-gray-400 inline-flex items-center leading-none text-sm">
// //                 <svg
// //                   className="w-4 h-4 mr-1"
// //                   stroke="currentColor"
// //                   strokeWidth={2}
// //                   fill="none"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
// //                 </svg>
// //                 6
// //               </span> */}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </div>



// // //     </div>
// // //   )
// // // }
// // // import Link from 'next/link';
// // // import React, { useEffect, useState } from 'react';
// // // import { client } from '@/sanity/lib/client';

// // type Post = {
// //   Title: string;
// //   description: string;
// //   imageUrl: string;
// // };

// // async function getData(): Promise<Post[]> {
// //   const fetchData = await client.fetch(`
// //     *[_type == 'post']{
// //       Title, 
// //       description,
// //       "imageUrl": image.asset->url
// //     }
// //   `);
// //   return fetchData;
// // }

// // const Hero = () => {
// //   const [data, setData] = useState<Post[]>([]);

// //   useEffect(() => {
// //     async function fetchData() {
// //       const posts = await getData();
// //       setData(posts);
// //     }
// //     fetchData();
// //   }, []);

// //   return (
// //     <section className="text-gray-600 body-font">
// //       <div className="container px-5 py-24 mx-auto">
// //         <div className="flex flex-wrap -m-4">
// //           {data.map((post, index) => (
// //             <div key={index} className="p-4 md:w-1/3">
// //               <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
// //                 <img
// //                   className="lg:h-48 md:h-36 w-full object-cover object-center"
// //                   src={post.imageUrl}
// //                   alt={post.Title}
// //                 />
// //                 <div className="p-6">
// //                   <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
// //                     Description
// //                   </h2>
// //                   <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
// //                     {post.Title}
// //                   </h1>
// //                   <p className="leading-relaxed mb-3">{post.description}</p>
// //                   <div className="flex items-center flex-wrap">
// //                     <Link href={`/blog/${post.Title}`}
// //          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
// //                         Read More
// //                         <svg
// //                           className="w-4 h-4 ml-2"
// //                           viewBox="0 0 24 24"
// //                           stroke="currentColor"
// //                           strokeWidth={2}
// //                           fill="none"
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                         >
// //                           <path d="M5 12h14" />
// //                           <path d="M12 5l7 7-7 7" />
// //                         </svg>
                      
// //                     </Link>
// //                     <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
// //                       <svg
// //                         className="w-4 h-4 mr-1"
// //                         stroke="currentColor"
// //                         strokeWidth={2}
// //                         fill="none"
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         viewBox="0 0 24 24"
// //                       >
// //                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
// //                         <circle cx={12} cy={12} r={3} />
// //                       </svg>
// //                       1.2K
// //                     </span>
// //                     <span className="text-gray-400 inline-flex items-center leading-none text-sm">
// //                       <svg
// //                         className="w-4 h-4 mr-1"
// //                         stroke="currentColor"
// //                         strokeWidth={2}
// //                         fill="none"
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         viewBox="0 0 24 24"
// //                       >
// //                         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
// //                       </svg>
// //                       6
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };
// //  }
// // export default Hero;
// // import React from 'react'

// // export default function Hero() {
// //   return (
// //     <div className='w-full h-screen '>
// //       <iframe width="1272" height="612" src="https://www.youtube.com/embed/T4NT9_XDHkU" title="The World Travel Guy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
// //     </div>
// //   )
// // }
// import React from 'react'

// export default function Hero() {
//   return (
    
//     <div className='h-screen '>
//     <div>
//   <iframe width="560" height="315" src="https://www.youtube.com/embed/s3G2kLruJJo?si=tCC3gcT4V0qTl5JB" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//     </div>
//     </div>
//   )
// }

