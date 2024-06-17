import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUsers from "../store/action";
import {
  CircularProgress,
  Typography,
  Box,
  Avatar,
  Button,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (status === "loading")
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  if (status === "failed")
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h6" color="error">
          Error loading users: {error}
        </Typography>
      </Box>
    );

  const columns = [
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => <Avatar src={params.value} />,
    },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    {
      field: "country",
      headerName: "Country",
      width: 150,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>{params.value}</span>
        </div>
      ),
    },
    { field: "dob", headerName: "Date of Birth", width: 150 },
    {
      field: "details",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/user/${params.id}`)}
        >
          View
        </Button>
      ),
    },
  ];

  const rows = users.map((user, index) => ({
    id: index,
    avatar: user.picture.medium,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    phone: user.phone,
    country: user.location.country,
    dob: new Date(user.dob.date).toLocaleDateString(),
  }));

  return (
    <Box paddingX={2} paddingTop={2} paddingBottom={isMobile ? 10 : 4}>
      <Typography variant="h6" gutterBottom>
        User Lists :
      </Typography>
      <Divider />
      <Box
        marginTop={2}
        style={{ height: isMobile ? "60vh" : 400, width: "100%" }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          autoHeight
          headerClassName="customHeader"
          rowClassName="customRow"
        />
      </Box>
    </Box>
  );
};

export default UserList;
