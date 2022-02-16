import styles from './Button.module.css';

const Button = ({children, type}) => {
  return <Button type={type} className={styles.button}>{children}</Button>;
};

export default Button;