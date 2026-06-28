export const Header = () => {
  return (
    <header
      className="h-[180px] bg-header bg-[url('/world-map.png')] bg-no-repeat bg-[right_center] bg-contain flex items-center justify-center gap-3">
      <div className='w-24'>
        <img
          src='./parrot.png'
          alt='PollyGlot logo'
          className='w-full h-full object-contain'
        />
      </div>
      <div className='space-y-2'>
        <h1 className='text-title text-[38px] leading-none font-extrabold font-big-shoulders'>
          PollyGlot
        </h1>
        <p className='text-white capitalize text-[12px] font-medium font-poppins'>
          Perfect translation every time
        </p>
      </div>
    </header>
  );
};
