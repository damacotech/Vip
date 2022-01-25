import React from "react";

// reactstrap components
import { Button } from "reactstrap";
import { ThemeContext, themes } from "contexts/ThemeContext";
import { backgroundColors } from "contexts/BackgroundColorContext";

function FixedPlugin(props) {
  return (
    <div>
      <div className="text-center" style={{ padding: "10px" }}>
        <span className="color-label">Theme</span>
        {"   "}
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <>
              <Button
                color="neutral"
                className={
                  props.bgColor === backgroundColors.white ? "active" : ""
                }
                onClick={() => changeTheme(themes.light)}
              />{" "}
              <Button
                color="darker"
                className={
                  props.bgColor === backgroundColors.dark ? "active" : ""
                }
                onClick={() => changeTheme(themes.dark)}
              />
            </>
          )}
        </ThemeContext.Consumer>
      </div>
    </div>
  );
}

export default FixedPlugin;
