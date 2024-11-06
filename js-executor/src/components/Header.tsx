import { JavaScript, TypeScript } from "@/components/Icons/Icons";
import { useState } from "react";

type LanguageOptions = "JavaScript" | "TypeScript";

export function Header() {
  const [language, setLanguage] = useState<LanguageOptions>("JavaScript");

  const languages = [
    {
      tabName: "JavaScript",
      icon: (
        <JavaScript
          className={`${
            language === "JavaScript"
              ? "text-yellow-500"
              : "grayscale text-gray-500"
          }`}
          height={20}
          width={20}
        />
      ),
    },
    {
      tabName: "TypeScript",
      icon: (
        <TypeScript
          className={`${
            language === "TypeScript"
              ? "text-blue-500"
              : "grayscale text-gray-500"
          }`}
          height={20}
          width={20}
        />
      ),
    },
  ];

  return (
    <header className="w-full h-[50px] flex items-center fixed top-0 left-0 z-10 border-b border-b-white/20 backdrop-blur-md">
      <nav className="gap-x-4 flex items-center px-[calc(60px+1rem)]">
        {languages.map((lang) => (
          <button
            key={lang.tabName}
            onClick={() => setLanguage(lang.tabName as LanguageOptions)}
            className={`${
              language === lang.tabName
                ? "border-b-2 border-yellow-500"
                : "border-b-2 border-transparent"
            }`}
          >
            {lang.icon}
          </button>
        ))}
      </nav>
    </header>
  );
}
