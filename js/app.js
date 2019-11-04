
<<<<<<< HEAD
=======
const Component = React.Component;
const BrowserRouter = ReactRouterDOM.BrowserRouter
const Route = ReactRouterDOM.Route
const Link = ReactRouterDOM.Link
const Switch = ReactRouterDOM.Switch

const withRouter = ReactRouterDOM.withRouter

const MyHeader = (props) => {    
    return (
        <div className="Header">
            <header>asdasd </header> 
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/1">Blog</Link></li>
            </ul>
        </div>
    );
}

const MyHeader2 = withRouter(MyHeader)

class MyFooter extends Component {
    constructor(props){
        super(props)
        this.state = {
            links:[
                {to:"/", name:"Home"},
                {to:"/about", name:"About Us"},
                {to:"/services", name:"Services"}
            ]
        }
    }

    render(){

        const FooterNav = this.state.links.map( (link, index) => 
            <li key={index}> <Link to={link.to} >{link.name}</Link> </li>
        );

        return (
            <div>
                <footer>
                    this is footer
                    <div>
                        <ul>
                            {FooterNav}
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }


}

const Home = () => {
    return (
        <div className="Abohomeut">
            <h2>Home</h2>  
        </div>
    );
}
const AboutUs = (props) => {
    console.log(props)
    return (
        <div className="About">
            
            <h2>About us</h2>  
        </div>
    );
}
const Services = () => {
    return (
        <div className="services">
            <h2>SErvices</h2>  
        </div>
    );
}
const Post = (props) => {
    return (
        <div className="services">
            <h2>Psost</h2>  
        </div>
    );
}

>>>>>>> 606acf61c06426fd9426aeea5523fe4a05ac9ff2
class App extends Component { 
    constructor(props) {
        super(props);
        this.state = {brand: "Ford"};
    }

    render() {
     

        return (
<<<<<<< HEAD
             <div className="app">
                <BrowserRouter>
                    <MyHeader />
                    <MyNav />
                    <RBannerArea />
                    
                     <div className="main_area">
                        <div className="main_cont">
                           <div className="wrapper">
                           <main>
                                <Switch>         
                                    <Route exact path="/" component={Home} /> 
                                    <Route path="/services" component={Services} /> 
                                    <Route path="/about-us" component={AboutUs} /> 
                                    <Route path="/careers" component={Careers} /> 
                                    <Route path="/contact-us" component={Contact} />                               
                                    <Route path="/blog" component={Blog} />                               
                                    {/* <Route path="/services/:info" component={ServicesInfo} />                                */}
                                </Switch> 
                            </main>
                            </div>
                        </div>
                     </div>
                     
                    <RBottom/>
                    <MyFooter />
=======
             <div>
                <BrowserRouter>
                <MyHeader2 />
                   <Switch> 
                    <Route exact path="/home" component={Home} /> 
                    <Route path="/services" component={Services} /> 
                    <Route path="/about" component={AboutUs} /> 
                    <Route path="/:post_id" component={Post} /> 
                   </Switch> 
                 <MyFooter />
>>>>>>> 606acf61c06426fd9426aeea5523fe4a05ac9ff2
                </BrowserRouter>
            </div>            
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);