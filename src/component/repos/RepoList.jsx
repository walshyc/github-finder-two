import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  return (
    <div className="card bg-base-100 rounded-lg shadow-lg">
      <div className="card-body">
        <h2 className="card-title my-4 text-3xl font-bold">Latest Repos</h2>
        {repos.map((repo, i) => (
          <RepoItem key={i} repo={repo}></RepoItem>
        ))}
      </div>
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
