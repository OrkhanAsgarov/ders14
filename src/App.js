import React from "react";
import Todos from "./Todos";

const cokZamanAlanFonksiyon = (num) => {
  console.log("Hesaplama yapiliyor...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

function App() {
  const [sayac, sayacGuncelle] = React.useState(0);
  const [todos, setTodos] = React.useState([]);
  const hesaplamaSonucu = React.useMemo(() => cokZamanAlanFonksiyon(sayac), [todos, sayac]);

  const increment = () => {
    sayacGuncelle((oncekiSayac) => oncekiSayac + 1);
  };
  const addTodo = React.useCallback(() => {
    let saniye = new Date().getSeconds();
    setTodos((ocekiDizi) => [...ocekiDizi, "Yapilacak is " + saniye]);
  }, []);

  return (
    <>
      <p>Hesaplama Sonucu: {hesaplamaSonucu}</p>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Sayac: {sayac}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};



export default App;
