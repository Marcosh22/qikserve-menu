import RestaurantBanner from "@/components/RestaurantBanner/RestaurantBanner";
import SearchInput from "@/components/SearchInput/SearchInput";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";
import CategoryList from "@/components/CategoryList/CategoryList";
import CategorySectionList from "@/components/CategorySectionList/CategorySectionList";
import Sticky from "@/components/Sticky/Sticky";

export default function Home() {
  return (
    <main className="scrollable-area">
      <RestaurantBanner />
      <div className="container">
        <SearchInput />
        <div className={styles.gridWrapper}>
          <div className={styles.grid}>
            <div>
              <Card>
                <Sticky>
                  <CategoryList />
                </Sticky>
                <CategorySectionList />
              </Card>
            </div>
            <div>
              <Card>
                <Sticky>Teste</Sticky>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
