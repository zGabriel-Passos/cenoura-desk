import Image from 'next/image';
import styles from './login.module.css'
import Link from 'next/link';

export default function Page() {
    return (
        <div className={styles.loginContainer}>
            {/* <Link href="/" style={{ cursor: 'pointer', height: '24px', width: '24px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='white'>
                    <path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path>
                </svg>
            </Link> */}
            {/* metade esquerda */}
            <div className={styles.leftSide}>
                <div className={styles.relativeWrapper}>
                    {/* duplicata atrás (apenas decoração) */}
                    <div aria-hidden="true" className={styles.duplicateBox} />
                    {/* caixa principal (frente) */}
                    <div className={styles.mainBox}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='white' style={{ marginBottom: '10px', opacity: '0.7' }}><path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8a3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4 3.91 3.91 0 0 0-4 4zm6 0a1.91 1.91 0 0 1-2 2 1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2zM4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z"></path></svg>
                        <h2 style={{ margin: 0, marginBottom: "1rem", textAlign: "center" }}>
                            Entre na <span style={{ color: '#ff9b21' }}>CenouraDesk</span> e
                            comece a se agendar
                        </h2>
                        <p>Simplificamos a complexidade da gestão para que seu negócio de beleza prospere.</p>
                        <button
                            type="submit"
                            className={styles.googleBtn}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path></svg>
                            Entrar com Google
                        </button>
                    </div>
                </div>
            </div>
            {/* metade direita */}
            <div className={styles.rightSide}>
                <Image
                    src="/assets/print.png"
                    width={500}
                    height={500}
                    alt="print"
                    className={styles.loginImage}
                />
            </div>
        </div>
    );
}