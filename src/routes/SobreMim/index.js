import PostModelo from "components/PostModelo";
import styles from "./SobreMim.module.css"
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Lucas!
            </h3>

            <img
                className={styles.fotoSobreMim}
                src={fotoSobreMim}
                alt="Foto do Lucas Franco"
            // style={{ borderRadius: 5 }}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Sou o carinha da foto ao lado e vou contar um pouco da minha história como desenvolvedor.
            </p>

            <p className={styles.paragrafo}>
                Iniciei meus estudos cursando Engenharia Elétrica na UFPI, onde descobri o incrível mundo da computação por meio da disciplina de algoritmos, iniciando com a linguagem Python, a qual achei incrível.
            </p>

            <p className={styles.paragrafo}>
                Conforme o tempo foi passando fui estudando mais sobre a linguagem e me interessando pelo mundo dos códigos, descobrindo novas linguagens e formas de poder colocar ideias pra fora do papel.
            </p>

            <p className={styles.paragrafo}>
                Mudei de curso para fazer Análise e Desenvolvimento de Sistemas, e assim aprendo mais a cada dia, seja no Front ou Back, e até com Banco de Dados, sempre disposto a descobrir novas maneiras de transformar códigos em realidade.
            </p>
        </PostModelo>
    )
}
