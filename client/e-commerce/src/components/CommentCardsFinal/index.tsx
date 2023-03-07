import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementProvider/AnnouncementProvide";
import { Heading, Paragraph } from "../../styles/typography";
import { UserCommentCardFinal } from "./styles";

export const CommentsCardsFinal = () => {
  const { announcementInfo } = useContext(AnnouncementContext);

  // return (
  //   <UserCommentCard>
  //     {announcementInfo.comments &&
  //       announcementInfo.comments.map(elem => (
  //         <div className="divCommentContainer">
  //           <div className="divTopComments">
  //             <Heading size="small" className="userCommentsImage">
  //               {elem.user.name[0]}
  //             </Heading>
  //             <Heading className="userCommentsName" color={"grey1"}>
  //               {elem.user.name}
  //             </Heading>
  //             <li className="description dateComments">
  //               {elem.created_at.split("T")[0].replace(/-/g, "/")}
  //             </li>
  //           </div>
  //           <p className="descriptionCommentsUser description">
  //             {elem.content}
  //           </p>
  //         </div>
  //       ))}
  //   </UserCommentCard>
  // );

  return (
    <UserCommentCardFinal>
      <section className="content-comments">
          <article className="content-comment">
            <Heading
              fontWeight={600}
              level={3}
              size={'plus'}
              color={'grey1'}
              lineHeight={'25px'}
            >
              Comentários
            </Heading>
            <div className="content-avatar">
              <div className="border-initials">
                <span>MA</span>
              </div>
              <Paragraph
                fontWeight={500}
                size={'small'}
                color={'grey1'}
                lineHeight={'24px'}
              >
                Marcos Antônio
              </Paragraph>
              <Paragraph
                className="time-pass"
                fontWeight={400}
                size={'small'}
                color={'grey3'}
                lineHeight={'24px'}
              >
                há 7 dias
              </Paragraph>
            </div>
            <Paragraph
              fontWeight={400}
              size={'small'}
              color={'grey2'}
              lineHeight={'24px'}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Paragraph>
          </article>
          <article className="content-comment">
            <div className="content-avatar">
              <div className="border-initials">
                <span>MA</span>
              </div>
              <Paragraph
                fontWeight={500}
                size={'small'}
                color={'grey1'}
                lineHeight={'24px'}
              >
                Marcos Antônio
              </Paragraph>
              <Paragraph
                className="time-pass"
                fontWeight={400}
                size={'small'}
                color={'grey3'}
                lineHeight={'24px'}
              >
                há 7 dias
              </Paragraph>
            </div>
            <Paragraph
              fontWeight={400}
              size={'small'}
              color={'grey2'}
              lineHeight={'24px'}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Paragraph>
          </article>
          <article className="content-comment">
            <div className="content-avatar">
              <div className="border-initials">
                <span>MA</span>
              </div>
              <Paragraph
                fontWeight={500}
                size={'small'}
                color={'grey1'}
                lineHeight={'24px'}
              >
                Marcos Antônio
              </Paragraph>
              <Paragraph
                className="time-pass"
                fontWeight={400}
                size={'small'}
                color={'grey3'}
                lineHeight={'24px'}
              >
                há 7 dias
              </Paragraph>
            </div>
            <Paragraph
              fontWeight={400}
              size={'small'}
              color={'grey2'}
              lineHeight={'24px'}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Paragraph>
          </article>
        </section>
    </UserCommentCardFinal>
  )
};
