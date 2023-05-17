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
];
