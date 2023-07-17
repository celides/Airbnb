import React from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import Rental from "./Rental";

const Rentals = () => {
  const rentals = [
    { title: "Alabama,  USA", image: house1, price: "3,999" },
    { title: "California, USA", image: house2, price: "2,541" },
    { title: "Arkansas, USA", image: house3, price: "5,541" },
    { title: "Colorado, USA", image: house4, price: "1,965" },
    { title: "Florida, USA", image: house5, price: "1,634" },
    { title: "Idaho, USA", image: house1, price: "2,157" },
    { title: "Hawái, USA", image: house2, price: "3,864" },
    { title: "Illinois, USA", image: house3, price: "8,981" },
    { title: "Iowa, USA", image: house4, price: "1,359" },
    { title: "Kansas, USA", image: house5, price: "8,991" },
    { title: "Kentucky, USA", image: house1, price: "1,248" },
    { title: "Luisiana, USA", image: house2, price: "1,342" },
    { title: "Maine, USA", image: house3, price: "1,189" },
    { title: "Maryland, USA", image: house4, price: "3,985" },
    { title: "	Maryland, USA", image: house5, price: "2,658" },
  ];
  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {rentals.map((rental) => (
          <Rental
            title={rental.title}
            image={rental.image}
            price={rental.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;
