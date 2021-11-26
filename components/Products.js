import productitems from "../product.json";

export const Products = () => {
  return (
    <>
      <div className=" pt-7 ">
        <p className="bg-indigo-100 text-primaryb p-4 text-sm rounded-lg mx-4">
          EasyRegistry Instructions: You can contribute any amount to a gift by
          clicking on it below. It doesn't need to be the full amount, which
          allows guests to split the cost of larger gifts
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mx-4 py-7  ">
        {productitems.map((items, index) => {
          return (
            <div className="relative hover-trigger ">
              <div
                className={`absolute inset-0 bg-white bg-opacity-50 p-8 pt-24 hoverproperty  cursor-pointer`}
              >
                <p className="text-4xl font-Nunito Sans font-normal tracking-wider pb-2">
                  Give This Gift
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-heart ml-24"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
              </div>
              <div
                className="bg-white w-76 h-76 flex flex-col place-items-center py-2 cursor-pointer "
                key={index}
              >
                <div className="w-56 h-56">
                  <img src={items.image} />
                </div>
                <div className="text-center">
                  <p className="text-xl font-semibold pt-2">{items.title}</p>
                  <p className="font-bold text-green-400 ">{items.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
