import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {Paper, Stack, Typography} from "@mui/material";
import { styled } from '@mui/material/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProductDetailsTab() {
  const [value, setValue] = React.useState(1);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  return (
    <Box sx={{
      width: '100%',
      mb:5
    }}>
      <Box sx={{
        borderBottom: 1,
        borderColor: 'divider',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Additional information" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant="body1">
          Authentic keffiyeh master cleanse. Fingerstache semiotics PBR quinoa. Pop-up Godard kale chips, trust fund Neutra fingerstache paleo Wes Anderson. Deep v single-origin coffee cred Thundercats beard. Mumblecore before they sold out roof party biodiesel. Banksy swag Portland readymade synth messenger bag cliche.
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="body1">
          <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
              <Item>Weight: 1.73 kg</Item>
              <Item>Dimensions: 100 x 37 x 100 cm</Item>
              <Item>Materials: 80% cotton, 20% linen</Item>
              <Item>Other Info: American heirloom jean shorts pug seitan letterpress.</Item>
              <Item>Size: One Size, XL, L, M, S</Item>
            </Stack>
          </Box>
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Authentic keffiyeh master cleanse. Fingerstache semiotics PBR quinoa. Pop-up Godard kale chips, trust fund Neutra fingerstache paleo Wes Anderson. Deep v single-origin coffee cred Thundercats beard. Mumblecore before they sold out roof party biodiesel. Banksy swag Portland readymade synth messenger bag cliche.
      </CustomTabPanel>
    </Box>
  );
}
