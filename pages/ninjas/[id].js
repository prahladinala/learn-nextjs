export const getStaticPaths = async () => {
    // In this function we can get all of our id's and can return your id's to next
    // Based on that it can generate all the routes and pages for us
    // Next knows how many pages and routes to generate
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })
    return {
        // paths: [{}, {}, {params: {id:}}]
        // paths: paths
        paths,
        fallback: false,
    }
    // fallback: false, > shows user 404 page of the users ends up in the id that doesnt exists
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}

const Details = ({ ninja }) => {
    return (
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
    );
}

export default Details;

// [id] means the name of the route is changeable
// /ninjas/1    /ninjas/2   /ninjas/3 ....
// else it takes as /ninjas/id