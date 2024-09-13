import RestaurantBanner from "@/components/RestaurantBanner/RestaurantBanner";
import SearchInput from "@/components/SearchInput/SearchInput";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";
import CategoryList from "@/components/CategoryList/CategoryList";
import CategorySectionList from "@/components/CategorySectionList/CategorySectionList";
import Sticky from "@/components/Sticky/Sticky";
import CartCard from "@/components/CartCard/CartCard";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import AllergyLinkCard from "@/components/AllergyLinkCard/AllergyLinkCard";
import Checkout from "@/components/Checkout/Checkout";

export default function Home() {
  return (
    <main>
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
            <div className={styles.cartDescription}>
              <Sticky>
                <Card>
                  <CartCard />
                </Card>
              </Sticky>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <AllergyLinkCard />
        </div>
        <div className={styles.checkoutContainer}>
          <Checkout />
        </div>
      </div>
      <ProductDetails />
    </main>
  );
}
