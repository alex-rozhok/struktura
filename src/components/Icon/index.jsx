import * as icons from "../icons";

export const Icon = ({ name, ...props }) => {
  const { [name]: Icon } = icons;

  return <>{Icon && <Icon {...props} />}</>;
};
