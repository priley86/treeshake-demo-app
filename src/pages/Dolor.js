import * as React from 'react';
import { EmptyState } from '../components/EmptyState/EmptyState';

class DolorPage extends React.Component {
  render() {
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <EmptyState title="Dolor Page" />
      </div>
    );
  }
}

export default DolorPage;
