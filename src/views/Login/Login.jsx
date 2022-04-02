import style from './Login.module.css';
import logo from '../../assets/Logo/programateAcademyLogo.png';
import imalog from '../../components/assets/images/img6.jpg'
import { useState } from 'react';
import axios from 'axios';

export default function Login(props) {
	const { setRole } = props;
	const baseurl = "https://mentoringapp-back.herokuapp.com";

	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");

	async function sendLogin(e){
		e.preventDefault();
		try{
			await axios.get(`${baseurl}/login/${email}/${password}`)
				.then(response => {
					setRole(response.data[0].role);
				});
		}catch(err){
			console.log(err);
		}
	}

	return (
		<div className={style.container}>
		
			<div className={style.boximag}>
				<img className={style.imagenlogin} src={imalog} alt="logo-programate" />
			</div>
			<div className={style.login}>

				<img className={style.logoLogin} src={logo} alt="logo-programate" />
				<h2 className={style.loginTitle}>Ingresa a Okhlos</h2>

				<form
					containerclassName={style.form}
					onSubmit={() => {
						console.log('');
					}}
				>
					<div className={style.containerinput}>
						<input
							label="Correo"
							placeholder="ejemplo@ejemplo.com"
							name="email"
							type="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>

						<input
							label="Contraseña"
							placeholder="********"
							type="password"
							name="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>

					<button
						className={style.buttonLogin}
						type="submit"
						onClick={sendLogin}
					>
						Ingresar
					</button>
				</form>
			</div>
			
		</div>
	);
}
