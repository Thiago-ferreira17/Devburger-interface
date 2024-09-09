import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";

import {
	Container,
	Form,
	InputContainer,
	LeftContainer,
	RightContainer,
	Title,
} from "./styles";
import Logo from "../../assets/logo.svg";
import { Button } from "../../Components/Button";

export function Login() {
	const schema = yup
		.object({
			email: yup
				.string()
				.email("Digite um email válido")
				.required("O email é obrigatório"),
			password: yup
				.string()
				.min(6, "A senha deve ter pelo menos 6 caracteres")
				.required("Digite uma senha"),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = async (data) => {
		const response = await toast.promise(
			api.post("/sessions", {
				email: data.email,
				password: data.password,
			}),
			{
				pending: "Verificando seus dados",
				success: "Seja bem-vindo(a)👌",
				error: "Verifique seus dados 🤯",
			},
		);

		console.log(response);
	};

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-devburger" />
			</LeftContainer>
			<RightContainer>
				<Title>
					Olá, seja bem vindo ao <span>Dev Burguer!</span>
					<br />
					Acesse com seu <span> Login e senha. </span>
				</Title>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						<label>Email</label>
						<input type="email" {...register("email")} />
						<p>{errors?.email?.message}</p>
					</InputContainer>

					<InputContainer>
						<label>Senha</label>
						<input type="password" {...register("password")} />
						<p>{errors?.password?.message}</p>
					</InputContainer>
					<Button type="submit">Entrar</Button>
				</Form>
				<p>
					Não possui conta?{" "}
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a>Clique aqui</a>
				</p>
			</RightContainer>
		</Container>
	);
}
