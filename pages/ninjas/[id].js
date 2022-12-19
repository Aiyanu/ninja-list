export const getStaticPaths = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    
    const paths= data.map(ninja => {
        return {
            params:{id: ninja.id.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async(context) =>{
    const id = context.params.id
    const response = await fetch("https://jsonplaceholder.typicode.com/users/"+id)
    const data = await response.json()

    return {
        props:{details:data}
    }
}
const Details = ({details}) =>{
    return ( 
        <div>
            <h1>{details.name}</h1>
            <p>{details.email}</p>
            <p>{details.phone}</p>
            <p>{details.website}</p>
            <p>{details.address.city}</p>
        </div>
     );
}
 
export default Details;