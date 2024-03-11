import { useState, useCallback, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Parent from './components/Parent'

function App() {


  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const [myNum, setMyNum] = useState(0);

  const getValue = () => {
    return setMyNum(myNum + 1);
  }
  const countNum = (num) => {
    // perfoamnce issue 
    for (let i = 0; i < 2000000000; i++) { }
    return num

  }
  const checkData = useMemo(() => {
    return countNum(myNum);
  }, [myNum]);


  const passwordGenerator = () => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+=<>?";
    console.log(str, "str");
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass);
    console.log(pass);

  }






  return (
    <>
      <Input passwordGenerator={passwordGenerator} setLength={setLength} length={length} password={password} setNumberAllowed={setNumberAllowed} charAllowed={charAllowed} numberAllowed={numberAllowed} setcharAllowed={setcharAllowed} />
      <Parent />

      <br />
      <button onClick={getValue} className='bg-gray-400 text-green-700 shadow-sm hover:bg-green-200 hover:text-red-500 focus-visible:outline-offset-2'>Click me</button>
      <p className='text-red-500 text-shadow-100'>My num is {checkData}</p>
    </>
  )
}

export default App
