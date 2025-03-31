import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { InputAdornment, IconButton } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create"; // Corrected import for CreateIcon

import { useState } from "react";

export default function TodoForm({addTodo}) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    addTodo(text)
    setText("")
  }

  return (
    <ListItem>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Enter a new Todo"
          variant="outlined"
          placeholder="Enter a new Todo"
          onChange={handleChange}
          value={text}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="create todo" edge="end" type="submit">
                    <CreateIcon /> {/* Corrected usage of CreateIcon */}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </form>
    </ListItem>
  );
}
