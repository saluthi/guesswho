import { h, Component } from 'preact';
import { Card } from 'antd';

const { Meta } = Card;

export default class Face extends Component {

  constructor(props) {
    super(props);
    this.state = { flipped: true };
    this.flip = this.flip.bind(this);
  }

  flip() {
    this.setState({ flipped: !this.state.flipped });
  }

  render(props, state) {
    const name = (state.flipped) ? props.name : 'Ghesswho';
    const imagePath = (state.flipped) ? props.imagePath : 'guesswho.jpg';
    return (
      <Card hoverable
        cover={
          <img alt={name}
            src={`/assets/images/${imagePath}`}
          />
        } 
        onClick={ this.flip }>
        <p style={{ textAlign: 'center', fontSize: '0.8em' }}>{ name }</p>
      </Card>
    );
  }

}