import Input from "../Inputs";
import Select from "../Selects";
import { BackgroundModal } from "./styles";

const Modal = () => (
  <BackgroundModal>
    <div>
      <div>
        <h2>Cadastrar tecnologia</h2>
        <button>X</button>
      </div>
      <Input type="text" name="" id="" texto={"Nome"} />
      <Select />
    </div>
  </BackgroundModal>
);

export default Modal;
