'use client'
import Featured from '@/components/featured';
import FooterLearn from '@/components/FooterLearn';
// import Hero from '@/components/hero';
// import FooterLearn from '@/components/FooterLearn';
// import Hero from '@/components/hero';
import MainPage from '@/components/mainpage';
import Blog from './[blog]/page';

const Home = () => {
  return (
    <div>
      <MainPage />
      <Featured />
      <Blog />
      {/* <Hero /> */}
      <FooterLearn />
    </div>
  );
}

export default Home;
