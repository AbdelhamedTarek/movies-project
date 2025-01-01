import { Link } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  return (
    <section className="bg-[#3689e3] p-6">
      <div>
        <Link className="btn" to="/">
          Back To Movies
        </Link>
      </div>

      <div className="container p-6">
        <div className="details-top">
          <div>
            <img src="images/no-image.jpg" alt="Movie Title" />
          </div>
          <div>
            <h2 className="text-center">Movie Title</h2>
            <p>
              <i className="fas fa-star text-yellow-400"></i> 8 / 10
            </p>
            <p className="text-slate-700">Release Date: XX/XX/XXXX</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              atque molestiae error debitis provident dolore hic odit, impedit
              sint, voluptatum consectetur assumenda expedita perferendis
              obcaecati veritatis voluptatibus. Voluptatum repellat suscipit,
              quae molestiae cupiditate modi libero dolorem commodi obcaecati!
              Ratione quia corporis recusandae delectus perspiciatis consequatur
              ipsam. Cumque omnis ad recusandae.
            </p>
            <h5 className="text-slate-700">Genres</h5>
            <ul className="list-group mb-7">
              <li>Genre 1</li>
              <li>Genre 2</li>
              <li>Genre 3</li>
            </ul>
            <Link to="https://google.com" target="_blank" className="btn">
              Visit Movie Homepage
            </Link>
          </div>
        </div>
        <div className="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li>
              <span className="text-slate-700">Budget:</span> $1,000,000
            </li>
            <li>
              <span className="text-slate-700">Revenue:</span> $2,000,000
            </li>
            <li>
              <span className="text-slate-700">Runtime:</span> 90 minutes
            </li>
            <li>
              <span className="text-slate-700">Status:</span> Released
            </li>
          </ul>
          <h4>Production Companies</h4>
          <div className="list-group">Company 1, Company 2, Company 3</div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
