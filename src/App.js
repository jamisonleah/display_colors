import { useState } from 'react';
import ColorGrid from './ColorGrid';
import ChatbotHandler from './components/ChatbotHandler';
import JsonMaker from './components/JsonMaker';


const App = () => {
  const colors = {
    'Deep Purple': '#6A0DAD',
    'Royal Purple': '#8C19C6',
    'Lavender': '#BB9AF7',
    'Goldenrod': '#DAA520',
    'Mustard Yellow': '#FFD700',
    'Ivory White': '#F8F8F8',
    'Cream': '#FDF5E6',
    'Charcoal Black': '#333333',
    'Muted Gray': '#808080',
    'Soft Pink': '#FFB6C1',
  };

  const [jsonColors, setJsonColors] = useState(colors);

  return (
    <div>
      <div className="flex flex-row">
        {/* ChatbotHandler on the left */}
        <div className="w-9/12 ">
          <h1 className="text-4xl font-mono mb-8 text-center p-5">Tailwind CSS Color Grid</h1>
          <ChatbotHandler setJsonColors={setJsonColors} />
          <ColorGrid colors={jsonColors} />

        </div>
        {/* ColorGrid on the right */}
        <div className="w-3/12 ">
          <JsonMaker jsonColors={jsonColors} />

        </div>
      </div>
    </div>
  );
};

export default App;
