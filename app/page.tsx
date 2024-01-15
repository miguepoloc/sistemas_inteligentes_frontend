import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 className={title()}>Sistemas&nbsp;</h1>
                <h1 className={title({ color: "violet" })}>
                    Inteligentes&nbsp;
                </h1>
                <br />
                <h1 className={title()}>
                    Datos de nodos sensores de la red de monitoreo de banano
                </h1>
                <h2 className={subtitle({ class: "mt-4" })}>GIDEAM</h2>
            </div>

            <div className="flex gap-3">
                <Link
                    isExternal
                    as={NextLink}
                    className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                    })}
                    href={siteConfig.links.frontend}
                >
                    <GithubIcon size={20} />
                    Frontend
                </Link>
                <Link
                    isExternal
                    as={NextLink}
                    className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                    })}
                    href={siteConfig.links.backend}
                >
                    <GithubIcon size={20} />
                    Backend
                </Link>
                <Link
                    isExternal
                    as={NextLink}
                    className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                    })}
                    href={siteConfig.links.sistema_crecimiento}
                >
                    <GithubIcon size={20} />
                    Sistema de Crecimiento
                </Link>
            </div>
        </section>
    );
}
