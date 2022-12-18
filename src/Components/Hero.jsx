import styles from "../style";
import { discount, building } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}
          <h1 className=" font-poppins font-semibold w-full text-[52px] text-white">
            OpenAI  {" "}
            <span className="text-gradient">Hacks</span>{" "}
            {" "}
            
          </h1>
        <div className="flex  items-center w-full">
          {/* <h1 className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Know  {" "}
            <span className="text-gradient">Web3</span>{" "}
            {" "}
            in Simpl Way
          </h1> */}


        {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>


        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Compliation of OpenAI Tricks to use it in Awesome ways.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={building} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[60%] h-[35%] top-20 cyan__gradient" />
        <div className="absolute z-[0] w-[80%] h-[60%]  magenta__gradient bottom-40" />
        <div className="absolute z-[1] w-[50%] h-[50%] white__gradient" />

        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        <div className="absolute z-[0] w-[50%] h-[30%] bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
