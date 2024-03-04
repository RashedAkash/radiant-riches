
import LastUpdet from '@/components/LastUpdet';
import MainTitle from '@/components/MainTitle';
import NavList from '@/components/NavList';
import Pagination from '@/components/Pagination';
import SignUp from '@/components/SignUp';
import WebBuilder from '@/components/Webbuilder';


const page = () => {
  return (
    <div>
      <MainTitle />
      <LastUpdet />
      <NavList />
      <Pagination />
      <WebBuilder />
      <SignUp />
    </div>
  );
};

export default page;