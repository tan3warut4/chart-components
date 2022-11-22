import React from 'react'
import { Typography, AppBar, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const PageTitle = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ background: '#063970' }} >
        <Toolbar>
          <ArrowBackIcon sx={{ marginRight: '1rem' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }} >
            ข้อมูลตลาดรองย้อนหลัง
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}