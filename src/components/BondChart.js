
import Card from '@mui/material/Card';

import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Avatar, CardActions, CardContent, CardHeader, Grid } from '@mui/material';


export const BondChart = () => {
    return (
        <>
        
                <Grid container sx={{justifyContent:"center"}}>
                    <Grid item>
                        <Card sx={{ display: 'flex', borderRadius: '12px', }} >
                            <Box sx={{ alignSelf: 'center', paddingX: '1rem' }}>
                                <Avatar sx={{ bgcolor: 'gray' }} >P</Avatar>

                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'start', textAlign: 'start' }}>
                                <CardHeader title='PTTC237A' sx={{ paddingBottom: '0.5rem', paddingLeft: 0 }} titleTypographyProps={{ variant: 'body1' }} />
                                <CardContent sx={{ padding: 0 , paddingRight:'1rem'}} >
                                    <Typography variant='body2' color='textSecondary'>
                                        หุ้นกู้เพื่ออนุรักษ์สิ่งแวดล้อมของบริษัท ปตท จำกัด มหาชน ครั้งที่ 1
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Typography variant='body1'>อัตราดอกเบี้ยหน้าตั๋ว</Typography>
                                </CardActions>
                            </Box>


                        </Card>
                    </Grid>
                </Grid>
        </>
    )
}


