import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/skap.png";
import useAuth from "../../hooks/useAuth.js";
import api from "../../services/api";
import { DivForm, DivLogo, MainDivSingUp, StyledForm, StyledLink, SubmitButton, SubmitDiv } from "../../styles/LoginStyle.js";


export default function SignInPage() {

    const [formLogin, setFormLogin] = useState({email: '', password: ''});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {login} = useAuth();

    function setLogin(e){
        setFormLogin({...formLogin, [e.target.name]: e.target.value});
    }

    function submitLogin(e){
        e.preventDefault();
        setIsLoading(true);

        const promise = api.signIn(formLogin);
        promise.then(res => {
            setIsLoading(false);
            login(res.data.token);
            navigate("/");
        });
        promise.catch(err => {
            setIsLoading(false);
            alert(err.response.data.message);
        });
    }
    return (
        <MainDivSingUp>
            <DivLogo>
                <img src={logo} />
            </DivLogo>
            <DivForm>
                <StyledForm onSubmit={submitLogin}>
                    <h1>Bem-vindo(a)! Utilize seu login</h1>
                    <div className="divForm">
                        <span>
                            <label htmlFor="username">Nome de usuário:</label>
                            <input data-test="email"
                                type="email"
                                name="email"
                                onChange={setLogin}
                                value={formLogin.email}
                                disabled={isLoading}
                                required
                            />
                        </span>
                        <span>
                            <label htmlFor="password">Senha:</label>
                            <input data-test="password"
                                type="password"
                                name="password"
                                onChange={setLogin}
                                value={formLogin.password}
                                disabled={isLoading}
                                required
                            />
                        </span>
                    </div>
                    <SubmitDiv>
                        <SubmitButton type="button" onClick={() => navigate("/")} disabled={isLoading}>Voltar para home</SubmitButton>
                        <SubmitButton type="submit" disabled={isLoading}>Entrar</SubmitButton>
                    </SubmitDiv>
                    <StyledLink to="/cadastro">
                        Primeira vez? Cadastre-se!
                    </StyledLink>
                </StyledForm>
            </DivForm>
        </MainDivSingUp>
    );
}