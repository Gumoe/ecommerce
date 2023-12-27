import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object object-cover object-top"
            src="https://cdn.vox-cdn.com/thumbor/fOVL5lEL5E7mwBygcfiBqG8BSBw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25125289/vlcsnap_2023_12_01_10h37m31s394.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2">Nguoi ban: Gumie</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-font-semibold">499</p>
            <p className="opacity-50 line-through">320</p>
            <p className="text-green-600 font-semibold">20% Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "#c154c1" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "#c154c1" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
