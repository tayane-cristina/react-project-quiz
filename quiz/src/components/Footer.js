import './Footer.css'; 

const Footer = () => {
  return (
    <footer>
        <div className='social'>
            <h1>DivertQuiz</h1>
            <section className='social-links'>
                <a href='https://www.linkedin.com/in/tayane-cristina-alves-dos-santos-002334272/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BGRcpFK0sSDyIU1xE4nm02w%3D%3D' target='blank' rel='linkedin'>
                    <img className='social-media linkedin' src='https://img.icons8.com/?size=50&id=8808&format=png' alt='linkedIn-img'></img>
                </a>
                <a href='https://github.com/tayane-cristina' target='blank' rel='github'>
                    <img className='social-media github' src='https://img.icons8.com/?size=64&id=3tC9EQumUAuq&format=png' alt='github-img'></img>
                </a>
                <a href='https://wa.me/5521968908287' target='blank' rel=''>
                    <img className='social-media whatsapp' src='https://img.icons8.com/?size=50&id=16733&format=png' alt='whatsapp-img'></img>
                </a>
                <a href='https://www.instagram.com/srt_tinasan/' target='blank' rel=''>
                    <img className='social-media instagram' src='https://img.icons8.com/?size=64&id=RhYNENh5cxlS&format=png' alt='instagram-img'></img>
                </a>
                
            </section>
        </div>

        <div className='informe'>
            <section className='about-app-creating'>
                <ul className='technologies'>
                    <p><strong>tecnologias</strong></p>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Firebase</li>
                </ul>
            </section>
            <section>
                <ul className='aux-links'>
                    <p><strong>Sites utilizados</strong></p>
                    <li><a href="https://icons8.com.br" target="blank" rel="icons" className='hidden-link'>Icons</a>Icons</li>
                    <li><a href="https://www.pexels.com/" target="blank" rel="pexels" className='hidden-link'>Pexels</a></li>
                    <li><a href="https://firebase.com" target="blank" rel="firebase" className='hidden-link'>Firebase</a></li>
                    <li><a href="https://br.freepik.com/" target="blank" rel="frepick" className='hidden-link'>FrePick</a></li>
                </ul>
            </section>
        </div>
    </footer>
  );
}

export default Footer;