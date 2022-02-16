import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';

const Backdrop = ({ onCancel }) => {
  return <div onClick={onCancel}></div>;
};

const ModalOverlay = ({ name, email, age, education, onSubmit, onCancel }) => {
  return (
    <Card>
      <header>
        <h3>Are you sure this data below valid?</h3>
      </header>
      <div>
        <p>
          <span>Name:</span> {name}
        </p>
        <p>
          <span>Email:</span> {email}
        </p>
        <p>
          <span>Age:</span> {age}
        </p>
        <p>
          <span>Latest education:</span> {education}
        </p>
      </div>
      <footer>
        <Button type='submit' onClick={onSubmit}>
          I'm sure
        </Button>
        <Button type='button' onClick={onCancel}>
          No, let me fix it
        </Button>
      </footer>
    </Card>
  );
};

const ModalRegister = ({ name, email, age, education, onClick, onCancel }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCancel={onCancel} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay name={name} email={email} age={age} education={education} onSubmit={onClick} onCancel={onCancel} />, document.getElementById('overlay-root'))}
    </Fragment>
  );
};

export default ModalRegister;
