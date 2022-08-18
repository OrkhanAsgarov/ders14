import { useState } from "react";
import Baglanti from "./Baglanti";
import Card from "./Card";
import './style.css';
import TemaContext from "./context/TemaContext";

function App() {
  const [tema, temaGuncelle] = useState("siyah");

  const renkDegistir = (renkAdi) => {
    temaGuncelle(renkAdi); //!!!!!!!!!!!
  }

  return (
    <>
       <header>
        <div>LOGO</div>
        <nav>
          <Baglanti url="#">Baglanti 1</Baglanti>
          <Baglanti url="#">Baglanti 2</Baglanti>
          <Baglanti url="#">Baglanti 3</Baglanti>
          <Baglanti url="#">Baglanti 4</Baglanti>
        </nav>
      </header>

      <TemaContext.Provider value={tema}>
        <section>
          <h2>Yeni Urunler</h2>
          <div className="urun-liste">
            <Card gorsel="https://lipsum.app/id/25/200x150" urunAdi="Urun 1"/>
            <Card gorsel="https://lipsum.app/id/35/200x150" urunAdi="Urun 2"/>
            <Card gorsel="https://lipsum.app/id/45/200x150" urunAdi="Urun 3"/>
            <Card gorsel="https://lipsum.app/id/55/200x150" urunAdi="Urun 4"/>
          </div>
        </section>
      </TemaContext.Provider>

      <footer>
        <p>Tum haklari saklidir.</p>
      </footer>

      <div className="temaButonlar">
        <button onClick={()=>{renkDegistir("kirmizi")}}>Kirmizi</button>
        <button onClick={()=>{renkDegistir("siyah")}}>Siyah</button>
        <button onClick={()=>{renkDegistir("mavi")}}>Mavi</button>
      </div>
    </>
 
  );
}

export default App;
