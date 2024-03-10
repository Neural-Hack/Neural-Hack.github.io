import Link from "next/link"
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import type { NextraThemeLayoutProps, PageMapItem } from 'nextra'
import { Navbar } from "./components/navbar";
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import clsx from "clsx";
import { Providers } from "./app/providers";
import { Footer } from "./components/footer";

interface SMeta {
    [fileName: string]: any;
}


export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/icon.png",
        apple: "/icon.png",
    },
};

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
    const { pageMap } = pageOpts;
    
    const traverseItem = (item: SMeta): JSX.Element => {
        return (
            <Link key={item["title"]} href={item["href"]}>
                {item["title"]}
            </Link>
        )
    }

    const traverseMeta = (me: PageMapItem): JSX.Element => {
        let out = [] as JSX.Element[];
        if (me.kind === "Meta") {
            Object.keys(me.data).forEach((key) => {
                const metaItem = me.data[key] as SMeta;
                let pages = [] as JSX.Element[];

                Object.keys(metaItem["items"]).forEach((key) => {
                    pages.push(traverseItem((metaItem["items"] as SMeta)[key]))
                });

                out.push(
                    <AccordionItem key={key} title={metaItem["title"]}>
                        <div className="flex flex-col">
                        {pages.flatMap(item => item)}
                        </div>  
                    </AccordionItem>
                );
            });
        }

        return <Accordion>{out}</Accordion>;
    }

    const firstEntry = pageMap[0].kind === 'Folder' ? pageMap[0].children : ({} as PageMapItem[]);
    const meta = firstEntry.find(item => item.kind === "Meta") as PageMapItem;

    return (
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col h-screen">
                <div>
                    <Navbar />
                    {traverseMeta(meta)}
                    <div style={{ border: '1px solid' }}>{children}</div>
                    <Footer/>
                </div>
            </div>
        </Providers>
    )

}