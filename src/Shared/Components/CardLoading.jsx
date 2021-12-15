import React from "react";
import { Card } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardLoading = () => {
  return (
    <SkeletonTheme baseColor="#151134" highlightColor="#ffffff10">
      <Card bg="dark-lt">
        <Card.Body>
          <Skeleton height="50px" />
          <Skeleton count={4} />
        </Card.Body>
      </Card>
    </SkeletonTheme>
  );
};

export default CardLoading;
