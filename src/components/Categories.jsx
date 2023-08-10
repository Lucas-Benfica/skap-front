import { Link, useNavigate } from "react-router-dom";
import { ContainerCategories } from "../styles/HomeStyles";

export default function Categories(){
    const navigate = useNavigate();

    return (
        <ContainerCategories>
                <h1>Categorias:</h1>
                <div>
                    <div>
                        <img src="https://conteudo.imguol.com.br/c/entretenimento/cd/2020/09/30/hyundai-hb20-sense-1601515945848_v2_4x3.jpg" />
                        <p>Hatches</p>
                    </div>
                    <div>
                        <img src="https://dicas.olx.com.br/wp-content/uploads/2023/05/carro-sedan.jpg" />
                        <p>Sedans</p>
                    </div>
                    <div>
                        <img src="https://revistacarro.com.br/wp-content/uploads/2020/02/dusterorochexpress_013_1280x768.jpg" />
                        <p>Picapes</p>
                    </div>
                    <div>
                        <img src="https://live.dealer-asset.co/images/br1051/news/SUV_Ford_Territory.jpg?s=1024" />
                        <p>SUVs</p>
                    </div>
                    <div>
                        <img src="https://s2-autoesporte.glbimg.com/6vUFekKDWTM25QJtFyVY6XW_114=/0x0:2880x1620/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/r/Q/jG4sukQ529Fkb6uvaHdw/commercialcharging-hero-desktop.jpg" />
                        <p>Elétricos</p>
                    </div>
                </div>
        </ContainerCategories>
    );
}