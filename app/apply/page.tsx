"use client";

import NHButton from "../../components/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { useEffect, useState } from "react";
import { useForm } from '@formspree/react';

export default function ApplyPage() {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({ firstName: "", lastName: "", fid: "", email: "" });
	const [formError, setFormError] = useState({ firstName: "", lastName: "", fid: "", email: "" });
	const [state, handleSubmit] = useForm("xgegodgp");

	const validateEmail = (email: string) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
		return re.test(String(email).toLowerCase());
	};

	const validateFID = (fid: string) => {
		return fid.match(/^\d{8}$/);
	};

	const nextStep = () => {
		if (currentStep === 1) {
			if (formData.firstName === "") {
				setFormError({ ...formError, firstName: "First name can not be empty" })
				return;
			}
			setFormError({ ...formError, firstName: "" })
		}

		if (currentStep === 2) {
			if (formData.lastName === "") {
				setFormError({ ...formError, lastName: "Last name can not be empty" })
				return;
			}
			setFormError({ ...formError, lastName: "" })
		}

		if (currentStep === 3) {
			if (!validateFID(formData.fid)) {
				setFormError({ ...formError, fid: "Please enter your 8 digit Fullertion ID" });
				return;
			}
			setFormError({ ...formError, fid: "" });
		}

		if (currentStep === 4) {
			if (!validateEmail(formData.email)) {
				setFormError({ ...formError, email: "Please enter a valid email" });
				return;
			}
			setFormError({ ...formError, email: "" });
			handleSubmit({
				firstName: formData.firstName,
				lastName: formData.lastName,
				fid: formData.fid,
				email: formData.email,
			});
			return;
		}

		setCurrentStep(currentStep + 1);
	};

	const prevStep = () => {
		setCurrentStep(currentStep - 1);
	};

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		if (state.succeeded) {
			timeoutId = setTimeout(() => {
				window.location.href = '/about';
			}, 8000);
		}

		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [state.succeeded]);

	let currentForm = null;

	switch (currentStep) {
		case 1:
			currentForm = (
				<>
					<Input
						type="text"
						label="First Name"
						size="md"
						value={formData.firstName}
						onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
						isInvalid={formError.firstName !== ""}
						errorMessage={formError.firstName}
					/>
					<div className="self-end mt-5">
						<NHButton className="ml-2 text-sm" onClick={nextStep}>
							Next
						</NHButton>
					</div>
				</>);
			break;
		case 2:
			currentForm = (
				<>
					<Input
						type="text"
						label="Last Name"
						size="md"
						value={formData.lastName}
						onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
						isInvalid={formError.lastName !== ""}
						errorMessage={formError.lastName}
					/>
					<div className="self-end mt-5">
						<NHButton className="ml-2 text-sm" onClick={prevStep}>
							Back
						</NHButton>
						<NHButton className="ml-2 text-sm" onClick={nextStep}>
							Next
						</NHButton>
					</div>
				</>);
			break;
		case 3:
			currentForm = (
				<>
					<Input
						type="text"
						label="Fullerton ID"
						size="md"
						value={formData.fid}
						onChange={(e) => setFormData({ ...formData, fid: e.target.value })}
						isInvalid={formError.fid !== ""}
						errorMessage={formError.fid}
					/>
					<div className="self-end mt-5">
						<NHButton className="ml-2 text-sm" onClick={prevStep}>
							Back
						</NHButton>
						<NHButton className="ml-2 text-sm" onClick={nextStep}>
							Next
						</NHButton>
					</div>
				</>);
			break;
		case 4:
			currentForm = (
				<>
					<Input
						type="email"
						label="Email"
						size="md"
						value={formData.email}
						onChange={(e) => setFormData({ ...formData, email: e.target.value })}
						isInvalid={formError.email !== ""}
						errorMessage={formError.email}
					/>
					<div className="self-end mt-5">
						<NHButton className="ml-2 text-sm" onClick={prevStep}>
							Back
						</NHButton>
						<NHButton className="ml-2 text-sm" onClick={nextStep}>
							Join
						</NHButton>
					</div>
				</>);
			break;
	}

	if (state.succeeded) {
		return (
			<div className="flex flex-col justify-center h-full w-2/5 mx-auto items-center">
				<div className="flex justify-between w-full">
					<Link
						className="tracking-wider text-4xl block font-sans font-thin text-foreground leading-none text-left mb-6"
						href="/about"
						title="logo"
					>
						NEURAL<br />HACK
					</Link>
					<div />
				</div>
				<div className="flex justify-between w-full">
					<div className="text-3xl text-foreground font-light justify-start">
						SPRING 2024
					</div>
					<div className="flex flex-col  w-3/5">
						<div className="text-2xl text-foreground font-light justify-start mb-5">
							Thanks for signing up!
						</div>
						<p className="text-lg text-foreground mb-20 font-normal">
							In the meantime you should join our <Link href="https://discord.com/invite/w2muvB7tBb" target="_blank" rel="noopener noreferrer"> Discord</Link>.
							You should be redirected in 5 seconds if nothing happens you can click on our logo to return back to the homepage.
						</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col justify-center h-full w-full md:w-3/5 mx-auto items-center px-4">
			<div className="flex justify-between w-full">
				<Link
					className="tracking-wider text-4xl md:text-3xl block font-sans font-thin text-foreground leading-none text-left mb-6"
					href="/about"
					title="logo"
				>
					DEEP LEARNING<br />CLUB
				</Link>
				<div />
			</div>
			<div className="flex flex-col md:flex-row justify-between w-full">
				<div className="text-3xl md:text-2xl text-foreground font-light mb-8 md:mb-0">
					FALL 2024
				</div>
				<div className="flex flex-col justify-end w-full md:w-2/5">
					{currentForm}
				</div>
			</div>
		</div>
	);
}
