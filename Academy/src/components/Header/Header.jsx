
import { useEffect, useState } from 'react';

import logo from '../../assets/img/sapatos-de-academia.png';
import './header.css'

function Header() {
   const [sticky, setSticky] = useState(false);

   useEffect(() =>{
    window.addEventListener('scroll', () =>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
   }, [])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
       <div className='logo'>
       <img className="imagem" src={logo} alt=""/> 
       <h1>GYM</h1>   
       </div>
       <ul>
         <li>Home</li>
         <li>Programa</li>
         <li>Sobre nós</li>
         <li> <button className='btn'>Contato</button></li>
       </ul>
     
    </nav>
  );
}

export default Header;
