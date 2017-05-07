const Container = React.createClass({
  getInitialState: function() {
    return {
      queries: {},
      subqueries: {},
      queryString: ""
    };
  },
  updateQuery: function(query) {
    this.state.queries[query.key] = query.value;
    this.updateQueryString();
  },
  updateSubquery: function(query) {
    this.state.subqueries[query.key] = query.value;
    this.updateQueryString();
  },
  updateQueryString: function() {
    const q = this.state.queries;
    const sq = this.state.subqueries;
    this.state.queryString =
      encodeURIComponent((
        Object.keys(q).reduce(function(z, k, i, o){
          return q[k] !== "" ? z + " " + q[k] : z;
        }, "").slice(1)
        + " " +
        Object.keys(sq).reduce(function(z, k, i, o){
          return sq[k] !== "" ? z + " " + k + ":" + sq[k] : z;
        }, "").slice(1)).trim());
    this.setState({ queryString: this.state.queryString });
  },
  render: function() {
    return (
      <div>
        <p>条件</p>
        <div><Ands onChange={this.updateQuery} /></div>
        <div><Ors onChange={this.updateQuery} /></div>
        <div><Phrase onChange={this.updateQuery} /></div>
        <div><Nots onChange={this.updateQuery} /></div>
        <div><Tag onChange={this.updateSubquery} /></div>
        <div><Lang onChange={this.updateSubquery} /></div>
        <div><From onChange={this.updateSubquery} /></div>
        <div><To onChange={this.updateSubquery} /></div>
        <div><Ref onChange={this.updateSubquery} /></div>
        <div><Since onChange={this.updateSubquery} /></div>
        <div><Until onChange={this.updateSubquery} /></div>
        <p>検索</p>
        <div><Search queryString={this.state.queryString} /></div>
        <div><SearchTweets queryString={this.state.queryString} /></div>
        <div><SearchUsers queryString={this.state.queryString} /></div>
        <div><SearchImages queryString={this.state.queryString} /></div>
        <div><SearchVideos queryString={this.state.queryString} /></div>
        <div><SearchBroadcasts queryString={this.state.queryString} /></div>
        <div><SearchNews queryString={this.state.queryString} /></div>
      </div>);
  }
});

const Search = React.createClass({
  render: function() {
    const url = "https://twitter.com/search?q=" + this.props.queryString;
    return <a href={url}>{url}</a>;
  }
});
const SearchTweets = React.createClass({
  render: function() {
    const url = "https://twitter.com/search?f=tweets&vertical=default&q=" + this.props.queryString;
    return <a href={url}>{url}</a>;
  }
});
const SearchUsers = React.createClass({
  render: function() {
    const url = "https://twitter.com/search?f=users&vertical=default&q=" + this.props.queryString;
    return <a href={url}>{url}</a>;
  }
});
const SearchImages = React.createClass({
  render: function() {
    const url = "https://twitter.com/search?f=images&vertical=default&q=" + this.props.queryString;
    return <a href={url}>{url}</a>;
  }
});
const SearchVideos = React.createClass({
  render: function() {
    const url = "https://twitter.com/search?f=videos&vertical=default&q=" + this.props.queryString;
    return <a href={url}>{url}</a>;
  }
});
const SearchNews = React.createClass({
  render: function() {
    const url = "https://twitter.com/search?f=news&vertical=default&q=" + this.props.queryString;
    return <a href={url}>{url}</a>;
  }
});
const SearchBroadcasts = React.createClass({
  render: function() {
    const url = "https://twitter.com/search?f=broadcasts&vertical=default&q=" + this.props.queryString;
    return <a href={url}>{url}</a>;
  }
});

const Ands = React.createClass({
  _onChange: function (e) {
    this.props.onChange({ key: "ands", value: e.target.value.trim() });
  },
  render: function() {
    return <label> Ands: <input type="text" onChange={this._onChange} /></label>;
  }
});
const Ors = React.createClass({
  _onChange: function (e) {
    this.props.onChange({ key: "ors", value: e.target.value.trim().split(/\s/).join(" OR ") });
  },
  render: function() {
    return <label> Ors: <input type="text" onChange={this._onChange} /></label>;
  }
});
const Phrase = React.createClass({
  _onChange: function (e) {
    this.props.onChange({ key: "phrase", value: "\"" + e.target.value.trim() + "\"" });
  },
  render: function() {
    return <label> Phrase: <input type="text" onChange={this._onChange} /></label>;
  }
});
const Nots = React.createClass({
  _onChange: function (e) {
    this.props.onChange({
      key: "nots",
      value: e.target.value
        .trim().split(/\s/).map(function(v){ return v !== "" ? "-" + v : ""; }).join(" ") });
  },
  render: function() {
    return <label> Nots: <input type="text" onChange={this._onChange} /></label>;
  }
});
const Tag = React.createClass({
  _onChange: function (e) {
    this.props.onChange({ key: "tag", value: e.target.value.trim() });
  },
  render: function() {
    return <label> Tag: <input type="text" onChange={this._onChange} /></label>;
  }
});
const Lang = React.createClass({
  _onChange: function (e) {
    this.props.onChange({ key: "lang", value: e.target.value.trim() });
  },
  render: function() {
    return <label> Lang: <input type="text" onChange={this._onChange} /></label>;
  }
});
const From = React.createClass({
  _onChange: function (e) {
    this.props.onChange({ key: "from", value: e.target.value.trim() });
  },
  render: function() {
    return <label> From: <input type="text" onChange={this._onChange} /></label>;
  }
});
const To = React.createClass({
  _onChange: function (e) {
    this.props.onChange({ key: "to", value: e.target.value.trim() });
  },
  render: function() {
    return <label> To: <input type="text" onChange={this._onChange} /></label>;
  }
});
const Ref = React.createClass({
  _onChange: function (e) {
    this.props.onChange({ key: "ref", value: e.target.value.trim() });
  },
  render: function() {
    return <label> Ref: <input type="text" onChange={this._onChange} /></label>;
  }
});
const Since = React.createClass({
  _onChange: function (e) {
    this.props.onChange({ key: "from", value: e.target.value.trim() });
  },
  render: function() {
    return <label> From: <input type="text" onChange={this._onChange} /></label>;
  }
});
const Until = React.createClass({
  _onChange: function (e) {
    this.props.onChange({ key: "until", value: e.target.value.trim() });
  },
  render: function() {
    return <label> To: <input type="text" onChange={this._onChange} /></label>;
  }
});

React.render(<Container />, document.getElementById('container'));
