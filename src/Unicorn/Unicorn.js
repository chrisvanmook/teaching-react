import React, {Component, PureComponent} from 'react'

class Unicorn extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    alert(`Do I really need to update?, now the name is: ${prevProps.name}`)
  }
  render() {
    const { name, getUnicornHowl, amount } = this.props
    return (
      <div>
        <h1>I'm a unicorn called {name}</h1>
        {amount}
        <button type="button" onClick={() => {
          alert('I howl u hooman')
          getUnicornHowl(`howl from the other side ${amount} times`)
        }}>Let me howl for u!</button>
      </div>
    )
  }
}

export default Unicorn
