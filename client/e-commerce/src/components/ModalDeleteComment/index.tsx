import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { Heading, Paragraph } from "../../styles/typography";
import { validationUserAnnouncement } from "../../validators/validationUserAnnouncement";

import { useForm, FieldValues } from "react-hook-form";
import Button from "../Button";

import { ModalContainer } from "./style";
import { ModalContext } from "../../contexts/ModalProvider/ModalProvider";
import { AnnouncementContext } from "../../contexts/AnnouncementProvider/AnnouncementProvide";
import { CommentContext } from "../../contexts/CommentProvider/CommentProvider";

export const ModalDeleteComment = () => {
  const { setIsModelDeleteComment, setIsModelEditComment, commentDeleteInfo } =
    useContext(ModalContext);
  const { deleteComment } = useContext(CommentContext);

  return (
    <ModalContainer>
      <div className="content">
        <div className="content-title">
          <Heading
            level={2}
            fontWeight={500}
            size={"normal"}
            color={"grey1"}
            lineHeight={"20px"}
          >
            Excluir comentário
          </Heading>

          <p
            className="closeModal"
            onClick={() => setIsModelDeleteComment(false)}
          >
            x
          </p>
        </div>

        <div className="container-content">
          <Heading
            level={2}
            fontWeight={500}
            size={"normal"}
            color={"grey1"}
            lineHeight={"20px"}
          >
            Tem certeza que deseja remover este comentário?
          </Heading>

          <Paragraph
            fontWeight={400}
            size={"normal"}
            color={"grey2"}
            lineHeight={"28px"}
          >
            Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
            comentário.
          </Paragraph>

          <div className="content-buttons-create">
            <Button
              variant="grey6"
              buttonSize="g6profmodvac"
              onClick={() => {
                setIsModelDeleteComment(false);
                setIsModelEditComment(true);
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => {
                deleteComment(commentDeleteInfo!);
                setIsModelDeleteComment(false);
              }}
              variant="alert1"
              buttonSize="a1profmodvse"
            >
              Sim, excluir comentário
            </Button>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};
