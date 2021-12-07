import React from "react";
import {
  TextareaAutosize,
  Typography,
  Box,
  Button,
  Paper,
} from "@mui/material";

const Question = ({ handleSubmit, handleChange, question }) => {
  return (
    <Paper elevation={4} sx={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h4">Ask a question.</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Box sx={{ mt: "2rem" }}>
          <TextareaAutosize
            onChange={handleChange}
            value={question.ques}
            minRows={5}
            name="ques"
            style={{ width: "100%", padding: ".5rem" }}
            placeholder="Type question here!"
            required
          />
        </Box>
        <Box sx={{ mt: "2rem" }}>
          <Button type="submit" variant="contained" color="primary">
            Post Question
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Question;
