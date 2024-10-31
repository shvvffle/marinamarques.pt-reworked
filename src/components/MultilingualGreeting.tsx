import React from "react";

import { useTypewriter } from "../hooks/useTypewriter";

const greetings = [
  "Hello", // English
  "Olá", // Portuguese
  "Hola", // Spanish
  "Bonjour", // French
  "Ciao", // Italian
  "こんにちは", // Japanese
  "안녕하세요", // Korean
  "你好", // Chinese
  "Hej", // Swedish
  "Γεια σας", // Greek
];

export function MultilingualGreeting() {
  const text = useTypewriter(greetings, 150, 100, 2000);

  return (
    <span className="text-3xl text-teal-600 dark:text-teal-400 font-medium">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
