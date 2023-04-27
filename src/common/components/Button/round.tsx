import styles from './round.module.scss';

interface ButtonProps {
  label: string;
}

export default function ButtonRound(props: ButtonProps) {
  const { label } = props;
  return <button className={styles.button}>{label || ''}</button>;
}
