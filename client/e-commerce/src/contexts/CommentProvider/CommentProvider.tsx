import { createContext, ReactNode, useContext } from "react";
import { api } from "../../services/api";
import { AnnouncementContext } from "../AnnouncementProvider/AnnouncementProvide";


interface CommentContextProviderProps {
  children: ReactNode;
}

export interface CommentData {
  content: string;
}

interface UserComment {
  created_at: string;
  updated_at: string;
  id: string;
  name: string;
  phone: string;
  cpf: string;
  birthdate: string;
  description: string;
  is_seller: boolean;
}

export interface CommentDataRecive {
  id: string;
  content: string;
  created_at: string;
  user: UserComment;
}

interface CommentContextType {
  createComment: (data: CommentData, id: string) => void;
}

export const CommentContext = createContext({} as CommentContextType);

export function CommentContextProvider({
  children,
}: CommentContextProviderProps) {
  const {setAnnouncementInfo, announcementInfo} = useContext(AnnouncementContext)

  const token = () => {
    const token = localStorage.getItem("@MOTORS-TOKEN");
    return token
  };

  const createComment = (data: CommentData, id: string) => {
    api
      .post(`/comment/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then(res => {
        setAnnouncementInfo({...announcementInfo, comments: [...announcementInfo.comments, res.data]})
        console.log(res)
      })
      .catch(err => console.log(err));
  };

  return (
    <CommentContext.Provider value={{ createComment }}>
      {children}
    </CommentContext.Provider>
  );
}
