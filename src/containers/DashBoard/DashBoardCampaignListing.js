import React, { Component } from 'react';
import {JSON_DATA} from "../Utils/Constant";
import { getDateString, getDaysDifference } from '../Utils/Utils';
import view_price from "../../assets/Images/Price.png";
import file from "../../assets/Images/file.png";
import statistics_report from "../../assets/Images/statistics-report.png";
import {translate} from "react-i18next";


export  class DashBoardCampaignListing extends Component{
    constructor(props){
        super(props);
        this.state = {
            prevDate : this.props.campaignDate.defaultDate
        }
    }
    handleDOBFocus=(event)=> {
        var { handleDateChange} = this;
        document.getElementsByClassName("overlay")[0].classList.add('show');
        window.$("#"+event.target.id).on("select", handleDateChange);
        this.setState({prevDate: this.props.campaignDate.defaultDate});  
    }
    
    handleDateChange = (event) =>{
        var dateOutput = event.target.value;
        var { campaignDate } = this.props;
        var { prevDate } = this.state;
        if(new Date(dateOutput) != new Date(prevDate))
        campaignDate.setDefaultDate(new Date(dateOutput));
    }

    componentDidMount() {
        window.$(".dob_input").dateDropper();
      }

      componentDidUpdate() {
        window.$(".dob_input").dateDropper();
      }
    
    
    getAppCampaignHTML = (campaigns) => {
        var appCampaignHTML = "";
        if(campaigns.length > 0){
        var { pricePopup, campaignDate, t } = this.props;
        var { handleDOBFocus } = this;
        appCampaignHTML = campaigns.map((app_campaign, key)=>{
         return(
            <tr key={key}>
            <td>
            <div  className="cm-flex-center text-16 date">  
            <p >{getDateString(campaignDate.defaultDate)}</p>
            </div>
            <div className="cm-flex-center text-13 text-muted">
            <p >{getDaysDifference(new Date(app_campaign.createdOn), new Date(campaignDate.defaultDate))}</p>
            </div></td>
            <td>
            <div className="desktop-card text-12 max-width-680 p-0 bxs-none" >
            <div className="d-flex justify-content-between">
            <div className="mr-3 max-width-52">
            <img src={app_campaign.image_url} alt="image"/>
            </div>
    
            <div className="d-flex flex-column justify-content-around w-100">
            <div>
            <p className="font-weight-bold text-16 app_name" >{app_campaign.name}</p>
            <p className="text-12 text-muted">{app_campaign.region}</p>
            </div>
            </div>
            </div>
            </div>
            </td>
            <td>
            <a  className="mr-5 text-12 decline" onClick={()=>{pricePopup.showPricePopup(app_campaign)}}>
            <img src={view_price} alt="decline" className="max-width-24"/> 
            <span className="pdl-10 fs-13">{t("View_Pricing")}</span>
            </a>
            </td>
            <td>
            <a  className="mr-5 text-12 decline">
            <img src={file} alt="decline" className="max-width-24" /> 
            <span className="pdl-10 fs-13">{t("CSV")}</span>
            </a>
            <a  className="mr-5 text-12 decline">
            <img src={statistics_report} alt="decline" className="max-width-24"/> 
            <span className="pdl-10 fs-13">{t("Report")}</span>
            </a>
            <a  className="mr-5 text-12 decline">
            <input autoComplete="false"  onClick={handleDOBFocus} data-theme="my-style" type="text" id={"dob_input_"+key} className="dob_input " />
            <span className="pdl-10 fs-13">{t("Schedule_Again")}</span>
            </a>
            </td>
            </tr>
            )
        });
        }
        return appCampaignHTML;
    }

    getUpcomingAppCampaigns = ()=> {
        var { campaignDate } = this.props;
        var upcomingCampaigns = JSON_DATA.data.filter((app_campaign)=>{
        return new Date(app_campaign.createdOn)>new Date(campaignDate.defaultDate); 
        });
        return upcomingCampaigns;
    }
    getLiveCampaigns = () => {
        var { campaignDate } = this.props;
        var liveCampaigns = JSON_DATA.data.filter((app_campaign)=>{
         return getDaysDifference(new Date(app_campaign.createdOn), new Date(campaignDate.defaultDate)).indexOf(" live now")>-1;
        })
        return liveCampaigns;
    }

    getPastCampaigns = () => {
        var { campaignDate } = this.props;
        var pastCampaigns = JSON_DATA.data.filter((app_campaign)=>{
            return (new Date(app_campaign.createdOn) < new Date(campaignDate.defaultDate) && !(getDaysDifference(new Date(app_campaign.createdOn), new Date(campaignDate.defaultDate)).indexOf(" live now")>-1));
        })
        return pastCampaigns;
    }

    render(){
        var { currentState, campaignDate } = this.props;
        var { getUpcomingAppCampaigns, getAppCampaignHTML, getPastCampaigns, getLiveCampaigns } = this;
        var returnHTML , campaigns;
        if(currentState == 0){
            campaigns = getUpcomingAppCampaigns();
        }
        else if(currentState == 1){
            campaigns = getLiveCampaigns();
        } 
        else{
            campaigns = getPastCampaigns();
        }
        returnHTML = getAppCampaignHTML(campaigns); 
        return(<tbody>{returnHTML}</tbody>);
    }
}


export default translate("translations")(DashBoardCampaignListing);