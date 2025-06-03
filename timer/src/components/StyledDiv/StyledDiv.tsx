import styles from "./StyledDiv.module.scss";
import clxs from "classNames";
interface StyledDivProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const StyledDiv = ({ children, className, onClick }: StyledDivProps) => {
  return (
    <div
      onClick={onClick}
      className={clxs(styles.bodyContent, className)}
    >
      {children}
    </div>
  );
};

export default StyledDiv;
