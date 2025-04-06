import MenuItem from "./MenuItem";
import styles from "./TreeView.module.css";

type MenuItem = {
  label: string;
  to: string;
  children?: MenuItem[];
};

type MenuListProps = {
  items: MenuItem[];
};

export default function MenuList({ items = [] }: MenuListProps) {
  return (
    <ul className={styles.menuListContainer}>
      {items && items.length
        ? items.map((item) => <MenuItem key={item.label} item={item} />)
        : null}
    </ul>
  );
}
