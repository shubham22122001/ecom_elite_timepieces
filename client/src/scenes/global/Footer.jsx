import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  const navigate = useNavigate();

  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)" >
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[800]}
            onClick={() => navigate("/")}
                sx={{ "&:hover": { cursor: "pointer" } }}
          >
            <b>ELITE TIMEPIECES</b>
          </Typography>
          <div>
          Welcome to our watch ecommerce website, your one-stop destination for stylish and high-quality watches. Our collection includes watches for men, women, and children from top brands and designers. Our website offers a hassle-free shopping experience, secure payment options, and fast delivery. With our excellent customer service, we ensure that every purchase you make with us exceeds your expectations. Shop with us today and elevate your style with our exceptional watch collection.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Collections</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          {/* <Typography mb="30px">Corporate & Bulk Purchasing</Typography> */}
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            Ghatkopar, Mumbai 400077
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: shubhambhadra10@gmail.com
          </Typography>
          <Typography mb="30px">(+91)961992415</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
