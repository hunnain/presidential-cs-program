import React, { Component } from 'react';
import "./BlockChain.css"
import Banner from "../Banner/Banner"
import Quarters from "../Quarter/Quarter"
import Blog from "../Blog/Blog"
import Footer from "../Footer/Footer"



import introduction from "../../assets/CloudNative/introduction.png"
import linux from "../../assets/CloudNative/linux-logo.png"
import docker from "../../assets/CloudNative/docker.png"
import js from "../../assets/CloudNative/js-logo.png"
import nodejs from "../../assets/CloudNative/nodejs.png"
import git from "../../assets/CloudNative/Git-Icon.png"
import Ansible from "../../assets/CloudNative/Ansible.png"
import kuber from "../../assets/CloudNative/Kubernetes.png"
import aws from "../../assets/CloudNative/aws-logo.png"










class BlockChain extends Component {
  render() {
    return (
      <div className="Artificial-Intelligence-Page">
        <div className="container-fluid p-0">
        <Banner
          className="Rectangle-67 bc"
          heading1="BLOCKCHAIN  SPECIALIST"
          tagline1="A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS 
          GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS"
          courseLine = {`Four Quarters of Blockchain Course Work`}
        />


        <Quarters
            Q1 = {
              {className:"Rectangle-68 b1",para:"Foundations of Blockchain"}
            }
            Q2={
              {className:"Rectangle-68 b2",para:"Smart Contract Development"}
            }
            Q3 = {
              {className:"Rectangle-68 b3",para:"Dapp Development"}
            }
            Q4={
              {className:"Rectangle-68 b4",para:"Advanced Blockchain Topics"}
            }
          />



          <div className="container my-container main-container">
            <div className="box-mega-container cloud">
              <hr />
              <div className="row">
                <div className="col-sm-12">
                <div className="circle-line pink"></div>

                  <Blog 
                    left = {true}
                    data = {
                      {
                        image:introduction,
                        number:"1A",
                        className:"transparent cl-1-t",
                        heading:"Introduction to Cloud Native Computing",
                        para:`Cloud  native  uses  open-source  software  stacks  to  deploy  an  application  as  microservices,  packaging  each  part  into  its  own  containers  and  dynamically  orchestrating  those  containers  to  optimize  resource  utilization.  In  the  last  15  years,  cloud  application  delivery  has  moved  from  being  bound  to  physical  servers  to  running  on  virtual  machines  with  a  full  operating  system  and  now  to  containers  with  Docker  where  developers  can  specify  every  aspect  of  deployment.

                        The  move  has  also  been  a  shift  from  a  heavyweight  application  deployment  cloud  model  to  a  lightweight  cloud  native  model  that  takes  less  time  to  start  up  and  deploy  applications.  Additionally,  there  has  been  a  move  from  being  bound  to  a  single  closed-source  vendor  to  an  open-source  model  with  multiple  vendors,  less  risk  of  lock-in  and  more  choice.  All  the  major  cloud  providers  AWS,  Azure,  Google  Cloud  Platform,  etc.  have  adopted  this  cloud  native  approach.  In  this  module  we  will  learn  about  the  history,  current  status  and  future  of  cloud  native  computing.`
                      }
                    }
                  />
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:linux,
                        number:"1B",
                        className:"transparent cl-1-t",
                        heading:" Introduction to Linux and Bashusing Python",
                        para:`Linux  containers  are  poised  to  take  over  theworld;  we  will  start  this  modulewith  an  introduction  of  Linux  and  the  command  line.  For  many  non-technical  people,  the  command  line  (also  referred  to  as  CLI,  Terminal,  bash,  or  shell)  is  a  place  of  mystery.  However,  you  only  have  to  know  a  handful  of  basic  commands  to  start  feeling  comfortable.  In  this  module  we  will  cover  the  basic  commands  to  get  you  started.` }
                    }
                  />
                  
