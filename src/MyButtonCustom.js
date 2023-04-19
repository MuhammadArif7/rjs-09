import { useState } from 'react';

export default function MyButtonCustom() {
  const [cnt, setCnt] = useState(0);

  function handleClickCustom() {
    setCnt(cnt + 1);
  }

  return (
    <div>
      <h3>Counters Together</h3>
      <MyButton1 cnt={cnt} onClick={handleClickCustom} />
      <MyButton1 cnt={cnt} onClick={handleClickCustom} />
    </div>
  );
}

function MyButton1({ cnt, onClick }) {
  return (
    <button onClick={onClick}>{cnt}</button>
  );
}
