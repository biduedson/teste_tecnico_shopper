import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
interface IRatingStarProps {
  rating: number;
}

const RatingStar = ({ rating }: IRatingStarProps) => {
  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Rating name="size-small" value={rating} size="small" />
    </Box>
  );
};

export default RatingStar;
