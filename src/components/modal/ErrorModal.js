import styles from './ErrorModal.module.scss'
const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h1 className={styles.head}>Invalid Input</h1>
        <div className={styles.advisory}>
          <p>Please enter a valid age (&#62;0).</p>
        </div>
        <div className={styles.advisoryBtn}>
          <button>Okay</button>
        </div>
      </div>
    </div>
  );
};
export default ErrorModal;
