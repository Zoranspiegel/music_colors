import s from './Gamma.module.css';
import { useState } from 'react';

export default function Gamma() {
  const [state, setState] = useState('i');

  const handleState = (e) => {
    setState(e.target.name)
  }

  return (
    <div className={s.container}>
      <div className={s.btns}>
        <button onClick={handleState} name='i' className={state === 'i' ? s.activeBtn : null}>I</button>
        <button onClick={handleState} name='ii' className={state === 'ii' ? s.activeBtn : null}>II</button>
        <button onClick={handleState} name='iii' className={state === 'iii' ? s.activeBtn : null}>III</button>
        <button onClick={handleState} name='iv' className={state === 'iv' ? s.activeBtn : null}>IV</button>
      </div>
      {state === 'i' && <div className={s.i}></div>}
      {state === 'ii' && <div className={s.ii}></div>}
      {state === 'iii' && <div className={s.iii}></div>}
      {state === 'iv' && <div className={s.iv}></div>}
    </div>
  );
}
