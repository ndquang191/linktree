import React, { useState } from "react";
import styles from "../styles/apply.module.css";
import { toast } from "react-toastify";
import Link from "next/link";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		if (!category) return toast.error("Add category");
		toast("Success");
	};
	return (
		<>
			``
			<section className={styles.background + " min-h-screen flex justify-center items-center"}>
				<div className="main">
					<div className="content bg-white border border-2 px-4 py-8 rounded-2xl shadow-lg">
						<h1 className="text-2xl font-bold text-center">
							You are now among the top 1% creators
						</h1>
						<p className="text-center">Access your Dashboard</p>
						<form
							onSubmit={handleLogin}
							action=""
							className="flex flex-col gap-4 text-lg mt-3"
						>
							<input
								type="email"
								className="shadow-md border border-2  px-3 py-2 rounded-md focus:outline-none"
								placeholder="Your email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
							<input
								type="password"
								className="shadow-md border border-2  px-3 py-2 rounded-md focus:outline-none"
								placeholder="Set a password"
								value={password}
							/>

							<input
								onChange={(e) => setPassword(e.target.value)}
								type="submit"
								value={"Login"}
								className="bg-indigo-600 text-white py-3 rounded-lg cursor-pointer"
							/>
						</form>
					</div>
					<h4 className="text-center text-white">
						New Here?{" "}
						<Link className="font-bold text-red-400" href={"/apply"}>
							Apply
						</Link>
					</h4>
				</div>
			</section>
		</>
	);
};

export default Login;
