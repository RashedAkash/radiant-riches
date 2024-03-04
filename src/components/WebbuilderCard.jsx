import Image from "next/image";


const WebBuilderCard = () => {
  return (
    <div>
      <div>
        <Image src="/com.png" alt="com" width={141} height={103} />
      </div>
      <div>
        <p>20% Off</p>
        <p>Limited time </p>
      </div>
      <div>
        <h1>Webbuilder 1</h1>
        <p>Computer Modern clasic with wix support</p>
      </div>
      <div>
        <h1>$39.96</h1>
        <p>$49.96</p>
        <p>(20% Off)</p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default WebBuilderCard;