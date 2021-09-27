import Head from 'next/head'

const About = () => {
    return (
        <>
            {/* ADDING META DATA */}
            <Head>
                {/* NORMAL HTML META TAGS */}
                <title>Ninja List | About</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1>
                    About
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae numquam quam aspernatur totam delectus minus corrupti amet vitae inventore accusamus vel, ducimus quisquam eveniet aliquam rem cum at obcaecati animi?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae numquam quam aspernatur totam delectus minus corrupti amet vitae inventore accusamus vel, ducimus quisquam eveniet aliquam rem cum at obcaecati animi?
                </p>
            </div>
        </>
    );
}

export default About;