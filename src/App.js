import { useState } from 'react';
import { data } from './Data';
import { Wrapper } from './App.style';

function App() {
  const [result, setResult] = useState([]);
  const handleSearch = (e) => {
    setResult(data.filter((item) => item.nim.toString() === e.target.value));
  };

  return (
    <Wrapper>
      <h1>Pencarian Data Mahasiswa Aegis</h1>
      <div className="container">
        <input id="inputValue" type="text" onChange={handleSearch} />
        <div className="hasil">
          {result.length === 0 ? (
            <p className="error">Data tidak ditemukan !</p>
          ) : (
            result.map((item) => (
              <div className="card" key={item.nim}>
                <p>{item.nama_lengkap}</p>
                <p>{item.nama_panggilan}</p>
                <p>{item.nomor_telepon}</p>
                <p>{item.id_line}</p>
                <p>{item.nim}</p>
                <p>{item.email}</p>
                <p>{item.hobi}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
