import EmptyCart from '../EmptyCart/EmptyCart';
import styles from './CartCard.module.css';

function CartCard() {
    return (
        <div>
            <div className={styles.header}>
                <h2 className={styles.title}>Carrinho</h2>
            </div>
            <EmptyCart />
        </div>
    )
}

export default CartCard;