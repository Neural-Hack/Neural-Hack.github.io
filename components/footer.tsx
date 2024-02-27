import { Link } from "@nextui-org/link";

export const Footer = () => {
    return (
        <footer className="w-full flex items-center justify-center py-3 border-t-1 flex-col gap-3">
            <div className="flex justify-center">
                <Link
                    className="tracking-wider text-2xl block font-sans font-thin mb-1 mt-1 text-foreground leading-none text-center"
                    href="/about"
                    title="logo"
                >
                    NEURAL<br/>HACK
                </Link>
            </div>
            <div className="flex flex-row gap-4">
                <Link
                    isExternal
                    className="font-bold text-current"
                    href="https://github.com/Neural-Hack/"
                    target="_blank" rel="noopener noreferrer"
                    title="github"
                >
                    <p className="">
                        Github
                    </p>
                </Link>
                <Link
                    isExternal
                    className="font-bold text-current"
                    href="https://discord.com/invite/w2muvB7tBb"
                    target="_blank" rel="noopener noreferrer"
                    title="discord"
                >
                    <p className="">
                        Discord
                    </p>
                </Link>
                <Link
                    isExternal
                    className="font-bold text-current"
                    href="mailto:neuralhackfc@gmail.com"
                    title="email"
                >
                    <p className="">
                        Email
                    </p>
                </Link>
            </div>
            <p className="text-center">@2024 NeuralHack</p>
        </footer>
    );
}

/*
<Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
            >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
            </Link>
*/