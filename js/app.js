
class App extends Component { 
    constructor(props) {
        super(props);
        this.state = {brand: "Ford"};
    }

    render() {
     

        return (
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
                </BrowserRouter>
            </div>            
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);