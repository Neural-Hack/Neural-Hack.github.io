import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{children}
		</>
	);
}
