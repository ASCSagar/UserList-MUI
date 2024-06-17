import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const UserDetail = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users.users[id]);

  if (!user) return <Typography variant="h6">User not found</Typography>;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={2}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card>
            <CardMedia
              component="img"
              alt={`${user.name.first} ${user.name.last}`}
              height="300"
              image={user.picture.large}
              title={`${user.name.first} ${user.name.last}`}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {user.name.first} {user.name.last}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Email : {user.email}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Phone : {user.phone}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Location : {user.location.city}, {user.location.country}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Date of Birth : {new Date(user.dob.date).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDetail;
