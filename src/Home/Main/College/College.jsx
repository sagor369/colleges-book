import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const College = ({data}) => {
    const {name, image, admission_dates, rating, rating_pepole}= data
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="h-36 w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
         {name}
        </h2>
        <p><span className="font-bold">Addmission: </span>{admission_dates}</p>
        <p className="flex gap-2"><span>Rating: </span> <Rating
         style={{ maxWidth: 100 }}
         value={rating}
         readOnly
        /> {rating}</p>
        <p>Feedback: { rating_pepole} pepole</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Admission</div>
          <div className="badge badge-outline">Details</div>
        </div>
      </div>
    </div>
  );
};

export default College;
