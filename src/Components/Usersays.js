import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";



const UserCard = ({value,user}) => {
  return (
    <>
          <Card className="user-card"
            sx={{
              width:'33.33%',
              borderRadius: "24px",
              boxShadow:
                "0px 3px 1px -2px rgba(58, 53, 65, 0.2), 0px 2px 2px 0px rgba(58, 53, 65, 0.14), 0px 1px 5px 0px rgba(58, 53, 65, 0.12);",
            }}
          >
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <h3 className="user-set">{value}</h3>
                <p className="user-set1">{user}</p>
              </Typography>
            </CardContent>
          </Card>
    
      
    </>
  );
};

export default UserCard;
