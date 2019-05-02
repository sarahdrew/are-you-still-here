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

  // componentWillMount() {
  //   this.closeModal();
  // }

  closeModal = () => {
    console.log(`I'm still here clicked. closeModal state`, this.state)
    this.setState({ showModal: false })
  }

  activateModal = () => {
    console.log(`activateModal state`, this.state);
    setTimeout(() => this.setState({ showModal: true }), 10000)
  }

  render() {
    return (
      <main>
        <div className="App">
          <h1>This is View One, waiting for the modal to appear</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu massa risus. Donec hendrerit, lectus varius lobortis ultrices, leo urna interdum massa, sed rhoncus sem nulla ut justo. Aliquam aliquam magna urna, quis posuere metus scelerisque eu. Donec quis mauris lacinia, aliquet sem sit amet, venenatis felis. Pellentesque porta odio ut erat aliquet sollicitudin. Cras scelerisque sapien sed viverra maximus. Duis egestas velit nec cursus dignissim. Ut tincidunt risus hendrerit quam scelerisque, non ullamcorper elit rhoncus. Mauris tempor arcu a dui interdum vehicula. Quisque vitae rhoncus neque, eu tempus odio. Donec commodo dictum ligula. Pellentesque porta aliquam viverra. Mauris in diam egestas velit egestas tincidunt. Quisque pellentesque sed urna at dictum. Donec vitae pulvinar arcu. Quisque quis est diam.

Suspendisse nec arcu et ligula blandit hendrerit. Duis non mauris in dui rhoncus imperdiet interdum at velit. Curabitur lacus nibh, sagittis vitae euismod vitae, lobortis ut felis. Vestibulum mattis, odio ut tempor egestas, mauris lectus aliquet quam, at sollicitudin tortor odio id enim. Nunc neque mauris, sodales nec est id, commodo varius risus. Aenean semper vulputate nulla, vel eleifend tortor tempor sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ligula nisi, vehicula quis sem eu, porta tempor metus. Sed gravida laoreet sapien, id posuere dui rhoncus sed.

Vivamus vehicula dolor at scelerisque fringilla. Proin a tincidunt lacus, vitae tempus ligula. Nunc ac metus nec erat accumsan commodo quis quis arcu. Donec sit amet augue a tellus rutrum eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vulputate diam at sem maximus egestas. Cras tincidunt quis lectus quis mollis. Nulla eu euismod felis, vitae bibendum dui. Suspendisse non felis non sapien aliquam vulputate sit amet non arcu.
</p>
        </div>
        {this.state.showModal ? <ViewOne onClick={this.closeModal} /> : ''}
      </main >
    );
  }
}

export default App;
