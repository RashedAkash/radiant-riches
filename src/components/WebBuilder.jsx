import WebBuilderOne from "./WebBuilderOne";
import WebBuilderCard from "./WebbuilderCard";


const WebBuilder = () => {
  return (
    <div className=" ">
      <div>
        <h1 className=" text-[#2C384A] text-[32px] mb-8 ">Related deals you might like for</h1>
      </div>
      <div className=" bg-[#FBFCFD] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <WebBuilderOne />
        </div>
        <div>
          <WebBuilderCard />
        </div>
        <div>
          <WebBuilderCard />
        </div>
      </div>
    </div>
  );
};

export default WebBuilder;