import React, { useState, useEffect } from "react";
import House from "../components/House";
import axios from "axios";

const Relestate = () => {
  const [housePlans, setHousePlans] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://portiaportia.github.io/json/house-plans.json"
      );
      setHousePlans(response.data);
    })();
  }, []);

  return (
    <div>
      <h2>House List</h2>

      {housePlans.map((housePlan) => {
        return (
          <House
            key={housePlan.name}
            name={housePlan.name}
            size={housePlan.size}
            main_image={housePlan.main_image}
            bedrooms={housePlan.bedrooms}
            bathrooms={housePlan.bathrooms}
            features={housePlan.features}
          />
        );
      })}
    </div>
  );
};

export default Relestate;
