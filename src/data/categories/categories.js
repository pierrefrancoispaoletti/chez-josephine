import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoIlly from "../../assets/images/logo.png";
import LogoDomori from "../../assets/images/domori.jpg";
import LogoDomori2 from "../../assets/images/domori-logo2.png";
import LogoDamman from "../../assets/images/damman.png";
import { colors } from "../../_const";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

const logoSmall = "20px";
export const categories = [
  {
    name: "Suggestions",
    // icon: <FontAwesomeIcon icon={faHatChef} size="2x" />,
    link: "/",
    slug: "today",
  },
  {
    name: "La Carte",
    // icon: <FontAwesomeIcon icon="bagel" size="2x" />,
    link: "/products/la-carte",
    slug: "la-carte",
    subCategory: [
      { name: "Salades", slug: "salades" },
      { name: "Bagels", slug: "bagels" },
      // { name: "Pates", slug: "pates" },
      // {
      //   name: "Viandes & Burgers",
      //   slug: "viande",
      //   legend: "Accompagnements: Frites maison ou Pommes de terre au four",
      // },
    ],
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
    // icon: <FontAwesomeIcon icon={faGlass} size="2x" />,
    link: "/products/le-froid",
    slug: "le-froid",
    subCategory: [
      { name: "Eaux", slug: "eaux" },
      { name: "Softs", slug: "softs" },
      // { name: "Fruits Frais Préssés", slug: "fruits-frais" },
      // { name: "Granita", slug: "granita" },
      // { name: "Vins", slug: "vins" },
      { name: "Bières", slug: "bieres" },
    ],
  },
  {
    name: "Le Vin",
    // icon: <FontAwesomeIcon icon={faWineBottle} size="2x" />,
    link: "/products/le-vin",
    slug: "le-vin",
  },
  // {
  //   name: "Le Café",
  //   // icon: <FontAwesomeIcon icon={faCoffee} size="2x" />,
  //   link: "/products/le-cafe",
  //   logo: LogoIlly,
  //   alt: "Logo Illy",
  //   width: "50px",
  //   widthCategorySelector: "30px",
  //   slug: "le-cafe",
  //   subCategory: [
  //     {
  //       name: "Les Classiques",
  //       slug: "classiques",
  //       logo: LogoIlly,
  //       alt: "Logo Illy",
  //       width: logoSmall,
  //     },
  //     {
  //       name: "Les Spéciaux",
  //       slug: "spéciaux",
  //       logo: LogoIlly,
  //       alt: "Logo Illy",
  //       width: logoSmall,
  //     },
  //     {
  //       name: "Les Monoarabica",
  //       slug: "monoarabica",
  //       logo: LogoIlly,
  //       alt: "Logo Illy",
  //       width: logoSmall,
  //     },
  //     {
  //       name: "Les Recettes Froides",
  //       slug: "recettes-froides",
  //       logo: LogoIlly,
  //       alt: "Logo Illy",
  //       width: logoSmall,
  //     },
  //     {
  //       name: "IllyCrema",
  //       slug: "illy-crema",
  //       logo: LogoIlly,
  //       alt: "Logo Illy",
  //       width: logoSmall,
  //     },
  //   ],
  // },
  // {
  //   name: "Le Chocolat",
  //   icon: <FontAwesomeIcon icon={faMugHot} size="2x" />,
  //   logo: LogoDomori,
  //   logoAlt: LogoDomori2,
  //   alt: "Logo Domori",
  //   width: "60px",
  //   widthCategorySelector: "29px",
  //   style: { position: "relative", top: "5px", left: 0, right: 0 },
  //   legend: "Illy Caffè ne travaille qu'avec les chocolats Domori.",
  //   link: "/products/le-chocolat",
  //   slug: "le-chocolat",
  //   subCategory: [
  //     { name: "Les Classiques", slug: "classiques" },
  //     {
  //       name: "Les Domori",
  //       slug: "domori",
  //       logo: LogoDomori,
  //       alt: "Logo Illy",
  //       width: logoSmall,
  //     },
  //   ],
  // },
  // {
  //   name: "Thés et Infusions",
  //   logo: LogoDamman,
  //   alt: "Logo Damman",
  //   width: "100px",
  //   widthCategorySelector: "60px",
  //   style: { background: colors.main },
  //   legend:
  //     "Illy à une façon nouvelle et originale de vous surprendre, illy Caffè propose les thés Damann Frères. Importateur europées des meilleurs thés depuis 1692.",
  //   icon: <FontAwesomeIcon icon={faMugHot} size="2x" />,
  //   link: "/products/le-the",
  //   slug: "le-the",
  // },
];
