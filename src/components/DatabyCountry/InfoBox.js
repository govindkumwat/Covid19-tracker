import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className= 'card ' style={{backgroundColor: '#E59935'}}
    >
      <CardContent>
        <Typography  gutterBottom >
          <h4>{title}</h4>
        </Typography>
        <p >
          {cases}
        </p>

        <Typography >
          <h4>
          {total} Total

          </h4>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
