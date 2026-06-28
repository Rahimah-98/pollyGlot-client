import { useEffect } from 'react';
import { Button } from './Button';
import { RefreshCcw } from 'lucide-react';

export const TranslationResult = ({
  text,
  setText,
  translation,
  handleTranslate,
  handleStartOver,
}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTranslate();
    }, 500);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <main className='border-4 border-border rounded-xl my-6 mx-4 px-6 py-5 animate-fade-in'>
      <div className='space-y-6'>
        <div>
          <h2 className='text-primary text-center font-poppins font-bold text-[20px]'>
            Original text 👇
          </h2>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='w-full h-25 mt-5 bg-textarea font-semibold rounded-xl p-4 outline-none font-poppins text-lg resize-none'
          />
        </div>

        <div>
          <h2 className='text-primary text-center font-poppins font-bold text-[20px]'>
            Your translation 👇
          </h2>

          <textarea
            value={translation}
            readOnly
            className='w-full h-25 mt-5 bg-textarea font-semibold rounded-xl p-4 outline-none font-poppins text-lg resize-none'
          />
        </div>
      </div>

      <Button onClick={handleStartOver}>
        <RefreshCcw className='size-6' />
        Start Over
      </Button>
    </main>
  );
};
