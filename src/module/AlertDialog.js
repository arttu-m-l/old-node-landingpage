import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
Typography, CircularProgress } from '@mui/material';
//import { storage } from '../firebase/firebaseConfig';
//import { ref, uploadBytes, uploadBytesResumable  } from "firebase/storage";

export default function AlertDialog() {
    //const [imageUpload, setImageUpload] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [confirmationOpen, setConfirmationOpen] = React.useState(false);
    const [image, setImage] = React.useState(null);
    const [tulos, asetaTulos] = React.useState("");
    const [progresspercent, setProgresspercent] = React.useState(0);
    const [imgUrl, setImgUrl] = React.useState(null);
    const dialogues = ["Tiedostoa lähetetään. Odota hetki...", 
                        "Tiedosto on ladattu."];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleConfirmationClose = () => {
        setConfirmationOpen(false);
    }

    const handleClose = (event) => {
        let id = event.target.id;
        if (id === "peruuta") {
            setOpen(false);
        }
        else if (id === "lataa") {
            setConfirmationOpen(true);
            //console.log("lataa");
        }
        
    };

    const handleChange = (event) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    }

    async function handleUpload ()  {
        if (!image) {
            // Update response
            alert("Et syöttänyt tiedostoa.")
            //asetaTulos("Et syöttänyt tiedostoa.")
            // Close the upload window
            setOpen(false);
            // Open response modal window (error/success window)
            setConfirmationOpen(false);
            return;
        }
        asetaTulos("Tiedostoa lähetetään, odota hetki...");

        /*
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image).then((snapshot) => {
            alert("Tiedosto ladattu!", snapshot);
        })
        */

        // Reference
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        
        await uploadTask.on("state_changed",
            (snapshot) => {
                //tba
                const prog =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgresspercent(prog);
                //alert("Ladataan: ", prog)
            },
            (error) => {
                // depreciated method
                asetaTulos("Tiedoston lähetyksessä oli ongelmia. ");
                // Close response window, open alert instead
                setConfirmationOpen(false);
                alert(error);
                // Cancel task
                uploadTask.cancel();
                return;
                /*asetaTulos("Tiedoston lähetyksessä oli ongelmia. ", error);
                
                //alert("Tiedoston lähetyksessä oli ongelmia. ");
                
                // After upload, close upload window
                setOpen(false);
                // Open response modal window (error/success window)
                setConfirmationOpen(true);
                // Reset image
                setImage(null);
                
                return;*/
            },
            
            () => {
                // depreciated methodology
                if (progresspercent.toString() === "99") {
                    asetaTulos("Tiedosto lähetetty!");
                }
                if (progresspercent.toString() === "100") {
                    asetaTulos("Tiedosto lähetetty!");
                }
                /*
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL)
                });
                */
            }
        );
        /*
        if (progresspercent == 100) {
            alert("Kuva on ladattu!");
        }
        else {
            alert("Ladataan: " + progresspercent);
        }
        */
        
        //asetaTulos("Tiedoston lähetys onnistui.");
        //console.log("tiedosto ", image);
        
        // After upload, close upload window
        setOpen(false);
        // Open response modal window (error/success window)
        setConfirmationOpen(true);
        // 'Reset' given picture
        setImage(null);
        //console.log("lataa");
        
    }

    return (
        <div>
            <Button
                disabled
                sx={{
                    width: '100%',
                }}
                variant="contained"
                color="secondary"
                onClick={handleClickOpen}
            >
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    sx={{
                        color: 'white',
                        margin: 0,
                        fontSize:
                        {
                            xs: '5.0vw',
                            sm: '2.5vw',
                            md: "1.8vw",
                            lg: "1.95vw"
                        },

                    }}
                >
                    LATAA VALOKUVA
                </Typography>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Valitse ladattava kuva"}
                </DialogTitle>
                <DialogContent>
                    <div>
                        <input 
                            type="file" 
                            onChange={handleChange} 
                        />
                    </div>
                    <DialogContentText id="alert-dialog-description">
                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleClose} id="peruuta">Peruuta</Button>
                    <Button variant="contained" color="secondary" onClick={handleUpload} id="lataa" autoFocus>
                        Lataa
                    </Button>
                </DialogActions>
            </Dialog>
            <Box>
                <Dialog
                    open={confirmationOpen}
                    onClose={handleConfirmationClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle
                        id="alert-dialog-title"
                        sx={{
                            marginBottom: 0,
                            paddingBottom: 0,
                        }}
                    >
                        {"Huomio"}
                    </DialogTitle>
                    <DialogContent>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            {progresspercent === 100
                                ? <p>{dialogues[1]}</p>
                                : <p>{dialogues[0]}</p>
                            }
                            <CircularProgress 
                                variant="determinate" 
                                value={progresspercent}
                                color="secondary"
                            />
                        </Box>
                    </DialogContent>
                    <div>
                        {progresspercent === 100
                            ? <DialogActions><Button color="secondary" onClick={handleConfirmationClose}>SELVÄ</Button></DialogActions>
                            : <DialogActions><Button color="secondary" onClick={handleConfirmationClose}>KESKEYTÄ</Button></DialogActions>
                        }
                    </div>
                </Dialog>
            </Box>
        </div>
    );
}