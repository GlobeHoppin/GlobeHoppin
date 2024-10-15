import PageNav from "../components/PageNav";
import { Box, Typography, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Styled components for the terms of use page
const PolicyContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "800px",
  margin: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  backdropFilter: "blur(10px)",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
  },
}));

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
    },
    primary: {
      main: "#ff6f61",
    },
    secondary: {
      main: "#ff3d00",
    },
  },
  typography: {
    h6: {
      fontFamily: "Future2, Arial, sans-serif",
    },
    body1: {
      fontSize: "1rem", // Decrease font size (default is 1rem)
      fontWeight: "normal", // Adjust weight (default is 400)
    },
  },
});

// Background container for the terms of use page
const BackgroundContainer = styled(Box)(() => ({
  minHeight: "100vh",
  backgroundImage: "linear-gradient(135deg, #1F1C2C 10%, #232526 100%)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
}));

const TermsOfUse = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <PageNav />
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <PolicyContainer>
          <Typography
            variant="h4"
            align="center"
            color="white"
            gutterBottom
            fontFamily={"Future2, Helvetica, Arial"}
          >
            Terms of Use
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            Welcome to our Terms of Use page. Please read these terms carefully.
          </Typography>

          <Typography variant="h6" color="white" gutterBottom>
  1. User Responsibilities
</Typography>
<Typography variant="body1" color="white" gutterBottom>
  You are responsible for ensuring that all information you provide is accurate and that your use of our travel services complies with applicable laws and regulations.
</Typography>

<Typography variant="h6" color="white" gutterBottom>
  2. Services Offered
</Typography>
<Typography variant="body1" color="white" gutterBottom>
  We offer a range of travel services, including flight bookings, hotel reservations, tour packages, and car rentals. All services are subject to availability.
</Typography>

<Typography variant="h6" color="white" gutterBottom>
  3. Payment Terms
</Typography>
<Typography variant="body1" color="white" gutterBottom>
  Certain services may require payment at the time of booking. All payments are non-refundable unless otherwise specified in the terms of the particular service.
</Typography>

<Typography variant="h6" color="white" gutterBottom>
  4. Limitation of Liability
</Typography>
<Typography variant="body1" color="white" gutterBottom>
  We are not liable for any indirect, incidental, or consequential damages that may arise from the use of our travel services, including but not limited to delays, cancellations, or changes made by third-party providers.
</Typography>

<Typography variant="h6" color="white" gutterBottom>
  5. Changes to Terms
</Typography>
<Typography variant="body1" color="white" gutterBottom>
  We reserve the right to modify these terms at any time. Please review these terms periodically to stay informed of any updates.
</Typography>

<Typography variant="h6" color="white" gutterBottom>
  6. Contact Us
</Typography>
<Typography variant="body1" color="white" gutterBottom>
  If you have any questions regarding these terms or need assistance with your booking, please contact our customer service team.
</Typography>


          {/* Buttons for Accept and Reject */}
          <Box display="flex" justifyContent="space-between" marginTop={4}>
            <Button variant="contained" color="primary" onClick={() => alert("You rejected the terms.")}>
              Reject
            </Button>
            <Button variant="contained" color="secondary" onClick={() => alert("You accepted the terms.")}>
              Accept
            </Button>
          </Box>
        </PolicyContainer>
      </BackgroundContainer>
    </ThemeProvider>
    </div>
  );
};

export default TermsOfUse;

