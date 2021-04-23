import React from 'react';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import KegList from './KegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedBeer: null
    };
  }

  handleClick= () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeer: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleSellingPints = (id) => {
    const chosenBeer = this.state.masterKegList.filter(keg => keg.id === id)[0];
    if (chosenBeer) {
      const newQuantity = (parseInt(chosenBeer.quantity) - 1);
      chosenBeer.quantity = newQuantity
      this.setState({selectedBeer: chosenBeer})
    }
  }

  
  }

  
