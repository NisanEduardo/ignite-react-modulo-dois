import { useTransactions } from '../../hooks/useTransactions'
import styles from './styles.module.scss'

export function TransactionsTable() {

    const { transactions } = useTransactions()

    return (
        <div className={styles.mainContainer}>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td>{transaction.title}</td>
                                    <td className={transaction.type}>
                                        { new Intl.NumberFormat('pr-BR', {
                                            style: 'currency',
                                            currency: 'BRL',
                                        }).format(transaction.amount)}
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>
                                        { new Intl.DateTimeFormat('pt-Br').format(
                                            new Date(transaction.createdAt)
                                        )}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )

}