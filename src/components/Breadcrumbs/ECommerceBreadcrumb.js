import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function ECommerceBreadcrumb() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Swag Store</Breadcrumb.Item>
        <Breadcrumb.Item active>All Items</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default ECommerceBreadcrumb;
