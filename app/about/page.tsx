import NHButton from "../../components/button";

export default function AboutPage() {
	return (
		<div className="flex flex-col justify-center">
			<div className="flex flex-col items-center justify-center mt-10 mb-20 bg-background space-y-5">
				<p className="text-foreground text-4xl font-light font-montserrat tracking-widest">
					NEURAL HACK
				</p>
				<p className="text-foreground text-2xl mt-5 font-montserrat font-light">
					FALL 2024
				</p>
				<NHButton className="text-sm" href="/contribute">
					Join Us
				</NHButton>
			</div>
			<div className="flex flex-col items-center justify-center bg-background lg:w-1/2 w-11/12 max-w-2xl self-center">
				<div>
					<div className="text-2xl text-foreground font-light mt-11 mb-5">
						What is Neural Hack?
					</div>
					<p className="text-lg text-foreground mb-20 font-normal border-l-2 border-foreground pl-4">
						Neural Hack is an upcoming club at Fullerton College for students who are interested in machine learning and artificial intelligence. Catered to a diverse range of students, our club offers a space for all individuals interested in the world of data science.
					</p>
				</div>
				<div>
					<div className="text-2xl text-foreground font-light mt-11 mb-5">
						What is our goal?
					</div>
					<p className="text-lg text-foreground mb-20 font-normal border-l-2 border-foreground pl-4">
						We cater to a diverse range of students, including those without prior experience in machine learning. Our goal is to introduce students to the vast field of data science through workshops, research, and other activities.
					</p>
				</div>
				<div>
					<div className="text-2xl text-foreground font-light mt-11 mb-5">
						What will I gain by joining?
					</div>
					<p className="text-lg text-foreground mb-20 font-normal border-l-2 border-foreground pl-4">
					By joining us at Neural Hack, you will have the opportunity to gain valuable insight and experience on the rapidly growing industry that is machine learning. Whether that being through engaging in beginner-friendly bootcamps or attending club meetings, our club will be your gateway to exploring this thrilling, dynamic field.
					</p>
				</div>
				<div>
					<div className="text-2xl text-foreground font-light mt-11 mb-5">
						How can I participate?
					</div>
					<p className="text-lg text-foreground mb-20 font-normal border-l-2 border-foreground pl-4">
					Any currently enrolled students at Fullerton College are eligible to join regardless of prior experience. If you are not enrolled but are still interested in contributing feel free to email or just participate through Github.
					</p>
				</div>
			</div>
		</div>
	);
}
