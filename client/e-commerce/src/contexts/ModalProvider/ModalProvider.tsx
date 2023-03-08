import { AxiosResponse } from "axios";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import {
  UpdateAddresData,
  UpdateProfileData,
} from "../../interfaces/LoginInterface";
import { api } from "../../services/api";
import { CommentDataRecive } from "../CommentProvider/CommentProvider";

interface ModalContextType {
  isModelCreate: boolean;
  isModelEdit: boolean;
  isModelEditAddress: boolean;
  isModelEditAnnouncement: boolean;
  isModelDelete: boolean;
  isModelPhoto: boolean;
  isModelEditComment: boolean;
  isModelDeleteComment: boolean;
  isModalLoginNecessary: boolean,

  announcementType: string;
  typeOfVehicle: string;
  photoInfo: string;
  commentInfo: CommentDataRecive;

  setIsModelCreate: Dispatch<SetStateAction<boolean>>;
  setIsModelEdit: Dispatch<SetStateAction<boolean>>;
  setIsModelEditAddress: Dispatch<SetStateAction<boolean>>;
  setIsModelEditAnnouncement: Dispatch<SetStateAction<boolean>>;
  setIsModelDelete: Dispatch<SetStateAction<boolean>>;
  setAnnouncementType: Dispatch<SetStateAction<string>>;
  setTypeOfVehicle: Dispatch<SetStateAction<string>>;
  setIsModelPhoto: Dispatch<SetStateAction<boolean>>;
  setIsModelEditComment: Dispatch<SetStateAction<boolean>>;
  setIsModalLoginNecessary: Dispatch<SetStateAction<boolean>>;

  updateProfile: (data: UpdateProfileData) => void;
  updateAddress: (data: UpdateAddresData) => void;

  modalPhoto: (url: string) => void;
  modalComment: (content: CommentDataRecive) => void;
  modalDeleteComment: (id: string | undefined) => void;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalContext = createContext<ModalContextType>({
  isModelCreate: false,
  isModelEdit: false,
  isModelEditAddress: false,
  isModelEditAnnouncement: false,
  isModelDelete: false,
  isModalLoginNecessary: false,
  announcementType: "sale",
  typeOfVehicle: "car",
  isModelPhoto: false,
  photoInfo: "",
  isModelEditComment: false,
  commentInfo: {},
  isModelDeleteComment: false,

  setIsModelCreate: () => {},
  setIsModelEdit: () => {},
  setIsModelEditAddress: () => {},
  setIsModelEditAnnouncement: () => {},
  setIsModelDelete: () => {},
  setAnnouncementType: () => {},
  setTypeOfVehicle: () => {},
  setIsModelPhoto: () => {},
  setIsModelEditComment: () => {},
  setIsModalLoginNecessary: () => {},

  updateProfile: () => {},
  updateAddress: () => {},

  modalPhoto: () => {},
  modalComment: () => {},
  modalDeleteComment: () => {},
});

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModelCreate, setIsModelCreate] = useState(false);
  const [isModelEdit, setIsModelEdit] = useState(false);
  const [isModelEditAddress, setIsModelEditAddress] = useState(false);
  const [isModelEditAnnouncement, setIsModelEditAnnouncement] = useState(false);
  const [isModelDelete, setIsModelDelete] = useState(false);
  const [isModelPhoto, setIsModelPhoto] = useState(false);
  const [isModalLoginNecessary, setIsModalLoginNecessary] = useState(false);
  const [photoInfo, setPhotoInfo] = useState("");
  const [isModelEditComment, setIsModelEditComment] = useState(true);
  const [commentInfo, setCommentInfo] = useState<CommentDataRecive>(
    {} as CommentDataRecive
  );
  const [isModelDeleteComment, setIsModelDeleteComment] = useState(false);
  const [commentDeleteInfo, setCommentDeleteInfo] = useState<
    string | undefined
  >("");

  const [announcementType, setAnnouncementType] = useState("sale");
  const [typeOfVehicle, setTypeOfVehicle] = useState("car");

  const updateProfile = async (data: UpdateProfileData): Promise<void> => {
    const storedUserId = localStorage.getItem("@MOTORS-USER-ID");
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    try {
      const response: AxiosResponse = await api.patch(
        `users/${storedUserId}`,
        data,
        {
          headers,
        }
      );
      setIsModelEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updateAddress = async (data: UpdateAddresData): Promise<void> => {
    const storedUserId = localStorage.getItem("@MOTORS-USER-ID");
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    try {
      const response: AxiosResponse = await api.patch(
        `users/address/${storedUserId}`,
        data,
        {
          headers,
        }
      );
      console.log(storedUserId);
      setIsModelEdit(false);
      setIsModelEditAddress(false);
    } catch (error) {
      console.error(error);
    }
  };

  const modalPhoto = (url: string) => {
    setIsModelPhoto(true);
    setPhotoInfo(url);
  };

  const modalComment = (content: CommentDataRecive) => {
    setIsModelEditComment(true);
    setCommentInfo(content);
  };

  const modalDeleteComment = (id: string | undefined) => {
    setIsModelDeleteComment(true);
    setCommentDeleteInfo(id);
  };

  return (
    <ModalContext.Provider
      value={{
        isModelCreate,
        isModelEdit,
        isModelEditAddress,
        isModelEditAnnouncement,
        isModelDelete,
        isModelPhoto,
        isModelEditComment,
        isModelDeleteComment,
        isModalLoginNecessary,

        announcementType,
        typeOfVehicle,

        setIsModelCreate,
        setIsModelEdit,
        setIsModelEditAddress,
        setIsModelEditAnnouncement,
        setIsModelDelete,
        setAnnouncementType,
        setTypeOfVehicle,
        setIsModelPhoto,
        setIsModelEditComment,
        setIsModalLoginNecessary,

        updateProfile,
        updateAddress,
        photoInfo,
        modalPhoto,
        commentInfo,
        modalComment,
        modalDeleteComment,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
