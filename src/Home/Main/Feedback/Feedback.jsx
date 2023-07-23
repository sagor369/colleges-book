import { useState } from "react";
import Title from "../../../Shared/PageTitle/Title";
import { Rating } from "@smastrom/react-rating";

const Feedback = () => {
  const [rating, setRating] = useState(1);
  return (
    <div>
      <Title title={"Feedback section"}></Title>
      <div className="hero ">
        <div className="hero-content  ">
          <form className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">College name</span>
                </label>
                <input
                  type="text"
                  placeholder="college name"
                  className="input input-bordered"
                />
              </div>
              <div className="flex gap-2 items-center justify-start">
                <span>Ratings:</span>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={rating}
                  onChange={setRating}
                  isRequired
                />
                {rating}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          </form>
          <div className="text-center lg:text-left">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your messages</span>
              </label>
              <textarea
                className="textarea textarea-bordered  "
                placeholder="messages"
                cols="50"
                rows="10"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
