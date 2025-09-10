import { fetchGetCarData } from "../../api/getCars";
import { CarModel } from "./props";

//fazer uma solicitação pra api
export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    //implemento regras de negocio
    const data = await fetchGetCarData(id);
    setCarData(data);
  } catch (error) {
    console.error("Erro ao buscar dados da api:", error);
    setCarData(null);
  }
};

export const handlePreviousItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  if (carData && carData.id > 1) {
    const data = await fetchGetCarData(carData.id - 1);
    setCarData(data);
  }
};

export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  if (carData && carData.id < 10) {
    const data = await fetchGetCarData(carData.id + 1);
    setCarData(data);
  }
};