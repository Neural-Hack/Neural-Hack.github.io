import NHButton from "../components/button";

export default function Home() {
	return (
		<>
			<div className="flex flex-col sm:flex-row justify-between items-center w-full h-full sm:w-2/3 mx-auto">
				<ul className="list-none m-0 p-0 text-left sm:text-center flex flex-col items-center justify-start">
					<li className="font-thin font-montserrat text-foreground text-4xl sm:text-5xl md:text-6xl leading-normal sm:leading-normal md:leading-normal tracking-wider">
						NEURAL HACK
					</li>
					<li className="font-thin font-montserrat text-foreground text-2xl sm:text-3xl md:text-4xl leading-snug sm:leading-snug md:leading-snug">
						SPRING 2024
					</li>
				</ul>
				<NHButton className="justify-end" href="/about">
					About
				</NHButton>
			</div>
		</>
	);
}
