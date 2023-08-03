import * as React from 'react';
import { Button, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ImageCardInfo({ para }) {
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
                            width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                            minHeight: '100%',

                        }}
                        component="img"
                        image={para.pic}
                        title={para.pde}
                    />
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                            padding: 0,
                            margin: 0,
                            p: 0,
                            '&:last-child': { pb: 0 },
                        }}
                    >
                        <Typography
                            gutterBottom variant="h5"
                            component="h2"
                            id="header"
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
                        
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'stretch',
                                margin: '3vw 1vw 1vw 1vw',
                            }}
                        >
                            <Button
                                sx={{
                                    width: '100%',
                                }}
                                variant="contained"
                                color="secondary"
                            >
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    sx={{
                                        color: 'white',
                                        margin: 0,
                                        padding: 0,
                                        fontSize:
                                        {
                                            xs: '5.0vw',
                                            sm: '2.5vw',
                                            md: "1.8vw",
                                            lg: "1.95vw"
                                        },
                                    }}
                                >
                                    PARTAKE
                                </Typography>
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}
