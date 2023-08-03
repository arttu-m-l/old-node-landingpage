import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ImageCardYhteys({ para }) {
    return (
        <Box
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    maxWidth: {
                        xs: '80vw',
                        sm: '80vw',
                        md: '90vw',
                        lg: '90vw',
                    },
                }}
            >
                <Card
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                >  
                    <CardContent
                        sx={{
                            width: '100%',
                            height: '100%',
                            /*
                            old 
                            width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                            height: { xs: '50%', sm: '50%', md: '100%', lg: '100%' },
                            */
                            padding: 0,
                            margin: 0,
                            p: 0,
                            '&:last-child': { pb: 0 },
                        }}
                    >
                        <Typography
                            gutterBottom variant="h5"
                            component="h2"
                            sx={{
                                paddingLeft: 2,
                                paddingRight: 2,
                                paddingTop: 2,
                                fontSize:
                                {
                                    xs: '6.8vw',
                                    sm: '4.5vw',
                                    md: "2.8vw",
                                    lg: "2.95vw"
                                },
                            }}
                        >
                            Contact Info
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            sx={{
                                paddingLeft: 2,
                                paddingRight: 2,
                                margin: 0,
                                marginBottom: '0.75rem',
                                fontSize:
                                {
                                    xs: '5.0vw',
                                    sm: '2.8vw',
                                    md: "1.8vw",
                                    lg: "1.95vw"
                                },

                            }}
                        >
                            <b>XXX</b><br/> ##########<br/>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

        </Box>





    );
}
