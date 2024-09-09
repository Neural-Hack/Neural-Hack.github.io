import NHButton from "@/components/button";

export default function DocsPage() {
	return (
		<div className="flex flex-col justify-center">
			<div className="flex flex-col items-center justify-center bg-background lg:w-1/2 w-11/12 max-w-2xl self-center">
				<div>
					<div className="text-2xl text-foreground font-heavy mt-0 mb-1">
						Interested?
					</div>
					<div className="text-2xl text-foreground font-light mt-1 mb-5">
						Currently enrolled at Fullerton College?
					</div>
					<p className="text-lg text-foreground mb-5 font-normal border-l-2 border-foreground pl-4">
						Please fill out this brief form by clicking apply. Keep in mind we cater to any level of experience but we value persistance and interest as the workload may be rigorous.
					</p>
					<NHButton className="flex justify-center" href="/apply">
						Apply
					</NHButton>
					<div className="text-2xl text-foreground font-light mt-1 mb-5">
						Not enrolled but still intersted?
					</div>
					<p className="text-lg text-foreground mb-20 font-normal border-l-2 border-foreground pl-4">
						Don&apos;t worry! You can still contribute to our public Git repository or contact us through our email for any other inquires.
					</p>
					<div className="text-2xl text-foreground font-heavy mt-11 mb-5">
						Contact Us
					</div>
					<p className="text-lg text-foreground mb-20 font-normal border-l-2 border-foreground pl-4">
						We are available through Github or you can directly email us. Our Github and email are available at the bottom of any page.
					</p>
				</div>
			</div>
		</div>
	);
}
