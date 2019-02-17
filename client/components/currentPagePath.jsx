import React from 'react';
import PropTypes from 'prop-types';

export default function CurrentPagePath(props) {
  const { breadcrumbs } = props;
  const breadcrumbEles = breadcrumbs.map((breadcrumb, idx) => {
    const breadcrumbDivider = idx < breadcrumbs.length - 1
      ? (<span className="product-meta breadcrumb-divider">/</span>)
      : null;
    return (
      <span>
        <span className="product-meta breadcrumb">{breadcrumb}</span>
        { breadcrumbDivider }
      </span>
    );
  });
  return (
    <div id="current-page-path">
      { breadcrumbEles }
    </div>
  );
}

CurrentPagePath.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.string),
};

CurrentPagePath.defaultProps = {
  breadcrumbs: [],
};
