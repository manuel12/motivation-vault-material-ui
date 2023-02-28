import React from "react";
import { Box, Typography } from "@material-ui/core";

const Post = () => {
  return (
    <Box
      id="post-container"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        maxHeight: "600px",
        minHeight: "200px",
        margin: "20px 0",
        overflow: "hidden",
      }}
    >
      <Box
        id="image-container"
        sx={{
          backgroundColor: "#f4f4f4",
          border: "5px solid #f4f4f4",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
          width: "100%",
          maxWidth: "50%",
          padding: "5px",
          textAlign: "center",
          float: "left",
        }}
      >
        <img
          src="https://i.ytimg.com/vi/0kPfOCZTuKY/hq720.jpg"
          alt=""
          data-test="post-image"
          style={{
            maxHeight: "100%",
            height: "fit-content",
            maxWidth: "100%",
            width: "fit-content",
          }}
        ></img>
      </Box>
      <Box
        id="text-container"
        sx={{
          width: "40%",
        }}
      >
        <Typography
          id="post-title"
          variant="h3"
          style={{
            backgroundColor: "#a86800",
            borderRadius: "10px",
            margin: "0 0 15px",
            width: "fit-content",
            textAlign: "center",
            color: "white",
          }}
        >
          Post Title
        </Typography>
        <Box
          id="author-text-container"
          sx={{
            marginBottom: "30px",
          }}
        >
          by{" "}
          <Typography
            variant="h5"
            id="author-name"
            style={{
              display: "inline-block",
              margin: 0,
            }}
          >
            Author's Name
          </Typography>
        </Box>
        <Box id="rating-section"></Box>
        <Typography
          id="description-container"
          style={{
            display: "block",
            maxHeight: "150px",
            fontSize: "1rem",
          }}
        >
          Post description lorem ipsum jada jada jada, eenie meenie mynee moe.
        </Typography>
      </Box>
    </Box>
  );
};

export default Post;
