'use client'
import Featured from '@/components/featured';
import FooterLearn from '@/components/FooterLearn';

import MainPage from '@/components/mainpage';
import Blog from './[blog]/page';

const Home = () => {
  return (
    <div>
      <MainPage />
      <Featured />
      <Blog />
    
      <FooterLearn />
    </div>
  );
}

export default Home;
