import React, { useState } from 'react';
import { useMediaQuery, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import { Grid, Tab, Tabs } from '@mui/material';

const ResponsiveDialog = ({ open, onClose }) => {
    const fullScreen = useMediaQuery('(max-width: 600px)'); // Set the breakpoint based on your needs

    const LoginDialog = ({ open, onClose }) => {
        const [activeTab, setActiveTab] = useState(0);

        const handleTabChange = (event, newValue) => {
            setActiveTab(newValue);
        };

        return (
            <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
                <DialogContent>
                    <Grid container direction="column" alignItems="center" spacing={2}>
                        <Grid item>
                            <Tabs value={activeTab}
                                  onChange={handleTabChange}
                                  centered
                                  TabIndicatorProps={{ style: { backgroundColor: 'red' } }}
                                  TabProps={{
                                      style: {
                                          fontWeight: active => (active ? 'bold' : 'normal'),
                                      },
                                  }}
                            >
                                <Tab label="Login" />
                                <Tab label="Register" />
                            </Tabs>
                        </Grid>
                        <Grid item>
                            {activeTab === 0 && <p>Login Form</p>}
                            {activeTab === 1 && <p>Register Form</p>}
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        );
    };

    return <LoginDialog open={open} onClose={onClose} />;
};

export default ResponsiveDialog;
