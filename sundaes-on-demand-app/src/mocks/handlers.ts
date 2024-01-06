import { HttpResponse, http } from "msw";
import API from "../constants/api";
import { IScoop } from "../@types/models";

const handlers = [
  http.get(API.API_ROUTE + API.SCOOPS_ENDPOINT, () =>
    HttpResponse.json<IScoop[]>([
      { name: "Chocolate", imagePath: "/images/chocolate.png", price: 2 },
      { name: "Vanilla", imagePath: "/images/vanilla.png", price: 2 },
    ])
  ),
  http.get(API.API_ROUTE + API.TOPPINGS_ENDPOINT, () => {
    HttpResponse.json([
      { name: "Cherries", imagePath: "/images/cherries.png", price: 1.5 },
      { name: "M&Ms", imagePath: "/images/m-and-ms.png", price: 1.5 },
      { name: "Hot fudge", imagePath: "/images/hot-fudge.png", price: 1.5 },
    ]);
  }),
];

export default handlers;
