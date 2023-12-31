import * as React from 'react';
import CardFactory from './CardFactory';
import data from './Data/data';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, IconButton, } from '@mui/material';
import { scroller } from 'react-scroll';
import './Builder.css';
import Header from './Header';

const handleClick = (id) => {
    if (id === 'infoon') {
        scroller.scrollTo('info-kortti', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    }

}

// Builds majority of landing page with help of cards
// Some of the cards utilize the data given in their parameters
function Builder() {
    return (
        <Box
            id="uloinLaatikko"
            sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                flexWrap: 'wrap',

            }}
        >
            <Header />
            <Box
                sx={{
                    margin: 0,
                    textAlign: 'center',
                    width: '100%',
                    height: '100vh',
                    paddingTop: '20vh',
                }}
            >
                <Box
                    id="koti"
                >
                    <div
                        id="otsikko"
                        style={{
                            marginBottom: 0,
                        }}
                    >
                        Header
                    </div>
                    <div
                        id="alaOtsikko"
                        style={{
                            marginBottom: '5vh',
                        }}
                    >
                        - X.X.XXXX -
                    </div>
                </Box>
                <IconButton
                    onClick={() => handleClick("infoon")}
                >
                    <KeyboardArrowDownIcon
                        id="infoon"
                        style={{
                            color: '#fff',
                            fontSize: '5rem',
                        }}
                    />
                </IconButton>
            </Box>
            <div
                id="info-kortti"
                style={{
                    //marginTop: 0,
                    marginBottom: '15vh',

                }}
            >
                <CardFactory
                    content={data[0]}
                    type={"info"}
                    style={{
                        margin: 0,
                    }}
                />
            </div>
            <div
                id="ilmo-kortti"
                style={{
                    marginBottom: '15vh',
                }}
            >

                <CardFactory
                    content={data[1]}
                    type={"imagecard"}
                    style={{
                        margin: 0,
                    }}

                />
            </div>
            <div
                id="kpp-kortti"
                style={{
                    marginBottom: '15vh',
                }}
            >
                <CardFactory
                    content={data[2]}
                    type={"imagecard"}
                    style={{
                        margin: 0,
                    }}
                />
            </div>
            <div
                id="majo-kortti"
                style={{
                    marginBottom: '15vh',
                }}
            >
                <CardFactory
                    content={data[3]}
                    type={"imagecard"}
                    style={{
                        margin: 0,
                    }}
                />
            </div>
            <div
                id="valo-kortti"
                style={{
                    paddingBottom: '15vh',
                }}
            >
                <CardFactory
                    content={data[4]}
                    type={"imagecard"}
                    style={{
                        margin: 0,
                    }}
                />
            </div>

            <div
                id="tied-kortti"
                style={{
                    paddingBottom: '15vh',
                }}
            >
                <CardFactory
                    content={data[5]}
                    type={"imagecard"}
                    style={{
                        margin: 0,
                    }}
                />
            </div>
            <div
                id="yhteys-kortti"
                style={{
                    paddingBottom: '15vh',
                }}
            >
                <CardFactory
                    para={null}
                    type={"contact"}
                    style={{
                        margin: 0,
                    }}
                />
            </div>
        </Box>
    )
}
export default Builder;