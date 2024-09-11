import styles from './EmptyCart.module.css'

function EmptyCart() {
    return (
        <div className={styles.card}>
            <p className={styles.message}>Seu carrinho está vazio</p>
        </div>
    )
}

export default EmptyCart;