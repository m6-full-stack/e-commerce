import React, { createContext, ReactNode, useState } from "react";
import { api } from "../../services/api";
import { CommentDataRecive } from "../CommentProvider/CommentProvider";

interface AnnouncementContextProviderProps {
  children: ReactNode;
}

interface ImageData {
  id: string;
  image_url: string;
}

interface AnnouncementData {
  createdAt: string;
  id: string;
  type: string;
  title: string;
  year: string;
  mileage: string;
  price: string;
  description: string;
  vehicle_type: string;
  cover_image: string;
  is_sold: boolean;
  advertiserId: string;
  comments: CommentDataRecive[];
  images_list: ImageData[];
}

interface AnnouncementContextType {
  getRetriveAnnouncement: (id: string) => void;
  announcementInfo: AnnouncementData;
  setAnnouncementInfo: React.Dispatch<React.SetStateAction<AnnouncementData>>;
}

export const AnnouncementContext = createContext<AnnouncementContextType>(
  {} as AnnouncementContextType
);

export function AnnouncementContextProvider({
  children,
}: AnnouncementContextProviderProps) {
  const [announcementInfo, setAnnouncementInfo] = useState<AnnouncementData>({
  } as AnnouncementData);

  const token = () => {
    const token = localStorage.getItem("@MOTORS-TOKEN");
    return token 
  };

  const getRetriveAnnouncement = (id: string) => {
    api
      .get(`/announcement/${id}`, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then(res => {
        setAnnouncementInfo(res.data);
        console.log(announcementInfo);
      })
      .catch(err => console.log(err));
  };

  return (
    <AnnouncementContext.Provider
      value={{ getRetriveAnnouncement, announcementInfo, setAnnouncementInfo }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
}
