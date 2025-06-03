// #region imports
import { useNavigate } from "react-router-dom";
import StyledDiv from "../StyledDiv/StyledDiv";
import urlProfileIcon from "./initialIcons/profileExampleIcon.svg";
import urlLogotypeIcon from "./initialIcons/brandExampleIcon.svg";
import useToggle from "../hooks/useToggle/useToggle";

import styles from "./StyledSidebar.module.scss";
// #endregion
// #region types
export interface StyledSidebarProps {
  className?: string;
  logotype?: string;
  profileIcon?: string;
  children?: React.ReactNode;
}
// #endregion

const StyledSidebar = ({
  logotype = urlLogotypeIcon,
  profileIcon = urlProfileIcon,
  className = "",
  children,
}: StyledSidebarProps) => {
  // #region states
  const navigate = useNavigate();
  const { isActive, toggle } = useToggle();
  // #endregio

  // #region render
  return (
    <div
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      className={`${styles.sidebarWrapper} ${isActive ? styles.expanded : ""}`}
    >
      <StyledDiv className={`${className} ${styles.sidebar}`}>
        <StyledDiv className={styles.topSection}>
          <StyledDiv
            onClick={() => navigate("/")}
            className={styles.iconContainer}
          >
            <img src={logotype} alt="brand icon" className={styles.icon} />
            <span className={styles.label}>Inicio</span>
          </StyledDiv>
        </StyledDiv>

        <StyledDiv className={styles.middleContent}>{children}</StyledDiv>

        <StyledDiv className={styles.bottomSection}>
          <StyledDiv
            onClick={() => navigate("/profile")}
            className={styles.iconContainer}
          >
            <img src={profileIcon} alt="profile icon" className={styles.icon} />
            <span className={styles.label}>Perfil</span>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    </div>
  );
};

export default StyledSidebar;
// #endregion
