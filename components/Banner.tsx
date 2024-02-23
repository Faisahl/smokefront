"use client";

const Banner: React.FC = () => {
  return (
    <div
      className={`border-b -z-50 relative flex justify-center gap-x-6 dark:bg-gray-800 px-6 py-2.5 sm:px-3.5`}
    >
      <div className="text-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 light:text-gray-900 dark:text-white">
          <strong className="font-semibold">Grand Opening!</strong>
          <br className="md:hidden"/> Join us in celebrating with 3 for $45 Escobars!
        </p>
      </div>
    </div>
  );
};

export default Banner;
