import Image from 'next/image';


const LastUpdet = () => {
  return (
    <div
      className=" flex py-5 mt-9 bg-[#FBFCFD] border-y-[1.33px] border-[
#E1E4E6]"
    >
      <div className="flex items-center">
        <Image
          className="text-[#626E79]"
          src="/tik.png"
          alt="tik"
          width={17}
          height={17}
          style={{
            width: "auto",
            height: "auto",
          }}
        />
        <p className=" pl-3 mr-9 text-[#4B5665] text-[14px]">
          Last Updated - February 22, 1717
        </p>
      </div>
      <div className="flex items-center">
        <Image
          className="text-[#626E79]"
          src="/i.png"
          alt="tik"
          width={17}
          height={17}
          style={{
            width: "auto",
            height: "auto",
          }}
        />
        <p className=" pl-3 text-[#4B5665] text-[14px]">
          Advertising Disclosure
        </p>
      </div>
    </div>
  );
};

export default LastUpdet;