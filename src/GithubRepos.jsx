import React from 'react';
import superagent from 'superagent';
import PropTypes from 'prop-types';

export default class GithubRepos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
    };
  }

  componentDidMount() {
    this.loadInformation();
  }

  /**
   * Gets all the repos for the company
   * @param {string} user
   */
  getUserRepos(user) {
    return superagent.get(`https://api.github.com/users/${user}/repos`)
      .then(r => r.body);
  }

  loadInformation() {
    this.getUserRepos(this.props.user)
      .then((repos) => {
        this.setState({ repos });
      });
  }

  render() {
    return (
      <div>
        {this.state.repos.map(repo => (
          <div key={repo.url} style={{ padding: 10, backgroundColor: 'whitesmoke', marginBottom: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              {/* La imagen del dueño del repo */}
              <img
                alt={repo.owner.name}
                src={repo.owner.avatar_url}
                style={{ height: 50, width: 50 }}
              />

              {/* La descripción del repositorio */}
              <div style={{ marginLeft: 10 }}>
                <p><a href={repo.html_url}><b>{repo.name}</b></a></p>
                <p>{repo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

GithubRepos.propTypes = {
  user: PropTypes.string.isRequired,
};

