// #region imports
import { useNavigate } from "react-router-dom";
import StyledDiv from "../StyledDiv/StyledDiv";
import urlProfileIcon from "./initialIcons/profileExampleIcon.svg";
import urlLogotypeIcon from "./initialIcons/brandExampleIcon.svg";

import styles from "./StyledSidebar.module.scss";
import useToggle from "../hooks/useToggle/useToggle";
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
    <div onMouseEnter={toggle} onMouseLeave={toggle} className={styles.sidebar__wrapper}>
      <StyledDiv
        className={`${className} ${
          isActive ? styles.sidebar : styles.sidebar__toggle
        }`}
      >
        <StyledDiv
          onClick={() => navigate("/")}
          className={styles.icon}
        >
          <img src={logotype} alt="brand icon" className={styles.icon}/>
        </StyledDiv>
        <StyledDiv>{children}</StyledDiv>
        <StyledDiv
          className={styles.icon}
          onClick={() => navigate("/profile")}
        >
          <img src={profileIcon} alt="profile icon" className={styles.icon}/>
        </StyledDiv>
      </StyledDiv>
    </div>
  );
};

export default StyledSidebar;
// #endregion
