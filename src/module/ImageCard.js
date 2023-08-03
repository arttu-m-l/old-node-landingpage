import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ImageCard({ para }) {
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
                        display: 'flex',
                        minWidth: '75vw',
                        flexDirection:
                        {
                            xs: 'column',
                            sm: 'column',
                            md: 'row-reverse',
                            lg: 'row-reverse'
                        },
                        width: {
                            xs: '75%',
                            sm: '75%',
                            md: '50%',
                            lg: '50%',
                        },
                        height: '100%',
                    }}
                >

                    <CardMedia
                        sx={{
                            display: 'flex',
                            width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                            minHeight: '100%',
                            
                        }}
                        component="img"
                        image={para.pic}
                    />
                    <CardContent
                        sx={{
                            
                            display: 'flex',
                            flexDirection: 'column',
                            
                            width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
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
                            {para.hea}
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
                            {para.tex1}
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
                            {para.tex2}
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
                            {para.tex3}
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
                            {para.tex4}
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
                            {para.tex5}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

        </Box>





    );
}
