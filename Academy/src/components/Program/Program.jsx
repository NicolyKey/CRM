import aluno01 from '../../assets/img/fotoAluno (1).jpg'
import aluno02 from '../../assets/img/FotoAluno.jpg'
import aluno03 from '../../assets/img/fotoPerfil.png'
import icone from '../../assets/img/treino.png'
import './program.css'

function Program() {
  return (
    <div className="programs">
        <div className="program">
          <img className='imagem-program' src={aluno01} alt=""/>
          <div className='caption'>
            <img src={icone} alt=""/>
            <p>Aluno 01</p>
          </div>
        </div>
        <div className="program">
          <img className='imagem-program' src={aluno02} alt=""/>
          <div className='caption'>
            <img src={icone} alt=""/>
            <p>Aluno 01</p>
          </div>
        </div>
        <div className="program">
          <img className='imagem-program' src={aluno03} alt=""/>
          <div className='caption'>
            <img src={icone} alt=""/>
            <p>Aluno 01</p>
          </div>
        </div>
    </div>
  )
}

export default Program