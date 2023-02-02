export interface UrlNamed {
  name: string,
  url: string
}

export interface Proyect {
  name: string,
  picture: string,
  description: string,
  repositories: Array<UrlNamed>,
  urls?: Array<UrlNamed>
}


const proyects: Array<Proyect> = [
  {
    name: "MyTineraries",
    picture: "https://i.postimg.cc/76Yfv0Wx/My-Tineraries.png",
    description: "First project with React in my MindHub course, where I collaborated with a partner to create an application without the use of extra libraries.",
    repositories: [
      { name: "front", url: "https://github.com/juanPedroGalarza/mytinerary-juandream" },
      { name: "back", url: "https://github.com/IbanezAndrea/mytinerary-back-juandream" },
      { name: "native", url: "https://github.com/IbanezAndrea/myTinerary-juandream-mobile" }
    ],
    urls: [
      { name: "web page", url: "https://my-tinerary-juandream.web.app" },
      { name: "backend server", url: "https://my-tinerary-back-juandream.onrender.com" },
    ]
  },
  {
    name: "LS-Food-Co",
    picture: "https://i.postimg.cc/Dw55KcQW/LS-Food-Co.jpg",
    description: "Last challenge in MindHub where work in a team of 5, to design and create an original idea for a business email in no time",
    repositories: [
      { name: "front", url: "https://github.com/alemartinn/LS-Ecommerce-Front" },
      { name: "back", url: "https://github.com/IbanezAndrea/LS-Ecommerce-back" },
      { name: "native", url: "https://github.com/elviog1/LS-FoodCo-Native" }
    ],
    urls: [
      { name: "web page", url: "https://lsfoodco.web.app/" },
      { name: "backend server", url: "https://ls-food-co-back.onrender.com" },
    ]
  },
  {
    name: "Rituals-Game",
    picture: "https://i.postimg.cc/y8gkzYX9/rituals.png",
    description: "A text adventure with a deep story, the web is made with React & Redux-Toolkit",
    repositories: [
      { name: "Repository", url: "https://github.com/juanPedroGalarza/rituals" }
    ],
    urls: [
      { name: "web page", url: "https://rituals-game.web.app" }
    ]
  },
]

const proyectsData = {
  proyects
}
export default proyectsData