"use client";

import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import styles from "./RestaurantBanner.module.css";

function RestaurantBanner() {
  const { restaurant } = useAppSelector((state) => state.restaurant);

  return (
    <>
      {restaurant?.webSettings?.bannerImage ? (
        <div className={styles.banner}>
          <Image
            src={restaurant.webSettings.bannerImage}
            alt={restaurant.name}
            fill={true}
            priority={true}
            loading="eager"
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      ) : null}
    </>
  );
}

export default RestaurantBanner;
