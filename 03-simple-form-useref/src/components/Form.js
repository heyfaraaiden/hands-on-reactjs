import { useState, useRef, Fragment } from 'react';
import Modal from './Modal';

import styles from './Form.module.css';

const Form = () => {
  const nameInputRef = useRef();
  const nationalIDInputRef = useRef();

  const [modal, setModal] = useState(null);

  const formHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredID = nationalIDInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredID.trim().length === 0) {
      setModal({
        title: 'Invalid input!',
        message: 'Please enter a valid name and national ID number.',
        type: 'error'
      });
      return;
    }

    if (enteredID.length !== 13) {
      setModal({
        title: 'Invalid input!',
        message: 'Please enter a valid national ID number with 13 digit number.',
        type: 'error'
      });
      return;
    }

    setModal({
      title: 'Registration Success!',
      message: 'Please come to the vaccination hall at Jalan Djuanda No. 78H, start from 08.00 A.M to 11.30 A.M.',
      type: 'success'
    });

    nameInputRef.current.value = '';
    nationalIDInputRef.current.value = '';
  };

  const handleCloseModal = () => {
    setModal(null);
  };

  return (
    <Fragment>
      {modal && <Modal modalContent={modal} onHandleCloseModal={handleCloseModal} />}
      <form className={styles.form} onSubmit={formHandler}>
        <div className={styles['form-control']}>
          <label htmlFor='name'>Full Name:</label>
          <input type='text' name='name' placeholder='Petra Alatas' ref={nameInputRef} />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='national-id'>National ID Number:</label>
          <input type='number' name='national-id' placeholder='9994370248749' ref={nationalIDInputRef} />
        </div>
        <button className={styles.button} type='submit'>Register</button>
      </form>
    </Fragment>
  );
};

export default Form;
