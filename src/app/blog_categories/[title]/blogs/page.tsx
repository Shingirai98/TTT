import Link from "next/link";

async function getBlogs(){
    const blogs = await fetch('http://127.0.0.1:8090/api/collections/blogsNew/records', {cache : 'no-store'});
    console.log(blogs);
    const data = await blogs.json();
    return data?.items as any[];
}

export default async function getBlog({
    params,
}: {
    params: {id: string};
}){
    const blogs = await getBlogs();
    const targetBlog = blogs.find((item) => item.id === params.id)
    return(
        <div>
            <h1>Blog View</h1>
            <BlogView targetBlog= {targetBlog}/>
        </div>
    );
}



function BlogView( {blog}: any){
    const {id, title, summary, content} = blog || {}
    return(
        <>
            <h1>{title}</h1>
            <br/>
            <br/>
            <br/>
            <p>{content}</p>
            <br/>
            <br/>
            <br/>
            <h3>Summary:</h3>
            <p>{summary}</p>
        </>
    );
}