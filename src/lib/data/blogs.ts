import zarpe from "@assets/Zarpe.webp";
import chepena from "@assets/Chepena.webp";
import stellar from "@assets/StellarMock.webp";
import Menu from '@assets/Menu.pdf'
   export interface Blogs {
        id: number
        title: string
        description: string
        link: string,
        instagram?:string,
        Youtube?: string,
        Facebook?: string,
        post: string
        img: string
    }


    export const Articles:Blogs[] = [
        {   
            "id": 1,
            "title": "Zarpe Snacks",
            "description": "Zarpe is a website dedicated to Zarpe Snacks, featuring information about their range of healthy snacks. The site provides details about their products, ingredients, and benefits, emphasizing natural and nutritious options. The design is clean and visually appealing, focusing on promoting the brand's commitment to health and quality. For more information, you can visit ",
            "link": "https://zarpe.netlify.app/",
            "post":"Recently Stellar had the opportunity to collaborate with Zarpe snacks, a high quality Catering service located in El Coco, Guanacaste Costa Rica, carrying out its official website through the use of the best bookstores and fully adjusted to the client, a success for Stellar, a happy customer. Our plan when contacting our clients and the fact that we are committed to providing weekly progress on the project we undertake helped us maintain the client's peace of mind and confidence.Remember that a job well done is one in which transparency is maintained as much as possible, a clear characteristic of our company.",
            "img": zarpe.src
        },
        {
            "id": 2,
            "title": "Chepeña Fonda",
            "description": "La Chepeña is a soda shop that has been operating since 2023, dedicated to offering a variety of carefully crafted menus. Their website highlights the different dishes available, showcasing their commitment to quality and customer satisfaction. The site is attractively designed and easy to navigate, providing all the necessary information about the menus and the shop's history. Look at the menu",
            "link":Menu,
            "post":"Don't neglect your company's marketing! It is a rule and reality that we have very present at Stellar, La Chepeña is a restaurant with the best flavor in Playas del Coco, Guanacaste Costa Rica. The brand's Banding was produced by Stellar, do you want to see it?",
            "img": chepena.src
        },
        {
            "id": 3,
            "title": "STELLAR",
            "description": "Curious about our news? In these profiles you will find the most recent updates and official works and products from Stellar you can follow. For more information, visit",
            "post":"If you want to know what we are doing right now and see our activity, we invite you to follow us on our networks and keep up to date with the projects and different services that Stellar maintains. If you have any questions, remember that you can contact us and we will respond as soon as possible, we will be happy to discuss a proposal, clarify your doubts or simply chat",
            "link":"https://stellarcr.net",
            "instagram": "",
            "Youtube": "",
            "Facebook": "",
            "img": stellar.src
        }
    ]