import React, { useEffect, useState } from "react";
import styles from "../styles/apply.module.css";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";

const Apply = () => {
	const [category, setCategory] = useState("");

	const [handle, setHandle] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [summited, setSubmitted] = useState(false);

	const router = useRouter();
	useEffect(() => {}, [summited]);

	useEffect(() => {
		console.log({ handle, email, password });
	});
	const handleCategoryChange = (e) => {
		setCategory(e.target.value);
	};

	const handleRegister = (e) => {
		e.preventDefault();

		if (!category) return toast.error("Add category");
		fetch("http://localhost:8080/api/register", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				handle,
				email,
				password,
				category,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.message === "success") toast("Success from server");

				localStorage.setItem("linkTreeToken", data.token);

				setSubmitted(true);

				router.push("./login");
			})
			.catch((err) => toast.error(err.message));
		toast("Success");
	};
	return (
		<>
			``
			<section className={styles.background + " min-h-screen flex justify-center items-center"}>
				<div className="main">
					<div className="content bg-white border border-2 px-4 py-8 rounded-2xl shadow-lg">
						<h1 className="text-2xl font-bold text-center">Join the top 1% creators</h1>
						<p className="text-center">Create Linktree for your brand</p>
						<form
							onSubmit={handleRegister}
							action=""
							className="flex flex-col gap-4 text-lg mt-3"
						>
							<span className="flex flex-row shadow-md border border-2 px-3 py-2 rounded-md focus:outline-none">
								<img src="/svg/ig.svg" alt="" className="w-6 mr-4" />
								<input
									type="text"
									onChange={(e) => setHandle(e.target.value)}
									className="focus:outline-none"
									placeholder="Social Handle"
								/>
							</span>
							<input
								type="email"
								className="shadow-md border border-2  px-3 py-2 rounded-md focus:outline-none"
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Your email"
							/>
							<input
								type="password"
								onChange={(e) => setPassword(e.target.value)}
								className="shadow-md border border-2  px-3 py-2 rounded-md focus:outline-none"
								placeholder="Set a password"
							/>

							<h5 className="text-sm text-center text-indigo-400">Account Type</h5>

							<span className="flex">
								<label htmlFor="" className="flex flex-row mr-3">
									<input
										className=""
										type="checkbox"
										checked={category === "Creator"}
										onChange={(e) => handleCategoryChange(e)}
										value={"Creator"}
									/>
									<p className="pl-2">Creator</p>
								</label>

								<label htmlFor="" className="flex flex-row mr-3 ">
									<input
										className=""
										onChange={(e) => handleCategoryChange(e)}
										type="checkbox"
										checked={category === "Agency"}
										value={"Agency"}
									/>

									<p className="pl-2">Agency</p>
								</label>

								<label htmlFor="" className="flex flex-row mr-3 ">
									<input
										className=""
										onChange={(e) => handleCategoryChange(e)}
										type="checkbox"
										checked={category === "Brand"}
										value={"Brand"}
									/>
									<p className="pl-2">Brand</p>
								</label>
							</span>

							<input
								type="submit"
								value={"Apply"}
								className="bg-indigo-600 text-white py-3 rounded-lg cursor-pointer"
							/>
						</form>
					</div>

					<h4 className="text-center text-white">
						Already have an account?{" "}
						<Link className="font-bold text-red-400" href={"/login"}>
							Login
						</Link>
					</h4>
				</div>
			</section>
		</>
	);
};

export default Apply;
