import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
				<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
					<div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
						{children}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}