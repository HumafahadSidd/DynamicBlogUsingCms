
import Image from "next/image";
import Link from "next/link";

export default function BlogCard() {
  return (
    <section className="flex flex-col justify-between   sm:justify-center h-[480px]  lg:w-[500px]  max-w-screen-2xl rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section*/}
      <div className="relative max-h-76 lg:w-full flex-1 max-w-screen-2xl sm:py-0 sm:pr-0">
        <Image
          src={"/Rectangle 17.png"}
          alt="car pink"
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gapx-y-4  p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
Car blogs are wow!     </h2>
        <p className="text-dark/70 dark:text-light/70 line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima non neque nihil repudiandae veniam iste ipsam eligendi doloremque ea doloribus in voluptatum obcaecati explicabo, numquam eaque et repellat ducimus!
        </p>
              
        {/* <Link  */}
         {/* className="block px-4 py-1 text-center bg-accentDarkSecondary  rounded text-dark font-semibold mt-4" */}
         {/* href={"https://www.youtube.com/playlist?list=PLlnxXXkq8MvFNhEliZWGtJ6wRT9-o_rTU "}>
          Vedio link */}
        {/* // </Link> */}
         

        {/* Read More dynamic Link */}
        <Link
          href={`/blog/thirdPost`}
          className="block px-4 py-1 text-center bg-accentDarkSecondary  rounded text-dark font-semibold mt-4"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}