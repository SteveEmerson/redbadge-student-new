import React, { Component } from 'react';

class ClassDeckFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckID: "",
      cardImage: ""
    }
  }

  fetchDeck() {
    // Whats the URL we are going to fetch from
    // We need to store the data

    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

    fetch(url)
    .then(res => res.json())
    .then(json => this.setState({deckID:json.deck_id}));
  }

  fetchCard() {
    const url = `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`

    fetch(url)
    .then(res => res.json())
    .then(json => this.setState({cardImage: json.cards[0].image}));
  }

  // This will take the place of a useEffect ... shortcut is cdm
  componentDidMount() {
    this.fetchDeck();
  }

  // This will also take the place of a useEffect, fires on update ... cdu
  componentDidUpdate(prevProps, prevState) {

    // conditional is used to check if the state we care about updated
    if(prevState.deckID !== this.state.deckID){
      this.fetchCard();
    }
  }

  render() {
    return(
      <div> 
        <img src={this.state.cardImage} alt="card image"/>
      </div>
    )
  }
}

export default ClassDeckFetch;
