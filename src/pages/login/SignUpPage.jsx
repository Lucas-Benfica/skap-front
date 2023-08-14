import { useState } from "react";
import logo from "../../assets/skap.png";
import { DivForm, DivLogo, MainDivSingUp, StyledForm, StyledLink, SubmitButton, SubmitDiv } from "../../styles/LoginStyle.js";
import { useNavigate } from "react-router-dom"
import api from "../../services/api";


export default function SignUpPage(){
    const navigate = useNavigate();

    const [formCadastro, setFormCadastro] = useState({name: "", email: "", cpf: "", phoneNumber: "", password : "", confirmPass : ""});
    const [isLoading, setIsLoading] = useState(false);

    function setCadastro(e){
        setFormCadastro({...formCadastro, [e.target.name]: e.target.value});
    }
    const formattedCPF = formCadastro.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    const handleCPFChange = (e) => {
        const inputCPF = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setFormCadastro({...formCadastro, [e.target.name]: inputCPF});
    };
    const formattedPhoneNumber = formCadastro.phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    const handlePhoneChange = (e) => {
        const inputPhoneNumber = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setFormCadastro({...formCadastro, [e.target.name]: inputPhoneNumber});
    };

    function submitCadastro(e){
        e.preventDefault();
        setIsLoading(true);
        
        if(formCadastro.password != formCadastro.confirmPass){
        alert("As senhas estão diferentes!");
        setFormCadastro({...formCadastro, confirmPass: ""});
        setIsLoading(false);
        return;
        }
        const info =  formCadastro;
        delete info.confirmPass;
        const promise = api.signUp(info);

        promise.then(() => {
        setIsLoading(false);
        navigate("/login");
        });

        promise.catch((err) => {
        alert(err.response.data);
        setIsLoading(false);
        });
        
    }

    return (
        <MainDivSingUp>
            <DivLogo>
                <img src={logo} />
            </DivLogo>
            <DivForm>
                <StyledForm onSubmit={submitCadastro}>
                    <h1>Bem-vindo(a)! Preencha Seus Dados</h1>
                    <div className="divForm">
                        <span>
                            <label htmlFor="username">Nome de usuário:</label>
                            <input
                                type="text"
                                name="name"
                                onChange={setCadastro}
                                value={formCadastro.name}
                                disabled={isLoading}
                                required
                            />
                        </span>
                        <span>
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                name="email"
                                onChange={setCadastro}
                                value={formCadastro.email}
                                disabled={isLoading}
                                required
                            />
                        </span>
                    </div>
                    <div className="divForm">
                        <span>
                            <label htmlFor="cpf">CPF:</label>
                            <input 
                            type="text"
                            name="cpf"
                            onChange={handleCPFChange}
                            value={formattedCPF}
                            disabled={isLoading}
                            required  
                            />
                        </span>
                        <span>
                            <label htmlFor="phoneNumber">Telefone:</label>
                            <input 
                            type="text"
                            name="phoneNumber"
                            onChange={handlePhoneChange}
                            value={formattedPhoneNumber}
                            disabled={isLoading}
                            required  
                            />
                        </span>
                    </div>
                    <div className="divForm">
                        <span>
                            <label htmlFor="password">Senha:</label>
                            <input 
                            type="password"
                            name="password"
                            onChange={setCadastro}
                            value={formCadastro.password}
                            disabled={isLoading}
                            required  
                            />
                        </span>
                        <span>
                            <label htmlFor="confirmPass">Confirme sua senha:</label>
                            <input 
                            type="password"
                            name="confirmPass"
                            onChange={setCadastro}
                            value={formCadastro.confirmPass}
                            disabled={isLoading}
                            required  
                            />
                        </span>                        
                    </div>
                    <SubmitDiv>
                        <SubmitButton type="button" onClick={() => navigate("/")} disabled={isLoading}>Voltar para home</SubmitButton>
                        <SubmitButton type="submit" disabled={isLoading}>Cadastrar</SubmitButton>                        
                    </SubmitDiv>
                    <StyledLink to="/login">
                        Já tem uma conta? Entre agora!
                    </StyledLink>
                </StyledForm>
            </DivForm>
        </MainDivSingUp>
    );
}

