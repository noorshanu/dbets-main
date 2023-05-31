import React from "react";

const DataFeeds = () => {
  return (
    <div className='bg-[url("/public/assets/images/datafeed-bg.svg")] bg-cover my-12 sm:my-32'>
      <img
        src="/assets/images/datafeed-lg.svg"
        className="w-full h-auto hidden sm:flex my-10"
        alt=""
      />
      <img
        src="/assets/images/datafeeds-sm.svg"
        className="w-full h-auto flex sm:hidden"
        alt=""
      />
    </div>
  );
};

export default DataFeeds;
