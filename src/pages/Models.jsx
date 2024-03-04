import React, { useEffect, useState } from "react";
import ModelHero from "../components/ModelHero";
import VehicleModels from "../components/VehicleModels";
import Booking from "../components/Booking";
import axios from "axios";
import SuccessPopup from "../components/ui/SuccessPopup";

const Models = () => {
  const [carModels, setcarModels] = useState([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  //fetch data from backend API
  async function fetchdata() {
    const { data } = await axios.get(
      "https://car-rental-api.up.railway.app/car"
    );
    const models = data.data;
    setcarModels(models);
  }
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <SuccessPopup successOpen = {successOpen} />
      <Booking
        carModels={carModels}
        bookingOpen={bookingOpen}
        setBookingOpen={setBookingOpen}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        setSuccessOpen={setSuccessOpen}
      />
      <ModelHero />
      <VehicleModels
        carModels={carModels}
        setcarModels={setcarModels}
        setBookingOpen={setBookingOpen}
        setSelectedModel={setSelectedModel}
      />
    </>
  );
};

export default Models;
