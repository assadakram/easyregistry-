export const Footer = () => {
  return (
    <div className="bg-black bg-opacity-90">
      <div className=" container mx-auto text-sm sm:flex p-11 sm:space-x-20 md:space-x-20 sm:px-20 font-Josefin  ">
        <div>
          <p className="text-white tracking-widest pb-4">EASYREGISTRY</p>
          <a className="text-gray-400 hover:text-white hover:underline cursor-pointer">
            All prices are in AUD unless otherwise noted
          </a>
        </div>
        <div>
          <p className="text-white tracking-widest  pb-4 pt-10 sm:pt-0">
            CONTACT REGISTRY OWNER
          </p>
          <a className="text-gray-400 hover:text-white hover:underline cursor-pointer">
            Send Message
          </a>
        </div>
        <div className=" lg:pl-60">
          <p className="text-white tracking-widest  pb-4 pt-10 sm:pt-0">SUPPORT</p>
          <a className="text-gray-400 hover:text-white hover:underline cursor-pointer  ">
            Message Registry Owner <br /> <br />
          </a>
          <a className="text-gray-400 hover:text-white hover:underline cursor-pointer">
            support@easyregistry.com.au
          </a>
        </div>
      </div>

      <div className="flex flex-row space-x-3 justify-center w-full footerborder ">
        <div className="rounded-full bg-black bg-opacity-25 p-2 stroke-current stroke-3 text-gray-300 hover:fill-current hover:text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-facebook"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </div>

        <div className="rounded-full bg-black bg-opacity-25 p-2 stroke-current stroke-3 text-gray-300  hover:fill-current hover:text-white cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-instagram"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </div>
      </div>
      <div className="text-gray-400 text-sm font-Josefin p-7 ">
        <div className="flex justify-center space-x-6  ">
          <p className="hover:text-white hover:underline cursor-pointer">
            ©2021 EasyRegistry. ABN 98 156 559 063
          </p>
          <p className="hover:text-white hover:underline cursor-pointer">
            PO Box 75, Terrey Hills, NSW 2084, Australia
          </p>
        </div>
		<div className="flex justify-center space-x-6  ">
          <p className="hover:text-white hover:underline cursor-pointer">
		  Terms of Use
          </p>
          <p className="hover:text-white hover:underline cursor-pointer">
		  Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};
