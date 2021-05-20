import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions'

import styles from './styles.module.scss'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransactionModalProps) {
    const { createTransaction } = useTransactions()

    const [ type, setType ] = useState( 'deposit' )
    const [ title, setTitle ] = useState('')
    const [ amount, setAmount ] = useState(0)
    const [ category, setCategory ] = useState('')

    async function handleCreateNewTransaction ( event: FormEvent ) {

        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="reactModalClose"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <form 
                action=""
                className={styles.newTransactionModal}
                onSubmit={handleCreateNewTransaction}
            >
                <h2>Cadastrar nova transação</h2>

                <input
                    placeholder="Título"
                    onChange={ event => setTitle( event.target.value ) }
                    value={ title }
                />

                <input
                    type="number"
                    placeholder="Valor"
                    onChange={event => setAmount(Number(event.target.value))}
                    value={amount}
                />

                <div className={styles.addOrRemoveEntries}>
                    <button
                        type="button"
                        className={`${type === 'deposit' ? styles.isActiveGreen : '' }`}
                        onClick={ () => setType( 'deposit' ) }
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button
                        type="button"
                        className={`${type === 'withdraw' ?  styles.isActiveRed : '' }`}
                        onClick={ () => setType( 'withdraw' ) }
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </div>

                <input
                    placeholder="Categoria"
                    onChange={event=>setCategory(event.target.value)}
                    value={category}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </Modal>
    )

}