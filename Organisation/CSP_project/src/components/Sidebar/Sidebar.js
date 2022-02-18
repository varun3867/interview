import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import classes from '../Sidebar/Icon.css';
import dashboardicon from '../../assets/Images/dashboard.png';
import healthcheck from '../../assets/Images/healthcheck.png';
import networkmap from '../../assets/Images/network map.png';
import history from '../../assets/Images/history icon.png';
import user from '../../assets/Images/user.png';
import chart from '../../assets/Images/chartIcon.jpg';
import dummy1 from '../../assets/Images/dummy1.jpg';
import dummy2 from '../../assets/Images/dummy2.jpg';
// import dummy3 from '../../assets/Images/dummy3.jpg';
import down from '../../assets/Images/down.png';
import up from '../../assets/Images/up.png';

let style;
class Icon extends Component {
  
  state = {
    show:false,
    icon:""
  }

  changeshow=(icon) => {
    this.setState({show:false})
  }

  upArrowHandler = (icon) =>{
    // this.setState({upicon:true,up:true,down:false})
    if(icon === "icons5"){
      this.setState({icon:"icons4"})
    }
    else if(icon === "icons4"){
      this.setState({icon:"icons3"})
    }
    else if(icon === "icons3"){
      this.setState({icon:"icons2"})
    }
    else if(icon === "icons2"){
      this.setState({icon:"icons1"})
    }
  }
  downArrowHandler = (icon) =>{
    // this.setState({upicon:false,down:true,up:false})
   
    if(icon === "icons1"){
      this.setState({icon:"icons2"})
    }
    else if(icon === "icons2"){
      this.setState({icon:"icons3"})
    }
    else if(icon === "icons3"){
      this.setState({icon:"icons4"})
    }
    else if(icon === "icons4"){
      this.setState({icon:"icons5"})
    }
  }
  styles = () =>{
    style={
      borderRadius: 50,
      boxShadow: "inset 3 5 5 grey"
    }
  }
  render()
  {  
    const icons1 = (
      <div className={classes.sidebar}>
        <div className={classes.Paradashboard} ><NavLink  to = "/Dashboardmain" activeClassName={classes.activelink}><img src={dashboardicon}  
            onClick={()=>this.changeshow("icons1")}    alt="hello workong" /></NavLink></div>
        <div className={classes.Para}><NavLink to={"/networkmap"} activeClassName={classes.activelink}><img src={networkmap}
            onClick={()=>this.changeshow("icons1")}  alt="hello workong"/></NavLink></div>
        <div className={classes.Par}><NavLink to="/healthcheck" activeClassName={classes.activelink}><img src={healthcheck} 
            onClick={()=>this.changeshow("icons1")}  alt="hello workong"/></NavLink></div>
        <div className={classes.Para}><NavLink to="/history" activeClassName={classes.activelink}><img src={history} 
            onClick={()=>this.changeshow("icons1")} alt="hello workong"/></NavLink></div>
        <div className={classes.Arrows} style={{marginLeft:2}}><img src={down}           
            onClick={() => this.downArrowHandler("icons1")}   className={classes.Image} alt="Down Arrow" /></div>
      </div>
    )
    const icons2 = (
      <div className={classes.sidebars}>
        <div className={classes.Arrows} style={{marginLeft:2}} ><img src={up}  className={classes.Image}             
            onClick={() => this.upArrowHandler("icons2")}  alt="Up Arrow" /></div>
        <div className={classes.Paras}><NavLink to={"/networkmap"} activeClassName={classes.activelink}><img src={networkmap}
          onClick={()=>this.changeshow("icons2")}  alt="hello workong"/></NavLink></div>
        <div className={classes.Paras}><NavLink to="/healthcheck" activeClassName={classes.activelink}><img src={healthcheck} 
          onClick={()=>this.changeshow("icons2")}  alt="hello workong"/></NavLink></div>
        <div className={classes.Paras}><NavLink to="/history" activeClassName={classes.activelink}><img src={history} 
          onClick={()=>this.changeshow("icons2")} alt="hello workong"/></NavLink></div>
        <div className={classes.Paras}><NavLink to="/user" activeClassName={classes.activelink}><img src={user}
          onClick={()=>this.changeshow("icons2")}  alt="hello workong"/></NavLink></div>
        <div className={classes.Arrows} style={{marginLeft:2}}><img src={down}  className={classes.Image}         
          onClick={() => this.downArrowHandler("icons2")}   alt="Down Arrow" /></div>
      </div>
    )
    const icons3 = (
      <div className={classes.sidebars}>
         <div className={classes.Arrows} style={{marginLeft:2}} ><img src={up} className={classes.Image}             
            onClick={() => this.upArrowHandler("icons3")}    alt="Up Arrow" /></div>
        <div className={classes.Parass}><NavLink to="/healthcheck" activeClassName={classes.activelink}><img src={healthcheck} 
          onClick={()=>this.changeshow("icons3")}  alt="hello workong"/></NavLink></div>
        <div className={classes.Parass}><NavLink to="/history" activeClassName={classes.activelink}><img src={history} 
          onClick={()=>this.changeshow("icons3")} alt="hello workong"/></NavLink></div>
        <div className={classes.Parass}><NavLink to="/user" activeClassName={classes.activelink}><img src={user}
          onClick={()=>this.changeshow("icons3")}  alt="hello workong"/></NavLink></div>
        <div className={classes.Parass}><NavLink to="/chart" activeClassName={classes.activelink}><img src={chart}
          onClick={()=>this.changeshow("icons3")}  alt="Chart Display"/></NavLink></div>
        <div className={classes.Arrows} style={{marginLeft:2}}><img src={down} className={classes.Image}           
          onClick={() => this.downArrowHandler("icons3")}    alt="Down Arrow" /></div>
      </div>
    )
    const icons4 = (
      <div className={classes.sidebars}>
         <div className={classes.Arrows} style={{marginLeft:2}} ><img src={up} className={classes.Image}             
            onClick={() => this.upArrowHandler("icons4")}    alt="Up Arrow" /></div>
        <div className={classes.Parassss}><NavLink to="/history" activeClassName={classes.activelink}><img src={history} 
          onClick={()=>this.changeshow("icons4")} alt="hello workong"/></NavLink></div>
        <div className={classes.Parassss}><NavLink to="/user" activeClassName={classes.activelink}><img src={user}
          onClick={()=>this.changeshow("icons4")}  alt="hello workong"/></NavLink></div>
        <div className={classes.Parassss}><NavLink to="/chart" activeClassName={classes.activelink}><img src={chart}
          onClick={()=>this.changeshow("icons4")}  alt="Chart Display"/></NavLink></div>
        <div className={classes.Parassss}><img src={dummy1}
          onClick={()=>this.changeshow("icons4")}  alt="Dummy1 Display"/></div>
        <div className={classes.Arrows} style={{marginLeft:2}}><img src={down} className={classes.Image}           
          onClick={() => this.downArrowHandler("icons4")}    alt="Down Arrow" /></div>
      </div>
    )
    const icons5 =(
      <div className={classes.sidebars}>
         <div className={classes.Arrows} style={{marginLeft:2}} ><img src={up}  className={classes.Image}            
            onClick={() => this.upArrowHandler("icons5")}    alt="Up Arrow" /></div>
        <div className={classes.Parasz}><NavLink to="/user" activeClassName={classes.activelink}><img src={user}
          onClick={()=>this.changeshow("icons5")}  alt="hello workong"/></NavLink></div>
        <div className={classes.Parasz}><NavLink to="/chart" activeClassName={classes.activelink}><img src={chart}
          onClick={()=>this.changeshow("icons5")}  alt="Chart Display"/></NavLink></div>
        {/* Dummy Icons */}
        <div className={classes.Parasz}><img src={dummy1}
          onClick={()=>this.changeshow("icons5")}  alt="Dummy1 Display"/></div>
        <div className={classes.Parasz}><img src={dummy2}
          onClick={()=>this.changeshow("icons5")}  alt="Dummy2 Display"/></div>
      </div>
    )
          
    return(
      <div>
        {/* Up Arrow */}
          {/* {this.state.up ? null :<div className={classes.Arrows} style={{marginLeft:8}} ><img src={up}              
            onClick={this.upArrowHandler}    alt="Up Arrow" /></div> }  */}
        {/* end */}

        {/* {this.state.upicon ? icons1 : icons2} */}

          {this.state.icon === "icons5" ? icons5 : 
           (this.state.icon === "icons2" ? icons2 :
            (this.state.icon === "icons3" ? icons3 :
             (this.state.icon === "icons4" ? icons4 : icons1)))}

        {/* Down Arrow */}
          {/* {this.state.down ? null :<div className={classes.Arrows} style={{marginLeft:6}}><img src={down}            
            onClick={this.downArrowHandler}    alt="Down Arrow" /></div>} */}
        {/* end */}
      </div>
    )
  }
};

export default Icon;
