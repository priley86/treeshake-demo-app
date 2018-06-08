import * as React from 'react';
import { EmptyState } from '../components/EmptyState/EmptyState';

class OrbisPage extends React.Component {
  render() {
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <EmptyState title="Orbis Page" />
      </div>
    );
  }
}

export default OrbisPage;
