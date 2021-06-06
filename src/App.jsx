import { useState } from 'react';

function App() {
  const [userArea, setUserArea] = useState('');
  const [userProvince, setUserProvince] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
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
