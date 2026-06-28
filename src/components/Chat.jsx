import { ArrowLeft, Loader, Send } from 'lucide-react';


const languages = [
  { id: 1, name: 'French', flag: '/flags/fr-flag.png' },
  { id: 2, name: 'Spanish', flag: '/flags/sp-flag.png' },
  { id: 3, name: 'Japanese', flag: '/flags/jpn-flag.png' },
];


export const Chat = ({
  text,
  setText,
  language,
  setLanguage,
  setView,
  chatMessages,
  handleSend,
  loading,
}) => {
  return (
    <main className='border-4 border-border rounded-xl my-6 mx-4 px-6 py-5 h-125 flex flex-col'>
      <div className='flex-1 overflow-y-auto my-5'>
        <div className='bg-primary text-white rounded-xl p-3 font-poppins font-semibold text-lg'>
          Select the language you me to translate into, type your text and hit
          send!
        </div>
        {chatMessages.map((message) => (
          <div
            key={message.id}
            className={
              message.type === 'user'
                ? 'bg-title rounded-xl p-3 my-2'
                : 'bg-primary text-white rounded-xl p-3'
            }>
            {message.text}
          </div>
        ))}
      </div>
      <div className='relative mt-5'>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          className='w-full h-12 bg-textarea rounded-xl p-4 outline-none font-poppins'
        />
        <button
          onClick={handleSend}
          className='absolute right-5 top-1/2 -translate-y-1/2'>
          {loading ? (
            <Loader className='text-title animate-spin' />
          ) : (
            <Send className='text-title' />
          )}
        </button>
      </div>
      <div className='flex justify-center gap-6 mt-5'>
        {languages.map((lang) => (
          <button
            key={lang.id}
            type='button'
            onClick={() => setLanguage(lang.name)} className="hover:scale-[1.05] transition duration-300 focus:border-2 focus:border-primary">
            <img
              src={lang.flag}
              onChange={() => setLanguage(lang.name)}
              checked={language === lang.name}
              className='w-10'
            />
          </button>
        ))}
      </div>
      <button
        onClick={() => setView('translate')}
        className='flex items-center justify-center text-sm font-semibold text-primary gap-1 mt-5 animate-pulse hover:gap-2 duration-300 transition-all cursor-pointer'>
        <ArrowLeft className='size-4 mt-1' /> Back to Translate
      </button>
    </main>
  );
};
