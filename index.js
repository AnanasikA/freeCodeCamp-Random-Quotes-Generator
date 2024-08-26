const quotes = [
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
        author: "William Butler Yeats"
    },
    {
        text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "Eleanor Roosevelt"
    },
];

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuote: quotes[0],
        };
        this.getNewQuote = this.getNewQuote.bind(this);
    }

    componentDidMount() {
        this.getNewQuote();
    }

    getNewQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        this.setState({
            currentQuote: quotes[randomIndex]
        });
    }

    render() {
        return (
            <div id="quote-box">
                <div id="text">{this.state.currentQuote.text}</div>
                <div id="author">- {this.state.currentQuote.author}</div>
                <button id="new-quote" onClick={this.getNewQuote}>New Quote</button>
                <a
                    id="tweet-quote"
                    href={`https://twitter.com/intent/tweet?text="${this.state.currentQuote.text}" - ${this.state.currentQuote.author}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Tweet Quote
                </a>
            </div>
        );
    }
}

ReactDOM.render(<QuoteBox />, document.getElementById('root'));
