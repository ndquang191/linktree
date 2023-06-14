import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer
			aria-label="Site Footer"
			className="bg-gray fixed bottom-3 left-1/2 -translate-x-1/2 text-white
    "
		>
			<Link href={"/"} target="_blank" className="flex flex-row items-center ">
				<img
					src="/images/favicon.ico"
					alt=""
					className="hover:rotate-45 transition-all duration-400"
				/>
				<h5 className="text-indigo-400 pl-3 font-bold transition-all duration-400 hover:text-indigo-300  ">
					Try LinkTree
				</h5>
			</Link>
		</footer>
	);
};

export default Footer;
