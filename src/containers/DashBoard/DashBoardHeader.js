import React , { Component } from 'react';
import { translate } from "react-i18next";

export class  DashBoardHeader extends Component{
    render()
    {
        var { tab, t } = this.props;

    return(
    <div className="mainHeading brdb-none bxs-none">
    <div className="inner_section brd-none cm-flex-center position-relative pdt-16 pdb-10" >
    <a className="mainHeadinga">{t("Manage_Campaigns")}</a>                           
    </div>
    <div className="inner_section cm-flex-center position-relative" >
    <ul className="list-unstyled list-1 nav" id="to_approve_tabs" role="tablist">
    <li className="nav-item">
    <a onClick={()=>{tab.changeTab(0)}} className={tab.active == 0 ?"nav-link active show":"nav-link"} id="pending-tab" >{t("Upcoming_Campaigns")}</a>
    </li>
    <li className="nav-item">
    <a onClick={()=>{tab.changeTab(1)}} className={tab.active == 1 ?"nav-link active show":"nav-link"} id="complete-tab" >{t("Live_Campaigns")}</a>
    </li>
    <li className="nav-item">
    <a onClick={()=>{tab.changeTab(2)}} className={tab.active == 2 ?"nav-link active show":"nav-link"} id="complete-tab" >{t("Past_Campaigns")}</a>
    </li>
    </ul>


    </div>
    </div>)
    }
}


export default translate("translations")(DashBoardHeader);