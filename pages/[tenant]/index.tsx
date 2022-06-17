import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { Banner } from "../../components/Banner";
import { ProductItem } from "../../components/ProductItem";
import { SearchInput } from "../../components/SearchInput";
import { useAppContext } from "../../contexts/AppContext";
import { useapi } from "../../libs/useApi";

import styles from "../../styles/Home.module.css";
import { Tenant } from "../../types/Tenant";

const Home = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  function handleSearch(searchValue: string) {
    alert("Voce está buscando por " + searchValue);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.topTopLeft}>
            <div className={styles.headerTitle}>Seja bem vindo(a) 👋</div>
            <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
          </div>

          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div
                className={styles.menuButtonLine}
                style={{ background: tenant?.mainColor }}
              />
              <div
                className={styles.menuButtonLine}
                style={{ background: tenant?.mainColor }}
              />
              <div
                className={styles.menuButtonLine}
                style={{ background: tenant?.mainColor }}
              />
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput onSearch={handleSearch} />
        </div>
      </header>
      <Banner />

      <div className={styles.grid}>
        <ProductItem
          data={{
            id: 1,
            image: "/tmp/burger.png",
            categoryName: "Tradicional",
            name: "Texas Burger",
            price: "25,50",
          }}
        />
        <ProductItem
          data={{
            id: 2,
            image: "/tmp/burger.png",
            categoryName: "Tradicional",
            name: "Texas Burger",
            price: "25,50",
          }}
        />
        <ProductItem
          data={{
            id: 2,
            image: "/tmp/burger.png",
            categoryName: "Tradicional",
            name: "Texas Burger",
            price: "25,50",
          }}
        />
        <ProductItem
          data={{
            id: 2,
            image: "/tmp/burger.png",
            categoryName: "Tradicional",
            name: "Texas Burger",
            price: "25,50",
          }}
        />
        <ProductItem
          data={{
            id: 2,
            image: "/tmp/burger.png",
            categoryName: "Tradicional",
            name: "Texas Burger",
            price: "25,50",
          }}
          mainColor={data.tenant.mainColor}
          secondColor={data.tenant.secondColor}
        />
      </div>
    </div>
  );
};

export default Home;

type Props = {
  tenant: Tenant;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query; //dado da url

  const api = useapi();

  const tenant = await api.getTenant(tenantSlug as string);

  if (!tenant) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return {
    props: {
      tenant,
    },
  };
};
