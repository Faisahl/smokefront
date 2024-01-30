"use client";

const Banner: React.FC = () => {
  return (
    <div
      className={`-z-50 relative isolate flex items-center gap-x-6 overflow-hidden light:bg-gray-50 dark:dark:bg-gray-800 px-6 py-2.5 sm:px-3.5 sm:before:flex-1`}
    >
      <div className="flex flex-wrap items-center text-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 light:text-gray-900 dark:text-white">
          <strong className="font-semibold">Grand Opening!</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-auto md:mx-2 my-1 md:my-0 block md:inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          Join us in celebrating with 3 for $45 Escobars!
        </p>
      </div>
      <div className="flex flex-1 justify-end cursor-pointer">
        {/* <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={()=>closeBanner()}
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="h-5 w-5 text-gray-900"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default Banner;
