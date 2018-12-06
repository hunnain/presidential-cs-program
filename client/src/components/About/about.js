import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  bodyBackground: {
    backgroundColor:"#EEEEEE",
  },
  presidentImg: {
    marginTop:"6%",
    paddingLeft:"110%",
  },
  presidentHeading :{
    fontFamily : "Serif",
    fontSize:"35px",
    color:"#353535",
    paddingLeft:"20%",
  },
  presidentSecondHeading: {
    letterSpacing:"3px",
    paddingTop:"0%",
    fontFamily : "Serif",
    fontSize:"28px",
    color:"#353535",
    paddingLeft:"20%"
  },
  presidentInformation: {
    letterSpacing:"1px",
    fontFamily : "Serif",
    color:"#404040",
    paddingLeft:"20%",
    fontSize:"22px",
    textAlign: "justify",
    textSpacing: "20px"
  }
});

class About extends Component {
 
  render() {
    const { classes } = this.props;
    return (
    <div className={classes.root}>
      {/* Body */}
      <div className={classes.bodyBackground}>
        <Grid container spacing={24}>
            <Grid item xs={7}>
              <h2 className={classes.presidentHeading}>Dr. Arif R Alvi</h2>
              <h3 className={classes.presidentSecondHeading}>President of Pakistan</h3>
              <p className={classes.presidentInformation}>Arif-ur-Rehman Alvi, born 29 August 1949 is a Pakistani politician who is the 13th and current President of Pakistan, in office since 9 September 2018. He was a member of the National Assembly of Pakistan from June 2013 to May 2018 and again from August to September 2018. A founding member of Pakistan Tehreek-i-Insaf (PTI), Alvi was elected as President of Pakistan on 4 September 2018 following the presidential election.</p>
              <p className={classes.presidentInformation}>Dr. Alvi did BDS from Lahore and was declared the ‘Best Graduate’ of the University. He underwent his first postgraduate training for two years at the University of Michigan, where he was awarded Master of Science in Prosthodontics (MS). He was the first Pakistani to have acquired this professional qualification. In 1982 he joined the two-year Orthodontic training program at the University of Pacific in San Francisco where was awarded the Master of Science in Orthodontics (MSD). Dr. Alvi was again the first Pakistani to specialize in Orthodontics and is also the only Pakistani who is a specialist not in one, but two major fields of dentistry. In 1995 he was awarded Diplomate American Board of Orthodontists and became one of ten Asians and the only Muslim, Pakistani, or SAARC dentist to have achieved this level of qualification.
              Professional achievements: Dr. Alvi has been the President of the Pakistan Dental Association. He was Chairman of the first Pakistan International Dental Conference in 1981. In 1987 too he was Chairman of the Third Pakistan International Dental Conference which was inaugurated by Prime Minister Junejo. He was the Patron of the Fifth Pakistan International Dental Conference inaugurated by the President of 
              Pakistan and the Chairman of the 28th Asia Pacific Dental Congress. Dr. Arif was awarded the Fellowships of The International College of Dentists, The American College of Dentists and The Pierre Fauchard Academy in recognition of his outstanding academic, clinical and professional achievements. He is the Dean of the Faculty of Orthodontics of the College of Physicians and Surgeons Pakistan.</p>
              <h3 className={classes.presidentSecondHeading}>Academics:</h3>
              <p className={classes.presidentInformation}>BDS (Dentistry) from Lahore affiliate from De'Montmorency College of Dentistry</p>
              <p className={classes.presidentInformation}>Master of Science degree in Prosthodontics from the University of Michigan</p>
              <p className={classes.presidentInformation}>Master of Science in Orthodontics in from University of the Pacific, San Francisco</p>
            </Grid>
            <Grid item xs={2} className={classes.presidentImg}>
                <img src={require("./assets/images/presidentarifalvi.png")} alt="President Dr. Arif R Alvi" />
            </Grid>
        </Grid>
      </div>
    </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(About);
