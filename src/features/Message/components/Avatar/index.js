import { Avatar, Badge, withStyles } from "@material-ui/core";
import React from "react";
import PropsType from "prop-types";

AvatarComponents.propsType = {
  isOnline: PropsType.bool,
  urlImage: PropsType.string,
};

AvatarComponents.defaultProps = {
  isOnline: false,
  urlImage: "",
};

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
  },
}))(Badge);

function AvatarComponents(props) {
  const { isOnline, urlImage } = props;
  return (
    <StyledBadge
      overlap="circle"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      variant="dot"
      color="primary"
      invisible={!isOnline}
    >
      <Avatar src={urlImage} />
    </StyledBadge>
  );
}

export default AvatarComponents;
