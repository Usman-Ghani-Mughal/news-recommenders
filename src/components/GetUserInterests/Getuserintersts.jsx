import React from 'react'
// , {useState}
import '../../componentscss/user_i.css';
// Import Images
import pak_img from '../../Images/pakistan.jpg'
import acident_img from '../../Images/Acident.jpeg'
//import amazing_img from '../../Images/amazing.jpg'
import blog_img from '../../Images/blog.jpg'
import buissness_img from '../../Images/buissness.jpg'
import coruption_img from '../../Images/coruption.jpg'
import court_img from '../../Images/court.jpg'
import entertainment_img from '../../Images/entertainment.jpeg'
import health_img from '../../Images/health.jpg'
import lifestyle_img from '../../Images/lifestyle.jpg'
import offbeat_img from '../../Images/offbeat.jpg'
import sci_and_tech_img from '../../Images/sci_and_tech.jpg'
import speacil_img from '../../Images/speacil.jpeg'
import sports_img from '../../Images/sports.jpg'
import technology_img from '../../Images/technology.jpg'
import world_img from '../../Images/world.jpeg'

//import image_ from '../../Images/6.jpg'
//this.state = {
 // categories : ['PAKISTAN', 'WORLD', 'BUSINESS', 'SPORTS', 'ENTERTAINMENT', 'HEALTH', 'AMAZING', 'SCI & TECH', 'OFFBEAT', 'LIFESTYLE', 'BLOGS','SPECIAL', 'ACCIDENTS',
 // 'CRIME AND CORRUPTION', 'COURTS AND CASES','TECHNOLOGY']
