import { StatusBar} from 'expo-status-bar';
import Home from './components/Home'
import Auth from './components/Auth'
import { useState } from 'react';

export default function App() {

  const [logged,setLogged] = useState(false);
  return (
    <>
      {logged? <Home/>:<Auth login= {setLogged}/>}
    </>

  );
}