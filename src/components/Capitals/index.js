import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeCapitalId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)
    return (
      <>
        <div className="bg-container">
          <div className="country-card">
            <h1 className="country-capital-heading">Countries And Capitals</h1>
            <div className="capital-container">
              <select
                className="select-capital"
                value={activeCapitalId}
                onChange={this.onChangeCapital}
              >
                {countryAndCapitalsList.map(eachCapital => (
                  <option
                    key={eachCapital.id}
                    className="option"
                    value={eachCapital.id}
                  >
                    {eachCapital.capitalDisplayText}
                  </option>
                ))}
              </select>
              <span>
                <p className="text">is capital of which country?</p>
              </span>
            </div>
            <p className="country">{country}</p>
          </div>
        </div>
      </>
    )
  }
}
export default Capitals
