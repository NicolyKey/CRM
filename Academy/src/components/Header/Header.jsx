import logo from '../../assets/img/sapatos-de-academia.png';
import './header.css'

function Header() {
  return (
    <nav>
      
       <div className='logo'>
       <img className="imagem" src={logo} alt=""/> 
       <h1>GYM</h1>   
       </div>
       <ul>
         <li>Home</li>
         <li>Programa</li>
         <li>Sobre nós</li>
         <li>Testimonial</li>
         <li> <button className='btn'>Contato</button></li>
       </ul>
     
    </nav>
  );
}

export default Header;
