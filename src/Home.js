
import BlogList from "./BlogList";
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPending, error } = useFetch(' http://localhost:8000/blogs');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    // Q-> why use useEffect


    // let name = "Himanshu";
    // initial value means it will be loaded with Himanshu
    // const [name, setName] = useState('Himanshu');
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     setName('Baba Voss')
    //     setAge(30)
    // }
    // const handleClickAgain = (name) => {
    //     console.log("hello " + name);
    // }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <p>{name} is {age} years</p> */}
            {/* this is a function without parameters */}
            {/* <button onClick={handleClick}>Click me</button> */}

            {/* this is if a function has any parameters */}
            {/* <button onClick={() => handleClickAgain('Himanshu')}>Clickme Again</button> */}
        </div>
    );
}

export default Home;

// [ our blogs
//     { title: 'My New Webiste', body: 'lorem ipsum jnfjsnddm', author: 'Himanshu', id: 1 },
//     { title: 'Farewell Party', body: 'lorem ipsum Rada Rada', author: 'Neil', id: 2 },
//     { title: 'New College Review', body: 'Good Enviroment and Faculty Members', author: 'Pratik', id: 3 },
// ]