import logoImg from '../../assets/logo.svg'

import styles from './styles.module.scss'

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header( { onOpenNewTransactionModal }: HeaderProps ) {

    return (
        <header className={styles.mainHeaderContainer}>
            <div className="container">
                <div className={styles.mainContent}>
                    <img src={logoImg} alt="el money" />
                    <button type="button" onClick={onOpenNewTransactionModal}>
                        Nova transação
                    </button>
                </div>
            </div>
        </header>
    )

}