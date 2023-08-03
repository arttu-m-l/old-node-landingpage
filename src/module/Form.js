import * as React from 'react';
import {
    Box, Dialog, DialogTitle, DialogButton, DialogContent, DialogContentText,
    Card, CardContent, Checkbox, DialogActions, Button,
    FormControlLabel, MenuItem, TextField, Typography
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, Link } from 'react-router-dom';

// Nykyinen staattinen maksimiarvo
const maxAviisi = 5;
// Luo objektilistan, jossa on aviisien maksimimäärä
const Objekti = { ...[...Array(maxAviisi + 1).keys()] };
const tiedot = ["Etunimi", "Sukunimi", "Erikoisruokavalio"];

function Form() {
    const [listaArvo, asetaListaArvo] = React.useState(0);
    const [tarkistettu, setTarkistettu] = React.useState(false);
    const [inputFields, setInputFields] = React.useState([
        {
            firstName: '', lastName: '', allergies: '', id: uuidv4(),
            lactose: false, egg: false, gluten: false, vegan: false,
            vege: false, ride: false, date: new Date()
        }]);

    const handleChangeInput = (id, event) => {
        // Iteroidaan listan oliot & etsitään oikea alkio
        const newInputFields = inputFields.map(olio => {
            if (id === olio.id) {
                olio[event.target.name] = event.target.value
            }
            return olio;
        })
        setInputFields(newInputFields);
    }

    const handleAddFields = (count) => {
        //console.log("pituus1: " + inputFields.length);
        var pituus = inputFields.length;
        // Poistetaan kaikki oliot listasta, paitsi 1. 
        // Ajaa saman asian, kuin vanha funktio 'handleRemoveFields'
        // Ns. 'reset' ennen uudelleenrakentamista
        if (pituus > 1) {
            inputFields.splice(1, pituus - 1);
        }

        for (let i = 0; i < count; i++) {
            setInputFields([...inputFields, {
                firstName: '', lastName: '', allergies: '', id: uuidv4(),
                lactose: false, egg: false, gluten: false, vegan: false,
                vege: false, ride: false, date: new Date()
            }]);
            //setInputFields([...inputFields, { firstName: '', lastName: '', allergies: false, id: uuidv4(), }]);
            //console.log("i: " + i);
            var olio = {
                firstName: '', lastName: '', allergies: '', id: uuidv4(),
                lactose: false, egg: false, gluten: false, vegan: false,
                vege: false, ride: false, date: new Date()
            };
            inputFields.push(olio);
        }
        //console.log("pituus2: " + inputFields.length);

    }

    const handleValueChange = (value, event) => {
        asetaListaArvo(value);
        handleAddFields(value);
        //console.log("pääsin arvolla: " + value);
    }

    const handleCheck = (id, string, event) => {
        if (id === null) {
            if (!tarkistettu) {
                setTarkistettu(true);
            }
            else {
                setTarkistettu(false);
            }
        }
        /*if(id === olio.id) {
                olio[event.target.name] = event.target.value
            }
            return olio;*/

        const newInputFields = inputFields.map(olio => {
            if (id === olio.id) {
                if (string === 'laktoositon') {
                    if (event.target.checked) {
                        olio.lactose = true;
                    }
                    else {
                        olio.lactose = false;
                    }
                }
                else if (string === 'gluteeniton') {
                    if (event.target.checked) {
                        olio.gluten = true;
                    }
                    else {
                        olio.gluten = false;
                    }
                }
                else if (string === 'munaton') {
                    if (event.target.checked) {
                        olio.egg = true;
                    }
                    else {
                        olio.egg = false;
                    }
                }
                else if (string === 'vegaani') {
                    if (event.target.checked) {
                        olio.vegan = true;
                    }
                    else {
                        olio.vegan = false;
                    }
                }
                else if (string === 'kasvis') {
                    if (event.target.checked) {
                        olio.vege = true;
                    }
                    else {
                        olio.vege = false;
                    }
                }
                else if (string === 'ride') {
                    if (event.target.checked) {
                        olio.ride = true;
                    }
                    else {
                        olio.ride = false;
                    }
                }
            }
            return olio;
        })
        setInputFields(newInputFields);
    }


    const handleSubmit = (event) => {
        let paasta = true;
        // Tarkista kentät ennen lähetystä
        // kenttä tyhjä -> estä lähetys
        try {
            for (let i = 0; i < inputFields.length; i++) {
                if (inputFields[i].firstName === "") {
                    paasta = false;
                }
                if (inputFields[i].lastName === "") {
                    paasta = false;
                }
                /*if (!tarkistettu) {
                    paasta = false;
                }*/
            }

            if (!paasta) {
                
                alert("Täytä tarvittavat kentät.");
                //event.preventDefault();
                return;
            }
            else {
                event.preventDefault();

                // Syötä data tietokantaan
                /*const lahde = db.collection("Lomake");
                for (let i = 0; i < inputFields.length; i++) {
                    lahde
                        .doc()
                        .set(inputFields[i])
                        .then(() => {
                            //alert("Lomake lähetetty.")
                        })
                        .catch((err) => {
                            alert("Lomakkeen lähettämisessä ilmeni virhe. ");
                            console.log('Hupsista', err);
                            return;
                        })
                }*/
                alert("Lomake lähetetty.")

                // Nollaa kentät
                setInputFields([
                    {
                        firstName: '', lastName: '', allergies: '', id: uuidv4(),
                        lactose: false, egg: false, gluten: false, vegan: false,
                        vege: false, ride: false, date: new Date()
                    }]);
                asetaListaArvo(0);

            }
        } catch (error) {
            console.log("Virhe ", error);
        }

    };

    /*
    <FormControlLabel
        value={tarkistettu}
        control={<Checkbox color="secondary" />}
        label="Tarkistin syöttämäni tiedot"
        labelPlacement="end"
        onChange={event => handleCheck(null, "kasvis", event)}
    /> 
    */

    return (
        <Box
            sx={{
                //width: 'calc(100vw - 0.1px)',
            }}
        >
            <div
            /*
            style={{
                backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
                height: '100%',
                // Lisäykset
                overflow: 'auto',
                boxSizing: 'border-box',
                padding: '5px',
            }}
            */
            >
                <div
                    style={{
                        minHeight: '100vh',
                        //display: 'flex-row',
                        display: 'flex',
                        justifyContent: 'center',
                        // Muuntele asettelua myöhemmin
                        //alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <form
                        name="contactForm"
                        method="POST"

                        //action="/success"
                        //className={classes.container} 
                        style={{
                            marginTop: '10vh',
                            marginBottom: '10vh',
                            //minWidth: '50vw',
                            //height: '75vh',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >

                        <Card
                            //className={classes.root}
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                //width: '100%',
                                //maxWidth: '75vw',
                                //minWidth: '20vw',
                                //justifyContent: 'center',
                            }}
                        >


                            <CardContent

                                //className={classes.content}
                                style={{
                                    //nil
                                }}
                            >
                                <Typography
                                    gutterBottom variant="h5"
                                    component="h2"
                                    //className={classes.title}
                                    style={{
                                        // Poista marginaali(t)
                                        margin: 0,
                                    }}
                                >
                                    Esitietolomake
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                //className={classes.breadText}
                                >
                                    Tämä lomake on ainoastaan <br /> <b>kutsutuille</b> vieraille.
                                </Typography>

                                {   // alkaa custom -koodiosuus

                                    inputFields.map(inputField => (
                                        inputField.id === inputFields[0].id ?
                                            <Box
                                                style={{
                                                    display: "flex",
                                                    flexDirection: 'column',
                                                }}
                                                key={(inputField.id)}
                                            >
                                                <div>
                                                    <TextField
                                                        sx={{
                                                            marginTop: '1.5vh',
                                                            width: '100%',
                                                        }}
                                                        required
                                                        id="outlined-secondary"
                                                        label={tiedot[0]}
                                                        variant="outlined"
                                                        color="secondary"
                                                        width="100%"
                                                        name="firstName"
                                                        value={inputField.firstName}
                                                        onChange={event => handleChangeInput(inputField.id, event)}
                                                    />
                                                </div>
                                                <div>
                                                    <TextField
                                                        sx={{
                                                            marginTop: '1.5vh',
                                                            width: '100%',
                                                        }}
                                                        required
                                                        id="outlined-secondary"
                                                        label={tiedot[1]}
                                                        variant="outlined"
                                                        color="secondary"
                                                        width="100%"
                                                        name="lastName"
                                                        value={inputField.lastName}
                                                        onChange={event => handleChangeInput(inputField.id, event)}
                                                    />
                                                </div>
                                                
                                                <FormControlLabel
                                                    value={inputField.ride}
                                                    control={<Checkbox color="secondary" />}
                                                    label="Osallistun bussikuljetukseen"
                                                    labelPlacement="end"
                                                    onChange={event => handleCheck(inputField.id, "ride", event)}
                                                />
                                                <Typography
                                                    gutterBottom variant="h5"
                                                    component="h3"
                                                    sx={{
                                                        // Poista marginaali(t)
                                                        margin: 0,
                                                        fontSize: '1.1rem',
                                                    }}
                                                >
                                                    Erikoisruokavalio
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        marginLeft: '0.25rem'
                                                    }}
                                                >
                                                    <FormControlLabel
                                                        value={inputField.lactose}
                                                        control={<Checkbox color="secondary" />}
                                                        label="Laktoositon"
                                                        labelPlacement="end"
                                                        onChange={event => handleCheck(inputField.id, "laktoositon", event)}
                                                    />
                                                    <FormControlLabel
                                                        value={inputField.egg}
                                                        control={<Checkbox color="secondary" />}
                                                        label="Gluteeniton"
                                                        labelPlacement="end"
                                                        onChange={event => handleCheck(inputField.id, "gluteeniton", event)}
                                                    />
                                                    <FormControlLabel
                                                        value={inputField.egg}
                                                        control={<Checkbox color="secondary" />}
                                                        label="Kananmunaton"
                                                        labelPlacement="end"
                                                        onChange={event => handleCheck(inputField.id, "munaton", event)}
                                                    />
                                                    <FormControlLabel
                                                        value={inputField.vegan}
                                                        control={<Checkbox color="secondary" />}
                                                        label="Vegaani"
                                                        labelPlacement="end"
                                                        onChange={event => handleCheck(inputField.id, "vegaani", event)}
                                                    />
                                                    <FormControlLabel
                                                        value={inputField.vege}
                                                        control={<Checkbox color="secondary" />}
                                                        label="Kasvisruokavalio"
                                                        labelPlacement="end"
                                                        onChange={event => handleCheck(inputField.id, "kasvis", event)}
                                                    />
                                                    
                                                </Box>
                                                <TextField
                                                        //className={classes.kentta}
                                                        style={{
                                                            marginTop: '1.5vh',
                                                            width: '100%',
                                                        }}
                                                        id="outlined-secondary"
                                                        label={"Vapaa kenttä"}
                                                        variant="outlined"
                                                        color="secondary"
                                                        name="allergies"
                                                        value={inputField.allergies}
                                                        onChange={event => handleChangeInput(inputField.id, event)}
                                                    />
                                                <div>
                                                    <TextField
                                                        style={{
                                                            marginTop: '1.5vh',
                                                            width: '100%',
                                                        }}
                                                        id="outlined-select-currency"
                                                        select
                                                        label="Seuruelaiset"
                                                        //disableScrollLock={true}
                                                        value={listaArvo}
                                                        //onChange={event => handlePlus(event)}
                                                        helperText="Valitse seuruelaistesi lukumäärä."
                                                        variant="outlined"
                                                        color="secondary"
                                                    >
                                                        {
                                                            Object.values(Objekti).map((value) => (
                                                                <MenuItem
                                                                    //disableScrollLock={false}
                                                                    key={value}
                                                                    value={value}
                                                                    onClick={event => handleValueChange(value, event)}

                                                                >
                                                                    {value}
                                                                </MenuItem>
                                                            ))
                                                        }
                                                    </TextField>
                                                </div>
                                            </Box>

                                            :

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: 'column',
                                                    //marginLeft: '15px',
                                                }}
                                                key={(inputField.id)}
                                            >
                                                <div>
                                                    <Typography
                                                        variant="body1"
                                                        //color="textSecondary"
                                                        //component="h3"
                                                        sx={{
                                                            //padding: '5px',
                                                            paddingTop: '10px',
                                                            fontSize: '1.2rem',
                                                        }}
                                                    >
                                                        Seuruelainen #{inputFields.indexOf(inputField)}
                                                    </Typography>
                                                    <TextField
                                                        //className={classes.kentta}
                                                        style={{
                                                            marginTop: '1.5vh',
                                                            width: '100%',
                                                        }}
                                                        required
                                                        id="outlined-secondary"
                                                        label={tiedot[0]}
                                                        variant="outlined"
                                                        color="secondary"
                                                        width="100%"
                                                        // Value kanssa ongelmia
                                                        name="firstName"
                                                        value={inputField.firstName}
                                                        onChange={event => handleChangeInput(inputField.id, event)}
                                                    />
                                                </div>
                                                <div>
                                                    <TextField
                                                        //className={classes.kentta}
                                                        style={{
                                                            marginTop: '1.5vh',
                                                            width: '100%',
                                                        }}
                                                        required
                                                        id="outlined-secondary"
                                                        label={tiedot[1]}
                                                        variant="outlined"
                                                        color="secondary"
                                                        width="100%"
                                                        name="lastName"
                                                        value={inputField.lastName}
                                                        onChange={event => handleChangeInput(inputField.id, event)}
                                                    />
                                                </div>

                                                
                                                <FormControlLabel
                                                    value={inputField.ride}
                                                    control={<Checkbox color="secondary" />}
                                                    label="Osallistun bussikuljetukseen"
                                                    labelPlacement="end"
                                                    onChange={event => handleCheck(inputField.id, "ride", event)}
                                                />
                                                <Typography
                                                    gutterBottom variant="h5"
                                                    component="h3"
                                                    sx={{
                                                        // Poista marginaali(t)
                                                        margin: 0,
                                                        fontSize: '1.1rem',
                                                    }}
                                                >
                                                    Erikoisruokavalio
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        marginLeft: '0.25rem'
                                                    }}
                                                >
                                                    <FormControlLabel

                                                        value={inputField.lactose}
                                                        control={<Checkbox color="secondary" />}
                                                        label="Laktoositon"
                                                        labelPlacement="end"
                                                        onChange={event => handleCheck(inputField.id, "laktoositon", event)}
                                                    />
                                                    <FormControlLabel
                                                        value={inputField.gluten}
                                                        control={<Checkbox color="secondary" />}
                                                        label="Gluteeniton"
                                                        labelPlacement="end"
                                                        onChange={event => handleCheck(inputField.id, "gluteeniton", event)}
                                                    />
                                                    <FormControlLabel
                                                        value={inputField.egg}
                                                        control={<Checkbox color="secondary" />}
                                                        label="Kananmunaton"
                                                        labelPlacement="end"
                                                        onChange={event => handleCheck(inputField.id, "munaton", event)}
                                                    />
                                                    <FormControlLabel
                                                        value={inputField.vegan}
                                                        control={<Checkbox color="secondary" />}
                                                        label="Vegaani"
                                                        labelPlacement="end"
                                                        onChange={event => handleCheck(inputField.id, "vegaani", event)}
                                                    />
                                                    <FormControlLabel
                                                        value={inputField.vege}
                                                        control={<Checkbox color="secondary" />}
                                                        label="Kasvisruokavalio"
                                                        labelPlacement="end"
                                                        onChange={event => handleCheck(inputField.id, "kasvis", event)}
                                                    />
                                                    
                                                </Box>
                                                <TextField
                                                        //className={classes.kentta}
                                                        sx={{
                                                            marginTop: '1.5vh',
                                                            width: '100%',
                                                        }}
                                                        id="outlined-secondary"
                                                        label={"Vapaa kenttä"}
                                                        variant="outlined"
                                                        color="secondary"
                                                        name="allergies"
                                                        value={inputField.allergies}
                                                        onChange={event => handleChangeInput(inputField.id, event)}
                                                    />
                                            </Box>
                                    ))
                                }
                                <div
                                    sx={{ 
                                        paddingTop: "1vh", 
                                        textAlign: 'center', 
                                    }}
                                >

                                </div>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        //justifyContent: 'center',
                                        //alignContent: 'center',
                                        marginTop: '2vh',
                                    }}
                                >
                                    
                                    <Button
                                        sx={{
                                            width: '100%',
                                        }}
                                        disabled
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleSubmit}
                                        type="submit"
                                    >
                                        Lähetä lomake
                                    </Button>
                                </Box>
                                <div
                                    style={{ paddingTop: "2vh", textAlign: 'center', }}
                                >
                                    <Link
                                        style={{}}
                                        to="/"
                                    >
                                        Palaa etusivulle
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </form>
                </div>
            </div>
        </Box>
    );
}

export default Form;