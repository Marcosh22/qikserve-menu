import RestaurantBanner from "@/components/RestaurantBanner/RestaurantBanner";
import SearchInput from "@/components/SearchInput/SearchInput";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";
import CategoryList from "@/components/CategoryList/CategoryList";
import CategorySectionList from "@/components/CategorySectionList/CategorySectionList";

export default function Home() {
  return (
    <main>
      <RestaurantBanner />
      <div className="container">
        <SearchInput />
        <div className={styles.grid}>
          <Card>
            <CategoryList />
            <CategorySectionList />
          </Card>
          <Card>Teste</Card>
        </div>
      </div>
    </main>
  );
}
