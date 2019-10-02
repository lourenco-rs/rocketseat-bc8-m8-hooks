import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <h1>Techs</h1>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <p>Você tem {techSize} tecnologias</p>
      <input
        type="text"
        onChange={e => setNewTech(e.target.value)}
        value={newTech}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
