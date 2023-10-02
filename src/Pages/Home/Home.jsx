import { useLoaderData } from "react-router-dom";
import HomeCard from "../../Components/HomeCard/HomeCard";


const Home = () => {
    const data = useLoaderData()

    return (
        <div>
            <h1>this is home page</h1>
            <div className="grid grid-cols-3 gap-5">
            {
                data.map(data => <HomeCard key={data.id} data={data}></HomeCard>)
            }
            </div>
         
        </div>
    );
};

export default Home;