                   <Blog 
                    left = {true}
                    data = {
                      {
                        image:docker,
                        number:"1C",
                        className:"transparent cl-1-t",
                        heading:"Docker Deep Dive",
                        para:`In  this  part  of  the  course  we  will  introduce  the  basic  mathematical  and  statistical  concepts  that  are  needed  to  practice  data  science  and  understand  deep  learning.We  will  also  implement  these  concepts  in  Python  and  TensorFlow.`}
                    }
                  />
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:js,
                        number:"1D",
                        className:"transparent cl-1-t",
                        heading:"JavaScript/TypeScript Programming",
                        para:`JavaScript  is  the  default  language  of  the  Web  and  the  first  universal  programming  language.  In  this  module  we  will  dig  through  all  the  genuinely  elegant  parts  of  JavaScript,  including:  Syntax,  Objects,  Functions,  Inheritance,  Arrays,  Methods,  etc.  We  will  start  the  quarterby  building  a  solid  foundation  in  Functional  and  Object-Oriented  Programming  using  JavaScript  (ES  2015)and  TypeScript  using Node.js.  Assuming  no  prior  programming  experience  on  the  part  of  the  student  this  module  starts  by  focusing  on  the  fundamentals  of  composing  code  with  JavaScript.  Introduction  to  only  server  based  JavaScript/TypeScript  is  covered  i.e.  Node.js.  You'll  learn  about  the  syntax  and  structure  of  the  language  including  operators  and  expressions,  control  structures,  methods,  and  arrays  using  Node.`}
                    }
                  />
                  <Blog 
                    left = {true}
                    data = {
                      {
                        image:nodejs,
                        number:"2A",
                        className:"grey cl-2-t",
                        heading:" Developing Microservices using Node.js and Express",
                        para:`This  moduleteaches  you  how  to  build  microservices  using Node.js.  It  starts  by  introducing  Node’s  powerful  traits  and  shows  you  how  they  map  to  the  features  of  microservices  using  JavaScript.  You’ll  explore  key  development  techniques,  meet  the  rich  ecosystem  of  companion  tools  and  libraries,  and  get  a  glimpse  into  its  inner  workings.  In  recent  years  REST  (REpresentational  State  Transfer)  hasemerged  as  the  standard  architectural  design  for  web  services  and  web  APIs.  In  this  module  we  are  going  to  show  you  how  easy  it  is  to  create  a  RESTful  web  service  using Node.js, TypeScript  and  the  Express  microframework.  We  will  also  learn  gRPC  and  GraphQLbased  microservices.  By  the  end  of  the  module,  you’ll  be  able  touse  JavaScript/Typescriptto  build  a  Node  microserviceand  know  how  to  test  it,  hook  it  up  to  a  database,  and  automate  the  developmentprocess.`}
                    }
                  />
                   <Blog 
                    left = {false}
                    data = {
                      {
                        image:git,
                        number:"2B",
                        className:"grey cl-2-t",
                        heading:"Version Control with Git",
                        para:`You  won’t  find  a  top  programmer,  clouddeveloper,  or  AI  engineer  who  doesn’t  use  version  control.  Because  it  helps  you  produce  better  results  and  makes  collaboration  easy.  Around  the  world,  in  teams  large  and  small,  Git  is  an  essential  part  of  the  tool  chain.  We  will  start  be  covering  Gitprotocoland  Githubservices.`}
                    }
                  />
                  
                  <Blog 
                    left = {true}
                    data = {
                      {
                        image:Ansible,
                        number:"2C",
                        className:"grey cl-2-t",
                        heading:" Cloud Automation using Ansible  ",
                        para:`Ansibleis  an  open-source  IT  automation  engine  which  can  remove  drudgery  from  your  work  life,  and  will  also  dramatically  improve  the  scalability,  consistency,  and  reliability  of  your  IT  environment.  In  this  module,  we’ll  start  to  explore  how  to  automate  repetitive  cloudadministration  tasks  using  Ansible.`
                      }
                    }
                  />
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:kuber,
                        number:"3A",
                        className:"grey cl-3-t",
                        heading:" Kubernetes in Practice",
                        para:`The  Kubernetes  container  orchestration  system  safely  manages  the  structure  and  flow  of  a  distributed  application,  organizing  containers  and  services  for  maximum  efficiency.  Kubernetes  serves  as  an  operating  system  for  your  clusters,  eliminating  the  need  to  factor  the  underlying  network  and  server  infrastructure  into  your  designs.In  this  quarter  we  will  teachyou  to  use  Kubernetes  to  deploy  container-based  distributed  applications.We  willstart  with  an  overview  of  Docker  and  Kubernetes  before  building  your  first  Kubernetes  cluster.  We’ll  gradually  expand  your  initial  application,  adding  features  and  deepening  your  knowledge  of  Kubernetes  architecture  and  operation.  We’ll  explore  high-value  topics  like  monitoring,  tuning,  and  scaling.By  the  end  of  the  quarter  you  will  be  able  to  appear  in  the  Certified  Kubernetes  Application  Developer  (CKAD)exam.
                        `
                      }
                    }
                  />
                     <Blog 
                    left = {true}
                    data = {
                      {
                        image:aws,
                        number:"4A",
                        className:"grey cl-3-t",
                        heading:"Amazon Web Services Application Development",
                        para:`In  this  quarter  we  will  develop  an  understanding  of  core  AWS  services,  uses,  and  basic  AWS  architecture  best  practices.We  will  developproficiency  in  developing,  deploying,  and  debugging  cloud-based  applications  using  AWS.We  will  develop  the  ability  to  use  the  AWS  service  APIs,  AWS  CLI,  and  SDKs  to  write  applicationsand  understanding  of  the  AWS  shared  responsibility  model.  We  will  also  focus  on  understanding  of  application  lifecycle  management,  ability  to  use  a  CI/CD  pipeline  to  deploy  applications  on  AWS,  and  ability  to  write  code  using  AWS  security  best  practices.  Proficiency  writing  code  for  serverless  applicationsand  understanding  of  the  use  of  containers  in  the  development  processwill  also  be  covered  in  detail.  By  the  end  of  the  quarter  you  will  be  able  to  appear  in  the  AWS  Certified  Developer  –Associateexam.`
                      }
                    }
                  />
                   
                  
                  {/* <div className="btn-Grp">
                        
                        <button className="Rectangle-60 curr cl-cr" type="submit" >Download Curriculum</button>   
                        <button className="Rectangle-60 apply" type="submit" >Apply</button>                  


                  </div> */}
                </div>

                
              </div>
            </div>
          </div>


        </div>

        </div>
    );
  }
}

export default BlockChain;
