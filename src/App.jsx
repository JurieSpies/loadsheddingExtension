import { useEffect, useState } from 'react';

function App() {
  const [loadsheddingStatus, setLoadsheddingStatus] = useState('');
  const [userArea, setUserArea] = useState('');
  const [userProvince, setUserProvince] = useState('');

  const encodeUrl = (url) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
  const statusUrl = encodeUrl('https://ewn.co.za/assets/loadshedding/api/eskomstatus');
  const areaUrl = encodeUrl('https://loadshedding.eskom.co.za/LoadShedding/FindSuburbs?searchText=Monument&maxResults=300');

  const fetchFunc = (url) => fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error('Network response was not ok.');
    });

  useEffect(() => {
    fetchFunc(statusUrl).then((res) => setLoadsheddingStatus(res.contents));
  }, []);

  useEffect(() => {
    fetchFunc(areaUrl).then((res) => setUserArea(res.contents));
  }, [userProvince.length > 3]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>{loadsheddingStatus}</span>
      <input placeholder="Type in your suburb/village/area" onChange={(val) => setUserArea(val.target.value)} />
      <select onChange={(val) => setUserProvince(val.target.value)}>
        <option disabled selected value="">select an option</option>
        <option value="1">Eastern Cape</option>
        <option value="2">Free State</option>
        <option value="3">Gauteng</option>
        <option value="4">KwaZulu-Natal</option>
        <option value="5">Limpopo</option>
        <option value="6">Mpumalanga</option>
        <option value="7">North West</option>
        <option value="8">Northern Cape</option>
        <option value="9">Western Cape</option>
      </select>
    </div>
  );
}

export default App;
