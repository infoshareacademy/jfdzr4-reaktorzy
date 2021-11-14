import { useContext, useState } from "react";
import { uploadBytes, getStorage, getDownloadURL, ref } from "firebase/storage";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { UserContext } from "../../controllers/user-context";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";

import Avatar from "@mui/material/Avatar";

import { DATABASE_URL } from "../../firebase-config";

import avatarPlaceholder from "./avatar-placeholder.jpeg";
import {
    ProfileWrapper,
    ProfileAvatar,
    ButtonWrapper,
    Container,
} from "./styled";




export const MyAccount = () => {
    const [file, setFile] = useState(null);

    const { avatarUrl, setAvatarUrl, isLoggedIn: user } = useContext(UserContext);


    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleCancelClick = () => {
        setFile(null);
    };

    const handleSaveClick = () => {
        const storage = getStorage();
        const storageRef = ref(storage, `avatar/${user.uid}`);

        uploadBytes(storageRef, file).then((snapshot) => {
            setFile(null);
            getDownloadURL(snapshot.ref).then((downloadUrl) => {
                setAvatarUrl(downloadUrl);
                console.log(downloadUrl);
            });
        });
    };

    return (
        <ProfileWrapper>
            <ProfileAvatar alt="avatar" src={avatarUrl || avatarPlaceholder} />
            <Button variant="contained" component="label" color="primary">
                Upload Field
                <input type="file" hidden onChange={handleChange} />
            </Button>
            {file && (
                <>
                    <Typography variant="body">{file.name}</Typography>
                    <ButtonWrapper>
                        <Stack spacing={2} direction="row">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSaveClick}
                            >
                                Save
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                onnClick={handleCancelClick}
                            >
                                Cancel
                            </Button>
                        </Stack>
                    </ButtonWrapper>
                </>
            )}

            <>
                <span
                    style={{
                        fontFamily: "sans-serif",
                        marginTop: "20px",
                        marginBottom: "15px",
                        fontSize: "20px",
                    }}
                >
                    Create new password
                </span>

                <Box
                    style={{ display: "flex", flexDirection: "column" }}
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "200px" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="password"
                        label="current password"
                        variant="outlined"
                        color="primary"
                        type="password"
                    />
                    <TextField
                        id="password"
                        label="new password"
                        variant="outlined"
                        color="primary"
                        type="password"
                    />
                    <TextField
                        id="password"
                        label="confirm new password"
                        variant="outlined"
                        color="primary"
                        type="password"
                    />

                    <Button
                        style={{ alignItems: "center" }}
                        variant="contained"
                        color="primary"
                        type="button"

                    >Confirm</Button>
                </Box>
            </>
        </ProfileWrapper>
    );





};


