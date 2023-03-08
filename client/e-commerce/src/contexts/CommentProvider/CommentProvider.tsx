import { createContext, ReactNode, useContext } from "react";
import { FieldValues } from "react-hook-form";
import { api } from "../../services/api";
import { AnnouncementContext } from "../AnnouncementProvider/AnnouncementProvide";
import { ModalContext } from "../ModalProvider/ModalProvider";
import { toast } from "react-toastify";

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
  id?: string;
  content?: string;
  created_at?: string;
  user?: UserComment;
}

interface CommentContextType {
  createComment: (data: CommentData, id: string) => void;
  updateComment: (data: FieldValues, id: string | undefined) => void;
  deleteComment: (id: string) => void;
}

export const CommentContext = createContext({} as CommentContextType);

export function CommentContextProvider({
  children,
}: CommentContextProviderProps) {
  const { setAnnouncementInfo, announcementInfo } =
    useContext(AnnouncementContext);
  const { setIsModelEditComment } = useContext(ModalContext);

  const token = () => {
    const token = localStorage.getItem("@MOTORS-TOKEN");
    return token;
  };

  const createComment = (data: CommentData, id: string) => {
    api
      .post(`/comment/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then(res => {
        setAnnouncementInfo({
          ...announcementInfo,
          comments: [...announcementInfo.comments, res.data],
        });
      })
      .catch(err => console.log(err));
  };

  const updateComment = (data: FieldValues, id: string | undefined) => {
    api
      .patch(`/comment/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then(res => {
        toast.success("Comentário atualizado!");
        setAnnouncementInfo({
          ...announcementInfo,
          comments: [
            ...announcementInfo.comments.filter(elem => elem.id != id && elem),
            res.data,
          ],
        });
        setIsModelEditComment(false);
      })
      .catch(err => toast.error("Algo deu errado!"));
  };

  const deleteComment = (id: string | undefined) => {
    api
      .delete(`/comment/${id}`, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then(res => {
        toast.success("Comentário deletado!");
        setAnnouncementInfo({
          ...announcementInfo,
          comments: announcementInfo.comments.filter(
            elem => elem.id != id && elem
          ),
        });
      })
      .catch(err => toast.error("Algo deu errado!"));
  };

  return (
    <CommentContext.Provider
      value={{ createComment, updateComment, deleteComment }}
    >
      {children}
    </CommentContext.Provider>
  );
}
