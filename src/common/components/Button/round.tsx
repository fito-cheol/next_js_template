import styles from "./round.module.scss";

interface ButtonProps {
  value: string;
}

export default function ButtonRound(props: ButtonProps) {
  const { value } = props;
  return <button className={styles.button}>{value || ""}</button>;
}
