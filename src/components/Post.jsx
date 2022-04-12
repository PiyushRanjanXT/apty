import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Post = ({ date, title, text, commentCount}) => {
  return (
    <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {date}
      </Typography>
      <Typography variant="h5" component="div">
      {title}
      </Typography>
      <Typography variant="body2">
      {text}
      </Typography>
      <Typography color="text.secondary" variant="body2">
      total {commentCount} Comments
      </Typography>
    </CardContent>
  </React.Fragment>
  )
}

export default Post