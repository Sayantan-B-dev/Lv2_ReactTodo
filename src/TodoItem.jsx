import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem({todo,remove, toggle}) {
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={() => remove(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        role={undefined}
        onClick={() => toggle(todo.id)}
        dense
      >
        <ListItemIcon>
        <Checkbox
            edge="start"
            checked={todo.completed || false}  // Ensure it's always a boolean
            tabIndex={-1}
            disableRipple
            onChange={() => toggle(todo.id)}
            />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.text} />
      </ListItemButton>
    </ListItem>
  );
}
