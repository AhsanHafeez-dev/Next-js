export default async function UserDetails({ params }: {params:Promise<{id:String}>}   )   {
    const { id } = await params;
    return (
        <>
            <h1>Hello user {id}</h1>
        </>
    )
}