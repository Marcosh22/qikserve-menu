import { Item } from "@/@types/menuTypes";

function getMinProductPrice(product: Item): number {
  let minPrice = product.price;

  product?.modifiers?.forEach((modifier) => {
    if (modifier.minChoices >= 1) {
      const availableItems = modifier.items
        .filter((item) => item.available)
        .sort((a, b) => a.price - b.price);

      let choicesRemaining = modifier.minChoices;

      for (const item of availableItems) {
        const quantityToAdd = Math.min(choicesRemaining, item.maxChoices || 1);

        minPrice += item.price * quantityToAdd;

        choicesRemaining -= quantityToAdd;
        if (choicesRemaining <= 0) break;
      }
    }
  });

  return minPrice;
}

export default getMinProductPrice;
