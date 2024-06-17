import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/foto-robson-2.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobrem mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Robson!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Robson sério"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
      Oi, tudo bem? Eu sou estudante do projeto ONE (Oracle Next Education) em parceria com a Alura, faço parte da turma de Front-end e estou feliz de te ver por aqui.
      </p>
      <p className={styles.paragrafo}>
      Minha história com programação começou em meados de dezembro de 2023 com a inscrição no Projeto ONE. 
      </p>
      <p className={styles.paragrafo}>ONE é um programa de educação e empregabilidade com objetivo social de capacitar pessoas em tecnologia e conectá-las com o mercado de trabalho por meio de empresas parceiras. O curso é 100% online e totalmente gratuito, feito para quem não teve acesso à educação de qualidade e deseja transformar a sua realidade social. Esta formação faz parte do programa ONE, parceria de Alura + Oracle. 
      </p>
      <p className={styles.paragrafo}>E agora em 2024 estou tendo a oportunidade de  aprender lógica de programação, Javascript, CSS e React para formação em Front-end. E é claro que venho procurando em me aprofundar muito em cada uma delas.                 
      </p>
      <p className={styles.paragrafo}>
      Sou graduado em Administração e em 2019 concluí o curso tecnólogo de tecnologia em Gestão da Qualidade. A minha carreira profissional até o momento foi nas áreas Administrativa e de Negócios. Com mais de 10 anos de experiência, atuando no atendimento ao público em funções como analista administrativo, em operações bancárias e recuperação de crédito. Ao longo dos anos venho desenvolvendo habilidade de comunicação eficaz e trabalho em equipe.
      </p>
      <p className={styles.paragrafo}>
      No entanto, neste momento venho aprendendo mais sobre a área de tecnologia da informação, com intuito de realizar a transição de carreira e este programa tem sido um “divisor de águas.”
      </p>
      <p className={styles.paragrafo}>
      Dessa forma, vou me encaminhando através de muitos aprendizados atrás de aprendizados.
      </p>
    </PostModelo>
  );
}
