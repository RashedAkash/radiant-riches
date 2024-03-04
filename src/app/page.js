import Footer from '@/components/Footer';
import LastUpdet from '@/components/LastUpdet';
import MainTitle from '@/components/MainTitle';
import NavList from '@/components/NavList';
import SignUp from '@/components/SignUp';
import React from 'react';

const page = () => {
  return (
    <div>
      <MainTitle />
      <LastUpdet />
      <NavList />
      <SignUp />
    </div>
  );
};

export default page;