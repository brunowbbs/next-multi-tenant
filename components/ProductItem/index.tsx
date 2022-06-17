import Link from "next/link";
import { useAppContext } from "../../contexts/AppContext";
import { Product } from "../../types/Product";
import styles from "./styles.module.css";

type Props = {
  data: Product;
};

export function ProductItem({ data }: Props) {
  const { tenant } = useAppContext();

  return (
    <Link href={`/${tenant?.slug}/product/${data.id}`}>
      <div className={styles.container}>
        <div
          className={styles.head}
          style={{ backgroundColor: tenant?.secondColor }}
        ></div>
        <div className={styles.info}>
          <div className={styles.img}>
            <img src={data.image} alt="" />
          </div>
          <div className={styles.catName}>{data.categoryName}</div>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.price} style={{ color: tenant?.mainColor }}>
            R$ {data.price}
          </div>
        </div>
      </div>
    </Link>
  );
}
