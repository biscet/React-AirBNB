import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Login extends Component {
    state = {
			redirectToReferrer: false,
      signInEmail: "",
      signInPassword: ""
    };

	onEmailChange = event => {
		this.setState({ signInEmail: event.target.value });
	};

	onPasswordChange = event => {
		this.setState({ signInPassword: event.target.value });
	};

	onSubmitSignIn = () => {
		fetch("http://127.0.0.1:3000/auth/login", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					this.props.signIn(data)
					this.props.history.push("/")
					localStorage.setItem('id', data.id)
				}
			})
			.catch(console.log);
	};

  render() {
		let { from } = { from: { pathname: "/" }};

		if (this.props.isAuth) return <Redirect to={from} />

    return (
        <section className="start-form">
					<h1>Sign In</h1>

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
						onClick={this.onSubmitSignIn}
						className="form-input form-submit"
						type="submit"
						value="Sign In"
					/>

					<Link
						to='/register'
						className="form-link"
					>
						Registration
					</Link>
        </section>
    );
  }
}

export default Login;
