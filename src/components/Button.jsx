export const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='w-full h-13 mt-8 flex items-center justify-center gap-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-poppins font-bold text-[24px] transition-all duration-300'>
      {children}
    </button>
  );
};


