import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {

    return (
        <nav>
            <div className="logo">
                {/* <h1>Ninja List</h1> */}
                {/* <img src="/logo.png"  /> */}
                {/* <Image src="/logo.png" width={128} height={77} /> */}
                <Image src="/vercel.svg" width={120} height={90} />
                {/* ADVANTAGES OF USING Image COMPONENT IS:
                1. MAKES IMAGE AUTO RESPONSIVE
                2. AUTOMATICALLY ADDS LAZYLOADING(LOADS IMAGE ONLY WHEN WE SEE IT ELSE DOESNT) > OPTIMISES THE LOADING SPEEDS */}
            </div>

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>

        </nav>
    );
}

export default Navbar;