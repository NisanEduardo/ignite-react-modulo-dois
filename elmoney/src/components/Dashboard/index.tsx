import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import styles from './styles.module.scss'

export function Dashboard () {

    return (
        <div className={styles.mainContainer}>
            <div className="container">
                <Summary />
                <TransactionsTable />
            </div>
        </div>
    )

}