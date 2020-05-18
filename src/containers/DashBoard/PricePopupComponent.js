import React, { Component } from 'react';


export default class PricePopupComponent extends Component{

    componentDidMount(){
        var overlayElement = document.getElementsByClassName("overlay")[0];
        overlayElement.classList.add('show');
    }
    componentWillUnmount(){
        var overlayElement = document.getElementsByClassName("overlay")[0];
        overlayElement.classList.remove('show');
   
    }
    render(){
        var { current_campaign, pricePopup } = this.props;
        return(<div className="hotel-detail-popup mainPopup2 show">
        <div className="mainHeading cm-flex-center mb-0 pl-3 pr-3">
            <h3>Price Details</h3>
        </div>
        <div className="banner-head">
        <div className="desktop-card text-12 max-width-680  bxs-none" >
        <div className="d-flex justify-content-between">
        <div className="mr-3 max-width-81 w-100">
        <img src={current_campaign.image_url} alt="image"/>
        </div>

        <div className="d-flex flex-column justify-content-around w-100">
        <div className="pdt-40">
        <p className="font-weight-bold text-16 app_name" >{current_campaign.name}</p>
        <p className="text-12 text-muted">{current_campaign.region}</p>
        </div>
        </div>
        </div>
        </div>
        <div className="text-13 p-3 ">
                <h3 className="mb-3 text-20 text-bold">Pricing</h3>
                <div className="d-flex justify-content-between pb-2 text-16 mb-2">
                    <div className="d-flex flex-column">
                        <span>1 Week - 1 Month :</span>
                        <span>6 Months :</span>
                        <span>1 Year :</span>
                    </div>
                    <div className="d-flex flex-column text-right">
                        <div>$ 100.00</div>
                        <div>$ 500.00</div>
                        <div>$ 900.00</div>
                    </div>
                </div>
        </div>
        <div className="pt-4 pb-4 text-center">
                <button onClick={()=>{pricePopup.showPricePopup()}} type="submit" className="button col-width cancel">Close</button>
            </div>
        </div>
        </div>
        );
    }
}