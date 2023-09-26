import React from "react";
import { useTheme } from "../../contexts/Theme.context";
import "./Menu.style.scss";
import Menu from "./Menu";

const Setting: React.FC = () => {
  const { theme } = useTheme();
  const { setSettingButton, settingButton } = useTheme();
  const handleSettingButton: React.MouseEventHandler<HTMLDivElement> = () => {
    setSettingButton(!settingButton);
  };

  console.log(`Setting -->  settingButton: ${settingButton}`);
  return (
    <div>
      <div
        style={{ ...(theme as React.CSSProperties) }}
        className=" inline cursor-pointer right-0 m-3 absolute gear"
        onMouseEnter={handleSettingButton}
        onMouseLeave={() => setSettingButton(false)}
      >
        <i className="fa fa-gear gear-color text-2xl"></i>
      </div>
      {settingButton && <Menu />}
    </div>
  );
};

export default Setting;
