import { Link, useLoaderData, Form} from "react-router-dom";

const Show = (props) => {
    const post=useLoaderData()
    const div={
        textAlign: "center",
        border: "3px solid yellow",
        width: "80%",
        margin: "30px auto"
    }
    return <div style={div}>
        <h1>{post.subject}</h1>
        <h2>{post.details}</h2>
        <div>
            <h2>Update To-Do</h2>
            <Form action={`/update/${post.id}`} method="put">
            <input type="text" name="subject" defaultValue={post.subject}/>
            <input type="text" name="details" defaultValue={post.details}/>
            <button>Update</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
            <button>Delete</button>
        </Form>
        </div>
        <Link to="/">
            <button>Home</button>
        </Link>
    </div>
  };
  
  export default Show;