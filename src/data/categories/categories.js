import { faWineBottle, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoBagel from "../../assets/images/bagel.png";
import logoSalade from "../../assets/images/salade.png";
import logoVin from "../../assets/images/vin.png";
import logoBoissons from "../../assets/images/boissons.png";
const logoSmall = "20px";
export const categories = [
  {
    name: "Today's",
    // icon: <FontAwesomeIcon icon={faHashtag} size="2x" />,
    link: "/",
    slug: "today",
  },
  {
    name: "Salad's",
    title: "Les salades du potager",
    logo: logoSalade,

    // icon: <FontAwesomeIcon icon={faHashtag} size="2x" />,
    link: "/products/salades",
    slug: "salades",
  },
  {
    name: "Bagels",
    title: "Nos Bagels",
    logo: logoBagel,
    legend: "Tous nos pains sont artisanaux",
    // icon: <FontAwesomeIcon icon="bagel" size="2x" />,
    link: "/products/bagels",
    slug: "bagels",
    // subCategory: [
    //   { name: "Salades", slug: "salades" },
    //   { name: "Bagels", slug: "bagels" },
    // { name: "Pates", slug: "pates" },
    // {
    //   name: "Viandes & Burgers",
    //   slug: "viande",
    //   legend: "Accompagnements: Frites maison ou Pommes de terre au four",
    // },
    // ],
  },
  // {
  //   name: "Vitrine Salée",
  //   // icon: <FontAwesomeIcon icon={faSandwich} size="2x" />,
  //   link: "/products/la-vitrine-salee",
  //   slug: "la-vitrine-salee",
  //   subCategory: [
  //     { name: "Panini", slug: "panini" },
  //     { name: "Croques", slug: "croques" },
  //     { name: "Hot-dog", slug: "hotdog" },
  //     { name: "Bagels", slug: "bagels" },
  //   ],
  // },
  // {
  //   name: "Vitrine Sucrée",
  //   // icon: <FontAwesomeIcon icon={faCookie} size="2x" />,
  //   link: "/products/la-vitrine-sucree",
  //   slug: "la-vitrine-sucree",
  // },
  {
    name: "Boissons Fraiches",
    logo: logoBoissons,
    // icon: <FontAwesomeIcon icon={fa} size="2x" />,
    link: "/products/le-froid",
    slug: "le-froid",
    subCategory: [
      { name: "Eaux", slug: "eaux" },
      { name: "Softs", slug: "softs" },
      { name: "Bières", slug: "bieres" },
      // { name: "Fruits Frais Préssés", slug: "fruits-frais" },
      // { name: "Granita", slug: "granita" },
      // { name: "Vins", slug: "vins" },
    ],
  },
  {
    name: "Boissons Chaudes",
    icon: <FontAwesomeIcon icon={faCoffee} size="1x" />,
    link: "/products/le-chaud",
    slug: "le-chaud",
    // subCategory: [
    //   { name: "Eaux", slug: "eaux" },
    //   { name: "Softs", slug: "softs" },
    //   { name: "Bières", slug: "bieres" },
    //   // { name: "Fruits Frais Préssés", slug: "fruits-frais" },
    //   // { name: "Granita", slug: "granita" },
    //   // { name: "Vins", slug: "vins" },
    // ],
  },
  {
    name: "La Cave",
    logo: logoVin,
    link: "/products/le-vin",
    slug: "le-vin",
  },
];
