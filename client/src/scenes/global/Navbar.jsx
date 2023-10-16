import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border="1px solid black"
        borderRadius="5px"
        
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[800]}
          paddingLeft="10px"
        >
          <b>ELITE TIMEPIECES</b>
          
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
          backgroundColor="#2D3436"
        >
          <IconButton sx={{ color: "white" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "white" }}
            >
              <ShoppingBagOutlined  />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "white" }}>
            <MenuOutlined onClick={() => navigate("/watchList")}
                sx={{ "&:hover": { cursor: "pointer" } }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;