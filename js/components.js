const {Component} = React;
const {BrowserRouter, Route, Link, Switch, withRouter, Redirect } = ReactRouterDOM

// header components
const MyHeader = (props) => {    
    return (
        <div className="headerArea">
            <header>
                <div className="headCont">
                    <div className="wrapper">
                        <div className="mainLogo">
                            <figure><img src="./img/logo.png"/></figure>
                        </div>
                        <div className="contactInfo">
                            <h3>Contact Information: <span>0905-553-2322</span></h3>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </header>
         </div>
    );
}

// nav components
const navs = (props) => {
    const navLink = [
        {routeTo:"/", routeName:"Home"},
        {routeTo:"/about-us", routeName:"About"},
        {routeTo:"/services", routeName:"Services"},
        {routeTo:"/blog", routeName:"Blog"},
        {routeTo:"/careers", routeName:"Careers"},
        {routeTo:"/contact-us", routeName:"Contact Us"},
        
    ];
    const navs = navLink.map((link, index) => 
        <li  key={index}><Link to={link.routeTo}>{link.routeName}</Link></li>
    ) 

    return (
        <div id="nav_area">
            <nav>
                <ul>
                    {navs}
                </ul>                
            </nav>
        </div>
    );
}
const MyNav = withRouter(navs)

// banner area
class BannerArea extends Component{
    constructor (props){
        super(props)
    }
    render(){
        return(
            <div id="BannerArea">
                <div className="bnr_cont">
                    Banner
                </div>
            </div>
        );
    }
}
const RBannerArea = withRouter(BannerArea)

class Bottom extends Component {
    constructor(props){
        super(props)
        this.state = {
            servlist : [
                {servName:"Services1", servTxt:"This dummy content is only a sample."},
                {servName:"Services2", servTxt:"This dummy content is only a sample."},
                {servName:"Services3", servTxt:"This dummy content is only a sample."},
            ]
        }
    }

    componentDidMount(){
        console.log("mounted buttom")
    }

    render (){
        
        const lists = this.state.servlist.map((list, index) =>
            <BtmList key={index} servdata={list} />
        )

        

        return(
            <div id="bottom">
                <div className="btm1">
                    <div className="wrapper">
                         <h2>The Bottom</h2>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nam odit. Fuga corporis et veritatis consectetur voluptas porro expedita, aspernatur, consequuntur aliquid aut est, veniam corrupti molestias quibusdam dolor sequi?</p>             

                        <div className="serv_list">
                            {lists}
                       </div>
                                   
                    </div>
                </div>
            </div>
        );
    }
}
const RBottom = withRouter(Bottom)


const BtmList = (props) =>{
    
    const {servdata} = props

    return (
            <section>
                <h3>{servdata.servName}</h3>
                <p>{servdata.servTxt}</p>
                 <Link to={"services/" +servdata.servTxt} >Read More</Link>
            </section> 
    );
}

class FooterForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            formData: {
                fname:"",
                email:"",
                message:""
            }
        }
    }

    frmSubmit = () =>{
       
    }


    render(){
        return (
        
            <div className="ftrForm">
            <h3> Send Us a Message</h3>
                <form>
                    <input type="text" required placeholder="Your Name" />
                    <input type="email" required placeholder="Your Email" />
                    <textarea  placeholder="Your Message"></textarea>
                    <button type="button" onClick= {this.frmSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

class MyFooter extends Component {
    constructor(props){
        super(props)
        this.state = {
             navLink : [
                {routeTo:"/", routeName:"Home"},
                {routeTo:"/about-us", routeName:"About"},
                {routeTo:"/services", routeName:"Services"},
                {routeTo:"/blog", routeName:"Blog"},
                {routeTo:"/careers", routeName:"Careers"},
                {routeTo:"/contact-us", routeName:"Contact Us"},
            ],
            contactInfo :{
                email:"vituallajuphet1114@gmail.com",
                phone:"0905-892-7403",
                address:"M.J Cuenco Ave., Cebu City"
            }
        }
    }
    render(){
        const FooterNav = this.state.navLink.map( (link, index) => 
            <li key={index}> <Link to={link.routeTo} >{link.routeName}</Link> </li>
        );

        const {contactInfo} = this.state
        return (
            <div id="footer_area">
                <footer>
                    <div className="ftr_info">
                        <div className="wrapper">
                            <div className="ftr_sec">
                                <h2>Contact Information</h2>
                                <ul>
                                    <li>Address: {contactInfo.address}</li>
                                    <li>Email: <a href={"mailto:"+contactInfo.email}>{contactInfo.email}</a></li>
                                    <li>Phone:{contactInfo.phone} </li>
                                </ul>
                            </div>
                            <div className="ftr_sec">
                                    <FooterForm />
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="ftr_nav">
                        <ul>
                            {FooterNav}
                        </ul>
                    </div>
                    <div className="copyright">
                        <span>MusicHire</span> - Copyrights 2019 - <a href="petwebme.com">petwebme.com</a>

                    </div>
                </footer>
            </div>
        );
    }
}



