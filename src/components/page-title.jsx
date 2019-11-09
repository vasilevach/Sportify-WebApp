// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

type Props = {
  breadCrumbItems: PropTypes.object,
  title: string,
};

const PageTitle = ({ title, breadCrumbItems }: Props) => (
  <Row>
    <Col>
      <div className="page-title-box">
        <div className="page-title-right">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Spotify App</Link>
            </BreadcrumbItem>
            {breadCrumbItems.map((item, index) => (item.active ? (
              <BreadcrumbItem active key={index}>
                {item.label}
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={index}>
                <Link to={item.path}>{item.label}</Link>
              </BreadcrumbItem>
            )))}
          </Breadcrumb>
        </div>
        <h4 className="page-title">{title}</h4>
      </div>
    </Col>
  </Row>
);

export default PageTitle;
