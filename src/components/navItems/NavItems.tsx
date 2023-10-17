import ListItem from "../navbar/ListItem";
import { navItemsProps } from "../../types/types";

const NavItems = ({
  openSettingDropdown,
  setOpenSettingDropdown,
  handleToggle,
}: navItemsProps) => {
  const handleSettingDropdown = () => {
    setOpenSettingDropdown(!openSettingDropdown);
  };

  return (
    <>
      <ListItem>
        <div
          className="cursor-pointer sm:hidden absolute top-5 right-5 text-xl"
          onClick={handleToggle}
        >
          <i className="fa fa-close"></i>
        </div>
      </ListItem>
      <ListItem>Home</ListItem>
      <ListItem>Contact</ListItem>
      <ListItem>About</ListItem>
      <ListItem>
        <div
          className="flex items-center justify-center gap-2"
          onClick={handleSettingDropdown}
        >
          Setting{" "}
          <span
            className={`${
              openSettingDropdown ? "rotate-180" : ""
            } duration-150 inline-block text-xl`}
          >
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </span>
        </div>
      </ListItem>
    </>
  );
};

export default NavItems;
