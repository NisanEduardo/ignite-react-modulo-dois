import incomeImg from '../../assets/income.svg'
import outcomeimg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'

import styles from './styles.module.scss'

export function Summary() {

    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {

        if (transaction.type === 'deposit') {

            acc.deposits += transaction.amount
            acc.total += transaction.amount

        } else {

            acc.withdraws -= transaction.amount
            acc.total -= transaction.amount

        }

        return acc

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <div className={styles.mainContent}>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="income img" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pr-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeimg} alt="outcome img" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pr-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div className={styles.highlightBackground}>
                <header>
                    <p>Totals</p>
                    <img src={totalImg} alt="outcome img" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pr-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.total)}
                </strong>
            </div>
        </div>
    )
}