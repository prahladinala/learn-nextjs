import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        // FIRES ONLY ONCE Because of array useEffect(()=>{}, [])
        // console.log('Use Effect Ran')
        // Timer for 3 sec using set timeout
        setTimeout(() => {
            // router.go(-1) // One step back
            // router.go(1) // One step forward

            // GO TO HOME PAGE
            router.push('/')
        }, 3000)
    }, [])
    return (
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to home
                <Link href="/">
                    <a> Homepage</a>
                </Link>
            </p>
        </div>
    );
}

export default NotFound;