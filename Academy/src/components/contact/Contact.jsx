import "./contact.css";
import mail from "../../assets/img/o-email.png"
import phone from "../../assets/img/phone-call.png"
import localiza from "../../assets/img/maps-and-location.png"

function Contact() {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Nos envie uma mensagem</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dicta ut natus sequi necessitatibus eius magni cum, omnis nostrum ex
          quia, vitae facilis accusamus possimus ratione fugit sint veniam rem,
          voluptatum consectetur accusantium qui harum autem! Autem, quod.
        </p>
        <ul>
          <li> <img src={mail} alt=""/> contact@contact.com</li>
          <li><img src={phone} alt=""/> 55 (44) 9 8855-9245</li>
          <li><img src={localiza} alt=""/> Rua São Paulo, 454<br/> Blumenau / Santa Catarina</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
            <label>Seu nome</label>
            <input type="text" name='nome' placeholder="Digite seu nome" required/>
            <label>Seu número de telefone</label>
            <input type="tel" name='telefone' placeholder="Digite seu telefone" required/>
            <label>Escreva sua mensagem</label>
            <textarea name='message' rows="6" placeholder="Digite uma mensagem" required></textarea>  
            <button type="submit" className="btn">Envie</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
