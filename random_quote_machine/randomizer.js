const quote1 = {
  quote: 'quote1',
  author: 'author1'
}

const quote2 = {
  quote: 'quote2',
  author: 'author2'
}

const quote3 = {
  quote: 'quote3',
  author: 'author3'
}

let arr = [quote1, quote2, quote3];

class MyReact extends React.Component {
  constructor(props) {
    super(props);

    let firstObj = this.randomQuote();

    this.state = {
      quote: firstObj.quote,
      author: firstObj.author
    }
    this.handleClick = this.handleClick.bind(this);
    this.randomQuote = this.randomQuote.bind(this);
  }

  randomQuote() {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  handleClick() {
    let temp = this.randomQuote();
    this.setState({
      quote: temp.quote,
      author: temp.author
    });
  }

  render(){
    return (
      <div>
        <div id="text">
          {this.state.quote}
        </div>
        <div id="author">
          {this.state.author}
        </div>
      <button type="button" class="btn btn-success" id="new-quote" onClick={this.handleClick}>New quote</button>
        <a href="twitter.com/intent/tweet" type="button" class="btn btn-success" id="tweet-quote">
			<i class="fa fa-twitter-square"></i>
		</a>
        </div>
    );
  }
}

ReactDOM.render(
  <MyReact />,
  document.getElementById('quote-box')
);