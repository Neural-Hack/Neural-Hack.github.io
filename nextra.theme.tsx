import Link from "next/link"
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import type { NextraThemeLayoutProps, PageMapItem } from 'nextra'
import { Navbar } from "./components/navbar";
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Item, normalizePages } from 'nextra/normalize-pages'
import { Providers } from "./app/providers";
import { Footer } from "./components/footer";
import { useRouter } from "next/router";
import { ReactNode, useMemo } from "react";
import { AccordionItemIndicatorProps, Button } from "@nextui-org/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/modal";
import customComponents from './mdx-components';
import { MDXProvider } from '@mdx-js/react';

/*
I PROMISE I WILL CLEAN THIS JUNK LATER.
*/

interface SMeta {
    [fileName: string]: any;
}

export function Bread({
    activePath
}: {
    activePath: Item[]
}): JSX.Element {
    const stripPath = activePath.filter(item => item.title !== "learn");

    return (
        <Breadcrumbs size="lg" isDisabled={false}>
            {stripPath.map((item) => (
                <BreadcrumbItem key={item.title}>
                    {item.title}
                </BreadcrumbItem>
            ))}
        </Breadcrumbs>
    );
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

export const ERROR_ROUTES = new Set(['/404', '/500'])

export const useFSRoute = () => {
    const { locale = "", asPath, route } = useRouter()

    return useMemo(() => {
        // because for the 404 route `asPath` will be redirected URL and `normalizePages` will never return correct pageItem
        const clientRoute = ERROR_ROUTES.has(route) ? route : asPath

        const { pathname } = new URL(clientRoute, "https://neural-hack.github.io")

        const cleanedPath = locale
            ? pathname.replace(new RegExp(`\\.${locale}(\\/|$)`), '$1')
            : pathname

        return (
            cleanedPath
                .replace(/\.html$/, '')
                .replace(/\/index(\/|$)/, '$1')
                .replace(/\/$/, '') || '/'
        )
    }, [asPath, locale, route])
}

const traverseItem = (item: SMeta): JSX.Element => {
    return (
        <Link key={item["title"]} href={item["href"]} className="ml-5 mb-2">
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
                        {pages}
                    </div>
                </AccordionItem>
            );
        });
    }

    return <Accordion className="" showDivider={false} selectionMode="multiple" defaultExpandedKeys={me.kind === "Meta" ? Object.keys(me.data) : []}>{out}</Accordion>;
}

const traverseMobile = (me: PageMapItem): JSX.Element => {
    let out = [] as JSX.Element[];
    if (me.kind === "Meta") {
        Object.keys(me.data).forEach((key) => {
            const metaItem = me.data[key] as SMeta;
            let pages = [] as JSX.Element[];

            Object.keys(metaItem["items"]).forEach((key) => {
                pages.push(traverseItem((metaItem["items"] as SMeta)[key]))
            });

            out.push(
                <div>
                    {metaItem["title"]}
                    <div className="flex flex-col m-2">
                        {pages}
                    </div>
                </div>
            );
        });
    }

    return <div className="mt-3">{out}</div>;
}

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
    const { pageMap, headings } = pageOpts;
    const { locale = "", defaultLocale } = useRouter()
    const fsPath = useFSRoute()
    const { activePath } = useMemo(() => normalizePages({ list: pageMap, locale, defaultLocale, route: fsPath }), [pageMap, locale, defaultLocale, fsPath])
    const firstEntry = pageMap[0].kind === 'Folder' ? pageMap[0].children : ({} as PageMapItem[]);
    const meta = firstEntry.find(item => item.kind === "Meta") as PageMapItem;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    console.log(headings)

    return (
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col min-h-screen">
                <Navbar />
                <div className="flex flex-1 flex-row self-center gap-4 max-w-screen-xl w-full p-2">
                    <div className="sticky top-4 w-1/3 hidden md:block overflow-auto max-h-screen">
                        <div className="fixed overflow-auto max-h-screen">
                            {traverseMeta(meta)}  
                        </div>
                    </div>
                    <div className="w-full">
                        <Button className="md:hidden flex w-full" variant="shadow" onPress={onOpen}>
                            {Bread({ activePath })}
                        </Button>
                        <div className="md:block hidden">
                            {Bread({ activePath })}
                        </div>
                        <div className="m-2">
                            <MDXProvider components={customComponents}>
                                {children}
                            </MDXProvider>
                        </div>
                    </div>
                </div>
                <Footer />
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" scrollBehavior="inside" placement="top-center" hideCloseButton={true}>
                    <ModalContent>
                        <ModalBody>
                            {traverseMobile(meta)}
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </div>
        </Providers>
    )

}