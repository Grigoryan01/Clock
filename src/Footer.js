import React from "react";

export default function Footer(){
    let year=new Date().getFullYear();
    return(
        <footer className="footer">
        <p className="footer-text">
           {year} © All Rights Reserved</p>
        </footer>
    );
}