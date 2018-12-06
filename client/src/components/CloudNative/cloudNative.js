import React, { Component } from 'react';
import "./cloudNativeStyle.css"
import Banner from "../Banner/Banner"
import Quarters from "../Quarter/Quarter"
import Blog from "../Blog/Blog"
import Footer from "../Footer/Footer"



import int from "../../assets/CloudNative/int.png"



class CloudNative extends Component {
  render() {
    return (
      <div className="Artificial-Intelligence-Page">
        <div className="container-fluid p-0">
        <Banner
          className="Rectangle-67 cl-b"
          heading="Cloud Native Computing &
          Amazon Web Services (AWS) Specialist"
          tagline=" AONE  YEARCLOUD  COMPUTINGPROGRAM  DESIGNED  FORABSOLUTE  BEGINNERS
          GETTING  PAKISTANREADY  FOR  THE  NEW  ERA  OF  MICROSERVICES  AND  MULTI-CLOUD  NATIVE  COMPUTING  
          ON  AMAZON  AWS,  MICROSOFT  AZURE,  AND  GOOGLE  CLOUDPLATFORM"
          courseLine = {`A Two-Semester AI Program in Data Science
          Machine Learning, and Deep Learning`}
        />


        <Quarters
            Q1 = {
              {className:"Rectangle-68 c1",para:"Cloud  Native  Computing Foundations"}
            }
            Q2={
              {className:"Rectangle-68 c2",para:"Developing  Cloud  Native Microservices"}
            }
            Q3 = {
              {className:"Rectangle-68 c3",para:"Kubernetes  in  Practice"}
            }
            Q4={
              {className:"Rectangle-68 c4",para:"AWS  Application  Development"}
            }
          />



          <div className="container my-container main-container">
            <div className="box-mega-container">
              <hr />
              <div className="row">
                <div className="col-sm-12">
                <div className="circle-line"></div>

                  <Blog 
                    left = {true}
                    data = {
                      {
                        image:int,
                        number:"1A",
                        className:"transparent",
                        heading:"Introduction to Cloud Native Computing",
                        para:`Cloud  native  uses  open-source  software  stacks  to  deploy  an  application  as  microservices,  packaging  each  part  into  its  own  containers  and  dynamically  orchestrating  those  containers  to  optimize  resource  utilization.  In  the  last  15  years,  cloud  application  delivery  has  moved  from  being  bound  to  physical  servers  to  running  on  virtual  machines  with  a  full  operating  system  and  now  to  containers  with  Docker  where  developers  can  specify  every  aspect  of  deployment.

                        The  move  has  also  been  a  shift  from  a  heavyweight  application  deployment  cloud  model  to  a  lightweight  cloud  native  model  that  takes  less  time  to  start  up  and  deploy  applications.  Additionally,  there  has  been  a  move  from  being  bound  to  a  single  closed-source  vendor  to  an  open-source  model  with  multiple  vendors,  less  risk  of  lock-in  and  more  choice.  All  the  major  cloud  providers  AWS,  Azure,  Google  Cloud  Platform,  etc.  have  adopted  this  cloud  native  approach.  In  this  module  we  will  learn  about  the  history,  current  status  and  future  of  cloud  native  computing.`
                      }
                    }
                  />

                    

                  
                  <div className="btn-Grp">
                        
                        <button className="Rectangle-60 curr cl-cr" type="submit" >Download Curriculum</button>   
                        <button className="Rectangle-60 apply" type="submit" >Apply</button>                  


                  </div>
                </div>

                
              </div>
            </div>
          </div>


        </div>

        </div>
    );
  }
}

export default CloudNative;
