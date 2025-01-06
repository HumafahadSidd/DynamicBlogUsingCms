import CommentSection from '@/components/commentsection'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-5 py-24">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl font-medium title-font mb-2 text-gray-900">
            Pitchfork Kickstarter Taxidermy
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/Rectangle 13.png" alt="content" width={720} height={400} />
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
            <p className="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/Rectangle 30.png" alt="content" width={721} height={401} />
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
            <p className="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/camel.jpg" alt="content" width={722} height={402} />
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
            <p className="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/destinations.jpg" alt="content" width={723} height={403} />
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
            <p className="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
      </div>
      <CommentSection />
    </div>
  )
}