//}
class Getuserintersts extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            pakistanselected : false,
            worldselected : false,
            businessselected : false,
            sportsselected : false,
            entertrainmentselected : false,
            healthselected: false,
            technologyselected: false,
            accidentsselected: false,
            offbeatselected:false,
            lifeStyleselected: false,
            blogsselected: false,
            specialselected:false,
            sciselected: false,
            caseselected: false,
            crimeselected: false,
            // slectedcount:0
        }
        this.slectedcount = 0;
        // Binding all methods with states
        this.pakistanchnageState = this.pakistanchnageState.bind(this);
        this.worldChnageState = this.worldChnageState.bind(this);
        this.businesschnageState = this.businesschnageState.bind(this);
        this.sportschnageState = this.sportschnageState.bind(this);
        this.entertrainmentchnageState = this.entertrainmentchnageState.bind(this);
        this.healthchnageState = this.healthchnageState.bind(this);
        this.technologychnageState = this.technologychnageState.bind(this);
        this.accidentschnageState = this.accidentschnageState.bind(this);
        this.offbeatchnageState = this.offbeatchnageState.bind(this);
        this.lifeStylechnageState = this.lifeStylechnageState.bind(this);
        this.blogschnageState = this.blogschnageState.bind(this);
        this.specialchnageState = this.specialchnageState.bind(this);
        this.sciChnageState = this.sciChnageState.bind(this);
        this.crimechnageState = this.crimechnageState.bind(this);
        this.casechnageState = this.casechnageState.bind(this);

        // binding method for counter
        this.countIncrement = this.countIncrement.bind(this);
        this.countDecrement = this.countDecrement.bind(this);
        // on click method binding
        this.getSelected = this.getSelected.bind(this);
    }

    // ssates update functions
    pakistanchnageState = () =>{this.setState({pakistanselected: !this.state.pakistanselected});}
    worldChnageState = () =>{this.setState({worldselected: !this.state.worldselected});}
    businesschnageState = () =>{this.setState({businessselected: !this.state.businessselected});}
    sportschnageState = () =>{this.setState({sportsselected: !this.state.sportsselected});}
    entertrainmentchnageState = () =>{this.setState({entertrainmentselected: !this.state.entertrainmentselected});}
    healthchnageState = () =>{this.setState({healthselected: !this.state.healthselected});}
    technologychnageState = () =>{this.setState({technologyselected: !this.state.technologyselected});}
    accidentschnageState = () =>{this.setState({accidentsselected: !this.state.accidentsselected});}
    offbeatchnageState = () =>{this.setState({offbeatselected: !this.state.offbeatselected});}
    lifeStylechnageState = () =>{this.setState({lifeStyleselected: !this.state.lifeStyleselected});}
    blogschnageState = () =>{this.setState({blogsselected: !this.state.blogsselected});}
    specialchnageState = () =>{this.setState({specialselected: !this.state.specialselected});}
    sciChnageState = () =>{this.setState({sciselected: !this.state.sciselected});}
    casechnageState = () =>{this.setState({caseselected: !this.state.caseselected});}
    crimechnageState = () =>{this.setState({crimeselected: !this.state.crimeselected});}

    // countIncrement = ()=>{this.setState({slectedcount: this.state.slectedcount+1});}
    // countDecrement = ()=>{this.setState({slectedcount: this.state.slectedcount-1});}

    countIncrement = ()=>{this.slectedcount += 1}
    countDecrement = ()=>{this.slectedcount -= 1}


    // Click function
    getSelected  = (name) =>{
        
        if (this.slectedcount<3)
        {
            if(name==="PAKISTAN"){
                if (this.state.pakistanselected)
                {
                    this.countDecrement();
                    this.pakistanchnageState();
                    this.props.removeCategories(name);
                    
                }
                else
                {
                    this.countIncrement();
                    this.pakistanchnageState();
                    this.props.addCategories(name);
                }

            }else if(name==="WORLD"){
                if(this.state.worldselected)
                {
                    this.countDecrement();
                    this.worldChnageState();
                    this.props.removeCategories(name);
                    
                }
                else
                {
                    this.countIncrement();
                    this.worldChnageState();
                    this.props.addCategories(name);
                }

            }else if(name==="BUSINESS"){
                if(this.state.businessselected){
                    this.countDecrement();
                    this.businesschnageState();
                    this.props.removeCategories(name);
                    
                }
                else
                {
                    this.countIncrement();
                    this.businesschnageState();
                    this.props.addCategories(name);
                }
                
            }else if(name==="SPORTS"){
                if(this.state.sportsselected){
                    this.countDecrement();
                    this.sportschnageState();
                    this.props.removeCategories(name);
                }
                else
                {
                    this.countIncrement();
                    this.sportschnageState();
                    this.props.addCategories(name);
                }

            }else if(name==="ENTERTAINMENT"){
                if(this.state.entertrainmentselected){
                    this.countDecrement();
                    this.entertrainmentchnageState();
                    this.props.removeCategories(name);
                }
                else
                {
                    this.countIncrement();
                    this.entertrainmentchnageState();
                    this.props.addCategories(name);
                }

            }else if(name==="HEALTH"){
                if(this.state.healthselected){
                    this.countDecrement();
                    this.healthchnageState();
                    this.props.removeCategories(name);
                }
                else
                {
                    this.countIncrement();
                    this.healthchnageState();
                    this.props.addCategories(name);
                }
            }else if(name==="SCI"){
                if(this.state.sciselected){
                    this.countDecrement();
                    this.sciChnageState();
                    this.props.removeCategories("SCI & TECH");
                }
                else
                {
                    this.countIncrement();
                    this.sciChnageState();
                    this.props.addCategories("SCI & TECH");
                }

            }else if(name==="OFFBEAT"){
                if(this.state.offbeatselected){
                    this.countDecrement();
                    this.offbeatchnageState();
                    this.props.removeCategories(name);
        
                }
                else
                {   
                    this.countIncrement();
                    this.offbeatchnageState();
                    this.props.addCategories(name);
                }
                

            }else if(name==="LIFESTYLE"){
                if(this.state.lifeStyleselected){
                    this.countDecrement();
                    this.lifeStylechnageState();
                    this.props.removeCategories(name);
                }
                else
                {
                    this.countIncrement();
                    this.lifeStylechnageState();
                    this.props.addCategories(name);
                }

            }else if(name==="BLOGS"){
                if(this.state.blogsselected){
                    this.countDecrement();
                    this.blogschnageState();
                    this.props.removeCategories(name);
                }
                else
                {
                    this.countIncrement();
                    this.blogschnageState();
                    this.props.addCategories(name);
                }

            }else if(name==="SPECIAL"){
                if(this.state.specialselected){
                    this.countDecrement();
                    this.specialchnageState();
                    this.props.removeCategories(name);
                    
                }
                else
                {
                    this.countIncrement();
                this.specialchnageState();
                this.props.addCategories(name);
                }
                
            }else if(name==="ACCIDENTS"){
                if(this.state.accidentsselected){
                    this.countDecrement();
                    this.accidentschnageState();
                    this.props.removeCategories(name);
                    
                }
                else
                {
                    this.countIncrement();
                this.accidentschnageState();
                this.props.addCategories(name);
                }

            }else if(name==="CRIME"){
                if(this.state.crimeselected){
                    this.countDecrement();
                    this.crimechnageState();
                    this.props.removeCategories("CRIME AND CORRUPTION");
                }
                else
                {
                    this.countIncrement();
                this.crimechnageState();
                this.props.addCategories("CRIME AND CORRUPTION");
                }

            }else if(name==="CASE"){
                if(this.state.caseselected){
                    this.countDecrement();
                    this.casechnageState();
                    this.props.removeCategories("COURTS AND CASES");
                }
                else
                {
                    this.countIncrement();
                    this.casechnageState();
                    this.props.addCategories("COURTS AND CASES");
                }

            }else if(name==="TECHNOLOGY"){
                if(this.state.technologyselected){
                    this.countDecrement();
                    this.technologychnageState();
                    this.props.removeCategories(name);
                }
                else
                {
                    this.countIncrement();
                this.technologychnageState();
                this.props.addCategories(name);
                }
            }
        }
        else
        {
            var flag = true;
            if(name==="PAKISTAN"){
                if (this.state.pakistanselected)
                {
                    this.countDecrement();
                    this.pakistanchnageState();
                    this.props.removeCategories(name);
                    flag = false;
                }
            }else if(name==="WORLD"){
                if(this.state.worldselected)
                {
                    this.countDecrement();
                    this.worldChnageState();
                    this.props.removeCategories(name);
                    flag = false;
                }

            }else if(name==="BUSINESS"){
                if(this.state.businessselected){
                    this.countDecrement();
                    this.businesschnageState();
                    this.props.removeCategories(name);
                    flag = false;
                }
            }else if(name==="SPORTS"){
                if(this.state.sportsselected){
                    this.countDecrement();
                    this.sportschnageState();
                    this.props.removeCategories(name);
                    flag = false;
                }
            }else if(name==="ENTERTAINMENT"){
                if(this.state.entertrainmentselected){
                    this.countDecrement();
                    this.entertrainmentchnageState();
                    this.props.removeCategories(name);
                    flag = false;
                }
            }else if(name==="HEALTH"){
                if(this.state.healthselected){
                    this.countDecrement();
                    this.healthchnageState();
                    this.props.removeCategories(name);
                    flag = false;
                }
            }else if(name==="SCI"){
                if(this.state.sciselected){
                    this.countDecrement();
                    this.sciChnageState();
                    this.props.removeCategories("SCI & TECH");
                    flag = false;
                }

            }else if(name==="OFFBEAT"){
                if(this.state.offbeatselected){
                    this.countDecrement();
                    this.offbeatchnageState();
                    this.props.removeCategories(name);
                    flag = false;
                }

            }else if(name==="LIFESTYLE"){
                if(this.state.lifeStyleselected){
                    this.countDecrement();
                    this.lifeStylechnageState();
                    this.props.removeCategories(name);
                    flag = false;
                }
                

            }else if(name==="BLOGS"){
                if(this.state.blogsselected){
                    this.countDecrement();
                    this.blogschnageState();
                    this.props.removeCategories(name);
                    flag = false;
                }
                
            }else if(name==="SPECIAL"){
                if(this.state.specialselected){
                    this.countDecrement();
                    this.specialchnageState();
                    this.props.removeCategories(name);
                    flag = false;
                }
                
            }else if(name==="ACCIDENTS"){
                if(this.state.accidentsselected){
                    this.countDecrement();
                    this.accidentschnageState();
                    this.props.removeCategories(name);
                    flag = false;
                }
                
            }else if(name==="CRIME"){
                if(this.state.crimeselected){
                    this.countDecrement();
                    this.crimechnageState();
                    this.props.removeCategories("CRIME AND CORRUPTION");
                    flag = false;
                }
                
            }else if(name==="CASE"){
                if(this.state.caseselected){
                    this.countDecrement();
                    this.casechnageState();
                    this.props.removeCategories("COURTS AND CASES");
                    flag = false;
                }
            }else if(name==="TECHNOLOGY"){
                if(this.state.technologyselected){
                    this.countDecrement();
                    this.technologychnageState();
                    this.props.removeCategories(name);
                    flag = false;
                }
            }

            if(flag)
            {
                alert('Can not select more then 3');
            }
        }
        
        if(this.slectedcount >= 3)
        {
            this.props.allowSubmit(false);
        }
        else if(this.slectedcount < 3)
        {
            this.props.allowSubmit(true);
        }


    }

    render(){

        // if(this.state.slectedcount === 3){
        //     this.props.allowSubmit(false);
        // }
        return (
            <div className="container-fluid mb-5">
                {/* First Row*/}
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("PAKISTAN")}>
                        <div className="box">
                            <div className= {`our-services settings ${this.state.pakistanselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={pak_img} alt='someimage' className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">Pakistan</h4>
                            </div>
                            
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("WORLD")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.worldselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={world_img} alt='someimage' className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">World</h4>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("BUSINESS")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.businessselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={buissness_img} alt='someimage' className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">Business</h4>
                            </div>
                        </div>
                    </div>
    
                </div>
    
                {/* 2nd Row*/}
                <div className="row">
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("SPORTS")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.sportsselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={sports_img} alt='someimage' className='img-fluid roundimage' /> 
                                </div>
                                <h4 className="cat_name">Sports</h4>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("ENTERTAINMENT")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.entertrainmentselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={entertainment_img} alt='someimage' className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">Entertrainment</h4>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("HEALTH")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.healthselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={health_img} alt='someimage' className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">Health</h4>
                            </div>
                        </div>
                    </div>
    
                </div>
    
                {/* 3 Row*/}
                <div className="row">
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("TECHNOLOGY")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.technologyselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={technology_img} alt='someimage' className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">Technology</h4>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("ACCIDENTS")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.accidentsselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={acident_img} alt='someimage' className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">Accidents</h4>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("OFFBEAT")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.offbeatselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={offbeat_img} alt='someimage' className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">Offbeat</h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
    
    
                
                {/* 4 Row*/}
                <div className="row">
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("LIFESTYLE")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.lifeStyleselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={lifestyle_img} alt='someimage' className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">LifeStyle</h4>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("BLOGS")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.blogsselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={blog_img} alt='someimage' className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">Blogs</h4>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("SPECIAL")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.specialselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={speacil_img} alt='someimage' className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">Special</h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
    
    
                {/* 5 Row*/}
                <div className="row">
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("SCI")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.sciselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={sci_and_tech_img} alt='someimage'  className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">Science And Technology</h4>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("CASE")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.caseselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={court_img} alt='someimage' className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">Courts And Cases</h4>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.getSelected("CRIME")}>
                        <div className="box">
                            <div className={`our-services settings ${this.state.crimeselected ? 'slected': null}`}>
                                <div className="icon"> 
                                    <img src={coruption_img} alt='someimage' className='img-fluid roundimage'/> 
                                </div>
                                <h4 className="cat_name">Crime And Corruption</h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    );

    }
}









































































// function Getuserintersts(props){
    //categories
    // const [pakistanselected, pakistanchnageState] = useState(false)
    // const [worldselected, worldChnageState] = useState(false)
    // const [businessselected, businesschnageState] = useState(false)
    // const [sportsselected, sportschnageState] = useState(false)
    // const [entertrainmentselected, entertrainmentchnageState] = useState(false)
    // const [healthselected, healthchnageState] = useState(false)
    // const [technologyselected, technologychnageState] = useState(false)
    // const [accidentsselected, accidentschnageState] = useState(false)
    // const [offbeatselected, offbeatchnageState] = useState(false)
    // const [lifeStyleselected, lifeStylechnageState] = useState(false)
    // const [blogsselected, blogschnageState] = useState(false)
    // const [specialselected, specialchnageState] = useState(false)
    // const [sciselected, sciState] = useState(false)
    // const [caseselected, casechnageState] = useState(false)
    // const [crimeselected, crimechnageState] = useState(false)

    //number of categories selected
    // const [slectedcount, chnageSelectedCount] = useState(0);
    // const countIncrement = () =>{
    //     chnageSelectedCount(prev=> prev+1);
    // }
    // const countDecrement = () =>{
    //     chnageSelectedCount(prev=> prev-1);
    // }
    // if(slectedcount==3)
    //     {
    //         // 
    //     }
    

    
    
//}



export default Getuserintersts;