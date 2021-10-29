import React from 'react'
import { Title } from '../../../../components/customStyledComponents/texts'

import { styled } from '@mui/system';
import { Grid, Typography, Box, Divider, Stack } from '@mui/material';
import { NonrippledButton } from '../../../../components/customStyledComponents/buttons';
import { useTheme } from '@emotion/react';
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material';

import { SubNavItem } from '../../../../components/customStyledComponents/subNavItem';

const CustomDiv = styled('div')(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  width: "auto",
  height: "auto",
  boxShadow: "0px 0px 63px #F0F0F0",
  borderRadius: "15px",
  padding: theme.spacing(3)
}));

const LogoDiv = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.life,
  width: "50px",
  height: "50px",
  borderRadius: "50%"
}));

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: "32px"
}))

const GrayText = styled(Typography)(({ theme }) => ({
  fontSize: ".85rem",
  color: theme.palette.text.hover,
  lineHeight: "1rem",
  fontFamily: "Poppins",
  fontWeight: "normal"
}))

const BlueText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: ".8rem",
  fontWeight: "normal"
}))

const FlexBetween = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}))

export default function Results() {

  return (
    <div style={{ marginBottom: "5rem" }}>
      <Title>Resluts</Title>
      <Stack spacing={3}>
        {[...new Array(4)].map((elem, i) =>
          <SingleResult key={i} />
        )}
      </Stack>
    </div>
  )
}

const SingleResult = (props) => {

  const theme = useTheme()
  const [showFeatures, setShowFeatures] = React.useState(false)

  return (
    <React.Fragment>
      <CustomDiv>
        <Grid container spacing={1}>

          <Grid xs={6} sm={2}>
            <LogoDiv></LogoDiv>
          </Grid>

          <Grid xs={6} sm={2}>
            <Text sx={{ mt: 2 }}>Care Plus</Text>
          </Grid>

          {/** Cover Period */}
          <Grid item xs={4} sm={3} md={2}>
            <GrayText>Cover</GrayText>
            <Text>N 5L</Text>
          </Grid>

          {/* Claim Settelment */}
          <Grid item xs={4} sm={3} md={2}>
            <GrayText>Cashless Hopitals</GrayText>
            <Text>256</Text>
          </Grid>

          {/** IDV Button, Discounts*/}
          <Grid item xs={12} sm={12} md={4}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <BlueText>N 2100 anually</BlueText>
              <NonrippledButton> N 200/month</NonrippledButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />
        {/* Bottom Section */}
        <FlexBetween>
          <div className="flex align-center">
            <button
              onClick={() => setShowFeatures(!showFeatures)}
              style={{
                cursor: "pointer",
                border: "none",
                background: "transparent",
                color: `${theme.palette.primary.main}`
              }}>View Features</button>
            {
              showFeatures ?
                <ArrowUpwardOutlined fontSize="small" sx={{ p: "2px", mx: 1, color: "primary.main" }} /> :
                <ArrowDownwardOutlined fontSize="small" sx={{ p: "2px", mx: 1, color: "primary.main" }} />
            }
          </div>
          <BlueText>Upto 30% discount and N 3000 for OPD</BlueText>
        </FlexBetween>
        {
          showFeatures ?
            <>
              <FeatureDisplay />
            </> : null
        }
      </CustomDiv>

    </React.Fragment >
  )
}

const FeatureDisplay = () => {

  const [navItem, setNavitem] = React.useState('features')
  return (
    <>
      <Box sx={{ display: "flex", pt: 4 }}>
        <Box>
          <SubNavItem
            onClick={() => setNavitem("features")}
            title="Features"
            selected={navItem === 'features'} />
        </Box>
        <Box>
          <SubNavItem
            onClick={() => setNavitem('coverage')}
            title="Coverage"
            selected={navItem === 'coverage'} />
        </Box>
      </Box>
    </>
  )
}