import { useState, useEffect, useRef } from "react";
import axios from 'axios';

export default function App() {
  let [length, setLength] = useState(4);
  let [password, setPassword] = useState("");
  let [numbers, setnumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [visible, setvisibility] = useState(false);
  let [aifeedback, setAifeedback] = useState("");
  let [leakcheck, setLeakcheck] = useState(" Is this password pawned? copy to check");

  let url='';
  let refe = useRef(null);
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
     url = tabs[0].url;
})
  let passwordGenerator = () => {
    let pass = "";
    let Str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) Str += "0123456789";
    if (symbols) Str += "!@#$%^&*()_+[]{}|;:,.<>?";
    for (let i = 0; i < length; i++) {
      pass += Str.charAt(Math.floor(Math.random() * Str.length));
    }
    setPassword(pass);
  };

  let copie = () => {
    refe.current.select();
    navigator.clipboard.writeText(password);
    setvisibility(true);
    setTimeout(() => setvisibility(false), 500);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, symbols]);

  return (
    <div className="w-[400px] h-[600px] flex flex-col bg-gradient-to-b from-gray-50 to-gray-200 p-4 rounded-lg shadow-lg overflow-hidden">
      {/* Title */}
      <h1 className="text-xl font-bold text-gray-800 text-center mb-4">🔐 AI summarizer and Password Generator</h1>

      {/* Password box */}
      <div className="flex gap-2 mb-2">
        <input
          ref={refe}
          type="text"
          value={password}
          readOnly
          className="flex-grow border border-gray-300 rounded-lg px-3 py-2 text-lg bg-white shadow-sm focus:outline-none"
        />
        <button
          onClick={copie}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md"
        >
          Copy
        </button>
      </div>
      {visible && <p className="text-green-600 text-xs mb-3">Copied!</p>}

      {/* Settings */}
      <div className="bg-white p-3 rounded-lg shadow mb-3">
        <label className="block font-semibold mb-1">Length: {length}</label>
        <input
          type="range"
          min={4}
          max={32}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full accent-blue-500"
        />
        <div className="flex gap-4 mt-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numbers}
              onChange={(e) => setnumbers(e.target.checked)}
              className="accent-blue-500"
            />
            Numbers
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
              className="accent-blue-500"
            />
            Symbols
          </label>
        </div>
      </div>

     
      {/* AI Feedback */}
      <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg flex-1 overflow-auto shadow-inner">
        <button
          onClick={() => axios.post("https://ai-summarizer-and-password-generator.onrender.com/backend",url,{headers:{"Content-Type":"text/plain"}}).then((response)=>setAifeedback(response.data))}
          className="mb-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded shadow"
        >
          Get AI Feedback of this Web
        </button>
        <p className="text-sm text-gray-700 whitespace-pre-line">
          {aifeedback || "No feedback yet. Click the button to analyze your password."}
        </p>
      </div>
    </div>
  );
}
