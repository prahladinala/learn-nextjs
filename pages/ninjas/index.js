import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
// This function runs before build time as the static files are created in the build time.
// Never runs in browser
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: {
            ninjas: data
        }
    }
}
const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>
                All Ninjas
            </h1>
            {ninjas.map(ninja => (
                <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default Ninjas;