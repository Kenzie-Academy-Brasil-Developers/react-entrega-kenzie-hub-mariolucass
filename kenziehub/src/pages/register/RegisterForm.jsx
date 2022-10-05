import { useState } from "react";
import Button from "../../components/Buttons";
import Input from "../../components/Inputs";
import Select from "../../components/Selects";
import { FormRegister } from "./styles";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [bio, setBio] = useState("");
  const [contact, setContact] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
  };

  return (
    <FormRegister action="" onSubmit={handleSignUp}>
      <h3>Register</h3>

      <Input
        type="text"
        placeholder={"Digite aqui seu nome"}
        text={"Nome"}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <Input
        type="text"
        placeholder={"Digite aqui seu e-mail"}
        text={"Email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <Input
        type="password"
        placeholder={"Digite aqui sua senha"}
        text={"Senha"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Input
        type="text"
        placeholder={"Digite novamente sua senha"}
        text={"Confirmar senha"}
        value={confirm}
        onChange={(e) => {
          setConfirm(e.target.value);
        }}
      />

      <Input
        type="text"
        placeholder={"Fale sobre você"}
        text={"Bio"}
        value={bio}
        onChange={(e) => {
          setBio(e.target.value);
        }}
      />

      <Input
        type="text"
        placeholder={"Opção de contato"}
        text={"Contato"}
        value={contact}
        onChange={(e) => {
          setContact(e.target.value);
        }}
      />

      <Select name="" id=""></Select>

      <Button type="submit" texto="Cadastrar" tipo={2} />
    </FormRegister>
  );
};

export default RegisterForm;
