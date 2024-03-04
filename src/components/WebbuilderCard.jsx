import Image from "next/image";
import WebBuilerBtn from "./WebBuilerBtn";


const WebBuilderCard = () => {
  return (
    <div className=" px-[30px] pb-[30px] pt-16 bg-white">
      <div>
        <Image src="/com.png" alt="com" width={141} height={103} />
      </div>
      <div className="  flex gap-1">
        <div>
          <p className=" bg-[#F2F4F7] rounded-lg  text-[14px] text-[#074786] ">
            20% Off
          </p>
        </div>
        <div>
          <p className=" bg-[#F2F4F7] rounded-lg  text-[14px] text-[#074786] ">
            Limited time
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center">Webbuilder 1</h1>
        <p>
          Computer Modern clasic with wix <br /> support
        </p>
      </div>
      <div className="flex gap-1">
        <h1>$39.96</h1>
        <p>$49.96</p>
        <p>(20% Off)</p>
      </div>
      <div>
        <WebBuilerBtn />
      </div>
    </div>
  );
};

export default WebBuilderCard;