export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "GIDEAM",
    description:
        "Identificación de enfermedades en plantas mediante el uso de sistemas inteligentes",
    navItems: [
        {
            label: "Inicio",
            href: "/",
        },
        {
            label: "Nodos",
            href: "/nodes",
        },
        {
            label: "Visitantes",
            href: "/visitor",
        },
        {
            label: "Documentación",
            href: "/docs",
        },
    ],
    navMenuItems: [
        {
            label: "Inicio",
            href: "/",
        },
        {
            label: "Nodos",
            href: "/nodes",
        },
        {
            label: "Visitantes",
            href: "/visitor",
        },
        {
            label: "Documentación",
            href: "/docs",
        },
    ],
    links: {
        backend: "https://github.com/miguepoloc/sistemas_inteligentes_backend",
        frontend:
            "https://github.com/miguepoloc/sistemas_inteligentes_frontend",
        sistema_crecimiento:
            "https://github.com/miguepoloc/sistema_crecimiento",
    },
};
