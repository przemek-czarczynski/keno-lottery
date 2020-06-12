import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles({
  body : {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0px",
    padding: "0px",
    boxSizing: "border-box",
    fontFamily: "Arial, Helvetica, sans-serif"
  
  },

  main :{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

  },
  
  drawPanel:{
    minWidth: "100px",
    border: "1px solid black"
  },

  board: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "615px",

  },
  title :{
    margin: "20px 0",
    fontSize: "16px",
    color: "red"
  },
  line : {
    width: "95%",
    height: "2px",
    border: "1px solid red",
  },

  tiles: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "620px",
  },
  tile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "45px",
    minHeight: "40px",
    margin: "6px",
    backgroundColor: "blue",
    color: "white",
    fontSize: "12px"
  },
  tile2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: "45px",
    minHeight: "40px",
    margin: "6px",

    backgroundColor: "red",
    color: "white",
    fontSize: "12px"

  },
  selected: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: "41px",
    minHeight: "36px",
    margin: "6px",
    border: "2px solid black",
    backgroundColor: "green",
    color: "white",
  },
 
  stakePanel: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  
  stakeBtn: {
    display: "block",
    height: "25px",
    width: "85px",
    backgroundColor: "white",
    color: "gray",
    textAlign: "center",
    lineHeight: "25px",
    fontSize: "12px",
    border: "1px solid black",


  },
  stakeBtnSelected: {
    display: "block",
    height: "25px",
    width: "85px",
    backgroundColor: "gray",
    color: "white",
    textAlign: "center",  
    lineHeight: "25px",
    fontSize: "12px",
    border: "1px solid black",
  },
  input : {
    height: "25px",
    width: "85px",

  },
  placeBetBtn: {
    height: "25px",
    width: "85px",
    padding: "0 10px",
    textAlign: "center",
    lineHeight: "25px",
    backgroundColor: "red",
    color: "white",
    fontSize: "12px",
    cursor: "pointer"
  },
  placeBetBtnHover: {
    height: "25px",
    width: "85px",
    padding: "0 10px",
    textAlign: "center",
    lineHeight: "25px",
    backgroundColor: "white",
    color: "red",
    fontSize: "12px",
    cursor: "pointer",
    border: "1px solid red",

  },

  bottom: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },

   luckyBtn: {
    height: "25px",
    width: "85px",
    padding: "0 10px",
    textAlign: "center",
    lineHeight: "25px",
    backgroundColor: "DarkBlue",
    color: "white",
    fontSize: "12px",
    cursor: "pointer"

   },
  luckyBtnHover: {
    height: "25px",
    width: "85px",
    padding: "0 10px",
    textAlign: "center",
    lineHeight: "25px",
    backgroundColor: "white",
    border: "1px solid DarkBlue",
    color: "DarkBlue",
    fontSize: "12px",
    cursor: "pointer"
  },
  bila:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    width: "40px",
    border: "1px solid black",
    borderRadius: "50px",
    transition: "1s linear",
    backgroundColor: "darkgreen",
    color: "white",
    fontWeight: "bold"
  }

});