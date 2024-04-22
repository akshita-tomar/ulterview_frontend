import React from "react";

const LanguageModal = ({ languages, handleLanguageClick }) => {
  return (
    <div className="language-modal">
      {languages.map((language) => (
        <div key={language.id} className="language-card" onClick={() => handleLanguageClick(language)}>
          {language.language}
        </div>
      ))}
    </div>
  );
};

export default LanguageModal;