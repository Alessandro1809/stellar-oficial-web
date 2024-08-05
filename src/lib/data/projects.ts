import zarpe from "@assets/Zarpe.webp";
import chepena from "@assets/Chepena.webp";
import stellar from "@assets/StellarMock.webp";

export type Projects = {
    id: number,
    color: string,
    title: string,
    link: string, 
    services: string[],
    img: string
}


export const projects: Projects[] = [
    {   
        id: 1,
        color: 'rgba(255, 33, 87, 0.4)' ,
        title: "Zarpe Snacks",
        link:"https://zarpe.netlify.app/",
        services: ["web design", "branding", "SEO"],
        img: zarpe.src
    },
    {
        id: 2,
        color: 'rgba(233, 255, 113, 0.4)' ,
        title: "Chepeña Fonda",
        link:"/blog/2",
        services: ["Branding", "Design"],
        img: chepena.src
    },
    {
        id: 3,
        color: 'rgba(133, 112, 255, 0.4)' ,
        title: "Stellar",
        link:"https://stellarcr.net",
        services: ["web design", "SEO", "Marketing"],
        img: stellar.src
    },
   
]