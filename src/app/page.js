
import LastUpdet from '@/components/LastUpdet';
import MainTitle from '@/components/MainTitle';
import NavList from '@/components/NavList';
import Pagination from '@/components/Pagination';
import SignUp from '@/components/SignUp';


const page = () => {
  return (
    <div>
      <MainTitle />
      <LastUpdet />
      <NavList />
      <Pagination />
      <SignUp />
    </div>
  );
};

export default page;