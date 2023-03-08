import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Heading, Paragraph } from "../../styles/typography";
import { validationUserComment } from "../../validators/validationUserComment";

import { useForm, FieldValues } from "react-hook-form";
import Button from "../Button";
import Input, { TextArea } from "../Input";
import { ModalContainer } from "./style";
import { ModalContext } from "../../contexts/ModalProvider/ModalProvider";
import { AnnouncementContext } from "../../contexts/AnnouncementProvider/AnnouncementProvide";
import { CommentContext } from "../../contexts/CommentProvider/CommentProvider";

export const ModalEditComment = () => {
  const { commentInfo, setIsModelEditComment, modalDeleteComment } =
    useContext(ModalContext);
  const { updateComment } = useContext(CommentContext);
  const [comment, setComment] = useState(commentInfo.content)

  const onSubmit = (data: FieldValues) => {
    updateComment(data, commentInfo.id);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationUserComment),
  });
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
            Editar comentário
          </Heading>
          <p
            className="closeModal"
            onClick={() => setIsModelEditComment(false)}
          >
            x
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextArea
            label="Comentário"
            placeholder=""
            name="content"
            defaultValue={comment}
            register={register}
            errosMessage={errors.content?.message?.toString()}
          />

          <div className="content-buttons-create">
            <Button
              type="button"
              variant="grey6"
              buttonSize="g6profmodea"
              onClick={() => {
                modalDeleteComment(commentInfo.id);
                setIsModelEditComment(false);
              }}
            >
              Excluir comentário
            </Button>
            <Button type="submit" variant="brand3" buttonSize="b3profmodsa">
              Salvar alterações
            </Button>
          </div>
        </form>
      </div>
    </ModalContainer>
  );
};
