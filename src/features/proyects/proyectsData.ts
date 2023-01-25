interface UrlNamed {
  name: string,
  url: string
}

export interface Proyect {
  name: string,
  picture: string,
  description: string,
  repositories: Array<UrlNamed>,
  urls: Array<UrlNamed>
}

const proyectExample: Proyect = {
  name: "MyTineraries",
  picture: "https://i.postimg.cc/76Yfv0Wx/My-Tineraries.png",
  description: "askljqwnm,sdnfapsdpcjna dasdapslmasop pasdpas dasd pasdsja opac adp as cla jqwpojefjaspd asj px a p jsdásj jkc jkfofhqwosdl l  igopasjf sfj fpsdfg ash eropj dfñas sdad.",
  repositories: [
    { name: "front", url: "https://github.com/juanPedroGalarza/mytinerary-juandream" },
    { name: "back", url: "https://github.com/IbanezAndrea/mytinerary-back-juandream" },
    { name: "native", url: "https://github.com/IbanezAndrea/myTinerary-juandream-mobile" }
    ,
  ],
  urls: [
    { name: "web page", url: "https://my-tinerary-juandream.web.app" },
    { name: "backend server", url: "https://my-tinerary-back-juandream.onrender.com" },
  ]
}

const proyects: Array<Proyect> = [
  proyectExample,
  proyectExample,
  proyectExample,
  proyectExample,
  proyectExample,
  proyectExample,
]

const proyectsData = {
  proyects
}
export default proyectsData