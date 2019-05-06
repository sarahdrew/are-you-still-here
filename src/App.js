import React, { Component } from 'react';
import ViewOne from "./ViewOne";
import ViewTwo from "./ViewTwo";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      showViewTwo: false
    };
  }
  componentDidMount() {
    this.activateModal();

  }



  closeModal = () => {
    console.log(`I'm still here clicked. closeModal state`, this.state)
    this.setState({ showModal: false, showViewTwo: false }, () => {
      this.activateModal();
    })
  }

  activateModal = () => {
    console.log(`activateModal state`, this.state);
    this.setState({ showViewTwo: false });
    setTimeout(() => this.setState({ showModal: true }), 10000)

  }
  rerenderHome = () => {
    setTimeout(() => this.setState({ showModal: true, showViewTwo: false }), 10000)
  }

  dismissedModal = () => {
    console.log(`it has been 5 seconds, modal moves to view two`);
    this.setState({ showViewTwo: true, showModal: false });

  }

  render() {
    return (
      <main>
        {this.state.showViewTwo ? <ViewTwo closeModal={this.closeModal} activateModal={this.activateModal} /> :
          <div className="App">
            <header>
              <h1>Home</h1>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non congue felis. Cras elit diam, egestas vel laoreet ac, volutpat vel lacus. Sed lacus quam, feugiat id tortor non, rutrum pharetra nunc. Pellentesque eu posuere dolor. In egestas nunc sit amet nisl rhoncus, non vulputate risus efficitur. Proin sodales, mi quis congue consequat, lacus nisl efficitur arcu, quis tempus elit nisl a libero. Fusce ante metus, scelerisque eu leo id, congue pharetra ex. Sed ut erat quis tellus commodo posuere. In metus libero, scelerisque non placerat eget, consectetur vel purus. Donec ut vestibulum enim. Nam sagittis ex quis leo blandit, ut vulputate ligula finibus. Vestibulum a tempor lacus, et pretium lectus. Sed vel lectus dignissim, accumsan leo eget, consectetur metus. Sed ut nunc lectus. Aliquam quis massa vel dui malesuada ultrices ac a arcu. Quisque congue mauris eget lectus porttitor maximus.</p>

            <p>In sagittis nibh ac purus aliquam aliquet. Sed pellentesque nulla in orci blandit, vitae feugiat turpis iaculis. Vivamus ex nulla, aliquam nec iaculis quis, scelerisque vel sem. Cras lobortis, ipsum at facilisis aliquam, lacus mauris aliquam nulla, vehicula fermentum nisi augue at nunc. Nunc libero nisl, rhoncus quis imperdiet sit amet, gravida sed turpis. Maecenas sit amet justo malesuada, eleifend dolor in, iaculis mauris. Ut nibh lectus, feugiat id arcu eget, feugiat elementum arcu. Aliquam facilisis metus sed enim vestibulum, ut laoreet sapien gravida. Etiam ut hendrerit nisl, eget interdum leo. Nulla vitae justo vel leo gravida eleifend. Nunc et fringilla nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at hendrerit tortor. Donec porta ac neque sit amet fringilla. Duis dictum laoreet pulvinar.</p>

            <p>Nunc mauris risus, hendrerit vel arcu at, imperdiet faucibus nunc. Etiam malesuada dolor vitae ligula luctus, nec viverra purus placerat. Curabitur vel nulla quis ex porttitor congue sit amet ac ipsum. Aenean ultricies tortor ut ipsum feugiat, vel porta arcu luctus. Aenean et lorem consectetur, tincidunt magna et, elementum odio. Fusce laoreet urna ut lacus lobortis scelerisque non faucibus lorem. Aenean sodales nunc ornare volutpat tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sed dignissim magna. Maecenas a feugiat eros. Vivamus erat nisi, volutpat vitae varius aliquam, congue ut eros. Quisque nec nunc pretium, molestie elit a, ultrices leo. </p>

            <p>Nullam efficitur urna fringilla pretium dictum. Nulla eu porttitor magna. Etiam pharetra fringilla laoreet. Vestibulum vel tellus id mi tristique pulvinar. Vivamus iaculis lectus ac aliquam efficitur. Nunc lectus velit, pellentesque at sem quis, ultrices auctor lectus. Donec euismod, enim ac commodo feugiat, mi urna tristique tortor, eu rhoncus eros odio eget felis. In at purus eget libero hendrerit tristique ut vel turpis.</p>

            {this.state.showModal ? <ViewOne closeModal={this.closeModal} dismissedModal={this.dismissedModal} /> : ''}
          </div>}


      </main >
    );
  }
}




export default App;
