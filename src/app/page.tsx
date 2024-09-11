import RestaurantBanner from "@/components/RestaurantBanner/RestaurantBanner";
import SearchInput from "@/components/SearchInput/SearchInput";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";
import Categories from "@/components/Categories/Categories";

export default function Home() {
  return (
    <main>
      <RestaurantBanner />
      <div className="container">
        <SearchInput />
        <div className={styles.grid}>
          <Card>
            <Categories />
          </Card>
          <Card>Teste</Card>
        </div>
      </div>
    </main>
  );
}
