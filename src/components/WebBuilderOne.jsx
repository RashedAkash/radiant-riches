import Image from "next/image";


const WebBuilderOne = () => {
  return (
    <div className=" px-[30px] pb-[30px] rounded-xl  bg-white">
      <div>
        <figure className="px-10 py-10 ">
          <Image
            src="/com.png"
            alt="com"
            width={141}
            height={103}
            className="  "
          />
        </figure>
      </div>
      <div className="  flex gap-2">
        <div>
          <p className=" py-2 pl-3 pr-4 bg-[#F2F4F7] rounded-lg  text-[14px] text-[#074786] ">
            20% Off
          </p>
        </div>
        <div>
          <p className=" py-2 pl-3 pr-[30px] bg-[#F2F4F7] rounded-lg  text-[14px] text-[#074786] ">
            Limited time
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center text-[16px] font-bold text-[#626E79] mt-4 mb-5">
          Webbuilder 1
        </h1>
        <p className="text-[#626E79] mb-4 text-[16px] ">
          Computer Modern clasic with wix <br /> support
        </p>
      </div>
      <div className="flex gap-4 items-end">
        <h1 className=" text-[#5C6874] text-xl">$39.96</h1>
        <p className=" text-[#9FA9B3] text-[14px]">$49.96</p>
        <p className=" text-[#EF4C5D] text-[13px]">(20% Off)</p>
      </div>
      <div>
        <button className="btn   btn-wide text-white bg-[#1B88F4] font-normal mt-5 text-[0px]">
          View Deal
        </button>
      </div>
    </div>
  );
};

export default WebBuilderOne;