import { useState } from 'react';
import './Form.css';
import { TextField } from '../TextField';
import { Dropdown } from '../Dropdown';
import { Button } from '../Button';

export const Form = (props) => {
  const { onRegisteredEmployee, teams } = props;

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const clearForm = () => {
    setName('');
    setRole('');
    setImage('');
    setTeam('');
  };

  const toSubmit = (event) => {
    event.preventDefault();
    onRegisteredEmployee({
      name,
      role,
      image,
      team,
    });

    clearForm();
    console.log('Formulário enviado!');
  };

  return (
    <section className="form">
      <form onSubmit={toSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField
          value={name}
          onChange={setName}
          required={true}
          labelName="Nome"
          placeholder="Digite seu nome"
        />
        <TextField
          value={role}
          onChange={setRole}
          required={true}
          labelName="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextField
          value={image}
          onChange={setImage}
          labelName="Imagem"
          placeholder="Digite a URL da imagem"
        />
        <Dropdown
          required={true}
          labelName="Time"
          items={teams}
          value={team}
          onChange={setTeam}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
