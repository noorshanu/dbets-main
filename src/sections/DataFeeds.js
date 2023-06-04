import React from "react";

const DataFeeds = () => {
  return (
    <div id="datafeeds" className='relative datafeed-bg bg-cover my-12 sm:my-32'>
      <div className="bg-black bg-opacity-30 absolute inset-0"/>
      <img
        src="/assets/images/datafeed-lg.svg"
        className="w-full h-auto invisible hidden sm:flex my-10"
        alt=""
      />
      <img
        src="/assets/images/datafeed-lg.svg"
        className="w-full h-auto absolute inset-0 hidden sm:flex my-10"
        alt=""
      />
      <img
        src="/assets/images/datafeeds-sm.svg"
        className="w-full h-auto absolute inset-0 flex sm:hidden"
        alt=""
      />
      <img
        src="/assets/images/datafeeds-sm.svg"
        className="w-full h-auto invisible flex sm:hidden"
        alt=""
      />
    </div>
  );
};

export default DataFeeds;
