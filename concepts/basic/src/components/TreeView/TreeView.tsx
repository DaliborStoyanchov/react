import MenuList from "./MenuList";
import classes from "./TreeView.module.css";

type TreeViewProps = {
  menus: [];
};

export default function TreeView({ menus = [] }: TreeViewProps) {
  return (
    <div className={classes.treeViewContainer}>
      <MenuList items={menus} />
    </div>
  );
}
