import React , { Component } from 'react';
import DashBoardHeader from './DashBoardHeader';
import DashBoardMain from "./DashBoardMain";
import PricePopupComponent from './PricePopupComponent';


export default class DashBoardComponent extends Component{
    constructor(props){
    super(props);
    this.state={
        tab:{
            active: 0,
            changeTab: (index) => {
            this.state.tab.active = index;
            this.setState({});
            }
        },
        pricePopup:{
            show: false,
            current_campaign:null,
            showPricePopup : (app_campaign) => {
                this.state.pricePopup.current_campaign = app_campaign;
                this.state.pricePopup.show = !this.state.pricePopup.show;
                this.setState({});
            }
        },
      campaignDate:{
          defaultDate: new Date().getTime(),
          setDefaultDate: (date) => {
           this.state.campaignDate.defaultDate = date;
           this.setState({});
          }
      }
    }
    }
    componentDidMount(){
        document.body.classList.add("frontEndChallenge");
    }
    render(){
        var { tab, pricePopup,campaignDate } = this.state;
        return(
            <div className={"main"}>
            <div className="container-fluid">
            <div className="row">
            <div className="main_seaction">
            <DashBoardHeader tab={tab} />
            <DashBoardMain activeTabIndex={tab.active} pricePopup={pricePopup} campaignDate={campaignDate} />
            </div>
            </div>
            </div>
            {pricePopup.show ?
            <PricePopupComponent current_campaign={pricePopup.current_campaign}  pricePopup={pricePopup}/>:""}
            <div className="overlay"></div>
            <div className="overlay2"></div>
            </div>
        )
    }
}