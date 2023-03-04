import { Heading } from "../../styles/typography";
import { InputText, UserCommentInput } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationUserComment } from "../../validators/validationUserComment";
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import {
  CommentContext,
  CommentData,
} from "../../contexts/CommentProvider/CommentProvider";
import { getProfile } from "../../services/api";
import { AdvertiserData } from "../../contexts/AnnouncementProvider/AnnouncementProvide";

export const ActualUserComment = () => {
  const { createComment } = useContext(CommentContext);
  const [infoUserComment, setInfoUserComment] = useState<AdvertiserData>(
    {} as AdvertiserData
  );

  useEffect(() => {
    getProfile().then(res => setInfoUserComment(res.data));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentData>({
    resolver: yupResolver(validationUserComment),
  });

  const onSubmit = (data: CommentData) => {
    createComment(data, "c9953fe0-5728-41a7-a0f7-8abfdddf625b");
  };

  return (
    <UserCommentInput>
      <div className="divCommentContainer">
        <div className="divTopComments">
          <Heading size="small" className="userCommentsImage">
            {infoUserComment.name && infoUserComment.name[0]}
          </Heading>
          <Heading className="userCommentsName" color={"grey1"}>
            {infoUserComment.name && infoUserComment.name}
          </Heading>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            placeholder="Escreva aqui seu comentário!"
            {...register("content")}
          />
          <p className="errors">{errors.content?.message?.toString()}</p>
          <Button variant="blue" buttonSize="b1pcom" type="submit">
            Comentar
          </Button>
        </form>
      </div>
    </UserCommentInput>
  );
};
