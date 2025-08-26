"use client";

import React from 'react';
import { useLanguage } from './LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          language === 'en'
            ? 'bg-white text-[#760000] shadow-sm'
            : 'text-gray-600 hover:text-[#760000]'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('id')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          language === 'id'
            ? 'bg-white text-[#760000] shadow-sm'
            : 'text-gray-600 hover:text-[#760000]'
        }`}
      >
        ID
      </button>
    </div>
  );
}