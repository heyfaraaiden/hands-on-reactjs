import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = ({ onHandleCloseModal }) => {
  return <div className={styles.backdrop} onClick={onHandleCloseModal}></div>;
};

const ModalPopup = ({ modalContent, onHandleCloseModal }) => {
  const {title, message, type} = modalContent;

  return (
    <div className={styles['modal-popup']}>
      <h3 className={`${styles.title} ${type === 'success' ? styles.success : styles.error}`}>{title}</h3>
      <p className={styles.message}>{message}</p>
      <button className={styles.button} type='button' onClick={onHandleCloseModal}>
        OK
      </button>
    </div>
  );
};

const Modal = ({ modalContent, onHandleCloseModal }) => {
  return (
    <div className={styles.modal}>
      {ReactDOM.createPortal(<Backdrop onHandleCloseModal={onHandleCloseModal} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalPopup modalContent={modalContent} onHandleCloseModal={onHandleCloseModal} />, document.getElementById('overlay-root'))}
    </div>
  );
};

export default Modal;
