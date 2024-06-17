import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/foto-robson.jpg';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Robson Sena, estudante de Front-end no Projeto ONE (Oracle Next Education) em parceria com a Alura. Aqui compartilho vários aprendizados e conhecimentos adquiridos ao longo do curso:
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Fodo do Robson Sena informal'
                />
            </div>
        </div>
    )
}