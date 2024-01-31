import styles from "./styles.module.scss"

export default function LinkButton({lable}: {lable: string}) {
  return (
    <div className={styles['button']}>
        {lable}
      <span className={styles["first"]}></span>
      <span className={styles["second"]}></span>
      <span className={styles["third"]}></span>
      <span className={styles["fourth"]}></span>
    </div>
  )
}