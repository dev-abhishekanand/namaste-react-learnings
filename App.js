import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="res-logo" />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home </li>
          <li>About Us </li>
          <li>Cart </li>
          <li>Contact Us </li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard = (props) => {
  const { resData } = props;
  return (
    <div className="rest-card">
      {resData?.map((res) => (
        <div key={res.id} className="res-card">
          <img className="res-logo" src={res.image} alt="res-logo" />
          <h3>{res.name}</h3>
          <p>{res.cuisine}</p>
          <p>rating: {res.rating}</p>
          <p>Cost of Two: {res.costForTwo}</p>
          <p>Delivery In: {res.deliveryTime}</p>
        </div>
      ))}
    </div>
  );
};

const resList = [
  {
    id: 1,
    name: "The Gourmet Kitchen",
    cuisine: "Italian",
    address: "123 Main Street, Pune",
    rating: 4.5,
    costForTwo: 800,
    deliveryTime: "30 mins",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Spice Symphony",
    cuisine: "Indian",
    address: "456 Spice Avenue, Mumbai",
    rating: 4.2,
    costForTwo: 600,
    deliveryTime: "25 mins",
    image:
      "https://media.istockphoto.com/id/2081769995/photo/holding-a-bowl-of-chicken-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yre-rIjuFTL4z2yyENSeYL2FaQRqcp9OrK9abyfzN0A=",
  },
  {
    id: 3,
    name: "Sushi Delight",
    cuisine: "Japanese",
    address: "789 Sushi Street, Delhi",
    rating: 4.7,
    costForTwo: 1200,
    deliveryTime: "40 mins",
    image:
      "https://media.istockphoto.com/id/2150137406/photo/healthy-and-well-balanced-group-of-food-for-heart-care.webp?a=1&b=1&s=612x612&w=0&k=20&c=MRwXe5eLAmEptw1Lh6Hr4vwd6MCKhMF6QBYSWUTfnZA=",
  },
  {
    id: 4,
    name: "Burger Haven",
    cuisine: "American",
    address: "321 Burger Lane, Bangalore",
    rating: 4.1,
    costForTwo: 500,
    deliveryTime: "20 mins",
    image:
      "https://media.istockphoto.com/id/1383238312/photo/holi-theme-shahi-mithai-gujia-or-gujiya-crispy-snacks-namkeen-also-called-nimki-mathri-matar.jpg?s=612x612&w=0&k=20&c=XuGwsxYsrzO-tkzvvA6nToJiZg2KDRkBUbsB0ie_25w=",
  },
  {
    id: 5,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    address: "654 Taco Blvd, Hyderabad",
    rating: 4.3,
    costForTwo: 700,
    deliveryTime: "35 mins",
    image:
      "https://media.istockphoto.com/id/924498372/photo/mix-spices-on-round-metal-plate-coriander-seeds-ground-red-pepper-salt-black-pepper-rosemary.jpg?s=612x612&w=0&k=20&c=-05E1kD0wHiPuppg5E_L2yBswe6kDpzko6gExMfDlb4=",
  },
  {
    id: 6,
    name: "Noodle Express",
    cuisine: "Chinese",
    address: "987 Noodle Road, Kolkata",
    rating: 4.4,
    costForTwo: 650,
    deliveryTime: "28 mins",
    image:
      "https://media.istockphoto.com/id/1358353520/photo/vegan-food-made-from-soybeans-a-typical-home-cooking-ingredient-in-japan.jpg?s=612x612&w=0&k=20&c=c8gzDl2CaO2INzKYrX8C3_sR7QUrdkbx4sqZJoKoYuY=",
  },
  {
    id: 7,
    name: "Royal Biryani House",
    cuisine: "Indian",
    address: "741 Biryani Street, Chennai",
    rating: 4.8,
    costForTwo: 900,
    deliveryTime: "45 mins",
    image:
      "https://media.istockphoto.com/id/1186685544/photo/indian-chicken-vindaloo-in-a-brass-wok-ready-to-be-served-on-a-grunge-metal-wood-and-gold.jpg?s=612x612&w=0&k=20&c=eO_d48VQuhOgedyQzFM48RcwqD7qmlJ6d_DfrhAjwkU=",
  },
  {
    id: 8,
    name: "Pasta Paradise",
    cuisine: "Italian",
    address: "852 Pasta Lane, Pune",
    rating: 4.0,
    costForTwo: 750,
    deliveryTime: "30 mins",
    image:
      "https://media.istockphoto.com/id/1263780468/photo/tasty-sabudana-khichadi-khichdi-is-an-indian-dish-made-from-soaked-sago-or%C2%A0tapioca-pearls.jpg?s=612x612&w=0&k=20&c=YSW1s1m81naEbYMXT2SwdHVKfsJ_rSZSkOasYwTSB3I=",
  },
  {
    id: 9,
    name: "The Vegan Bowl",
    cuisine: "Healthy",
    address: "963 Green Avenue, Bangalore",
    rating: 4.6,
    costForTwo: 850,
    deliveryTime: "32 mins",
    image:
      "https://media.istockphoto.com/id/1299079243/photo/food-for-healthy-brain.jpg?s=612x612&w=0&k=20&c=nEYOuCgPDUf5ftWUBB5Y61ZuqzRy3QJJ0QoI-j7tjUY=",
  },
  {
    id: 10,
    name: "BBQ Smokehouse",
    cuisine: "Barbecue",
    address: "159 Grill Street, Hyderabad",
    rating: 4.3,
    costForTwo: 1100,
    deliveryTime: "38 mins",
    image:
      "https://media.istockphoto.com/id/1341976416/photo/healthy-eating-and-diet-concepts-top-view-of-spring-salad-shot-from-above-on-rustic-wood-table.jpg?s=612x612&w=0&k=20&c=W5KTFYX-XpIioWdMwcb2ESGZGyolLSCd9vbNUxpZiQE=",
  },
  {
    id: 11,
    name: "Seafood Delight",
    cuisine: "Seafood",
    address: "753 Ocean Drive, Chennai",
    rating: 4.7,
    costForTwo: 1300,
    deliveryTime: "42 mins",
    image:
      "https://media.istockphoto.com/id/1147252758/photo/healthy-vegetarian-food-background-vegetables-pesto-and-lentil-curry-with-tofu.jpg?s=612x612&w=0&k=20&c=tfLYLtT-f_I-tnmOdb_6WHRhIQa8jXy7SkFakC-P-LU=",
  },
  {
    id: 12,
    name: "Dosa Junction",
    cuisine: "South Indian",
    address: "258 Dosa Street, Bangalore",
    rating: 4.5,
    costForTwo: 400,
    deliveryTime: "22 mins",
    image:
      "https://media.istockphoto.com/id/1857249002/photo/healthy-vegetarian-falafel-balls.jpg?s=612x612&w=0&k=20&c=Ryyz6PQaG-oDl86qRVyfJ19gN-_UadCoa6jEx5wtgjI=",
  },
  {
    id: 13,
    name: "Peking Palace",
    cuisine: "Chinese",
    address: "369 Dragon Lane, Mumbai",
    rating: 4.2,
    costForTwo: 750,
    deliveryTime: "29 mins",
    image:
      "https://media.istockphoto.com/id/1250288824/photo/moong-dal-vada-or-pakoda-or-fritters-or-moong-dal-bhajiya.jpg?s=612x612&w=0&k=20&c=Tl6WJi17VCpVyUZcpBDtK--eYYX7z-KmncYRk_nZcAI=",
  },
  {
    id: 14,
    name: "Mughlai Majesty",
    cuisine: "Mughlai",
    address: "147 Royal Road, Delhi",
    rating: 4.9,
    costForTwo: 1000,
    deliveryTime: "50 mins",
    image:
      "https://media.istockphoto.com/id/1316914951/photo/satvik-food.jpg?s=612x612&w=0&k=20&c=mIYHIAXHcZHsXHTtElCWlI41JKommX0sdtOBMgYa_HM=",
  },
  {
    id: 15,
    name: "Chaat Corner",
    cuisine: "Street Food",
    address: "852 Chaat Chowk, Kolkata",
    rating: 4.0,
    costForTwo: 300,
    deliveryTime: "15 mins",
    image:
      "https://media.istockphoto.com/id/855894476/photo/pilaf-rice-with-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=U4XShbSRM7DA-TdaeZzIPVkCwI3GEE0A81zvBthVJGw=",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search..." className="searchInput" />
      </div>
      <div className="res-container">
        <RestrauntCard resData={resList} />
      </div>
    </div>
  );
};
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
