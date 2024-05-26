const LeftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static sm:pb-10">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col gap-2 sm:flex-row">
          <a href="#">
            <i className="ri-linkedin-fill text-gray-600 hover:text-blue-500"></i>
          </a>
          <a href="#">
            <i className="ri-github-fill text-gray-600 hover:text-white"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#0b8667] sm:hidden"></div>
      </div>
    </div>
  );
};

export default LeftSider;
