import { ArrowRight, Languages, Loader } from 'lucide-react';
import { Button } from './Button';
const languages = [
  { id: 1, name: 'French', flag: '/flags/fr-flag.png' },
  { id: 2, name: 'Spanish', flag: '/flags/sp-flag.png' },
  { id: 3, name: 'Japanese', flag: '/flags/jpn-flag.png' },
];
export const TranslationForm = ({
  text,
  setText,
  setView,
  error,
  setError,
  language,
  setLanguage,
  handleTranslate,
  loading,
}) => {
  return (
    <main className='border-4 border-border rounded-xl my-6 mx-4 px-6 py-5'>
      <section>
        <h2 className='text-primary text-center font-poppins font-bold text-[20px]'>
          
          Text to translate 👇
        </h2>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError('');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleTranslate();
            }
          }}
          placeholder='How are you?'
          className='w-full h-25 mt-5 bg-textarea font-semibold rounded-xl p-4 outline-none font-poppins text-lg resize-none'
        />
      </section>
      {error && <p className='mt-2 text-xs text-red-500'>{error}</p>}
      <section>
        
        <h2 className='text-primary text-center font-poppins font-bold text-[20px] mt-7'>
          
          Select language 👇
        </h2>
        <div className='mt-5 space-y-2'>
          {languages.map((lang) => (
            <label
              key={lang.id}
              className='flex items-center gap-3 cursor-pointer font-poppins text-xl font-semibold'>
              <input
                type='radio'
                name='language'
                value={lang.name}
                checked={language === lang.name}
                onChange={() => setLanguage(lang.name)}
              />
              <span>{lang.name}</span>
              <img src={lang.flag} alt={`${lang.name} flag`} className='w-6' />
            </label>
          ))}
        </div>
      </section>
      <Button
        onClick={handleTranslate}
        disabled={loading || !text.trim() || !language}>
        
        {loading ? (
          <>
            
            Loading... <Loader className='size-6 animate-spin mt-1' />
          </>
        ) : (
          <>
            
            Translate <Languages className='size-6' />
          </>
        )}
      </Button>
      <button
        onClick={() => setView('chat')}
        className='flex items-center justify-center text-sm font-semibold text-primary gap-1 mt-5 animate-pulse hover:gap-2 duration-300 transition-all cursor-pointer'>
        
        Select Chat <ArrowRight className='size-4 mt-1' />
      </button>
    </main>
  );
};
