import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Btn.module.css';

export default function Button({ text }) {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const goBack = () => navigate(from);
  return (
    <button className={styles.btn} onClick={goBack}>
      <span>{text}</span>
    </button>
  );
}
