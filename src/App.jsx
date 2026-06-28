import { useState } from 'react';
import { TranslationForm } from './components/TranslationForm';
import { TranslationResult } from './components/TranslationResult';
import { Header } from './components/Header';
import { Chat } from './components/Chat';
import {fetchTranslation} from './services/api'


import './App.css';

function App() {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('French');
  const [translation, setTranslation] = useState('');
  const [view, setView] = useState('translate');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);


  const handleTranslate = async () => {
    if (!text.trim()) {
      setError('Please enter some text to translate.');
      return;
    }
    if (!language) {
      setError('Please select a language.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const translatedText = await fetchTranslation(text, language);

      setTranslation(translatedText);
      setView('result');
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleStartOver = () => {
    setText('');
    setLanguage('French');
    setTranslation('');
    setView('translate');
  };

  const handleSend = async () => {
    if (!text.trim()) return;

    setLoading(true);

    try {
      const userText = text;

      setChatMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: 'user',
          text: userText
        },
      ]);

      setText('');

      const translatedText = await fetchTranslation(userText, language);

      setChatMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'translator',
          text: translatedText,
        },
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-page flex justify-center my-3'>
      
      <main className='w-98 min-h-175 bg-white shadow-lg'>
        
        <Header />
        
        {view === 'translate' && (
          <TranslationForm
            text={text}
            setText={setText}
            setView={setView}
            language={language}
            setLanguage={setLanguage}
            error={error}
            setError={setError}
            handleTranslate={handleTranslate}
            loading={loading}
          />
        )}
        {view === 'result' && (
          <TranslationResult
            text={text}
            setText={setText}
            handleTranslate={handleTranslate}
            translation={translation}
            handleStartOver={handleStartOver}
          />
        )}
        {view === 'chat' && (
          <Chat
            text={text}
            setText={setText}
            language={language}
            setLanguage={setLanguage}
            setView={setView}
            chatMessages={chatMessages}
            handleSend={handleSend}
            loading={loading}
          />
        )}
      </main>
    </div>
  );
}

export default App;
