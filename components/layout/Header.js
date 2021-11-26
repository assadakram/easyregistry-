import Image from "next/image";
export const Navbar = () => {
  return (
    <>
      <div className=" bg-pink-600 text-right text-sm md:text-xl  py-1 font-arial ">
        <p className="text-white md:pr-5 pr-2 font-normal whitespace-nowrap overflow-hidden ">
          Planning your own special event?
          <a href="/" className="hover:underline font-semibold pl-2 cursor-pointer ">
            Create a registry now!
          </a>
        </p>
      </div>
      <div className="inline-flex w-full h-16 justify-between sticky top-0 bg-white z-10">
        <div className="flex ml-6 items-center ">
          <Image src="/ER-logo.png" width="250px" height="40px" />
        </div>
        <div >
          <p className=" text-sm hover:border-b-2 h-full py-5 font-semibold mr-14 font-Josefin hidden md:block cursor-pointer  uppercase tracking-widest ">
            David & Ashleigh
          </p>
        </div>
      </div>
    </>
  );
};
