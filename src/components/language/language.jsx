import React, { useState } from 'react'
import './language.scss'

const Language = () => {

  const [switchLang, setSwitchLang] = useState(false);
  const handleSwitchLang = () => {
    setSwitchLang(!switchLang);
    // console.log(switchLang);
  }

  const [selectedLang, setSelectedLang] = useState("az");
  const handleSelectedLang = (e) => {
    setSelectedLang(e.target.value);
    setSwitchLang(!switchLang);
  }

  const Languages = ({children, lang, selected}) => {
    return (
      <label>
        <input 
        type="radio" 
        value={lang}
        checked={selectedLang === lang}
        onChange={handleSelectedLang}
        onClick={selected ? handleSwitchLang : () => {}}
      />
      {children}
      </label>
    )
  }

  return (
    <div className={`language ${switchLang ? "active" : ""}`}>
      <Languages lang={selectedLang} selected> {selectedLang} </Languages>

      <div className="language__div">
        {selectedLang !== "az" ? <Languages lang="az"> az </Languages> : null}
        {selectedLang !== "en" ? <Languages lang="en"> en </Languages> : null}
        {selectedLang !== "ru" ? <Languages lang="ru"> ru </Languages> : null}        
      </div>
    </div>
  )

  
}

export default Language