import PropTypes from 'prop-types';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';

const RepoItem = ({
  repo: {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  },
}) => {
  return (
    <div className="card mb-2 rounded-md bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url}>
            <FaLink className="mr-1 inline"></FaLink>
            {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div className="">
          <div className="badge badge-info badge-lg mr-2">
            <FaEye className="mr-2"></FaEye>
            {watchers_count}
          </div>
          <div className="badge badge-success badge-lg mr-2">
            <FaStar className="mr-2"></FaStar>
            {stargazers_count}
          </div>
          <div className="badge badge-error badge-lg mr-2">
            <FaInfo className="mr-2"></FaInfo>
            {open_issues}
          </div>
          <div className="badge badge-warning badge-lg mr-2">
            <FaUtensils className="mr-2"></FaUtensils>
            {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

RepoItem.probTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
