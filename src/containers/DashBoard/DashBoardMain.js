import React, { Component } from 'react';
import DashBoardCampaignListing from "./DashBoardCampaignListing";
import { translate } from "react-i18next";

export  class DashBoardMain extends Component{

    render(){

        var { activeTabIndex, pricePopup, campaignDate,t } = this.props;
        return(
        <div className="inner_section">
        <div className="tab-content" id="pending-tabContent" >
        <div className="tab-pane fade" id="pending" role="tabpanel" aria-labelledby="pending-tab">
        </div>
        <div className="tab-pane fade active show" id="complete" role="tabpanel" aria-labelledby="complete-tab" >
        <div className="table-responsive">
        <table className="table">
        <thead className="bg-default">
        <tr>
        <th scope="col" className={"col1"} >{t("Date")}</th>
        <th scope="col" className={"col2"}>{t("Campaign")}</th>
        <th scope="col" className={"col3"}>{t("View")}</th>
        <th scope="col" className={"col4"}>{t("Actions")}</th>
        </tr>
        </thead>
        <DashBoardCampaignListing pricePopup={pricePopup} currentState={activeTabIndex} campaignDate={campaignDate} />
        </table>
        </div>
        </div>
        </div>
        </div>
        )
    }
}

export default translate("translations")(DashBoardMain);