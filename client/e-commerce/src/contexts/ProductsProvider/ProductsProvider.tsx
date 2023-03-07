import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { AnnouncementData } from "../AnnouncementProvider/AnnouncementProvide";

interface ProductsContextProviderProps {
    children: ReactNode;
  }

interface ProductsContextType {
    actListsVehicles: () => void;
    carsList: AnnouncementData[];
    motosList: AnnouncementData[];
    auctionsList: AnnouncementData[];
    actualPage: string;
    setActualPage: React.Dispatch<React.SetStateAction<string>>
  }

export const ProductsContext = createContext<ProductsContextType>(
    {} as ProductsContextType
  );


export const ProductsContextProvider = ({children}: ProductsContextProviderProps) => {
    const [carsList, setCarsList] = useState<AnnouncementData[]>([] as AnnouncementData[]);
    const [motosList, setMotosList] = useState<AnnouncementData[]>([] as AnnouncementData[]);
    const [auctionsList, setAuctionsList] = useState<AnnouncementData[]>([] as AnnouncementData[]);
    const [ actualPage, setActualPage ] = useState('home')

    const actListsVehicles = async () => {
        api.get("/announcement")
            .then((res) => {
            setMotosList(
              res.data.filter(
                (moto: AnnouncementData) =>
                  moto.vehicle_type !== "Carro" 
                  && moto.type === "Venda"
              )
            );
            setCarsList(
              res.data.filter(
                (car: AnnouncementData) => car.vehicle_type === "Carro"
                && car.type === "Venda"
              )
            );
            setAuctionsList(
              res.data.filter(
                (car: AnnouncementData) => car.type !== 'Venda'
              )
            )
          })
          .catch((err) => console.log(err));
        }

    return (
        <ProductsContext.Provider value = {{
          carsList,
          motosList,
          actualPage,
          auctionsList,
          setActualPage,
          actListsVehicles,
        }}>
        {children}
        </ProductsContext.Provider>
    )


  }