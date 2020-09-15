import React, { Component } from "react";
import {
  Redirect
} from "react-router-dom";
import './Register.scss';

class Register extends Component {
	state = {
      email: "",
      password: "",
      name: ""
	}

	onEmailChange = event => {
	this.setState({ email: event.target.value });
	};

	onPasswordChange = event => {
	this.setState({ password: event.target.value });
	};

	onNameChange = event => {
	this.setState({ name: event.target.value });
	};

	onSubmitRegister = () => {
	fetch("http://127.0.0.1:3000/auth/reg", {
		method: "post",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: this.state.email,
			password: this.state.password,
			name: this.state.name
		})
	})
		.then(response => response.json())
		.then(user => {
			if (user.success) {	
				this.props.signIn(user)
				this.props.history.push("/")
				localStorage.setItem('id', user.id)
			}
		})
		.catch(console.log);
	};

  render() {
		let { from } = { from: { pathname: "/" }};

		if (this.props.isAuth) return <Redirect to={from} />

    return (
        <section className="start-form">
					<h1>Registration</h1>

					<input
						onChange={this.onNameChange}
						className="form-input"
						type="text"
						name="name"
						placeholder="Name"
					/>

					<input
						onChange={this.onEmailChange}
						className="form-input"
						type="email"
						name="email-address"
						placeholder="Email"
					/>

					<input
						onChange={this.onPasswordChange}
						className="form-input"
						type="password"
						name="password"
						placeholder="Password"
					/>

					<input
						onClick={this.onSubmitRegister}
						className="form-input form-submit"
						type="submit"
						value="Register"
					/>
        </section>
    );
  }
}

export default Register;
