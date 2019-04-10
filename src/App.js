import React, { Component } from "react";
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import heroes from "./heroes.json";

class App extends Component {

  state = {
    heroes,
    clickedHeroes: [],
    points: 0,
    topScore: 0
  };


  endGame = () => {

    if (this.state.points < 11) {

      this.state.points = 0;

      this.state.clickedHeroes = [];

      alert('You Lose! Try Again?');

    }
    else {

      this.state.points = 0;

      this.state.clickedHeroes = [];

      alert('You Win! Try Again?');

    }
  }


  clickHero = id => {

    if (this.state.points < 11) {

      if (this.state.clickedHeroes.includes(id)) {

        this.endGame();

      }
      else {

        this.state.points++;

        this.state.clickedHeroes.push(id);

        for (let i = 0; i < heroes.length; i++) {

          let j = Math.floor(Math.random() * (i + 1));

          [heroes[i], heroes[j]] = [heroes[j], heroes[i]];
        }
      }
    }
    else {

      this.endGame();

    }



    this.setState({ heroes });

  };




  render() {

    return (

      <div>

        <Header>{this.state.points}</Header>

        <Wrapper>

          {this.state.heroes.map(hero => (
            <HeroCard
              clickHero={this.clickHero}
              id={hero.id}
              key={hero.id}
              image={hero.image}
            />
          ))}

        </Wrapper>

      </div>
    );
  }
}

export default App;
