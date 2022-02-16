import { useState } from 'react';
import Card from './Card';
import Button from './Button';
import ModalRegister from './ModalRegister';

import styles from './Form.module.css';

const Form = () => {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    password: '',
    rewritePassword: '',
    age: '',
    education: '',
  });
  const [showModal, setShowModal] = useState(false);

  const {name, email, password, rewritePassword, age, education} = formInput;

  const handleInputChange = (e) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleModal = () => {
    setShowModal(true);
  };

  const handleCancelModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(name.length >= 2 && email.includes('@').length > 8 && password.length >= 8 && password === rewritePassword && age >= 10 && education) {
      console.log(formInput);
    } else {
      console.log('Please fill in all of the form inputs');
    }
  };

  return (
    <>
    {showModal && <ModalRegister name={formInput.name} email={formInput.email} age={formInput.age} education={formInput.education} onClick={handleFormSubmit} onCancel={handleCancelModal} />}
      <Card>
        <form className={styles.form}>
          <div className={styles['form-control']}>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' value={formInput.name} onChange={handleInputChange} />
          </div>
          <div className={styles['form-control']}>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' value={formInput.email} onChange={handleInputChange} />
          </div>
          <div className={styles['form-control']}>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' value={formInput.password} onChange={handleInputChange} />
          </div>
          <div className={styles['form-control']}>
            <label htmlFor='rewritePassword'>Password:</label>
            <input type='password' id='rewritePassword' name='rewritePassword' value={formInput.rewritePassword} onChange={handleInputChange} />
          </div>
          <div className={styles['form-control']}>
            <label htmlFor='age'>Age:</label>
            <input type='number' id='age' name='age' value={formInput.age} onChange={handleInputChange} />
          </div>
          <div className={styles['form-control']}>
            <label htmlFor='education'>Your latest education:</label>
            <select id='education' name='education' value={formInput.education} onChange={handleInputChange}>
              <option value='post-graduate'>Post Graduate</option>
              <option value='graduate'>Graduate</option>
              <option value='undergraduate'>Undergraduate</option>
              <option value='high-vocational-school'>High School/Vocational School</option>
              <option value='secondary-school'>Secondary/Middle School</option>
              <option value='primary-school'>Primary School</option>
            </select>
          </div>
          <Button type='submit' onClick={handleModal}>
            Register
          </Button>
        </form>
      </Card>
    </>
  );
};

export default Form;
