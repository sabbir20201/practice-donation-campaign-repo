import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DonationDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const detailDonation = data.find(data => data.id == id)
    // const { name, age } = data;
    console.log(detailDonation);
    // console.log(id);
    const handleApplyJob = ()=>{
        toast('you have apply successfully')

    }

    return (
        <div>
            <h1>this is detail donation</h1>
            <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{detailDonation.id}</h2>
                    <p>{detailDonation.name}</p>
                    <p>{detailDonation.age}</p>
                    <div className="card-actions">
                 <button onClick={handleApplyJob} className="btn btn-primary">click me</button>
                    </div>
                </div>
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;