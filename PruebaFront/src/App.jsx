import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Form from './components/Form.jsx'
const baseUrl = 'http://localhost:3000/api/getCategory';

function App() {
  const [data, setData] = useState([]); // Inicializa como array vacío
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData.data)
        const cate=Object.values(responseData.data)
        // Verifica si la respuesta es un array
        if (Array.isArray(cate)) {
          setData(cate);
        } else {
          throw new Error('La respuesta no es un array');
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Form />
      {data.map((d) => (
        //<Cards key={index}>{d.name || `Elemento ${index}`}</Cards>
        <Cards key={d.id}
        props={d.name} 
        />
      ))}
    </>
  );
}

export default App;