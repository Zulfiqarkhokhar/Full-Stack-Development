interface blogIdParam{
    params: Promise<{
        blogId:string;
    }>
}

export default async function Blog({params}:blogIdParam){

    const {blogId} = await params;

    return (
        <div>
            <h1>This is specific blog post</h1>
            <h2>{blogId}</h2>
        </div>
    )
}