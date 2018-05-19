import { h, Component } from 'preact';

export default class Face extends Component {

  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.props.events.on('reset', this.reset);
  }

  componentWillUnmount() {
    this.props.events.off('reset', this.reset);
  }

  flip() {
    this.setState({ flipped: !this.state.flipped });
  }

  reset() {
    this.setState({ flipped: false });
  }

  render(props, state) {
    const flipped = (state.flipped) ? 'flipped' : '';
    return (
      <div class={`face ${flipped}`}
        onClick={this.flip} >
        <img alt={props.name}
          src={`/assets/images/${props.imagePath}`}
        />
        <p class="name">{ props.name }</p>
      </div>
    );
  }

}