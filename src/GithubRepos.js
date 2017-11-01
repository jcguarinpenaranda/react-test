import React from 'react'; 
import superagent from 'superagent';

export default class GithubRepos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
    }
  }

  componentDidMount() {
    this.loadInformation();
  }

  loadInformation() {
    this.getUserRepos(this.props.user)
    .then((repos) => {
      this.setState({ repos })
    })
  }

  /**
   * Gets all the repos for the company
   * @param {string} user
   */
  getUserRepos(user) {
    return superagent.get(`https://api.github.com/orgs/${user}/repos`)
      .then(r => r.body);
  }

  render() {
    return (
      <div>
        {this.state.repos.map((repo) => (
          <div style={{ padding: 10, backgroundColor: 'whitesmoke', marginBottom: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img src={repo.owner.avatar_url} style={{ height: 50, width: 50 }} />
              <div style={{ marginLeft: 10 }}>
                <p><a href={repo.url}><b>{repo.name}</b></a></p>
                <p>{repo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

