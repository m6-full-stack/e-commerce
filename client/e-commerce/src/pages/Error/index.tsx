import { useNavigate } from "react-router-dom";
import { FallbackStyled } from "./style";

const FallBack = () => {
  const navigate = useNavigate();

  return (
    <FallbackStyled>
      <div className="container">
        <p className="glitch">
          <span aria-hidden="true">Error 404</span>
          Error 404
          <span aria-hidden="true">Error 404</span>
        </p>
      </div>
      <div className="container-button">
        <h2>Página não encontrada :( <span onClick={() => navigate("/")} className="error">Volte a Home</span></h2>
      </div>
    </FallbackStyled>
  );
};

export default FallBack;