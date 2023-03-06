import { useContext } from "react";
import { Heading } from "../../styles/typography";
import { ModalContainer } from "./style";
import { ModalContext } from "../../contexts/ModalProvider/ModalProvider";

export const ModalPhoto = () => {
  const { setIsModelPhoto, photoInfo } = useContext(ModalContext);

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
            Imagem do veículo
          </Heading>

          <p className="closeModal" onClick={() => setIsModelPhoto(false)}>
            x
          </p>
        </div>

        <div className="content-img">
          <img src={photoInfo} />
        </div>
      </div>
    </ModalContainer>
  );
};
