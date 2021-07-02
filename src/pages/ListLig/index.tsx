import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Back from "../../components/Back";
import TopBar from "../../components/TopBar";
import './index.css';

export default function ListLig() {
  return (
    <div>
     <TopBar title={'Лист Лиг'}/>
    </div>
  );
}

