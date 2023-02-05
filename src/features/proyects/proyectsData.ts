export interface UrlNamed {
  name: string,
  url: string
};

export interface Proyect {
  name: string,
  picture?: string,
  description: string | string[],
  repositories: Array<UrlNamed>,
  urls?: Array<UrlNamed>
};


const proyects: Array<Proyect> = [
  {
    name: "Portfolio",
    description: ["My Portfolio made with React, TypeScript, Redux Toolkit & Material ui."," Here is also a list of my projects, this is updated every time I finish one"],
    picture: "https://i.postimg.cc/xCWRS82S/Portfolio.png",
    repositories: [
      { name: "Repository", url: "https://github.com/juanPedroGalarza/portfolio-react" }
    ],
    urls: [
      { name: "Web Site", url: "https://juan-pedro-galarza.web.app/" }
    ],
  },
  {
    name: "Rituals-Game",
    picture: "https://i.postimg.cc/y8gkzYX9/rituals.png",
    description: "An interactive text adventure with a deep story, the web is made with React & Redux-Toolkit.",
    repositories: [
      { name: "Repository", url: "https://github.com/juanPedroGalarza/rituals" }
    ],
    urls: [
      { name: "Web page", url: "https://rituals-game.web.app" }
    ]
  },
  {
    name: "LS-Food-Co",
    picture: "https://i.postimg.cc/Dw55KcQW/LS-Food-Co.jpg",
    description: "Final challenge in MindHub where work in a team of 5, to design and create an original idea in a short time.",
    repositories: [
      { name: "Front", url: "https://github.com/alemartinn/LS-Ecommerce-Front" },
      { name: "Back", url: "https://github.com/IbanezAndrea/LS-Ecommerce-back" },
      { name: "Native", url: "https://github.com/elviog1/LS-FoodCo-Native" }
    ],
    urls: [
      { name: "Beb page", url: "https://lsfoodco.web.app/" },
      { name: "Backend server", url: "https://ls-food-co-back.onrender.com" },
    ]
  },
  {
    name: "MyTineraries",
    picture: "https://i.postimg.cc/76Yfv0Wx/My-Tineraries.png",
    description: "First project with React in the MindHub bootcamp, where I collaborated with a partner to create an application without the use of extra libraries.",
    repositories: [
      { name: "Front", url: "https://github.com/juanPedroGalarza/mytinerary-juandream" },
      { name: "Back", url: "https://github.com/IbanezAndrea/mytinerary-back-juandream" },
      { name: "Native", url: "https://github.com/IbanezAndrea/myTinerary-juandream-mobile" }
    ],
    urls: [
      { name: "Web page", url: "https://my-tinerary-juandream.web.app" },
      { name: "Backend server", url: "https://my-tinerary-back-juandream.onrender.com" },
    ]
  },
  {
    name: "Petshop-MINDY",
    description: "Lead a petshop project to be done in two weeks. We only use HTML, CSS, Javascript and Bootstrap",
    repositories: [
      { name: "Repository", url: "https://github.com/juanPedroGalarza/PetShop-MINDY" }
    ]
  },
  {
    name: "Amazing-Events",
    description: "Created a pure JavaScript simple site, it is my first completed project.",
    repositories: [
      { name: "Repository", url: "https://github.com/juanPedroGalarza/amazing-events" }
    ]
  }
];

const proyectsData = {
  proyects
};
export default proyectsData;