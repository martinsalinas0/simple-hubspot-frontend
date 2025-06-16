import React from 'react';

const ButtonExamples: React.FC = () => {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-6">Tailwind Button Examples</h2>
      
      {/* Primary Button */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Primary Button</h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Primary Button
        </button>
      </div>

      {/* Secondary Button */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Secondary Button</h3>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Secondary Button
        </button>
      </div>

      {/* Outline Button */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Outline Button</h3>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Outline Button
        </button>
      </div>

      {/* Rounded Button */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Rounded Button</h3>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Rounded Button
        </button>
      </div>

      {/* Large Button */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Large Button</h3>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded text-lg">
          Large Button
        </button>
      </div>

      {/* Small Button */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Small Button</h3>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm">
          Small Button
        </button>
      </div>

      {/* Disabled Button */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Disabled Button</h3>
        <button 
          disabled 
          className="bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed opacity-50"
        >
          Disabled Button
        </button>
      </div>

      {/* Button with Icon */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Button with Text</h3>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <span className="mr-2">+</span>
          Add Item
        </button>
      </div>

      {/* Button Group */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Button Group</h3>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100">
            Left
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100">
            Middle
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100">
            Right
          </button>
        </div>
      </div>

      {/* Gradient Button */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Gradient Button</h3>
        <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded">
          Gradient Button
        </button>
      </div>
    </div>
  );
};

export default ButtonExamples;