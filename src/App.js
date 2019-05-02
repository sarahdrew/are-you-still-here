import React, { Component } from 'react';
import ViewOne from "./ViewOne";
//import ViewTwo from "./ViewTwo";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };
  }
  componentDidMount() {
    this.activateModal();

  }


  closeModal = () => {
    console.log(`I'm still here clicked. closeModal state`, this.state)
    this.setState({ showModal: false }, () => {
      this.activateModal();
    })
  }

  activateModal = () => {
    console.log(`activateModal state`, this.state);
    setTimeout(() => this.setState({ showModal: true }), 10000)
  }

  render() {
    return (
      <main>
        <div className="App">
          <h1>Home</h1>
          <p>Lorem ipsum dolor amet post-ironic activated charcoal brooklyn meggings pickled health goth roof party pour-over edison bulb before they sold out knausgaard mumblecore art party everyday carry tofu. Put a bird on it edison bulb waistcoat thundercats vegan mlkshk. Lumbersexual cold-pressed af craft beer, pork belly leggings raw denim farm-to-table knausgaard occupy narwhal cornhole glossier selfies four loko. Cliche photo booth portland locavore plaid. Sartorial roof party unicorn enamel pin waistcoat. Letterpress tumblr blue bottle, heirloom poke ugh cornhole humblebrag kombucha pork belly. Umami meditation bushwick try-hard, beard chia tumblr neutra viral.

        Cray health goth chicharrones 8-bit, sriracha seitan listicle chillwave meditation selfies retro salvia coloring book beard. Tote bag church-key banh mi edison bulb vexillologist trust fund pop-up iceland cronut brunch. Fashion axe vaporware gluten-free, fam selvage chillwave glossier helvetica echo park ugh prism pok pok yuccie. Distillery lo-fi quinoa polaroid man braid vegan green juice, YOLO intelligentsia fashion axe. Dreamcatcher gluten-free lyft heirloom tumeric williamsburg.

        Quinoa pug enamel pin, lumbersexual meh flannel vinyl. Migas selvage irony ramps godard tilde. Polaroid edison bulb meditation, cold-pressed vice butcher af cray typewriter quinoa. Kitsch letterpress 90's artisan messenger bag celiac.

        Twee migas biodiesel portland squid chartreuse jean shorts you probably haven't heard of them tousled chillwave cray. Chicharrones raw denim cliche, tattooed lomo readymade schlitz hot chicken. Schlitz live-edge twee iceland crucifix copper mug, kombucha pitchfork raw denim. Succulents tumeric forage skateboard aesthetic.

        Actually plaid helvetica hashtag tacos. Humblebrag cray wolf, bushwick brunch af sartorial. Microdosing shoreditch tbh hell of pug. Pabst tilde tofu crucifix raw denim, gentrify freegan pinterest venmo williamsburg schlitz scenester YOLO. Migas dreamcatcher neutra messenger bag literally VHS poutine venmo succulents ramps plaid.</p>
        </div>
        {this.state.showModal ? <ViewOne closeModal={this.closeModal} /> : ''}
      </main >
    );
  }
}

export default App;
