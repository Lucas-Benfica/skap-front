import { useNavigate } from "react-router-dom";
import { ContainerRanking } from "../styles/HomeStyles";

const car = {
    name: "HB20",
    branch: "Fiat",
    image: "https://conteudo.imguol.com.br/c/entretenimento/cd/2020/09/30/hyundai-hb20-sense-1601515945848_v2_4x3.jpg"
}

export default function Ranking(){
    const navigate = useNavigate();

    return (
        <ContainerRanking>
                <h1>Ofertas mais visualizadas:</h1>
                <div>
                    <div>
                        <img src="https://conteudo.imguol.com.br/c/entretenimento/cd/2020/09/30/hyundai-hb20-sense-1601515945848_v2_4x3.jpg" />
                        <p>Hatches</p>
                        <h2>Fiat</h2>
                        <div></div>
                    </div>
                    <div>
                        <img src="https://conteudo.imguol.com.br/c/entretenimento/cd/2020/09/30/hyundai-hb20-sense-1601515945848_v2_4x3.jpg" />
                        <p>Hatches</p>
                        <h2>Fiat</h2>
                        <div></div>
                    </div>
                    <div>
                        <img src="https://conteudo.imguol.com.br/c/entretenimento/cd/2020/09/30/hyundai-hb20-sense-1601515945848_v2_4x3.jpg" />
                        <p>Hatches</p>
                        <h2>Fiat</h2>
                        <div></div>
                    </div>
                    <div>
                        <img src="https://conteudo.imguol.com.br/c/entretenimento/cd/2020/09/30/hyundai-hb20-sense-1601515945848_v2_4x3.jpg" />
                        <p>Hatches</p>
                        <h2>Fiat</h2>
                        <div></div>
                    </div>
                    <div>
                        <img src="https://conteudo.imguol.com.br/c/entretenimento/cd/2020/09/30/hyundai-hb20-sense-1601515945848_v2_4x3.jpg" />
                        <p>Hatches</p>
                        <h2>Fiat</h2>
                        <div></div>
                    </div>
                    <div>
                        <img src="https://conteudo.imguol.com.br/c/entretenimento/cd/2020/09/30/hyundai-hb20-sense-1601515945848_v2_4x3.jpg" />
                        <p>Hatches</p>
                        <h2>Fiat</h2>
                        <div></div>
                    </div>
                </div>
        </ContainerRanking>
    );
}