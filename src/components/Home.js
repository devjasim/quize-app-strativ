import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import Question from "./Question";

const Home = () => {
  const [question, setQuestion] = useState({
    ques: "",
    answer: {
      ans: "",
    },
  });

  const [userData, setUserData] = useState();

  const [getQuestion, setGetQuestion] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setQuestion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let questionArr = [];

    if (!localStorage.getItem("questinArray")) {
      questionArr.push(question);
      localStorage.setItem("questinArray", JSON.stringify(questionArr));
    } else {
      questionArr = JSON.parse(localStorage.getItem("questinArray"));
      questionArr.push(question);
      localStorage.setItem("questinArray", JSON.stringify(questionArr));
    }

    setQuestion({
      ques: "",
    });

    await setGetQuestion(JSON.parse(localStorage.getItem("questinArray")));
  };

  useEffect(() => {
    setGetQuestion(JSON.parse(localStorage.getItem("questinArray")));
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  // Handle delete
  const handleDelete = async (index) => {
    await getQuestion.splice(index, 1);
    await localStorage.setItem("questinArray", JSON.stringify(getQuestion));
    await setGetQuestion(JSON.parse(localStorage.getItem("questinArray")));
  };

  // Hanlde Edit
  const handleEdit = (event) => {
    event.preventDefault();

    let data = JSON.parse(localStorage.getItem("questinArray"));

    data = data.map((value) => {
      // check if this is the value to be edited
      if (value.ques === this.props.email) {
        // return the updated value
        return {
          ...value,
          ques: question.ques,
        };
      }
      // otherwise return the original value without editing
      return value;
    });
    localStorage.setItem("data", JSON.stringify(data));
    this.props.updateList(data);
  };

  return (
    <Grid justifyContent="center" container spacing={4}>
      <Grid item xs={12} md={8} lg={12}>
        <Question
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          question={question}
        />

        <Box sx={{ mt: "2rem" }}>
          <Typography sx={{ mb: "1rem" }} variant="h5">
            List of question.
          </Typography>
          {(getQuestion || []).map((item, index) => (
            <Paper
              key={index}
              elevation={4}
              sx={{ mb: "1rem", padding: "1rem" }}
            >
              <Typography> {item.ques} </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                {userData?.role === "admin" && (
                  <Box>
                    <IconButton
                      onClick={() => handleDelete(index)}
                      color="warning"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      sx={{ ml: "2rem" }}
                      color="info"
                      aria-label="delete"
                    >
                      <EditIcon />
                    </IconButton>
                  </Box>
                )}
                <Button
                  component={Link}
                  to={`/answers/${index}`}
                  color="primary"
                  variant="contained"
                >
                  Answer
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
