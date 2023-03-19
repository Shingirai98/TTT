import Link from "next/link";

// look at beyond fireship Next 13 - the basics for guidance
async function getBlogs(){
    const res = await fetch('http://127.0.0.1:8090/api/collections/blogs/records');
    const data = await res.json();
    
    return data?.items as any[];
}

export default async function Blogs(){
    const blogs  = await getBlogs();

    return (
        <div>
            <h1>Blogs Page</h1>
            <div>
                {blogs?.map((blog) => {
                    return <Blog key={blog.id} blog={blog} />;
                })}
            </div>
        </div>

    );
}

function Blog( {blog}: any){
    const { id, title, content, summary, category_id} = blog || {}
    return(
        <Link href={`/blogs/${id}`}>
            <div>
                <h2>{title}</h2>
                <h3>{summary}</h3>
                <p>{content}</p>
            </div>
        </Link>
    );
}