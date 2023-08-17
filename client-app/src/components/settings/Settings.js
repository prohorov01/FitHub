import React, { useState } from "react";
import "./Settings.css"; // Убедитесь, что у вас есть файл CSS для стилизации

function Settings() {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Выбранный язык по умолчанию
  const [isDarkMode, setIsDarkMode] = useState(false); // Светлая тема по умолчанию

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`settings ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h2>Настройки</h2>
      <div className="language-section">
        <h3>Выбор языка:</h3>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="en">Английский</option>
          <option value="es">Испанский</option>
          <option value="fr">Французский</option>
          {/* Добавьте больше вариантов языка по мере необходимости */}
        </select>
      </div>
      <div className="mode-section">
        <h3>Режим отображения:</h3>
        <label>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleDarkModeToggle}
          />{" "}
          Темный режим
        </label>
      </div>
    </div>
  );
}

export default Settings;
