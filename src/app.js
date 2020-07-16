ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {App} />
         <Route path = "home" component = {App} />
         <Route path = "about" component = {App} />
         <Route path = "contact" component = {App} />
      </Route> 
   </Router>
), document.getElementById('root'))