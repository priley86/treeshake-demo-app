import * as React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from './routes';
import { MastHead } from './components/Nav/MastHead';
import { VerticalNav } from 'patternfly-react';
// import { VerticalNav } from './components/Nav/VerticalNav';
import { Credentials } from './models/credentials';
import './css/App.css';

type Props = {
  history: Array<string>,
  credentials: Credentials
};

type State = {};

class App extends React.Component<Props, State> {
  constructor() {
    super();

    this.menu = routes();
    this.state = {
      aboutShown: false
    };
  }
  handleNavClick = (event: Event) => {
    event.preventDefault();
    let target = (event.currentTarget: any);
    if (target.getAttribute) {
      let href = target.getAttribute('href');
      this.props.history.push(href);
    }
  };

  renderContent = () => {
    const { location } = this.props;
    
    const activeItem = this.menu.find(item => location.pathname === item.to);

    return this.menu.map((item, index) => {
      return (
        <Route key={index} path={item.to} component={item.component}/>
      );
    });
  }

  navigateTo = (path) => {
    const { history } = this.props;
    history.push(path);
  }
  renderMenuItems = () => {
    const { location } = this.props;
    
    const activeItem = this.menu.find(item => location.pathname === item.to);
    
    return this.menu.map(item => {
      return (
        <VerticalNav.Item
          key={item.to}
          title={item.title}
          iconClass={item.iconClass}
          active={item === activeItem || (!activeItem && item.redirect)}
          onClick={() => this.navigateTo(item.to)}
        />
      );
    });
  };

  render() {
    return (
      <div className="layout-pf layout-pf-fixed">
        <VerticalNav persistentSecondary={false}>
          <VerticalNav.Masthead>
            <VerticalNav.Brand />
            />
          </VerticalNav.Masthead>
          {this.renderMenuItems()}
        </VerticalNav>
        <div className="container-pf-nav-pf-vertical">{this.renderContent()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => {
  return {
    credentials: loginReducer
  };
};

export default withRouter(connect(mapStateToProps)(App));
