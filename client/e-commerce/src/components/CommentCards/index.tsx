import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementProvider/AnnouncementProvide";
import { Heading } from "../../styles/typography";
import { UserCommentCard } from "./styles";

export const CommentsCards = () => {
  const { announcementInfo } = useContext(AnnouncementContext);

  return (
    <UserCommentCard>
      {announcementInfo.comments.map(elem => (
        <div className="divCommentContainer">
          <div className="divTopComments">
            <Heading size="small" className="userCommentsImage">
              {elem.user.name[0]}
            </Heading>
            <Heading className="userCommentsName" color={"grey1"}>
              {elem.user.name}
            </Heading>
            <li className="description dateComments">
              {elem.created_at.split("T")[0].replace(/-/g, "/")}
            </li>
          </div>
          <p className="descriptionCommentsUser description">{elem.content}</p>
        </div>
      ))}
    </UserCommentCard>
  );
};
